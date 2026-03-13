import Link from 'next/link';

export const metadata = {
  title: 'Merge PDF Without Uploading | 100% Browser-Based, Private',
  description: 'Merge PDFs side by side without uploading to any server. All processing happens in your browser — your files never leave your device. Free, private, instant.',
  alternates: {
    canonical: '/merge-pdf-without-uploading',
  },
  openGraph: {
    title: 'Merge PDF Without Uploading | 100% Browser-Based, Private',
    description: 'Merge PDFs side by side without uploading to any server. All processing happens in your browser — your files never leave your device. Free, private, instant.',
    url: '/merge-pdf-without-uploading',
    siteName: 'PDF Side-by-Side Merger',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Without Uploading | 100% Browser-Based, Private',
    description: 'Merge PDFs side by side without uploading to any server. All processing happens in your browser — your files never leave your device. Free, private, instant.',
  },
};

const siteUrl = "https://pdf-side-by-side-merger.vercel.app";

const faqData = [
  {
    question: "Why does no-upload PDF processing matter?",
    answer: "When you upload a PDF to a cloud service, your file travels over the internet and gets stored on a third-party server. That server's operator can read your document, share it, or lose it in a data breach. With browser-based processing, none of that happens. Your file is only ever read by your own browser."
  },
  {
    question: "How does JavaScript process PDFs locally?",
    answer: "Modern browsers let JavaScript read files from your device, manipulate binary data, and generate new files entirely in memory. This tool uses the pdf-lib library to read both PDFs, combine their pages side by side, and write the result back to your device as a download. No network requests are made."
  },
  {
    question: "Can I use this offline after loading the page?",
    answer: "Yes. Once the page has loaded, everything works offline. You only need an internet connection to load the tool the first time. After that, feel free to disconnect and the merge will still work."
  },
  {
    question: "Is this safe for confidential documents?",
    answer: "Yes. Your files never leave your device, so this works well for legal contracts, medical records, financial reports, and similar sensitive materials. There's no server that could be breached, no account to compromise, and no log of what you processed."
  },
  {
    question: "What is the file size limit?",
    answer: "There's no hard limit built into the tool. The practical ceiling is your device's available memory. Most modern devices handle PDFs up to a few hundred megabytes without any issues."
  }
];

export default function MergePDFWithoutUploadingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Merge PDF Without Uploading", "item": `${siteUrl}/merge-pdf-without-uploading` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Side-by-Side Merger",
    "description": "Merge two PDFs side by side without uploading. Browser-based, private, free.",
    "url": siteUrl,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-4xl">
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
              Merge PDF Without Uploading
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Everything runs in your browser. No server, no upload, and nothing ever leaves your device.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Merge PDFs Now — No Upload
            </Link>
          </header>

          <article className="space-y-12 sm:space-y-16">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Avoid Uploading Your PDFs?
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Most online PDF tools work by uploading your file to a remote server, processing it, then sending it back. That means your document travels over the internet and gets stored somewhere you don't control. Services like SmallPDF, iLovePDF, and Adobe Acrobat Online all work this way.
                </p>
                <p>
                  If your PDF has anything sensitive in it, that's a real problem. Even if a service says it deletes files after processing, you have no way to verify it actually does. And you have no control over what happens if that server gets breached.
                </p>
                <p>
                  This tool works differently. All processing happens in your browser using JavaScript and the <code className="text-sm bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono">pdf-lib</code> library. Files are read into memory, merged locally, and downloaded straight back to your device. No network requests happen during the merge. Your files never leave your computer.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How It Works — Client-Side PDF Processing
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Select your PDFs locally',
                    desc: 'When you choose files through the upload interface, the browser reads them from your disk into memory using the File API. No data is sent anywhere at this stage.',
                  },
                  {
                    step: '2',
                    title: 'Browser processes the merge',
                    desc: 'The pdf-lib library reads both PDFs, extracts each page, creates a new wider page, and places both source pages side by side. All of this runs in your browser\'s JavaScript engine.',
                  },
                  {
                    step: '3',
                    title: 'Download directly from your browser',
                    desc: 'The merged PDF is created in memory and triggered as a browser download. Your file goes from your disk straight back to your disk. The internet is never involved.',
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who This Is For
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    title: 'Legal Professionals',
                    desc: 'Compare contract versions, place redlined and clean copies side by side, or review opposing counsel documents without uploading privileged materials to third-party servers.',
                  },
                  {
                    title: 'Healthcare & Finance',
                    desc: 'Process medical records, financial reports, and other regulated documents without violating data handling policies or sending sensitive data outside your network.',
                  },
                  {
                    title: 'Remote Workers',
                    desc: 'Work with confidential company documents on personal devices without routing files through cloud services your organization hasn\'t approved.',
                  },
                  {
                    title: 'Privacy-Conscious Users',
                    desc: 'Anyone who prefers their files stay on their own device. No accounts, no tracking, no data collection.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50"
                  >
                    <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                      {faq.question}
                      <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="px-4 pb-4 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>

          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Merge Without Uploading?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Try it now. No sign-up, no upload, no cost.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Merge PDFs Now
                </Link>
                <Link
                  href="/compare-pdfs-side-by-side"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  Compare PDFs Side by Side
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
