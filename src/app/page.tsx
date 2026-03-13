'use client';

import { useState, Suspense, lazy } from 'react';
import Link from 'next/link';
import { getPDFInfo, mergePDFsSideBySide, downloadPDF, PageSizeMode, PDFInfo } from '@/lib/pdf-utils';
import { readFileAsArrayBuffer } from '@/lib/file-utils';

// Lazy load components for better performance
const PDFUploader = lazy(() => import('@/components/PDFUploader'));
const PDFPreview = lazy(() => import('@/components/PDFPreview'));
const MergeOptions = lazy(() => import('@/components/MergeOptions'));
const MergeButton = lazy(() => import('@/components/MergeButton'));
const MergeDiagram = lazy(() => import('@/components/MergeDiagram'));

// Loading skeleton component
function ComponentSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
    </div>
  );
}

export default function Home() {
  const [pdf1File, setPdf1File] = useState<File | null>(null);
  const [pdf2File, setPdf2File] = useState<File | null>(null);
  const [pdf1Info, setPdf1Info] = useState<PDFInfo | null>(null);
  const [pdf2Info, setPdf2Info] = useState<PDFInfo | null>(null);
  const [pageSizeMode, setPageSizeMode] = useState<PageSizeMode>('scale');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handlePdf1Select = async (file: File) => {
    try {
      setPdf1File(file);
      setError(null);
      setSuccessMessage(null);
      const arrayBuffer = await readFileAsArrayBuffer(file);
      const info = await getPDFInfo(arrayBuffer, file.name, file.size);
      setPdf1Info(info);
    } catch (err) {
      setError('Failed to load PDF 1. Please try again.');
      setPdf1File(null);
      setPdf1Info(null);
    }
  };

  const handlePdf2Select = async (file: File) => {
    try {
      setPdf2File(file);
      setError(null);
      setSuccessMessage(null);
      const arrayBuffer = await readFileAsArrayBuffer(file);
      const info = await getPDFInfo(arrayBuffer, file.name, file.size);
      setPdf2Info(info);
    } catch (err) {
      setError('Failed to load PDF 2. Please try again.');
      setPdf2File(null);
      setPdf2Info(null);
    }
  };

  const handleClearPdf1 = () => {
    setPdf1File(null);
    setPdf1Info(null);
    setError(null);
    setSuccessMessage(null);
  };

  const handleClearPdf2 = () => {
    setPdf2File(null);
    setPdf2Info(null);
    setError(null);
    setSuccessMessage(null);
  };

  const handleReset = () => {
    setPdf1File(null);
    setPdf2File(null);
    setPdf1Info(null);
    setPdf2Info(null);
    setPageSizeMode('scale');
    setError(null);
    setSuccessMessage(null);
    setIsProcessing(false);
    
    // Scroll to top to show upload areas
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMerge = async () => {
    if (!pdf1File || !pdf2File) {
      setError('Please select both PDF files');
      return;
    }

    setIsProcessing(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const pdf1ArrayBuffer = await readFileAsArrayBuffer(pdf1File);
      const pdf2ArrayBuffer = await readFileAsArrayBuffer(pdf2File);

      const mergedPdfBytes = await mergePDFsSideBySide(
        pdf1ArrayBuffer,
        pdf2ArrayBuffer,
        { pageSizeMode }
      );

      const outputFilename = `merged-${pdf1File.name.replace('.pdf', '')}-${pdf2File.name.replace('.pdf', '')}.pdf`;
      downloadPDF(mergedPdfBytes, outputFilename);

      setSuccessMessage('PDFs merged successfully! Download started.');
      
      // Auto-scroll to top to show success message and "Merge Another" button
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Merge error:', err);
      setError('Failed to merge PDFs. Please check that both files are valid PDFs and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const canMerge = pdf1File && pdf2File && !isProcessing;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-5xl">
        {/* Simple Header */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Merge PDFs Side by Side
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Combine two PDF files horizontally. Free, private, and browser-based.
          </p>
        </header>

        {/* Toast Notifications */}
        {error && (
          <div className="mb-6 sm:mb-8" role="alert" aria-live="assertive">
            <div className="max-w-2xl mx-auto rounded-lg p-4 sm:p-5 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-red-500 rounded-full flex items-center justify-center" aria-hidden="true">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Error</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{error}</p>
                </div>
                <button onClick={() => setError(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" aria-label="Dismiss error">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {successMessage && (
          <div className="mb-6 sm:mb-8" role="status" aria-live="polite">
            <div className="max-w-2xl mx-auto rounded-lg p-4 sm:p-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mt-0.5" aria-hidden="true">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Success!</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{successMessage}</p>
                </div>
                <button onClick={() => setSuccessMessage(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" aria-label="Dismiss success message">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {/* Merge Another Button */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                  aria-label="Start a new merge"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Merge Another PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* File Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          <Suspense fallback={<ComponentSkeleton />}>
            <PDFUploader
              label="First PDF File"
              onFileSelect={handlePdf1Select}
              currentFile={pdf1File}
              onClear={handleClearPdf1}
            />
          </Suspense>
          <Suspense fallback={<ComponentSkeleton />}>
            <PDFUploader
              label="Second PDF File"
              onFileSelect={handlePdf2Select}
              currentFile={pdf2File}
              onClear={handleClearPdf2}
            />
          </Suspense>
        </div>

        {/* Preview Section */}
        {(pdf1Info || pdf2Info) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <Suspense fallback={<ComponentSkeleton />}>
              {pdf1Info && <PDFPreview pdfInfo={pdf1Info} label="First PDF Information" />}
            </Suspense>
            <Suspense fallback={<ComponentSkeleton />}>
              {pdf2Info && <PDFPreview pdfInfo={pdf2Info} label="Second PDF Information" />}
            </Suspense>
          </div>
        )}

        {/* Merge Options */}
        {pdf1File && pdf2File && (
          <div className="mb-6 sm:mb-8">
            <Suspense fallback={<ComponentSkeleton />}>
              <MergeOptions
                pageSizeMode={pageSizeMode}
                onPageSizeModeChange={setPageSizeMode}
              />
            </Suspense>
          </div>
        )}

        {/* Merge Button */}
        <div className="mb-8 sm:mb-12 max-w-2xl mx-auto">
          <Suspense fallback={<ComponentSkeleton />}>
            <MergeButton
              onMerge={handleMerge}
              disabled={!canMerge}
              isProcessing={isProcessing}
            />
          </Suspense>
        </div>

        {/* Visual Diagram */}
        <Suspense fallback={<ComponentSkeleton />}>
          <MergeDiagram />
        </Suspense>

        {/* Natural Link to Comparison Page */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Need to compare PDFs page by page?{' '}
            <Link href="/compare-pdfs-side-by-side" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Learn how →
            </Link>
          </p>
        </div>

        {/* Features Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="sr-only">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '🔒', title: 'Private & Secure', desc: 'All processing happens in your browser — your files never leave your device' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'No server uploads means no waiting — processing starts instantly' },
              { icon: '🎯', title: 'Easy to Use', desc: 'Drag and drop two PDFs, choose a layout option, download in seconds' },
              { icon: '💯', title: 'Always Free', desc: 'No limits, no watermarks, no sign-up required' },
            ].map((feature, idx) => (
              <div key={idx} className="rounded-lg p-6 text-center border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: 'How do I put two PDF pages side by side?',
                a: 'Upload your two PDF files using the upload areas above, choose a page size option, and click Merge. The tool combines them horizontally — page 1 of the first PDF appears next to page 1 of the second — and downloads the result automatically.',
              },
              {
                q: 'Can I merge PDFs without Adobe?',
                a: 'Yes. This tool requires no software installation and no Adobe subscription. It runs directly in your browser and is completely free.',
              },
              {
                q: 'Is there a free PDF merger with no upload?',
                a: 'Yes — this tool. All PDF processing happens in your browser using JavaScript. Your files are never sent to any server, so no upload ever occurs.',
              },
              {
                q: 'What happens if my two PDFs have different page counts?',
                a: 'The tool handles unequal page counts automatically. If one PDF has more pages, the extra pages are included on one side with a blank page on the other.',
              },
              {
                q: 'Does this work on mobile?',
                a: 'Yes. The tool works on Chrome, Firefox, Safari, and Edge on both desktop and mobile devices.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-gray-600 dark:text-gray-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="mb-2">All processing happens in your browser. Your files are never uploaded to any server.</p>
          <p className="text-xs">
            © 2026 PDF Side-by-Side Merger. Privacy-focused.{' '}
            <a href="https://github.com/HemanthGangula/pdf-side-by-side-merger" className="hover:text-gray-700 dark:hover:text-gray-300 underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' · '}
            <Link href="/compare-pdfs-side-by-side" className="hover:text-gray-700 dark:hover:text-gray-300 underline">
              Compare PDFs
            </Link>
            {' · '}
            <Link href="/merge-pdf-without-uploading" className="hover:text-gray-700 dark:hover:text-gray-300 underline">
              Merge Without Uploading
            </Link>
            {' · '}
            <Link href="/dual-language-pdf" className="hover:text-gray-700 dark:hover:text-gray-300 underline">
              Dual Language PDF
            </Link>
            {' · '}
            <Link href="/about" className="hover:text-gray-700 dark:hover:text-gray-300 underline">
              About
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
