import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Award, BookOpen, Hexagon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const qualifications = [
    {
        id: 1,
        title: "BE. Electronic and Telecommunication",
        institution: "Thakur College of Engineering and Technology",
        year: "2024-28",
        description: "Specialized in Cyber Security.",
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Advanced Web Animations",
        institution: "Awwwards Academy",
        year: "2023",
        description: "Masterclass on WebGL, Three.js, and advanced GSAP techniques for crafting premium web experiences.",
        icon: <Hexagon className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Certified Cloud Practitioner",
        institution: "AWS",
        year: "2023",
        description: "Validated overall understanding of the AWS Cloud platform, covering foundational cloud concepts and security.",
        icon: <Award className="w-6 h-6" />
    }
];

export default function Qualifications() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".qual-header",
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
            if (cardsRef.current) {
                gsap.fromTo(cardsRef.current.children,
                    { opacity: 0, y: 50, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: cardsRef.current, start: "top 75%" } }
                );
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 md:px-12 lg:px-24 w-full relative z-30 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #faeae0 0%, #fce8e8 50%, #fdf0f5 100%)', borderTop: '1px solid rgba(212,120,138,0.12)' }}
        >
            {/* Large soft pink glow center */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div style={{
                    width: '700px', height: '400px',
                    background: 'radial-gradient(ellipse, rgba(232,160,176,0.12) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />
            </div>

            <div className="text-center mb-16 md:mb-24 qual-header relative">
                <p className="uppercase tracking-[0.25em] text-sm mb-4 font-semibold"
                    style={{ color: 'var(--gold-warm)' }}>Education &amp; Certifications</p>
                <h2 className="text-5xl md:text-6xl font-bold italic"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}>
                    Quali<span style={{ color: 'var(--sakura-pink)' }}>fications</span>
                </h2>
                <div className="mt-6 mx-auto w-28 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, var(--sakura-pink), var(--gold-warm), transparent)' }} />
            </div>

            <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {qualifications.map((item) => (
                    <div
                        key={item.id}
                        className="interactable p-8 rounded-2xl relative overflow-hidden group cursor-pointer transition-all duration-500"
                        style={{
                            background: '#ffffff',
                            border: '1px solid rgba(212,120,138,0.18)',
                            boxShadow: '0 4px 24px rgba(212,120,138,0.06)',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,120,138,0.5)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 48px rgba(212,120,138,0.16)';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,120,138,0.18)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(212,120,138,0.06)';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Pink shimmer top-right */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                            style={{ background: 'radial-gradient(circle, var(--sakura-pale) 0%, transparent 70%)' }} />

                        {/* Icon ring */}
                        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 relative"
                            style={{ background: 'linear-gradient(135deg, var(--sakura-pale), #fff)', border: '1px solid rgba(212,120,138,0.3)', color: 'var(--sakura-pink)' }}>
                            {item.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-dark)' }}>{item.title}</h3>

                        <div className="flex justify-between items-center mb-4 text-sm font-serif italic">
                            <span style={{ color: 'var(--sakura-pink)' }}>{item.institution}</span>
                            <span style={{ color: 'var(--text-muted)' }}>{item.year}</span>
                        </div>

                        <div className="w-full h-px mb-4"
                            style={{ background: 'linear-gradient(90deg, rgba(212,120,138,0.3), transparent)' }} />

                        <p className="leading-relaxed text-sm" style={{ color: 'var(--text-body)' }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
