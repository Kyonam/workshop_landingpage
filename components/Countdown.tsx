"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set deadline to March 27, 2026 (assuming today is March 20)
    const deadline = new Date("2026-03-27T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-8 pt-8 border-t border-white/5">
      <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">신청 마감까지 남은 시간</p>
      <div className="flex justify-center gap-4">
        {[
          { label: "DAYS", value: timeLeft.days },
          { label: "HOURS", value: timeLeft.hours },
          { label: "MINS", value: timeLeft.minutes },
          { label: "SECS", value: timeLeft.seconds }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[60px]">
            <span className="text-2xl md:text-3xl font-black tabular-nums">{String(item.value).padStart(2, '0')}</span>
            <span className="text-[10px] text-zinc-600 font-bold mt-1 tracking-widest">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
