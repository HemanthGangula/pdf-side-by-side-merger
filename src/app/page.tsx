'use client';

import { useState, Suspense, lazy } from 'react';
import { getPDFInfo, mergePDFsSideBySide, downloadPDF, PageSizeMode, PDFInfo } from '@/lib/pdf-utils';
import { readFileAsArrayBuffer } from '@/lib/file-utils';

// Lazy load components for better performance
const PDFUploader = lazy(() => import('@/components/PDFUploader'));
const PDFPreview = lazy(() => import('@/components/PDFPreview'));
const MergeOptions = lazy(() => import('@/components/MergeOptions'));
const MergeButton = lazy(() => import('@/components/MergeButton'));

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

      setSuccessMessage('PDFs merged successfully! Download should start automatically.');
    } catch (err) {
      console.error('Merge error:', err);
      setError('Failed to merge PDFs. Please check that both files are valid PDFs and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const canMerge = pdf1File && pdf2File && !isProcessing;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 dark:bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 dark:opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl relative">
        {/* Premium Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeIn">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-200/50 dark:border-blue-500/30">
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              100% Free • Privacy First • No Uploads
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Merge PDFs
            </span>
            <br />
            Side-by-Side
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Perfect for comparing documents, creating dual-language materials,
            <br className="hidden sm:block" />
            or combining related content horizontally
          </p>
        </header>

        {/* Toast Notifications */}
        {error && (
          <div className="mb-6 sm:mb-8 animate-slideUp" role="alert" aria-live="assertive">
            <div className="glass-effect max-w-2xl mx-auto rounded-2xl p-4 sm:p-5 border-l-4 border-red-500 shadow-lg">
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
          <div className="mb-6 sm:mb-8 animate-slideUp" role="status" aria-live="polite">
            <div className="glass-effect max-w-2xl mx-auto rounded-2xl p-4 sm:p-5 border-l-4 border-green-500 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-green-500 rounded-full flex items-center justify-center" aria-hidden="true">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            </div>
          </div>
        )}

        {/* File Upload Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 animate-scaleIn">
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
          <div className="mb-6 sm:mb-8 animate-scaleIn" style={{ animationDelay: '0.2s' }}>
            <Suspense fallback={<ComponentSkeleton />}>
              <MergeOptions
                pageSizeMode={pageSizeMode}
                onPageSizeModeChange={setPageSizeMode}
              />
            </Suspense>
          </div>
        )}

        {/* Merge Button */}
        <div className="mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto animate-scaleIn" style={{ animationDelay: '0.3s' }}>
          <Suspense fallback={<ComponentSkeleton />}>
            <MergeButton
              onMerge={handleMerge}
              disabled={!canMerge}
              isProcessing={isProcessing}
            />
          </Suspense>
        </div>

        {/* Features Section */}
        <section className="mb-12 sm:mb-16 animate-slideUp" style={{ animationDelay: '0.4s' }}>
          <h2 className="sr-only">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '🔒', title: 'Private & Secure', desc: 'All processing happens in your browser' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'No server uploads, instant processing' },
              { icon: '🎯', title: 'Easy to Use', desc: 'Simple drag & drop interface' },
              { icon: '💯', title: 'Always Free', desc: 'No limits, no watermarks' },
            ].map((feature, idx) => (
              <div key={idx} className="glass-effect rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105 contain-paint">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 max-w-4xl mx-auto shadow-premium animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
            How it Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              { step: '1', title: 'Upload Files', desc: 'Drop or select two PDF files' },
              { step: '2', title: 'Choose Options', desc: 'Select page size handling mode' },
              { step: '3', title: 'Merge', desc: 'Click to combine side-by-side' },
              { step: '4', title: 'Download', desc: 'Get your merged PDF instantly' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center text-lg sm:text-xl font-bold shadow-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEO Content Section */}
        <article className="max-w-4xl mx-auto mb-12 sm:mb-16 space-y-8 sm:space-y-10">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Is a Side-by-Side PDF Merger?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                A side-by-side PDF merger is a specialized tool that combines two PDF documents by placing their corresponding pages horizontally next to each other. Unlike traditional PDF mergers that stack pages vertically (one document after another), this tool creates a new PDF where page 1 of the first document appears alongside page 1 of the second document, page 2 with page 2, and so on.
              </p>
              <p>
                This unique approach to <strong>merging PDFs side by side</strong> is particularly valuable for document comparison, translation work, and educational materials. Instead of switching between two separate PDFs, you can view both documents simultaneously on a single page, making it easier to spot differences, verify translations, or study parallel content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Common Use Cases
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Our side-by-side PDF tool serves a variety of professional and personal needs:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Document Comparison:</strong> Compare two PDF files to identify changes between contract versions, legal documents, or revised manuscripts.</li>
                <li><strong>Translation Review:</strong> Place original and translated documents side by side for accurate translation verification and quality assurance.</li>
                <li><strong>Dual-Language Materials:</strong> Create bilingual educational resources, instruction manuals, or presentations with parallel language support.</li>
                <li><strong>Before and After Analysis:</strong> Display original and edited versions of reports, proposals, or design documents for easy reference.</li>
                <li><strong>Academic Research:</strong> Compare research papers, study notes, or annotated versions of scholarly articles.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy and Security
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Your document security is our top priority. When you <strong>merge PDFs side by side</strong> using our tool, all processing happens entirely within your web browser. This means your PDF files never leave your device and are never uploaded to our servers or any third-party services.
              </p>
              <p>
                We don't store, track, or have access to your documents. No account creation is required, no cookies are used for tracking, and no data is collected. This browser-based approach ensures complete privacy, making it safe to work with sensitive documents like legal contracts, financial reports, or confidential business materials.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Use a Browser-Based Tool?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Browser-based PDF tools offer significant advantages over traditional desktop software or server-based services:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>No Installation Required:</strong> Works instantly in any modern web browser without downloading or installing software.</li>
                <li><strong>Cross-Platform Compatibility:</strong> Use on Windows, Mac, Linux, or any device with a web browser.</li>
                <li><strong>Always Up-to-Date:</strong> Access the latest features automatically without manual updates.</li>
                <li><strong>Complete Privacy:</strong> Your files stay on your device, eliminating security concerns about cloud storage.</li>
                <li><strong>Free and Unlimited:</strong> No subscription fees, file size limits, or usage restrictions.</li>
              </ul>
              <p>
                Our tool leverages modern web technologies to provide fast, efficient PDF processing entirely client-side, giving you professional-grade results while maintaining the highest standards of privacy and convenience.
              </p>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 dark:text-gray-400 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="mb-2">All processing happens in your browser. Your files are never uploaded to any server.</p>
          <p className="text-xs">
            © 2026 PDF Side-by-Side Merger. Open source and privacy-focused. 
            <a href="https://github.com/HemanthGangula/pdf-side-by-side-merger" className="ml-2 hover:text-gray-700 dark:hover:text-gray-300 underline" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
