const faqs = [
  {
    q: "코딩을 전혀 몰라도 참여할 수 있나요?",
    a: "네, 가능합니다. 본 워크샵은 구문(Syntax)을 외우는 코딩 교육이 아닙니다. AI 툴(Cursor, v0)을 비서처럼 부려 아이디어를 앱으로 구현하는 방법론을 배웁니다."
  },
  {
    q: "수업 시간 외에 얼마나 시간을 투자해야 하나요?",
    a: "매주 3시간의 라이브 세션 외에, 개인 프로젝트 완성를 위해 주당 5~8시간 정도의 여유 시간을 권장드립니다."
  },
  {
    q: "환불 규정이 어떻게 되나요?",
    a: "첫 번째 라이브 세션 직후 만족하지 못하실 경우 100% 전액 환불을 보장해 드립니다. 그만큼 교육의 질에 자신 있습니다."
  },
  {
    q: "6주 후에 정말 앱을 런칭할 수 있나요?",
    a: "워크샵의 모든 주차 미션을 성실히 이행하신다면, 6주 차에는 도메인이 연결된 실제 라이브 서비스를 소유하게 됩니다."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">자주 묻는 질문</h3>
          <p className="text-zinc-400">워크샵 참여에 대해 더 궁금하신 점이 있으신가요?</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="glass p-6 md:p-8 rounded-3xl border-white/5">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                <span className="text-accent-blue tracking-tighter font-black">Q.</span>
                {item.q}
              </h4>
              <p className="text-zinc-400 leading-relaxed pl-7 border-l border-zinc-800">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
