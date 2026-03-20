const weeks = [
  {
    week: "WEEK 01",
    title: "AI 빌더의 마인드셋과 도구 셋팅",
    outcome: "나만의 AI 프로덕트 아이디어 구체화 및 개발 환경 구축 완료",
    details: ["Cursor AI 기본 및 고급 활용법", "노코드 UI 설계 도구 v0 입문", "LLM API 키 발급 및 관리"]
  },
  {
    week: "WEEK 02",
    title: "v0로 1시간 만에 고퀄리티 UI 완성하기",
    outcome: "피그마 없이도 세련된 프로덕트 프론트엔드 UI 프로토타입 완성",
    details: ["v0 프롬프트 엔지니어링", "shadcn/ui 커스터마이징", "반응형 레이아웃 구성"]
  },
  {
    week: "WEEK 03",
    title: "LLM 심장 이식: API 연동 및 비즈니스 로직",
    outcome: "사용자의 입력을 받아 AI가 개인화된 답변을 내놓는 핵심 기능 구현",
    details: ["OpenAI / Anthropic API 연동", "프롬프트 템플릿 설계", "Streaming 데이터 처리"]
  },
  {
    week: "WEEK 04",
    title: "데이터의 기억: 데이터베이스와 사용자 인증",
    outcome: "회원가입 기능과 사용자의 데이터를 저장/불러오는 동적 서비스 구축",
    details: ["Supabase 원클릭 DB 구축", "NextAuth / Clerk 사용자 인증", "CRUD 로직 구현"]
  },
  {
    week: "WEEK 05",
    title: "배포의 벽 넘기: 세상에 나의 앱 공개하기",
    outcome: "Local 호스트를 벗어나 고유 도메인을 가진 실제 서비스 라이브",
    details: ["Vercel 원클릭 배포", "커스텀 도메인 연결", "환경 변수 및 보안 설정"]
  },
  {
    week: "WEEK 06",
    title: "런칭 및 고도화: 사용자 피드백과 수익화",
    outcome: "실제 사용자 피드백 기반 기능 개선 및 유료 결제 연동 준비",
    details: ["Stripe 결제 기능 입문", "Google Analytics 연동", "최종 프로젝트 발표 및 네트워킹"]
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-accent-purple mb-4">Curriculum</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              6주 만에 아이디어를 <br /> 
              <span className="gradient-text">현실로 만듭니다.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              단순 지식 전달이 아닌, 매 주차 명확한 '결과물'을 만들어내는 <br className="hidden md:block" />
              실전 프로젝트 기반의 성장을 경험하세요.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="hidden md:flex flex-col items-center">
                <span className="text-4xl font-bold">100%</span>
                <span className="text-xs text-zinc-500 uppercase font-bold tracking-widest mt-1">Completion</span>
             </div>
          </div>
        </div>

        <div className="grid gap-6">
          {weeks.map((item, idx) => (
            <div key={idx} className="group relative glass p-8 md:p-10 rounded-[2rem] border-white/5 hover:border-white/10 transition-all">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />
              
              <div className="flex flex-col md:flex-row gap-8 relative">
                <div className="md:w-32 pt-2">
                  <span className="text-sm font-black text-zinc-500 tracking-tighter group-hover:text-accent-purple transition-colors">
                    {item.week}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.details.map((detail, dIdx) => (
                      <span key={dIdx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-400 font-medium border border-white/5">
                        {detail}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10 flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                    <p className="text-sm text-accent-purple/90 font-medium">
                      <span className="font-black opacity-60 mr-2">OUTCOME:</span> {item.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
