import { PDFDocument, rgb, PageSizes } from 'pdf-lib';

export type PageSizeMode = 'scale' | 'stretch' | 'larger';

export interface MergeOptions {
  pageSizeMode: PageSizeMode;
}

export interface PDFInfo {
  pageCount: number;
  fileName: string;
  fileSize: number;
}

export async function getPDFInfo(arrayBuffer: ArrayBuffer, fileName: string, fileSize: number): Promise<PDFInfo> {
  const pdfDoc = await PDFDocument.load(arrayBuffer);
  return {
    pageCount: pdfDoc.getPageCount(),
    fileName,
    fileSize,
  };
}

export async function mergePDFsSideBySide(
  pdf1ArrayBuffer: ArrayBuffer,
  pdf2ArrayBuffer: ArrayBuffer,
  options: MergeOptions
): Promise<Uint8Array> {
  // Load both PDFs
  const pdf1 = await PDFDocument.load(pdf1ArrayBuffer);
  const pdf2 = await PDFDocument.load(pdf2ArrayBuffer);

  // Create a new PDF document for the merged result
  const mergedPdf = await PDFDocument.create();

  // Get page counts
  const pdf1PageCount = pdf1.getPageCount();
  const pdf2PageCount = pdf2.getPageCount();
  const maxPageCount = Math.max(pdf1PageCount, pdf2PageCount);

  // Process each page pair
  for (let i = 0; i < maxPageCount; i++) {
    // Get pages or create blank pages if one PDF is shorter
    const hasPage1 = i < pdf1PageCount;
    const hasPage2 = i < pdf2PageCount;

    let page1, page2;
    let page1Width, page1Height, page2Width, page2Height;

    if (hasPage1) {
      const [embeddedPage1] = await mergedPdf.embedPdf(pdf1, [i]);
      page1 = embeddedPage1;
      page1Width = page1.width;
      page1Height = page1.height;
    } else {
      // Use dimensions from the last page of pdf1 or default
      const lastPage = pdf1.getPage(pdf1PageCount - 1);
      const { width, height } = lastPage.getSize();
      page1Width = width;
      page1Height = height;
      page1 = null;
    }

    if (hasPage2) {
      const [embeddedPage2] = await mergedPdf.embedPdf(pdf2, [i]);
      page2 = embeddedPage2;
      page2Width = page2.width;
      page2Height = page2.height;
    } else {
      // Use dimensions from the last page of pdf2 or default
      const lastPage = pdf2.getPage(pdf2PageCount - 1);
      const { width, height } = lastPage.getSize();
      page2Width = width;
      page2Height = height;
      page2 = null;
    }

    // Determine output page size based on mode
    let outputWidth: number;
    let outputHeight: number;
    let scale1X: number, scale1Y: number;
    let scale2X: number, scale2Y: number;

    switch (options.pageSizeMode) {
      case 'scale': {
        // Scale to fit - maintain aspect ratio
        // Use the larger height as the output height
        outputHeight = Math.max(page1Height, page2Height);
        
        // Calculate scales to fit height
        const scale1 = outputHeight / page1Height;
        const scale2 = outputHeight / page2Height;
        
        // Calculate scaled widths
        const scaledWidth1 = page1Width * scale1;
        const scaledWidth2 = page2Width * scale2;
        
        outputWidth = scaledWidth1 + scaledWidth2;
        
        scale1X = scale1;
        scale1Y = scale1;
        scale2X = scale2;
        scale2Y = scale2;
        break;
      }
      
      case 'stretch': {
        // Stretch to fill - each page takes half the width
        outputHeight = Math.max(page1Height, page2Height);
        outputWidth = Math.max(page1Width, page2Width) * 2;
        
        const halfWidth = outputWidth / 2;
        scale1X = halfWidth / page1Width;
        scale1Y = outputHeight / page1Height;
        scale2X = halfWidth / page2Width;
        scale2Y = outputHeight / page2Height;
        break;
      }
      
      case 'larger': {
        // Use larger page size - no scaling
        outputHeight = Math.max(page1Height, page2Height);
        outputWidth = page1Width + page2Width;
        
        scale1X = 1;
        scale1Y = 1;
        scale2X = 1;
        scale2Y = 1;
        break;
      }
      
      default:
        throw new Error(`Unknown page size mode: ${options.pageSizeMode}`);
    }

    // Create the merged page
    const mergedPage = mergedPdf.addPage([outputWidth, outputHeight]);

    // Draw page 1 on the left
    if (page1) {
      mergedPage.drawPage(page1, {
        x: 0,
        y: outputHeight - (page1Height * scale1Y),
        width: page1Width * scale1X,
        height: page1Height * scale1Y,
      });
    } else {
      // Draw a blank area (optional: add border or text)
      mergedPage.drawRectangle({
        x: 0,
        y: 0,
        width: page1Width * scale1X,
        height: outputHeight,
        color: rgb(1, 1, 1),
      });
    }

    // Draw page 2 on the right
    if (page2) {
      const xOffset = options.pageSizeMode === 'scale' ? page1Width * scale1X : 
                      options.pageSizeMode === 'stretch' ? outputWidth / 2 :
                      page1Width;
      
      mergedPage.drawPage(page2, {
        x: xOffset,
        y: outputHeight - (page2Height * scale2Y),
        width: page2Width * scale2X,
        height: page2Height * scale2Y,
      });
    } else {
      // Draw a blank area for missing page 2
      const xOffset = options.pageSizeMode === 'scale' ? page1Width * scale1X : 
                      options.pageSizeMode === 'stretch' ? outputWidth / 2 :
                      page1Width;
      
      mergedPage.drawRectangle({
        x: xOffset,
        y: 0,
        width: options.pageSizeMode === 'stretch' ? outputWidth / 2 : page2Width * scale2X,
        height: outputHeight,
        color: rgb(1, 1, 1),
      });
    }
  }

  // Save and return the merged PDF
  const pdfBytes = await mergedPdf.save();
  return pdfBytes;
}

export function downloadPDF(pdfBytes: Uint8Array, filename: string = 'merged-side-by-side.pdf') {
  const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

