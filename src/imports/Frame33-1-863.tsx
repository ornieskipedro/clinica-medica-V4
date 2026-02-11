import svgPaths from "./svg-m2nht398cx";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#21625a] text-[48px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        {`O que você `}
        <br aria-hidden="true" />
        vai encontrar
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col h-[634px] items-start relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Lightning() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Lightning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Lightning">
          <g id="Vector" />
          <path d={svgPaths.p2b7b2380} id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#21625a] text-[24px] w-full">Atendimento rápido</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5a6c7d] text-[20px] w-full">Agendamento simples, com menos espera e mais praticidade para o paciente</p>
    </div>
  );
}

function CardBeneficios() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#e8eae8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[40px] py-[32px] relative w-full">
        <Lightning />
        <Frame4 />
      </div>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Stethoscope">
          <g id="Vector" />
          <path d={svgPaths.p15eec900} fill="var(--fill-0, #E8934E)" id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeWidth="0.25" />
          <path d={svgPaths.p9a9a800} id="Vector_3" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2be43900} id="Vector_4" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p89ad900} id="Vector_5" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#21625a] text-[24px] w-full">Profissionais qualificados</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5a6c7d] text-[20px] w-full">
        {`Equipe médica experiente, com atendimento `}
        <br aria-hidden="true" />
        responsável e humanizado
      </p>
    </div>
  );
}

function CardBeneficios1() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#e8eae8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[40px] py-[32px] relative w-full">
        <Stethoscope />
        <Frame5 />
      </div>
    </div>
  );
}

function FirstAid() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="FirstAid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="FirstAid">
          <g id="Vector" />
          <path d={svgPaths.p31417780} id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#21625a] text-[24px] w-full">Convênios e consultas particulares</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5a6c7d] text-[20px] w-full">
        {`Atendimento por convênios selecionados `}
        <br aria-hidden="true" />e consultas particulares
      </p>
    </div>
  );
}

function CardBeneficios2() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#e8eae8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[40px] py-[32px] relative w-full">
        <FirstAid />
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">
      <CardBeneficios />
      <CardBeneficios1 />
      <CardBeneficios2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex gap-[196px] items-center justify-center p-[72px] relative size-full">
      <Frame2 />
      <Frame7 />
    </div>
  );
}