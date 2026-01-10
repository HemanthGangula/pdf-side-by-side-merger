'use client';

import { PDFInfo } from '@/lib/pdf-utils';
import { formatFileSize } from '@/lib/file-utils';

interface PDFPreviewProps {
  pdfInfo: PDFInfo | null;
  label: string;
}

export default function PDFPreview({ pdfInfo, label }: PDFPreviewProps) {
  if (!pdfInfo) {
    return null;
  }

  return (
    <div className="rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-md transition-shadow">
      {/* Simple Header */}
      <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-4">
        {label}
      </h3>
      
      {/* Info Grid */}
      <div className="space-y-3">
        {/* File name */}
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            Filename
          </span>
          <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate text-right" title={pdfInfo.fileName}>
            {pdfInfo.fileName}
          </p>
        </div>

        {/* Page count */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            Pages
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
            {pdfInfo.pageCount}
          </span>
        </div>
        
        {/* File size */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
            Size
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
            {formatFileSize(pdfInfo.fileSize)}
          </span>
        </div>
      </div>

      {/* Simple Status Badge */}
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Ready to Merge</span>
        </div>
      </div>
    </div>
  );
}
