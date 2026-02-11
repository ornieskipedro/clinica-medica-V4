import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-pcncjlnkj7';
import bioSvgPaths from '../imports/svg-n3ubfoqaq5';
import benefitSvgPaths from '../imports/svg-5zj76l13hb';
import ctaSvgPaths from '../imports/svg-o0enhibirl';
import heroSvgPaths from '../imports/svg-1fo160ubne';
import doctorSectionSvgPaths from '../imports/svg-kxq3tx6eoz';
import imgImgDoctor1 from "figma:asset/631d5cdbf380813d0a46c15425ef716832e9e3b0.png";
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Icons
function WhatsappLogo() {
  return (
    <div className="relative shrink-0 size-[24px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g />
          <path d={svgPaths.p34828780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3d942900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Lightning() {
  return (
    <div className="relative shrink-0 size-[48px] md:size-[56px] lg:size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <g />
          <path d={benefitSvgPaths.p2b7b2380} stroke="#E8934E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Stethoscope() {
  return (
    <div className="relative shrink-0 size-[48px] md:size-[56px] lg:size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <g />
          <path d={benefitSvgPaths.p15eec900} fill="#E8934E" stroke="#E8934E" strokeWidth="0.25" />
          <path d={benefitSvgPaths.p9a9a800} stroke="#E8934E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={benefitSvgPaths.p2be43900} stroke="#E8934E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={benefitSvgPaths.p89ad900} stroke="#E8934E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function FirstAid() {
  return (
    <div className="relative shrink-0 size-[48px] md:size-[56px] lg:size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g>
          <g />
          <path d={benefitSvgPaths.p31417780} stroke="#E8934E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function CheckFat() {
  return (
    <div className="relative shrink-0 size-[13.5px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
        <g>
          <g />
          <path d={svgPaths.p3771b580} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.84375" />
        </g>
      </svg>
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[24px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g />
          <path d="M15 19.5L7.5 12L15 4.5" stroke="#517420" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[24px]" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g />
          <path d="M9 4.5L16.5 12L9 19.5" stroke="#517420" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

// Components
function CTAButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="bg-[#f2994a] hover:bg-[#e08839] transition-colors duration-200 rounded-lg px-6 py-4 flex items-center justify-center gap-2 min-h-[56px] w-full md:w-auto md:min-w-[280px] cursor-pointer"
      aria-label="Agendar via WhatsApp"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <WhatsappLogo />
      <span className="font-['Poppins',sans-serif] font-medium text-base text-white leading-normal">
        {children}
      </span>
    </motion.button>
  );
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: React.ReactNode }) {
  return (
    <div className="bg-[#eef1ef] relative rounded-[8px] shrink-0 w-full" data-name="Card -Benefícios">
      <div aria-hidden="true" className="absolute border border-[#e8eae8] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[24px] md:px-[40px] py-[24px] md:py-[32px] relative w-full">
        {icon}
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-pre-wrap">
          <p className="font-['Poppins',sans-serif] font-medium relative shrink-0 text-[#21625a] text-[20px] md:text-[24px] w-full">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#5a6c7d] text-[18px] md:text-[20px] w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function CheckFatBio() {
  return (
    <div className="relative shrink-0 size-[17.455px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g>
          <g />
          <path d={bioSvgPaths.p3d68480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
        </g>
      </svg>
    </div>
  );
}

function CredentialItem({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="bg-[#e8934e] content-stretch flex items-center p-[7.273px] relative rounded-[72726.547px] shrink-0 size-[32px]">
        <div className="relative shrink-0 size-[17.455px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
            <g>
              <g />
              <path d={doctorSectionSvgPaths.p3d68480} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09091" />
            </g>
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Poppins',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#09203d] text-[18px] md:text-[22px] lg:text-[24px] whitespace-pre-wrap">
        {text}
      </p>
    </div>
  );
}

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  location: string;
  avatarColor: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#eef1ef] relative rounded-[8px] w-full max-w-[754px] mx-auto"
    >
      <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] md:px-[24px] py-[24px] relative w-full">
        {/* Testimonial Text */}
        <div className="content-stretch flex items-start relative w-full">
          <p className="flex-[1_0_0] font-['Poppins',sans-serif] font-medium leading-[normal] not-italic relative text-[#7f7f7f] text-[18px] md:text-[20px] lg:text-[24px] whitespace-pre-wrap">
            "{testimonial.quote}"
          </p>
        </div>
        
        {/* Patient Info */}
        <div className="content-stretch flex gap-[8px] items-center relative w-full">
          <div 
            className="relative shrink-0 size-[48px] rounded-full flex items-center justify-center"
            style={{ backgroundColor: testimonial.avatarColor }}
          >
            <span className="font-['Poppins',sans-serif] font-normal leading-[normal] not-italic text-[20px] text-white">
              {testimonial.initials}
            </span>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0">
            <p className="font-['Poppins',sans-serif] font-medium relative shrink-0 text-[#21625a] text-[16px]">
              {testimonial.name}
            </p>
            <p className="font-['Poppins',sans-serif] relative shrink-0 text-[#808080] text-[12px]">
              {testimonial.location}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CarouselControls({ 
  currentIndex, 
  totalCount, 
  onPrev, 
  onNext, 
  onGoTo 
}: { 
  currentIndex: number; 
  totalCount: number; 
  onPrev: () => void; 
  onNext: () => void; 
  onGoTo: (index: number) => void;
}) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative w-full">
      {/* Left Arrow Button */}
      <button 
        onClick={onPrev}
        className="bg-[#fffefe] h-[44px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Anterior"
        disabled={currentIndex === 0}
      >
        <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center px-[16px] py-[24px] relative">
            <CaretLeft />
          </div>
        </div>
      </button>
      
      {/* Dots Indicator */}
      <div className="flex items-center gap-[8px]">
        {Array.from({ length: totalCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoTo(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'h-[8px] w-[32px] rounded-full bg-[#517420]'
                : 'size-[8px] rounded-full bg-[#D2E0D7] hover:bg-[#b8c9bd]'
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
      
      {/* Right Arrow Button */}
      <button 
        onClick={onNext}
        className="bg-[#fffefe] h-[44px] relative rounded-[8px] shrink-0 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Próximo"
        disabled={currentIndex === totalCount - 1}
      >
        <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center px-[16px] py-[24px] relative">
            <CaretRight />
          </div>
        </div>
      </button>
    </div>
  );
}

// Main Sections
function BrandLogo() {
  return (
    <div className="h-[40px] md:h-[50px] lg:h-[61.317px] relative shrink-0 w-auto">
      <svg className="block h-full w-auto" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 322.113 61.3165">
        <g>
          <path d={heroSvgPaths.p175fb800} fill="#F2994A" />
          <g>
            <path d={heroSvgPaths.p2e7c1700} fill="#1F5E5A" />
            <path d={heroSvgPaths.p10cc2a00} fill="#1F5E5A" />
            <path d={heroSvgPaths.p2a16a300} fill="#1F5E5A" />
            <path d={heroSvgPaths.p15f03680} fill="#1F5E5A" />
            <path d={heroSvgPaths.p2c51f700} fill="#1F5E5A" />
            <path d={heroSvgPaths.p1ed44d70} fill="#1F5E5A" />
            <path d={heroSvgPaths.p4f9f940} fill="#1F5E5A" />
            <path d={heroSvgPaths.p8af2400} fill="#1F5E5A" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SocialProofAvatars() {
  const avatars = [
    { initials: "VA", color: "#818181" },
    { initials: "MC", color: "#5A7D9A" },
    { initials: "JL", color: "#9A7D5A" },
    { initials: "PS", color: "#7D9A5A" }
  ];

  return (
    <div className="flex items-center -space-x-3">
      {avatars.map((avatar, index) => (
        <div 
          key={index}
          className="relative size-[36px] md:size-[40px] lg:size-[48px] rounded-full flex items-center justify-center border-2 border-white"
          style={{ backgroundColor: avatar.color }}
        >
          <span className="font-['Poppins',sans-serif] font-normal text-[13px] md:text-[14px] lg:text-[15px] text-white">
            {avatar.initials}
          </span>
        </div>
      ))}
    </div>
  );
}

function StarRating() {
  return (
    <div className="flex gap-[3px] items-center justify-center">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className="size-[20px] md:size-[22px] lg:size-[24px]">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
            <path d={heroSvgPaths.p51cd80} fill="#FFCF67" />
          </svg>
        </div>
      ))}
      <div className="size-[20px] md:size-[22px] lg:size-[24px]">
        <svg className="block size-full" fill="none" viewBox="0 0 24 24">
          <path d={heroSvgPaths.p51cd80} stroke="#FFCF67" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </div>
  );
}

function ArrowDownIcon() {
  return (
    <div className="size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d="M12 3.75V20.25" stroke="#21625A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={heroSvgPaths.p28066900} stroke="#21625A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function WhatsappLogoHero() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" viewBox="0 0 24 24">
        <path d={heroSvgPaths.p34828780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={heroSvgPaths.p3d942900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center pt-[48px] md:pt-[60px] lg:pt-[72px] pb-[48px] md:pb-[60px] lg:pb-[72px] px-6 md:px-12 lg:px-[72px]" 
      style={{ backgroundImage: "linear-gradient(-10.155deg, rgb(250, 250, 247) 22.214%, rgb(255, 255, 255) 99.891%)" }}
    >
      <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-[48px] md:gap-[60px] lg:gap-[72px] items-center justify-center">
        {/* Brand Logo */}
        <motion.div
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BrandLogo />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-center w-full max-w-[900px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          {/* Headline */}
          <h1 className="font-['DM_Sans',sans-serif] font-extrabold text-[#1f5e5a] text-[40px] md:text-[56px] lg:text-[72px] text-center leading-[1.1] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            {`Consultas médicas\nrápidas e sem fila`}
          </h1>

          {/* Subheadline */}
          <p className="font-['Poppins',sans-serif] font-medium text-[#808080] text-[20px] md:text-[26px] lg:text-[32px] text-center leading-[1.3] whitespace-pre-wrap">
            {`Atendimento com profissionais qualificados\ne sem longas esperas`}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f2994a] h-[56px] rounded-[8px] w-full max-w-[400px] hover:bg-[#e8934e] transition-all duration-200"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[24px] relative size-full">
              <WhatsappLogoHero />
              <p className="font-['Poppins',sans-serif] font-medium text-[16px] md:text-[20px] text-white leading-[normal] not-italic text-center">
                Agendar no WhatsApp
              </p>
            </div>
          </div>
        </motion.a>

        {/* Social Proof */}
        <motion.div
          className="flex flex-col gap-[12px] md:gap-[14px] lg:gap-[16px] items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-[8px] items-center">
            <SocialProofAvatars />
            <p className="font-['Poppins',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[#5a6c7d] text-center leading-[1.4]">
              {`+1.053 Avaliações\nno Google`}
            </p>
          </div>
          <StarRating />
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button
          onClick={handleScrollDown}
          className="backdrop-blur-[2px] bg-[#fffefe] flex items-center justify-center p-[16px] rounded-full hover:bg-gray-50 transition-all duration-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          aria-label="Rolar para baixo"
        >
          <div aria-hidden="true" className="absolute border border-[#dadfd9] border-solid inset-0 pointer-events-none rounded-full" />
          <ArrowDownIcon />
        </motion.button>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="w-full bg-white">
      <div className="bg-white flex flex-col lg:flex-row gap-[32px] lg:gap-[196px] items-start px-[24px] md:px-[48px] lg:px-[72px] py-[48px] md:py-[60px] lg:py-[72px] relative w-full max-w-[1440px] mx-auto">
        {/* Left Column - Title Only */}
        <motion.div 
          className="flex flex-col items-start pb-[12px] relative shrink-0 w-full lg:w-[343px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid inset-0 pointer-events-none" />
          <h2 className="font-['DM_Sans',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#21625a] text-[32px] md:text-[40px] lg:text-[48px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            {`O que você `}
            <br aria-hidden="true" />
            vai encontrar
          </h2>
        </motion.div>

        {/* Right Column - Cards Stack (Vertical Only) */}
        <div className="flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-stretch w-full lg:flex-1 lg:min-w-0">
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <BenefitCard
              icon={<Lightning />}
              title="Atendimento rápido"
              description="Agendamento simples, com menos espera e mais praticidade para o paciente"
            />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <BenefitCard
              icon={<Stethoscope />}
              title="Profissionais qualificados"
              description={
                <>
                  {`Equipe médica experiente, com atendimento `}
                  <br aria-hidden="true" className="hidden md:inline" />
                  responsável e humanizado
                </>
              }
            />
          </motion.div>
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <BenefitCard
              icon={<FirstAid />}
              title="Convênios e consultas particulares"
              description={
                <>
                  {`Atendimento por convênios selecionados `}
                  <br aria-hidden="true" className="hidden md:inline" />
                  e consultas particulares
                </>
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BioSection() {
  return (
    <section className="w-full bg-[#fffbf8] py-[48px] md:py-[60px] lg:py-[72px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-[24px] md:px-[48px] lg:px-[72px]">
        <div className="content-stretch flex flex-col lg:flex-row gap-[48px] lg:gap-[64px] items-center relative w-full">
          {/* Text Content */}
          <motion.div 
            className="relative shrink-0 w-full lg:flex-[0_0_55%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="content-stretch flex flex-col gap-[40px] md:gap-[56px] lg:gap-[64px] items-start relative w-full">
              {/* Title Section */}
              <div className="content-stretch flex flex-col gap-[6px] items-start pb-[12px] relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid bottom-0 left-0 w-full max-w-[520px] pointer-events-none" />
                <p className="font-['DM_Sans',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#e8934e] text-[16px] md:text-[18px] lg:text-[20px] uppercase" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Quem vai te atender
                </p>
                <p className="font-['DM_Sans',sans-serif] font-extrabold leading-[normal] min-w-full relative shrink-0 text-[#21625a] text-[36px] md:text-[52px] lg:text-[64px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Dr. Rafael Sato
                </p>
                <p className="font-['Poppins',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#808080] text-[22px] md:text-[28px] lg:text-[32px] w-[min-content] whitespace-pre-wrap">
                  Médico Clínico Geral
                </p>
              </div>

              {/* Credentials */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <CredentialItem text="Registro profissional ativo (CRM)" />
                <CredentialItem text="Experiência em atendimento clínico" />
                <CredentialItem text="Abordagem humanizada e responsável" />
              </div>
            </div>
          </motion.div>

          {/* Doctor Image */}
          <motion.div 
            className="relative w-full lg:flex-[0_0_45%] flex justify-center lg:justify-end mt-[24px] lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[456px]">
              {/* Circular background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4e8e6] to-[#c8dedd] rounded-full transform scale-110 -z-10 opacity-40" />
              <img 
                src={imgImgDoctor1} 
                alt="Dr. Rafael Sato" 
                className="relative w-full h-auto object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "Fui atendida rapidamente e com muito cuidado. Recomendo!",
      initials: "VA",
      name: "Vitória A.",
      location: "Curitiba, PR - Paciente",
      avatarColor: "#818181"
    },
    {
      quote: "Excelente atendimento! O Dr. Rafael foi muito atencioso e resolveu meu problema.",
      initials: "MC",
      name: "Marcos C.",
      location: "São Paulo, SP - Paciente",
      avatarColor: "#5a7d9a"
    },
    {
      quote: "Profissional dedicado e humano. Me senti acolhida desde o primeiro contato.",
      initials: "JL",
      name: "Juliana L.",
      location: "Rio de Janeiro, RJ - Paciente",
      avatarColor: "#9a7d5a"
    },
    {
      quote: "Consultório organizado, atendimento pontual e diagnóstico preciso. Muito satisfeito!",
      initials: "PS",
      name: "Pedro S.",
      location: "Belo Horizonte, MG - Paciente",
      avatarColor: "#7d9a5a"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
  };

  const handleGoTo = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="content-stretch flex flex-col gap-[48px] md:gap-[56px] lg:gap-[72px] items-center justify-center relative w-full">
          {/* Section Title */}
          <motion.div 
            className="content-stretch flex flex-col items-center justify-center pb-[12px] relative w-full max-w-[600px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div aria-hidden="true" className="absolute border-[#f2994a] border-b-4 border-solid bottom-0 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] pointer-events-none" />
            <h2 className="font-['DM_Sans',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#21625a] text-[28px] md:text-[36px] lg:text-[48px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              {`O que os `}
              <br aria-hidden="true" className="md:hidden" />
              pacientes dizem
            </h2>
          </motion.div>

          {/* Testimonial Card and Controls */}
          <motion.div 
            className="content-stretch flex flex-col gap-[16px] items-center justify-center relative w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {/* Testimonial Card with AnimatePresence */}
            <div className="w-full min-h-[200px] md:min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </AnimatePresence>
            </div>
            
            {/* Carousel Controls */}
            <CarouselControls 
              currentIndex={currentIndex}
              totalCount={testimonials.length}
              onPrev={handlePrev}
              onNext={handleNext}
              onGoTo={handleGoTo}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhatsappLogoCTA() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="WhatsappLogo" aria-hidden="true">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <g />
          <path d={ctaSvgPaths.p34828780} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={ctaSvgPaths.p3d942900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function CTASection() {
  return (
    <section className="w-full bg-[#fffbf8] py-12 md:py-16 lg:py-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="content-stretch flex flex-col gap-[48px] md:gap-[56px] lg:gap-[64px] items-center justify-center relative w-full">
          {/* Headline and Subheadline */}
          <motion.div 
            className="content-stretch flex flex-col gap-[24px] md:gap-[28px] lg:gap-[32px] items-start justify-center overflow-clip relative shrink-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Headline with underline */}
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0">
                <div aria-hidden="true" className="absolute border-[#e8934e] border-b-4 border-solid inset-0 pointer-events-none" />
                <h2 className="font-['DM_Sans',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#21625a] text-[32px] md:text-[48px] lg:text-[64px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {`Cuide da sua saúde com `}
                  <br aria-hidden="true" className="hidden md:inline" />
                  atendimento médico qualificado
                </h2>
              </div>
            </div>
            
            {/* Subheadline */}
            <p className="font-['Poppins',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#808080] text-[18px] md:text-[20px] lg:text-[24px] text-center w-full whitespace-pre-wrap">
              Agende sua consulta em poucos minutos
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-[2px] bg-[#f2994a] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[16px] relative rounded-[8px] shrink-0 hover:bg-[#e8934e] transition-all duration-200 min-h-[56px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <WhatsappLogoCTA />
            <p className="font-['Poppins',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] md:text-[20px] text-center text-white">
              Falar no Whatsapp
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        <p className="font-['Poppins',sans-serif] font-normal text-sm text-[#808080] text-center leading-[1.5]">
          © 2025 Clínica Médica Fictícia.
          <br className="md:hidden" />
          <span className="md:ml-1">Projeto demonstrativo para fins de teste técnico.</span>
        </p>
      </div>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <HeroSection />
      <BenefitsSection />
      <BioSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
