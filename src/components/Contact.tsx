import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.contact-anim',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      id="contact"
      ref={containerRef}
      className="px-[5vw] py-[16vh] text-center bg-background border-t border-border-divider flex flex-col items-center"
    >
      <h2 className="contact-anim font-display italic text-[clamp(48px,7vw,110px)] text-primary leading-tight">
        Got a project in mind?
      </h2>
      
      <p className="contact-anim font-light text-[16px] text-primary/55 max-w-[400px] mt-6">
        Reach out and tell us what you are working on. No pitches, no pressure. Just a conversation about what you want to make.
      </p>
      
      <div className="contact-anim mt-10">
        <a
          href="mailto:hello@mafavisuals.com"
          className="inline-block bg-primary text-background font-semibold text-[14px] tracking-[0.1em] uppercase px-12 py-[18px] rounded-sm transition-colors duration-300 hover:bg-accent hover-target"
        >
          Let's Talk
        </a>
      </div>
      
      <div className="contact-anim mt-8">
        <a
          href="mailto:hello@mafavisuals.com"
          className="font-light text-[14px] text-primary/40 hover:text-primary transition-colors duration-300 hover-target"
        >
          hello@mafavisuals.com
        </a>
      </div>
    </section>
  );
}
