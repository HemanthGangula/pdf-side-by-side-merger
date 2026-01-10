'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { validatePDFFile } from '@/lib/file-utils';

interface PDFUploaderProps {
  onFileSelect: (file: File) => void;
  label: string;
  currentFile?: File | null;
  onClear?: () => void;
}

export default function PDFUploader({ onFileSelect, label, currentFile, onClear }: PDFUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const validation = validatePDFFile(file);
      
      if (validation.valid) {
        onFileSelect(file);
      } else {
        alert(validation.error);
      }
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div className="w-full">
      <label className="block text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">
        {label}
      </label>
      
      {!currentFile ? (
        <div
          {...getRootProps()}
          className={`
            glass-effect relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10
            text-center cursor-pointer group
            transition-all duration-300 ease-out
            border-2 border-dashed
            ${isDragActive 
              ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-900/20 shadow-xl scale-[1.02]' 
              : 'border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:scale-[1.01]'
            }
          `}
        >
          <input {...getInputProps()} aria-label={`Upload ${label}`} />
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="relative flex flex-col items-center gap-3 sm:gap-4">
            {/* Upload Icon */}
            <div className={`
              w-16 h-16 sm:w-20 sm:h-20 rounded-2xl 
              flex items-center justify-center
              transition-all duration-300
              ${isDragActive 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110' 
                : 'bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 group-hover:scale-110'
              }
            `}>
              <svg
                className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors duration-300 ${
                  isDragActive 
                    ? 'text-white' 
                    : 'text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>

            {/* Text content */}
            {isDragActive ? (
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-blue-600 dark:text-blue-400">
                  Drop it here! 
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Release to upload
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <p className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  Drag & drop your PDF here
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  or click to browse files
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    PDF • Max 50MB
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="glass-effect rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-green-200 dark:border-green-700 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20 animate-scaleIn">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
              {/* PDF Icon */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-md">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* File info */}
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 dark:text-white truncate text-sm sm:text-base">
                  {currentFile.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {(currentFile.size / (1024 * 1024)).toFixed(2)} MB
                  </span>
                  <span className="flex items-center gap-1 text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ready
                  </span>
                </div>
              </div>
            </div>

            {/* Remove button */}
            {onClear && (
              <button
                onClick={onClear}
                className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 transition-all duration-200 hover:scale-105 shadow-sm"
                aria-label="Remove file"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
