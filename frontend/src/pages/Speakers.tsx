

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config/api";

export function Speakers() {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const fetchWinners = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/schools/winners`);
        setWinners(res.data);
      } catch (err) {
        console.error("Error fetching winners:", err);
      }
    };
    fetchWinners();
  }, []);

  const rankColors = {
    1: "border-yellow-400 text-yellow-900",
    2: "border-gray-400 text-gray-900",
    3: "border-orange-400 text-orange-900",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-800 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          🏆 Hackathon Winners & Innovative Projects
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Celebrating brilliant ideas, innovative projects, and the brightest minds from our schools.
        </p>
        <button className="bg-white text-red-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          View All Winners
        </button>
      </section>

      <div className="text-center my-10 m-0">
  <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 flex items-center justify-center">
    <h1 className="text-5xl font-bold text-white animate-blink p-5">
      WINNERS 🏆
    </h1>
  </div>

  {/* Blinking Winners Text */}
  <style jsx>{`
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.3; }
    }
    .animate-blink {
      animation: blink 1s infinite;
    }
  `}</style>
</div>

      <div className="space-y-12 mt-5">
        {winners.map((winner, index) => {
          const isOdd = index % 2 === 0;
          return (
            <div key={index} className="space-y-4">
              {/* Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Left column */}
                <div className="flex justify-center items-center">
                  {isOdd ? (
                    // Odd row: rank on left
                    <div
                      className={`w-32 h-32 flex items-center justify-center rounded-full text-3xl font-bold shadow-md border-4 ${rankColors[winner.rank] || "border-indigo-400 text-indigo-800"
                        }`}
                    >
                      {winner.rank}
                    </div>
                  ) : (
                    // Even row: content on left
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extrabold text-gray-800">
                        {winner.projectTitle}
                      </h3>
                      <p className="text-gray-600">{winner.projectDescription}</p>
                      <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded-full">
                        🏫 {winner.schoolName}
                      </div>
                      <p className="text-gray-500 mt-1">📍 {winner.District}</p>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {winner.students.map((stu, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                          >
                            {stu.name} ({stu.standard})
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right column */}
                <div className="flex justify-center items-center">
                  {isOdd ? (
                    // Odd row: content on right
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extrabold text-gray-800">
                        {winner.projectTitle}
                      </h3>
                      <p className="text-gray-600">{winner.projectDescription}</p>
                      <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 font-semibold rounded-full">
                        🏫 {winner.schoolName}
                      </div>
                      <p className="text-gray-500 mt-1">📍 {winner.District}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {winner.students.map((stu, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                          >
                            {stu.name} ({stu.standard})
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Even row: rank on right
                    <div
                      className={`w-32 h-32 flex items-center justify-center rounded-full text-3xl font-bold shadow-md border-4 ${rankColors[winner.rank] || "border-indigo-400 text-indigo-800"
                        }`}
                    >
                      {winner.rank}
                    </div>
                  )}
                </div>
              </div>

              {/* Horizontal line between rows */}
              {index !== winners.length - 1 && <hr className="border-gray-300 mt-6" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}








