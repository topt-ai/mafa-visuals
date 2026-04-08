import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Headline clip reveal
    gsap.fromTo(
      '.about-headline-line',
      { y: '100%' },
      {
        y: '0%',
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.about-headline-container',
          start: 'top 80%',
        },
      }
    );

    // Body text fade in
    gsap.fromTo(
      '.about-body',
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-body',
          start: 'top 75%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="px-[5vw] py-[14vh] bg-background">
      <div className="flex flex-col lg:flex-row gap-[8vw]">
        {/* Content */}
        <div className="w-full max-w-4xl flex flex-col justify-center">
          <div className="text-[11px] tracking-[0.35em] uppercase text-muted mb-6">
            Our Story
          </div>
          
          <div className="about-headline-container mb-10">
            <h2 className="font-display italic text-[clamp(40px,5vw,72px)] leading-[1.05] text-primary">
              <div className="overflow-hidden">
                <div className="about-headline-line">Born in El Salvador.</div>
              </div>
              <div className="overflow-hidden">
                <div className="about-headline-line">Based in London.</div>
              </div>
            </h2>
          </div>

          <div className="about-body space-y-6">
            <p className="font-light text-[17px] leading-[1.8] text-primary/65 max-w-[520px]">
              We grew up in El Salvador and landed in London, Ontario with cameras, hard drives, and a hunger to tell stories the right way. Weddings, brand campaigns, reels that stop the scroll. Whatever the project, we show up ready to make something worth watching.
            </p>
            <p className="font-light text-[17px] leading-[1.8] text-primary/65 max-w-[520px]">
              Every job is different. Every client gets the same level of care. That part has never changed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
