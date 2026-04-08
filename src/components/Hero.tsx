import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.hero-anim',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15, delay: 0.3 }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,#1a1410_0%,#080808_70%)]" />
      
      {/* BACKGROUND: Replace this div with a full-bleed video or image element. Suggested: autoplay muted loop playsInline video. Overlay stays. */}
      <div className="absolute inset-0" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,#080808_0%,rgba(8,8,8,0.3)_50%,transparent_100%)]" />

      {/* Content */}
      <div className="absolute bottom-[10vh] left-[6vw] max-w-[720px] z-10">
        <div className="hero-anim text-[11px] tracking-[0.35em] uppercase text-muted mb-6">
          London, Ontario / El Salvador Roots
        </div>
        
        <h1 className="font-display italic text-[clamp(56px,8vw,130px)] leading-[0.95] text-primary">
          <div className="hero-anim">Every frame</div>
          <div className="hero-anim pl-[clamp(40px,5vw,80px)]">tells a story.</div>
        </h1>
        
        <p className="hero-anim font-sans font-light text-[16px] leading-[1.7] text-primary/55 max-w-[400px] mt-6">
          Memories that last a lifetime. Content that grows a business. Storytelling is not just what we do. It is who we are.
        </p>
        
        <div className="hero-anim mt-9">
          <a
            href="#work"
            className="inline-block border border-primary/50 text-primary px-8 py-[14px] rounded-full text-[13px] tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary hover:text-background hover-target"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[11px] tracking-[0.3em] uppercase text-primary/50">Scroll</span>
        <div className="w-[1px] h-[60px] bg-primary/30 animate-pulse" />
      </div>
    </section>
  );
}
