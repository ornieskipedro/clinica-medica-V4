function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[12px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#f2994a] border-b-4 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#09203d] text-[48px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        {`O que os `}
        <br aria-hidden="true" />
        pacientes dizem
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#7f7f7f] text-[24px] whitespace-pre-wrap">{`"Fui atendida rapidamente e com muito cuidado. Recomendo!"`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#21625a] text-[16px]">Vitória A.</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#808080] text-[12px]">Curitiba, PR - Paciente</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[48px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #818181)" id="Ellipse 12" r="24" />
        </svg>
      </div>
      <Frame4 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[11.5px] not-italic text-[20px] text-white top-[9px]">CL</p>
    </div>
  );
}

function Depoimento() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Depoimento">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative w-full">
        <Frame2 />
        <Frame3 />
      </div>
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretLeft">
          <g id="Vector" />
          <path d="M15 19.5L7.5 12L15 4.5" id="Vector_2" stroke="var(--stroke-0, #517420)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Botao() {
  return (
    <div className="bg-[#fffefe] h-[44px] relative rounded-[8px] shrink-0" data-name="Botão">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center px-[16px] py-[24px] relative">
          <CaretLeft />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[8px] relative shrink-0 w-[68px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 8">
        <g id="Frame 51">
          <circle cx="4" cy="4" fill="var(--fill-0, #D2E0D7)" id="Ellipse 13" r="4" />
          <rect fill="var(--fill-0, #517420)" height="8" id="Rectangle 13" rx="4" width="32" x="12" />
          <circle cx="52" cy="4" fill="var(--fill-0, #D2E0D7)" id="Ellipse 14" r="4" />
          <circle cx="64" cy="4" fill="var(--fill-0, #D2E0D7)" id="Ellipse 15" r="4" />
        </g>
      </svg>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="CaretRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="CaretRight">
          <g id="Vector" />
          <path d="M9 4.5L16.5 12L9 19.5" id="Vector_2" stroke="var(--stroke-0, #517420)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Botao1() {
  return (
    <div className="bg-[#fffefe] h-[44px] relative rounded-[8px] shrink-0" data-name="Botão">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center px-[16px] py-[24px] relative">
          <CaretRight />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <Botao />
      <Frame6 />
      <Botao1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center min-w-[754px] relative shrink-0">
      <Depoimento />
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[72px] items-center justify-center p-[72px] relative size-full">
      <Frame1 />
      <Frame7 />
    </div>
  );
}