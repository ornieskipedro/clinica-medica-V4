import svgPaths from "./svg-pcncjlnkj7";
import imgImgDoctor1 from "figma:asset/631d5cdbf380813d0a46c15425ef716832e9e3b0.png";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-center w-full whitespace-pre-wrap">
      <p className="font-['DM_Sans:ExtraBold',sans-serif] relative shrink-0 text-[#1f5e5a] text-[36px] w-full">Consultas médicas rápidas e sem fila</p>
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#5a6c7d] text-[16px] w-full">Atendimento com profissionais qualificados e sem longas esperas</p>
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
    <div className="bg-[#f2994a] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Botão">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[24px] relative size-full">
          <WhatsappLogo />
          <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white">Mais informações pelo WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Botao />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[764px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(153.181deg, rgb(255, 255, 255) 0%, rgb(250, 250, 247) 99.645%)" }}>
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pt-[72px] px-[24px] relative size-full">
          <Frame3 />
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#21625a] text-[24px] w-full whitespace-pre-wrap">
        {`O que você `}
        <br aria-hidden="true" />
        vai encontrar
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Lightning() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Lightning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Lightning">
          <g id="Vector" />
          <path d={svgPaths.p1693bc80} id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[#1f5e5a] text-[20px] w-full">Atendimento rápido</p>
      <p className="relative shrink-0 text-[#5f6f7a] text-[14px] w-full">Agendamento simples, com menos espera e mais praticidade para o paciente</p>
    </div>
  );
}

function CardBeneficios() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[24px] relative w-full">
        <Lightning />
        <Frame7 />
      </div>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Stethoscope">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Stethoscope">
          <g id="Vector" />
          <path d={svgPaths.p23e6d300} fill="var(--fill-0, #E8934E)" id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeWidth="0.125" />
          <path d={svgPaths.p38294d40} id="Vector_3" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1f7cde00} id="Vector_4" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32966e00} id="Vector_5" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[#1f5e5a] text-[20px] w-full">Profissionais qualificados</p>
      <p className="relative shrink-0 text-[#5f6f7a] text-[14px] w-full">Equipe médica experiente, com atendimento responsável e humanizado</p>
    </div>
  );
}

function CardBeneficios1() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[24px] relative w-full">
        <Stethoscope />
        <Frame8 />
      </div>
    </div>
  );
}

function FirstAid() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="FirstAid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="FirstAid">
          <g id="Vector" />
          <path d={svgPaths.p12be4900} id="Vector_2" stroke="var(--stroke-0, #E8934E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="relative shrink-0 text-[#1f5e5a] text-[20px] w-full">Convênios e consultas particulares</p>
      <p className="relative shrink-0 text-[#5f6f7a] text-[14px] w-full">Atendimento por convênios selecionados e consultas particulares</p>
    </div>
  );
}

function CardBeneficios2() {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[24px] relative w-full">
        <FirstAid />
        <Frame9 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <CardBeneficios />
      <CardBeneficios1 />
      <CardBeneficios2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[800px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center px-[24px] py-[72px] relative size-full">
          <Frame6 />
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8934e] text-[14px] uppercase">Quem vai te atender</p>
      <p className="font-['DM_Sans:ExtraBold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#21625a] text-[32px] w-[min-content] whitespace-pre-wrap">Dr. Rafael Sato</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#808080] text-[16px] w-[min-content] whitespace-pre-wrap">Médico Clínico Geral</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function CheckFat() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3771b580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84375" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[5.625px] relative rounded-[56249.438px] shrink-0">
      <CheckFat />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[121px]">
      <Frame12 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[14px] w-[146.338px] whitespace-pre-wrap">Registro profissional ativo (CRM)</p>
    </div>
  );
}

function CheckFat1() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3771b580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84375" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[5.625px] relative rounded-[56249.438px] shrink-0">
      <CheckFat1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[121px]">
      <Frame16 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[14px] w-[146.338px] whitespace-pre-wrap">Experiência em atendimento clínico</p>
    </div>
  );
}

function CheckFat2() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3771b580} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84375" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[5.625px] relative rounded-[56249.438px] shrink-0">
      <CheckFat2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[121px]">
      <Frame18 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[14px] w-[217.532px] whitespace-pre-wrap">
        Abordagem humanizada
        <br aria-hidden="true" />e responsável
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame17 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start justify-end min-h-px min-w-px relative w-full">
      <Frame10 />
      <Frame15 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#fffbf8] h-[764px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start justify-center px-[24px] py-[72px] relative size-full">
          <Frame34 />
          <div className="absolute h-[350px] left-[118.83px] top-[32px] w-[250.157px]" data-name="img-doctor 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgDoctor1} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[24px]">
        {`O que os `}
        <br aria-hidden="true" />
        pacientes dizem
      </p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#5f6f7a] text-[20px] whitespace-pre-wrap">{`"Fui atendida rapidamente e com muito cuidado. Recomendo!"`}</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] relative shrink-0 text-[#21625a] text-[16px]">Vitória A.</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#5f6f7a] text-[12px]">Curitiba, PR - Paciente</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[48px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #818181)" id="Ellipse 12" r="24" />
        </svg>
      </div>
      <Frame25 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[10.5px] not-italic text-[20px] text-white top-[9px]">VA</p>
    </div>
  );
}

function Depoimento() {
  return (
    <div className="bg-[#eef1ef] content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[24px] relative rounded-[8px] shrink-0 w-[345px]" data-name="Depoimento">
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame23 />
      <Frame24 />
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

function Botao1() {
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

function Frame27() {
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

function Botao2() {
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

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Botao1 />
      <Frame27 />
      <Botao2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Depoimento />
      <Frame26 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame20 />
      <Frame22 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-white h-[800px] relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24px] py-[72px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[32px] text-center w-full whitespace-pre-wrap">Agendar consulta pelo WhatsApp</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function WhatsappLogo1() {
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

function Botao3() {
  return (
    <div className="backdrop-blur-[2px] bg-[#f2994a] content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[8px] shrink-0" data-name="Botão">
      <WhatsappLogo1 />
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white">Agendar via WhatsApp</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#fffbf8] h-[800px] relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center px-[24px] py-[72px] relative size-full">
          <Frame29 />
          <Botao3 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#808080] text-[14px] text-center w-full whitespace-pre-wrap">
        {`© 2025 Clínica Médica Fictícia. `}
        <br aria-hidden="true" />
        Projeto demonstrativo para fins de teste técnico.
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[96px] pt-[72px] px-[24px] relative w-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

export default function LandingPageMobile() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Landing Page - Mobile">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame19 />
      <Frame28 />
      <Frame33 />
    </div>
  );
}