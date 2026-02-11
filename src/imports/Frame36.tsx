import svgPaths from "./svg-o0enhibirl";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#21625a] text-[64px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        {`Cuide da sua saúde com `}
        <br aria-hidden="true" />
        atendimento médico qualificado
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame3 />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#808080] text-[24px] text-center w-full whitespace-pre-wrap">Agende sua consulta em poucos minutos</p>
    </div>
  );
}

function WhatsappLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="WhatsappLogo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="WhatsappLogo">
          <g id="Vector" />
          <path d={svgPaths.p34828780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3d942900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Botao() {
  return (
    <div className="backdrop-blur-[2px] bg-[#f2994a] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Botão">
      <WhatsappLogo />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-white">Falar no Whatsapp</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#fffbf8] content-stretch flex flex-col gap-[64px] items-center justify-center px-[24px] py-[72px] relative size-full">
      <Frame2 />
      <Botao />
    </div>
  );
}