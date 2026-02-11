import svgPaths from "./svg-kxq3tx6eoz";
import imgImgDoctor1 from "figma:asset/631d5cdbf380813d0a46c15425ef716832e9e3b0.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start pb-[12px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#e8934e] text-[20px] uppercase" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Quem vai te atender
      </p>
      <p className="font-['DM_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#21625a] text-[64px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Dr. Rafael Sato
      </p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#808080] text-[32px] w-[min-content] whitespace-pre-wrap">Médico Clínico Geral</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <Frame />
    </div>
  );
}

function CheckFat() {
  return (
    <div className="relative shrink-0 size-[17.455px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3d68480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[7.273px] relative rounded-[72726.547px] shrink-0 size-[32px]">
      <CheckFat />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame2 />
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#09203d] text-[24px] whitespace-pre-wrap">Registro profissional ativo (CRM)</p>
    </div>
  );
}

function CheckFat1() {
  return (
    <div className="relative shrink-0 size-[17.455px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3d68480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[7.273px] relative rounded-[72726.547px] shrink-0 size-[32px]">
      <CheckFat1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[24px]">Experiência em atendimento clínico</p>
    </div>
  );
}

function CheckFat2() {
  return (
    <div className="relative shrink-0 size-[17.455px]" data-name="CheckFat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g id="CheckFat">
          <g id="Vector" />
          <path d={svgPaths.p3d68480} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#e8934e] content-stretch flex items-center p-[7.273px] relative rounded-[72726.547px] shrink-0 size-[32px]">
      <CheckFat2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame8 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#09203d] text-[24px]">Abordagem humanizada e responsável</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-[730.453px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start relative w-full">
        <Frame1 />
        <Frame6 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#fffbf8] content-stretch flex gap-[64px] items-center p-[72px] relative size-full" data-name="Section">
      <Frame9 />
      <div className="absolute h-[638px] left-[802.45px] top-[108.9px] w-[456px]" data-name="img-doctor 1">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgDoctor1} />
      </div>
    </div>
  );
}