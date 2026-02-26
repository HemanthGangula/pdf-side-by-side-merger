import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Compare PDFs Side by Side Free | No Upload Required',
  description: 'Compare two PDF files side by side without uploading. 100% browser-based, private, and free. Perfect for document comparison and translation review.',
  alternates: {
    canonical: '/compare-pdfs-side-by-side',
  },
  openGraph: {
    title: 'Compare PDFs Side by Side Free | No Upload Required',
    description: 'Compare two PDF files side by side without uploading. 100% browser-based, private, and free. Perfect for document comparison and translation review.',
    url: '/compare-pdfs-side-by-side',
    siteName: 'PDF Side-by-Side Merger',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare PDFs Side by Side Free | No Upload Required',
    description: 'Compare two PDF files side by side without uploading. 100% browser-based, private, and free. Perfect for document comparison and translation review.',
  },
};

const faqData = [
  {
    question: "Is this PDF comparison tool completely free?",
    answer: "Yes, it's 100% free with no limits, no watermarks, and no hidden fees. You can compare as many PDFs as you want without any restrictions."
  },
  {
    question: "Are my PDF files uploaded to any server?",
    answer: "No. All processing happens directly in your browser using JavaScript. Your files never leave your device, ensuring complete privacy for sensitive documents."
  },
  {
    question: "Can I compare PDFs with different page sizes?",
    answer: "Yes. The tool offers multiple options: scale pages to fit, stretch to fill, or use the larger page size. It automatically handles PDFs with different dimensions."
  },
  {
    question: "Does this tool work offline?",
    answer: "Once the page is loaded, the PDF processing works entirely in your browser. However, you need an internet connection to initially load the page."
  },
  {
    question: "What browsers are supported?",
    answer: "The tool works on all modern browsers including Chrome 90+, Firefox 88+, Safari 14+, and Edge 90+. It also works on mobile browsers."
  }
];

const howToSteps = [
  {
    name: "Select Your PDFs",
    text: "Choose two PDF files you want to compare. Drag and drop or click to browse—both methods work seamlessly.",
    url: "https://pdf-side-by-side-merger.vercel.app/#step1"
  },
  {
    name: "Choose Merge Options",
    text: "Select how to handle page sizes: scale to fit, stretch to fill, or use larger size. The tool automatically pairs corresponding pages.",
    url: "https://pdf-side-by-side-merger.vercel.app/#step2"
  },
  {
    name: "Download and Compare",
    text: "Click merge and download your combined PDF. Each page shows both documents side by side, making comparison effortless.",
    url: "https://pdf-side-by-side-merger.vercel.app/#step3"
  }
];

export default function ComparePDFsPage() {
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Compare PDFs Side by Side",
    "description": "Learn how to compare two PDF documents side by side using our free browser-based tool.",
    "totalTime": "PT2M",
    "tool": {
      "@type": "HowToTool",
      "name": "PDF Side-by-Side Merger"
    },
    "step": howToSteps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "url": step.url
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            Compare PDFs Side by Side Online
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Compare two PDF documents side by side without uploading files. Perfect for document comparison, translation review, and version analysis.
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
              Compare PDFs Now
            </Link>
          </div>
        </header>

        {/* Content */}
        <article className="space-y-12 sm:space-y-16">
          {/* Introduction */}
          <section>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Comparing PDF documents side by side is essential for professionals who need to identify differences, verify translations, or review document changes. Unlike traditional methods that require switching between files or using complex desktop software, our browser-based tool places both documents horizontally on the same page, making it easy to spot differences at a glance.
              </p>
              <p>
                Whether you're comparing contract versions, reviewing translated documents, or analyzing before-and-after changes, our tool provides a simple, secure, and efficient solution. All processing happens directly in your web browser—no file uploads, no server storage, and complete privacy for your sensitive documents.
              </p>
            </div>
          </section>

          {/* Use Cases - Comparison Specific */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              When to Compare PDFs Side by Side
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6">
              Side-by-side PDF comparison is ideal for these specific scenarios:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Document Version Comparison */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Document Version Comparison</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compare different versions of contracts, legal documents, or manuscripts to identify changes, additions, or deletions between revisions.</p>
                  </div>
                </div>
              </div>

              {/* Translation Verification */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Translation Verification</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Place original and translated documents side by side to verify translation accuracy, check for omissions, and ensure quality assurance.</p>
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">Display original and edited versions of reports, proposals, or design documents side by side for easy reference and change tracking.</p>
                  </div>
                </div>
              </div>

              {/* Legal Document Review */}
              <div className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Legal Document Review</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Compare legal documents, contracts, or agreements to identify modifications, review terms, and ensure accuracy across different versions.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How to Compare PDFs Side by Side
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Select Your PDFs</h3>
                  <p className="text-gray-700 dark:text-gray-300">Choose two PDF files you want to compare. Drag and drop or click to browse—both methods work seamlessly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Choose Merge Options</h3>
                  <p className="text-gray-700 dark:text-gray-300">Select how to handle page sizes: scale to fit, stretch to fill, or use larger size. The tool automatically pairs corresponding pages.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Download and Compare</h3>
                  <p className="text-gray-700 dark:text-gray-300">Click merge and download your combined PDF. Each page shows both documents side by side, making comparison effortless.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy Section - Brief with Link */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy for Document Comparison
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                When comparing PDFs, privacy is crucial—especially for sensitive documents like contracts, legal files, or confidential reports. Our tool processes everything in your browser, so your files never leave your device or get uploaded to any server.
              </p>
              <p>
                This means you can safely compare confidential documents without worrying about data breaches, unauthorized access, or third-party storage. <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">Learn more about our privacy and security features</Link>.
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
                Compare PDFs Now
              </Link>
            </div>
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
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Compare Your PDFs?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Start comparing PDFs side by side in seconds. No sign-up required, completely free.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Compare PDFs Now
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </>
  );
}

