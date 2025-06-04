'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // App Router in Next.js 13+

export default function DahejCalculator() {
  const [age, setAge] = useState('');
  const [status, setStatus] = useState('single');
  const [job, setJob] = useState('unemployed');

  const router = useRouter();

  const calculateDahej = () => {
    let baseAmount = 50000;

    if (status === 'married') baseAmount -= 20000;
    else if (status === 'engaged') baseAmount += 10000;

    if (job === 'engineer') baseAmount += 100000;
    else if (job === 'doctor') baseAmount += 150000;
    else if (job === 'government') baseAmount += 200000;
    else if (job === 'businessman') baseAmount += 80000;

    const ageNum = parseInt(age);
    if (ageNum < 25) baseAmount += 20000;
    else if (ageNum > 35) baseAmount -= 30000;

    // Don't display result, just redirect
    router.push('/about');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center animate-colorPulse">
          🧮 Dahej Calculator
        </h2>

        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Marital Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="single">Single</option>
            <option value="engaged">Engaged</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Description</label>
          <select
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="unemployed">Unemployed</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            <option value="government">Government Job</option>
            <option value="businessman">Businessman</option>
          </select>
        </div>

        <button
          onClick={calculateDahej}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded font-semibold"
        >
          Calculate Dahej 💰
        </button>
      </div>
    </div>
  );
}
