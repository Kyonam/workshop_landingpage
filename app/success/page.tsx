import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-950">
      <div className="glass p-10 md:p-16 rounded-[3rem] max-w-2xl w-full text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent-blue/20 rounded-full blur-[80px] -z-10" />
        
        <div className="w-20 h-20 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-accent-blue/20">
          <svg className="w-10 h-10 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-6">워크샵 신청 완료!</h1>
        <div className="space-y-4 text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">
          <p>AI 프로덕트 빌더즈의 첫 여정을 함께하게 되어 기쁩니다.</p>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 inline-block">
            <span className="text-white font-bold">24시간 내 카톡방 초대 링크를 <br className="md:hidden" /> 이메일로 보내드립니다.</span>
          </div>
          <p className="text-sm">메일함에 오지 않았다면 <br className="md:hidden" /> 스팸함도 꼭 확인 부탁드려요!</p>
        </div>

        <Link 
          href="/"
          className="inline-block px-10 py-4 bg-white text-black font-black text-lg rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/5"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
