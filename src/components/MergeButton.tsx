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
        group relative w-full py-5 sm:py-6 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg lg:text-xl
        transition-all duration-300 ease-out
        flex items-center justify-center gap-3
        overflow-hidden
        ${disabled || isProcessing
          ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
          : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]'
        }
      `}
    >
      {/* Animated gradient background */}
      {!disabled && !isProcessing && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradientShift"></div>
      )}

      {/* Shine effect */}
      {!disabled && !isProcessing && (
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      )}

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
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <span className="group-hover:tracking-wide transition-all duration-300">
              Merge PDFs Side by Side
            </span>
            {/* Arrow */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </div>

      {/* Bottom glow effect */}
      {!disabled && !isProcessing && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      )}
    </button>
  );
}
