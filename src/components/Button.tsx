import React from 'react';

const Button: React.FC = () => {
  return (
    <button className="relative inline-flex items-center px-4 py-2 bg-pink-300 text-white font-bold uppercase tracking-wider rounded-lg shadow-lg">
      <span className="mr-2">Connect Wallet</span>
      <span className="bg-pink-500 p-1 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
    </button>
  );
};

export default Button;
