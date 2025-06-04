'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-red-600 text-center animate-pulse">
        🚫 DOWRY IS ILLEGAL
      </h1>

      <p className="mt-4 text-lg sm:text-xl text-center text-gray-700 max-w-2xl">
        “A great marriage is not when the perfect couple comes together. It’s when an imperfect couple learns to enjoy their differences — not when money is exchanged.”
      </p>

      <div className="mt-8 bg-white shadow-lg rounded-xl p-6 max-w-3xl text-center">
        <h2 className="text-2xl font-semibold text-yellow-600 mb-4">📜 Legal Awareness</h2>
        <p className="text-gray-800 mb-2">
          The Dowry Prohibition Act, 1961 prohibits the request, payment, or acceptance of a dowry. It is a punishable offense.
        </p>
        <p className="text-gray-600">
          Any person found giving, taking, or demanding dowry can face imprisonment up to 5 years and a fine up to ₹15,000 or the amount of dowry, whichever is higher.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xl text-red-500 font-semibold">
          💡 Say no to dowry. Say yes to dignity, respect, and love.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Empower the next generation with awareness and equality.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
