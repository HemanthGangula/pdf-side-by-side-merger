'use client';

interface MergeButtonProps {
  onMerge: () => void;
  disabled: boolean;
  isProcessing: boolean;
}

export default function MergeButton({ onMerge, disabled, isProcessing }: MergeButtonProps) {
  return (
    <button
      onClick={onMerge}
      disabled={disabled || isProcessing}
      className={`
        group relative w-full py-4 sm:py-5 px-6 sm:px-8 rounded-lg font-semibold text-base sm:text-lg
        transition-all duration-200 ease-out
        flex items-center justify-center gap-3
        ${disabled || isProcessing
          ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg active:scale-[0.98]'
        }
      `}
    >

      {/* Content */}
      <div className="relative flex items-center justify-center gap-3 sm:gap-4">
        {isProcessing ? (
          <>
            {/* Loading spinner */}
            <div className="relative w-6 h-6 sm:w-7 sm:h-7">
              <div className="absolute inset-0 border-3 border-white/30 rounded-full"></div>
              <div className="absolute inset-0 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <span className="font-bold">Processing Your PDFs...</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </>
        ) : disabled ? (
          <>
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Select Two PDFs to Merge</span>
          </>
        ) : (
          <>
            {/* Merge icon */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span>
              Merge PDFs Side by Side
            </span>
            {/* Arrow */}
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </div>

    </button>
  );
}
