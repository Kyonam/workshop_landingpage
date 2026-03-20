"use client";

import { useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { nanoid } from "nanoid";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
}

export default function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY || "";
      const tossPayments = await loadTossPayments(clientKey);

      await tossPayments.requestPayment("카드", {
        amount: amount,
        orderId: nanoid(),
        orderName: "AI 프로덕트 빌더즈 4주 워크샵 1기 얼리버드",
        customerName: name,
        customerEmail: email,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error: any) {
      console.error("Payment failed:", error);
      if (error?.code === "USER_CANCEL") {
        alert("결제 진행이 취소되었습니다.");
      } else {
        alert(error?.message || "결제 요청 중 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="glass p-8 md:p-10 rounded-[2.5rem] w-full max-w-md relative bg-zinc-950 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <h3 className="text-2xl font-bold mb-2">신청자 정보 입력</h3>
        <p className="text-zinc-500 text-sm mb-8">워크샵 안내 메일 및 입장을 위한 정보를 입력해주세요.</p>

        <form onSubmit={handlePayment} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">이름</label>
            <input 
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="홍길동"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-accent-blue/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-zinc-600 mb-2">이메일</label>
            <input 
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 placeholder:text-zinc-700 focus:outline-none focus:border-accent-blue/50 transition-colors"
            />
          </div>

          <div className="pt-4">
            <button 
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-accent-blue text-white font-black text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "결제창을 불러오는 중..." : `₩${amount.toLocaleString()} 결제하기`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
