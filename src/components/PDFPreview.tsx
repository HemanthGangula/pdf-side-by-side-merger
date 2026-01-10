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
    <div className="glass-effect rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 animate-scaleIn contain-paint">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-md" aria-hidden="true">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white flex-1">
          {label}
        </div>
      </div>
      
      {/* Info Grid */}
      <div className="space-y-3 sm:space-y-4">
        {/* File name */}
        <div className="group">
          <div className="flex items-start justify-between gap-3">
            <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Filename
            </span>
            <div className="flex-1 text-right">
              <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate" title={pdfInfo.fileName}>
                {pdfInfo.fileName}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

        {/* Page count */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Pages
          </span>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border border-blue-200/50 dark:border-blue-500/30">
              <span className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {pdfInfo.pageCount}
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        
        {/* File size */}
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Size
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
            {formatFileSize(pdfInfo.fileSize)}
          </span>
        </div>
      </div>

      {/* Status Badge */}
      <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
          </div>
          <span className="text-sm font-semibold text-green-700 dark:text-green-400">
            Ready to Merge
          </span>
          <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
