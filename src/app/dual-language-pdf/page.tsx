import Link from 'next/link';

export const metadata = {
  title: 'Create a Dual Language PDF | Bilingual PDF Maker, Free & Private',
  description: 'Place two language versions of a document side by side in one PDF. Free bilingual PDF creator — no uploads, no sign-up. Perfect for translators, ESL teachers, and language learners.',
  alternates: {
    canonical: '/dual-language-pdf',
  },
  openGraph: {
    title: 'Create a Dual Language PDF | Bilingual PDF Maker, Free & Private',
    description: 'Place two language versions of a document side by side in one PDF. Free bilingual PDF creator — no uploads, no sign-up. Perfect for translators, ESL teachers, and language learners.',
    url: '/dual-language-pdf',
    siteName: 'PDF Side-by-Side Merger',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create a Dual Language PDF | Bilingual PDF Maker, Free & Private',
    description: 'Place two language versions of a document side by side in one PDF. Free bilingual PDF creator — no uploads, no sign-up. Perfect for translators, ESL teachers, and language learners.',
  },
  keywords: ['dual language PDF', 'bilingual PDF creator', 'side by side translation PDF', 'bilingual document maker', 'parallel text PDF', 'ESL teaching materials'],
};

const siteUrl = "https://pdf-side-by-side-merger.vercel.app";

const faqData = [
  {
    question: "What is a dual language PDF?",
    answer: "A dual language PDF shows two language versions of the same content side by side on each page. The original text sits on one side and the translation on the other, so readers can follow both at the same time without switching between files."
  },
  {
    question: "How do I create a bilingual PDF from two separate documents?",
    answer: "Export both the original and translated versions as separate PDF files, then upload them here and click Merge. The result pairs each page from both files side by side and downloads automatically."
  },
  {
    question: "Can I use this for documents with different page sizes or orientations?",
    answer: "Yes. The tool has three page size options: scale to fit (best for mixed sizes), stretch to fill, or use the larger page size. For bilingual documents, the scale option usually gives the cleanest result since both languages end up the same height."
  },
  {
    question: "Is this useful for ESL classroom materials?",
    answer: "Yes. Teachers can put English text next to a native language translation so students can build comprehension without losing context. The tool is free and runs in the browser with no installation, so there's no IT approval needed."
  },
  {
    question: "Can translators use this for client deliverables?",
    answer: "Yes. Many clients want to review the original and translation together. Merging them into a single PDF is a clean way to present your work. Since no files are ever uploaded, you can use this safely with confidential client documents."
  }
];

const useCases = [
  {
    title: 'Language Learners',
    desc: 'Study a book or article in your target language with the source text right beside it. Follow along page by page without switching between documents.',
    icon: '📖',
  },
  {
    title: 'ESL & Language Teachers',
    desc: 'Create reading materials where students can see the English text next to their native language translation. Print or share digitally — no reformatting needed.',
    icon: '🎓',
  },
  {
    title: 'Professional Translators',
    desc: 'Present original and translated documents side by side in a single deliverable. Clean, professional, and easy for clients to review without special software.',
    icon: '🌐',
  },
  {
    title: 'International Businesses',
    desc: 'Distribute contracts, manuals, and policy documents in two languages in a single file. Both versions stay aligned page by page for easy cross-reference.',
    icon: '🏢',
  },
  {
    title: 'Academic Researchers',
    desc: 'Work with bilingual source materials, compare academic texts across languages, or create parallel corpora for linguistic research.',
    icon: '🔬',
  },
  {
    title: 'Legal & Compliance Teams',
    desc: 'Review multilingual legal documents with original and translated versions on the same page, reducing errors from switching between files.',
    icon: '⚖️',
  },
];

export default function DualLanguagePDFPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Dual Language PDF", "item": `${siteUrl}/dual-language-pdf` }
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Create a Dual Language PDF",
    "description": "Combine two language versions of a document into a single bilingual PDF with pages side by side.",
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Export both language versions as PDFs",
        "text": "Save your original document and its translation as separate PDF files — one file per language."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Upload both PDFs to the merger tool",
        "text": "Go to the home page, drag and drop or click to upload the first language PDF on the left and the second language PDF on the right."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Choose a page size option and merge",
        "text": "Select 'Scale to fit' for the best bilingual reading experience, then click Merge. The download starts automatically."
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
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
              Create a Dual Language PDF
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Combine any two language versions of a document into a single bilingual PDF. Original and translation side by side, page by page. Free, private, no upload required.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Create Bilingual PDF Now
            </Link>
          </header>

          <article className="space-y-12 sm:space-y-16">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What Is a Dual Language PDF?
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  A dual language PDF (also called a bilingual PDF or parallel text PDF) shows two language versions of the same content on a single page. The original sits on the left, the translation on the right. Each page aligns both languages so readers can follow along in either direction without switching files or tabs.
                </p>
                <p>
                  This format shows up in language learning textbooks, professional translation deliverables, international business documents, multilingual legal filings, and academic research. Creating one used to require desktop publishing software or expensive document tools.
                </p>
                <p>
                  This tool makes it free and instant. Export your document in both languages as separate PDFs, upload them here, and download the combined version in seconds. No software, no account, nothing uploaded to any server.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                How to Create a Bilingual PDF — Step by Step
              </h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Export both language versions as PDFs',
                    desc: 'In your word processor (Word, Google Docs, LibreOffice), save both the original and its translation as separate PDF files. Name them clearly so you know which is which.',
                  },
                  {
                    step: '2',
                    title: 'Upload both files to the tool',
                    desc: 'On the home page, drag the first-language PDF into the left upload zone and the second-language PDF into the right upload zone. Or click each zone to browse your files.',
                  },
                  {
                    step: '3',
                    title: 'Select "Scale to fit" for bilingual documents',
                    desc: 'This option scales both pages to the same height before placing them side by side. It ensures both languages appear at equal size and are equally readable in the combined output.',
                  },
                  {
                    step: '4',
                    title: 'Click Merge and download',
                    desc: 'The merged bilingual PDF downloads automatically. Each page shows the corresponding pages from both language versions side by side. Open it in any PDF viewer.',
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
                Who Uses Dual Language PDFs?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {useCases.map(({ title, desc, icon }) => (
                  <div key={title} className="rounded-lg p-5 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
                    <div className="text-3xl mb-3">{icon}</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="rounded-lg p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Privacy for Sensitive Translation Work
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Translators and localization teams often handle confidential client documents. This tool processes everything locally in your browser. Nothing is sent to any server, and your clients' files stay on your device from start to finish.
                </p>
                <Link href="/merge-pdf-without-uploading" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Learn more about how browser-based processing keeps your files private
                </Link>
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ready to Create Your Bilingual PDF?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Free, instant, and completely private. No account required.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  Create Bilingual PDF
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
