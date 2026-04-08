const services = [
  {
    number: '01',
    title: 'Videography',
    description: 'From the first shot to the final cut. We film with intention, move with purpose, and deliver something you want to watch twice.',
  },
  {
    number: '02',
    title: 'Photography',
    description: 'Still images that hold the moment exactly as it felt. No over-editing. No generic poses.',
  },
  {
    number: '03',
    title: 'Post-Production',
    description: 'Color grading, sound mix, full assembly. The complete treatment, handled in-house.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0C0C0C] px-[5vw] py-[12vh]">
      <div className="text-[11px] tracking-[0.35em] uppercase text-muted mb-16">
        What We Do
      </div>

      <div className="flex flex-col lg:flex-row gap-0">
        {services.map((service, index) => (
          <div
            key={service.number}
            className={`group flex-1 border-b lg:border-b-0 lg:border-r border-border-divider last:border-0 pb-12 lg:pb-32 lg:px-[4vw] lg:first:pl-0 lg:last:pr-0 ${
              index !== 0 ? 'pt-12 lg:pt-0' : ''
            }`}
          >
            <span className="font-display text-[clamp(80px,10vw,140px)] leading-none text-primary/[0.06] block transition-opacity duration-500 group-hover:opacity-[0.18]">
              {service.number}
            </span>
            <h3 className="font-semibold text-[clamp(20px,2.5vw,28px)] text-primary mt-[-20px] transition-colors duration-500 group-hover:text-accent relative z-10">
              {service.title}
            </h3>
            <p className="font-light text-[15px] leading-[1.7] text-primary/55 mt-4 max-w-[400px]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
