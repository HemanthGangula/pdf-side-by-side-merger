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
    <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium border border-gray-200 dark:border-gray-700 contain-paint">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-md" aria-hidden="true">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Merge Options
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-0.5">
            Choose how to handle page sizes
          </p>
        </div>
      </div>
      
      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
        {options.map((option) => (
          <div
            key={option.value}
            className={`
              relative cursor-pointer rounded-xl sm:rounded-2xl p-4 sm:p-5
              transition-all duration-300 ease-out
              border-2
              ${pageSizeMode === option.value
                ? 'border-blue-500 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg scale-[1.02]'
                : 'border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md hover:scale-[1.01]'
              }
            `}
            onClick={() => onPageSizeModeChange(option.value)}
          >
            {/* Selected indicator */}
            {pageSizeMode === option.value && (
              <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-scaleIn">
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
                w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center
                transition-all duration-300
                ${pageSizeMode === option.value
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-md'
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
      <div className="glass-effect rounded-xl p-4 sm:p-5 border border-blue-200 dark:border-blue-700 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mt-0.5">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1">
              Auto-Orientation Detected
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              The output orientation will be automatically determined based on your input PDFs for the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
