'use client';

import { PageSizeMode } from '@/lib/pdf-utils';

interface MergeOptionsProps {
  pageSizeMode: PageSizeMode;
  onPageSizeModeChange: (mode: PageSizeMode) => void;
}

export default function MergeOptions({ pageSizeMode, onPageSizeModeChange }: MergeOptionsProps) {
  const options = [
    {
      value: 'scale' as PageSizeMode,
      label: 'Scale to Fit',
      description: 'Maintains aspect ratio, scales pages proportionally',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      ),
    },
    {
      value: 'stretch' as PageSizeMode,
      label: 'Stretch to Fill',
      description: 'Pages fill equal halves, may distort proportions',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      ),
    },
    {
      value: 'larger' as PageSizeMode,
      label: 'Use Larger Size',
      description: 'Combines original sizes without scaling',
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50">
      {/* Simple Header */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
        Merge Options
      </h2>
      
      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
        {options.map((option) => (
          <div
            key={option.value}
            className={`
              relative cursor-pointer rounded-lg p-4 sm:p-5
              transition-all duration-200 ease-out
              border-2
              ${pageSizeMode === option.value
                ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/30 shadow-sm'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-600'
              }
            `}
            onClick={() => onPageSizeModeChange(option.value)}
          >
            {/* Selected indicator */}
            {pageSizeMode === option.value && (
              <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}

            {/* Radio button (hidden but accessible) */}
            <input
              type="radio"
              name="pageSizeMode"
              value={option.value}
              checked={pageSizeMode === option.value}
              onChange={(e) => onPageSizeModeChange(e.target.value as PageSizeMode)}
              className="sr-only"
              aria-label={option.label}
            />

            {/* Content */}
            <div className="flex flex-col items-center text-center gap-3">
              <div className={`
                w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center
                transition-all duration-200
                ${pageSizeMode === option.value
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }
              `}>
                {option.icon}
              </div>

              <div>
                <h3 className={`
                  text-sm sm:text-base font-bold mb-1
                  ${pageSizeMode === option.value
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                  }
                `}>
                  {option.label}
                </h3>
                <p className={`
                  text-xs sm:text-sm leading-snug
                  ${pageSizeMode === option.value
                    ? 'text-gray-700 dark:text-gray-300'
                    : 'text-gray-600 dark:text-gray-400'
                  }
                `}>
                  {option.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="rounded-lg p-3 sm:p-4 border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <strong className="text-gray-900 dark:text-white">Note:</strong> The output orientation will be automatically determined based on your input PDFs.
        </p>
      </div>
    </div>
  );
}
