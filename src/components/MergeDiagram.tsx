'use client';

export default function MergeDiagram() {
  return (
    <div className="w-full max-w-2xl mx-auto my-8 sm:my-12">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        {/* First PDF */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            PDF 1
          </div>
          <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            className="w-24 h-32 sm:w-30 sm:h-40"
            aria-label="First PDF document"
          >
            <rect
              x="10"
              y="10"
              width="100"
              height="140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300 dark:text-gray-700"
              rx="4"
            />
            <line
              x1="20"
              y1="30"
              x2="100"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="50"
              x2="90"
              y2="50"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="70"
              x2="100"
              y2="70"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="90"
              x2="85"
              y2="90"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
          </svg>
        </div>

        {/* Plus sign */}
        <div className="text-2xl sm:text-3xl font-bold text-gray-400 dark:text-gray-600" aria-hidden="true">
          +
        </div>

        {/* Second PDF */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            PDF 2
          </div>
          <svg
            width="120"
            height="160"
            viewBox="0 0 120 160"
            className="w-24 h-32 sm:w-30 sm:h-40"
            aria-label="Second PDF document"
          >
            <rect
              x="10"
              y="10"
              width="100"
              height="140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300 dark:text-gray-700"
              rx="4"
            />
            <line
              x1="20"
              y1="30"
              x2="95"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="50"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="70"
              x2="88"
              y2="70"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="90"
              x2="100"
              y2="90"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
          </svg>
        </div>

        {/* Arrow */}
        <div className="hidden sm:block" aria-hidden="true">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400"
          >
            <path
              d="M10 20 L30 20 M24 14 L30 20 L24 26"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Mobile arrow (vertical) */}
        <div className="block sm:hidden" aria-hidden="true">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            className="w-8 h-8 text-blue-600 dark:text-blue-400"
          >
            <path
              d="M20 10 L20 30 M14 24 L20 30 L26 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Merged Result */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
            Result
          </div>
          <svg
            width="240"
            height="160"
            viewBox="0 0 240 160"
            className="w-48 h-32 sm:w-60 sm:h-40"
            aria-label="Merged PDF document with pages side by side"
          >
            <rect
              x="10"
              y="10"
              width="220"
              height="140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600 dark:text-blue-400"
              rx="4"
            />
            {/* Left side (PDF 1) */}
            <line
              x1="20"
              y1="30"
              x2="110"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="50"
              x2="100"
              y2="50"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="70"
              x2="110"
              y2="70"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="20"
              y1="90"
              x2="105"
              y2="90"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            {/* Divider */}
            <line
              x1="120"
              y1="20"
              x2="120"
              y2="140"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-300 dark:text-gray-700"
              strokeDasharray="4 4"
            />
            {/* Right side (PDF 2) */}
            <line
              x1="130"
              y1="30"
              x2="220"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="130"
              y1="50"
              x2="220"
              y2="50"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="130"
              y1="70"
              x2="218"
              y2="70"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
            <line
              x1="130"
              y1="90"
              x2="220"
              y2="90"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-600"
            />
          </svg>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        Pages are merged horizontally, side by side
      </p>
    </div>
  );
}

