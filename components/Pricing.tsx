"use client";

import { useState } from "react";
import Countdown from "./Countdown";
import PaymentModal from "./PaymentModal";

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const discountAmount = 190000;
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-accent-blue/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent-blue mb-4">Pricing</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">당신의 성장에 <br /> <span className="gradient-text">투자하세요.</span></h3>

        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <div className="glass p-10 md:p-12 rounded-[2.5rem] relative bg-zinc-950">
            <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-widest uppercase bg-accent-blue text-white rounded-full animate-bounce">
              얼리버드 50% 할인 중
            </div>
            
            <div className="flex flex-col items-center justify-center gap-1 mb-8">
              <span className="text-xl md:text-2xl text-zinc-600 line-through">₩600,000</span>
              <span className="text-5xl md:text-7xl font-black tracking-tighter gradient-text leading-tight">₩190,000</span>
            </div>

            <ul className="text-left space-y-4 mb-10">
              {["6주 집중 커리큘럼", "전문 강사 1:1 라이브 피드백", "전용 커뮤니티 평생 초대", "최종 프로젝트 컨설팅", "모든 강의 자료 가이드북"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-400">
                  <svg className="w-5 h-5 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-5 bg-white text-black font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10 mb-4"
            >
              지금 바로 신청하기
            </button>
            <p className="text-xs text-zinc-500 font-medium">선착순 15명 한정 (현재 4석 남음)</p>
            
            <Countdown />
          </div>
        </div>
      </div>

      <PaymentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        amount={discountAmount} 
      />
    </section>
  );
}
