import Link from "next/link";

export default function FailPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-950">
      <div className="glass p-10 md:p-16 rounded-[3rem] max-w-xl w-full text-center">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-red-500/20">
          <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-6">결제에 실패했습니다</h1>
        <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
          요청 처리 중 오류가 발생했거나 <br className="md:hidden" /> 결제가 취소되었습니다. <br />
          문제가 지속되면 고객센터로 문의해주세요.
        </p>

        <Link 
          href="/"
          className="inline-block px-10 py-4 glass text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
