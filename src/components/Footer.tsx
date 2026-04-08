import { Instagram, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040404] px-[5vw] py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center">
        <img
          src="/logo-mafa2.webp"
          alt="Mafa Visuals"
          className="h-8 opacity-50 invert"
        />
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="font-light text-[12px] tracking-[0.05em] text-primary/25 uppercase">
          Mafa Visuals 2025
        </div>
        <div className="font-light text-[11px] tracking-[0.05em] text-primary/40 uppercase">
          <a href="https://www.thecitadl.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-300 hover-target">
            Built by The Citadl. Obviously.
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-primary opacity-35 hover:opacity-70 transition-opacity duration-250 hover-target"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="text-primary opacity-35 hover:opacity-70 transition-opacity duration-250 hover-target"
          aria-label="Vimeo"
        >
          <Video className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
