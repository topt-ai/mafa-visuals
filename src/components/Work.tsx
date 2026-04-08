import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Film, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Brand Reel',
    category: 'Videography',
    aspect: 'aspect-[16/9]',
    icon: Film,
  },
  {
    title: 'Wedding Day',
    category: 'Photography',
    aspect: 'aspect-[16/9]',
    icon: Camera,
  },
  {
    title: 'Product Launch',
    category: 'Post-Production',
    aspect: 'aspect-[4/5]',
    icon: Film,
  },
  {
    title: 'Artist Portrait',
    category: 'Photography',
    aspect: 'aspect-[4/5]',
    icon: Camera,
  },
  {
    title: 'Kombucha',
    category: 'Photography',
    aspect: 'aspect-[4/5]',
    image: '/kombucha-mafa.webp',
  },
  {
    title: 'Maple',
    category: 'Photography',
    aspect: 'aspect-[4/5]',
    image: '/maple-mafa.webp',
  },
  {
    title: 'Muro',
    category: 'Photography',
    aspect: 'aspect-[16/9]',
    image: '/muro-mafa.webp',
  },
  {
    title: 'Rainbow',
    category: 'Photography',
    aspect: 'aspect-[16/9]',
    image: '/rainbow-mafa.webp',
  },
  {
    title: 'Toronto',
    category: 'Photography',
    aspect: 'aspect-[16/9]',
    image: '/toronto-mafa.webp',
  },
];

export default function Work() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      '.work-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="px-[5vw] py-[12vh] bg-background">
      <div className="mb-12">
        <div className="text-[11px] tracking-[0.35em] uppercase text-muted mb-4">
          Selected Work
        </div>
        <h2 className="font-semibold text-[clamp(28px,4vw,48px)] text-primary">
          Projects that earned their place.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
        {projects.map((project, index) => {
          const Icon = project.icon || Camera;
          return (
            <div
              key={index}
              className={`work-card group relative overflow-hidden bg-[#1a1a1a] hover-target cursor-pointer ${project.aspect}`}
            >
              {project.image ? (
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-15">
                  <Icon className="w-16 h-16 text-white" />
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,8,8,0.9)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:-translate-y-2 transition-transform duration-400 ease-out">
                <h3 className="font-semibold text-[18px] text-primary mb-1">
                  {project.title}
                </h3>
                <p className="text-[11px] uppercase tracking-wider text-primary/70">
                  {project.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 flex justify-center">
        <a 
          href="https://mafavisuals.myportfolio.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-8 py-4 border border-border-divider rounded-full hover:bg-white/5 transition-colors duration-300 hover-target"
        >
          <span className="text-[13px] tracking-[0.18em] uppercase text-primary">Check out our work</span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
