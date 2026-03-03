import Link from 'next/link';
import { Suspense, lazy } from 'react';

const MergeDiagram = lazy(() => import('@/components/MergeDiagram'));

export const metadata = {
  title: 'About PDF Side-by-Side Merger | How It Works',
  description: 'Learn about side-by-side PDF merging, use cases, privacy features, and why browser-based tools are better for document processing.',
  alternates: {
    canonical: '/about',
  },
};

const faqData = [
  {
    question: "How does browser-based processing protect my privacy?",
    answer: "All PDF processing happens directly in your web browser using JavaScript. Your files are never uploaded to any server, never transmitted over the internet, and never stored anywhere except your own device. This means even we cannot access your documents."
  },
  {
    question: "Is my data stored anywhere?",
    answer: "No. Your PDF files exist only in your browser's memory during processing. Once you close the page or refresh, all data is completely cleared. We don't use cookies for tracking, don't collect analytics on your documents, and have no database storing user files."
  },
  {
    question: "Can I use this for confidential documents?",
    answer: "Yes, absolutely. Because all processing is local to your device, this tool is safe for confidential contracts, legal documents, financial reports, medical records, or any sensitive materials. Your documents never leave your computer."
  },
  {
    question: "What happens if I lose internet connection while merging?",
    answer: "Once the page is fully loaded, the PDF merging process works entirely offline. Your internet connection is only needed to initially load the webpage. After that, you can disconnect and the tool will continue to work."
  }
];

function DiagramSkeleton() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12 h-64 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse"></div>
  );
}

export default function AboutPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://pdf-side-by-side-merger.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://pdf-side-by-side-merger.vercel.app/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About PDF Side-by-Side Merger
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Everything you need to know about merging PDFs horizontally
          </p>
          
          {/* Top CTA */}
          <div className="mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Try the Tool
            </Link>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-12 sm:space-y-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Is a Side-by-Side PDF Merger?
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                A side-by-side PDF merger is a specialized tool that combines two PDF documents by placing their corresponding pages horizontally next to each other. Unlike traditional PDF mergers that stack pages vertically (one document after another), this tool creates a new PDF where page 1 of the first document appears alongside page 1 of the second document, page 2 with page 2, and so on.
              </p>
              <p>
                This unique approach to <strong>merging PDFs side by side</strong> is particularly valuable for <Link href="/compare-pdfs-side-by-side" className="text-blue-600 dark:text-blue-400 hover:underline">document comparison</Link>, translation work, and educational materials. Instead of switching between two separate PDFs, you can view both documents simultaneously on a single page, making it easier to spot differences, verify translations, or study parallel content.
              </p>
            </div>
            
            {/* Visual Diagram */}
            <div className="mt-8">
              <Suspense fallback={<DiagramSkeleton />}>
                <MergeDiagram />
              </Suspense>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Common Use Cases
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our side-by-side PDF merger serves a variety of professional and personal needs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Document Comparison */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Document Comparison</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compare two PDF files to identify changes between contract versions, legal documents, or revised manuscripts. <Link href="/compare-pdfs-side-by-side" className="text-blue-600 dark:text-blue-400 hover:underline">See detailed comparison guide</Link>.</p>
                  </div>
                </div>
              </div>

              {/* Translation Review */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Translation Review</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Place original and translated documents side by side for accurate translation verification and quality assurance.</p>
                  </div>
                </div>
              </div>

              {/* Dual-Language Materials */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dual-Language Materials</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Create bilingual educational resources, instruction manuals, or presentations with parallel language support.</p>
                  </div>
                </div>
              </div>

              {/* Before and After Analysis */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Before and After Analysis</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Display original and edited versions of reports, proposals, or design documents for easy reference.</p>
                  </div>
                </div>
              </div>

              {/* Academic Research */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Academic Research</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compare research papers, study notes, or annotated versions of scholarly articles.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy and Security
            </h2>
            
            {/* Privacy Callout Box */}
            <div className="rounded-lg p-6 mb-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">100% Private & Secure</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No file uploads</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No data collection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>No account required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Browser-based processing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Your document security is our top priority. When you <strong>merge PDFs side by side</strong> using our tool, all processing happens entirely within your web browser. This means your PDF files never leave your device and are never uploaded to our servers or any third-party services.
              </p>
              <p>
                We don't store, track, or have access to your documents. No account creation is required, no cookies are used for tracking, and no data is collected. This browser-based approach ensures complete privacy, making it safe to work with sensitive documents like legal contracts, financial reports, or confidential business materials.
              </p>
            </div>

            {/* Middle CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Try the Tool Now
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Use a Browser-Based Tool?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
              Browser-based PDF tools offer significant advantages over traditional desktop software or server-based services:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              {/* No Installation */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">No Installation Required</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Works instantly in any modern web browser without downloading or installing software.</p>
              </div>

              {/* Cross-Platform */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cross-Platform Compatibility</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Use on Windows, Mac, Linux, or any device with a web browser.</p>
              </div>

              {/* Always Up-to-Date */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Always Up-to-Date</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Access the latest features automatically without manual updates.</p>
              </div>

              {/* Complete Privacy */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Complete Privacy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Your files stay on your device, eliminating security concerns about cloud storage.</p>
              </div>

              {/* Free and Unlimited */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free and Unlimited</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">No subscription fees, file size limits, or usage restrictions.</p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our tool leverages modern web technologies to provide fast, efficient PDF processing entirely client-side, giving you professional-grade results while maintaining the highest standards of privacy and convenience.
            </p>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50"
                >
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                    {faq.question}
                    <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Merge Your PDFs?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Start merging PDFs side by side in seconds. No sign-up required.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Try the Tool Now
            </Link>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

