"use client";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400">
      <svg
        className="animate-spin h-10 w-10 mr-3"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        ></path>
      </svg>
      <span className="text-lg font-medium">Loading...</span>
    </div>
  );
}
