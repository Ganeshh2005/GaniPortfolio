import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "Vercel",
        period: "2023 - Present",
        description: "Leading the development of high-performance web interfaces and contributing to open-source tools. Focused on React Server Components, Next.js, and global edge infrastructure.",
    },
    {
        id: 2,
        role: "Creative Developer",
        company: "Studio Freight",
        period: "2021 - 2023",
        description: "Built award-winning digital experiences for global brands. Specialized in WebGL, GSAP animations, and custom scroll interactions.",
    },
    {
        id: 3,
        role: "UI Engineer",
        company: "Stripe",
        period: "2019 - 2021",
        description: "Developed accessible and beautiful components for the core Stripe Dashboard. Improved performance and collaborated closely with product design.",
    }
];

export default function Experiences() {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".exp-header",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
            if (listRef.current) {
                gsap.fromTo(listRef.current.children,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: listRef.current, start: "top 75%" } }
                );
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-6 md:px-12 lg:px-24 w-full relative z-30 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #fdf0f5 0%, #faeee8 60%, #f8e8d8 100%)', borderTop: '1px solid rgba(212,120,138,0.12)' }}
        >
            {/* Warm gold glow left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(245,221,176,0.35) 0%, transparent 70%)', transform: 'translate(-30%, -50%)' }} />

            <div className="flex flex-col lg:flex-row gap-16 md:gap-24 relative">

                {/* Left header */}
                <div className="w-full lg:w-1/3 exp-header">
                    <p className="uppercase tracking-[0.25em] text-sm mb-4 font-semibold"
                        style={{ color: 'var(--gold-warm)' }}>Career</p>
                    <h2 className="text-5xl md:text-7xl font-bold italic mb-6 leading-none"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}>
                        Work<br />
                        <span style={{ color: 'var(--sakura-pink)' }}>Exp.</span>
                    </h2>
                    {/* Pink-to-gold gradient bar */}
                    <div className="w-16 h-1 rounded-full mb-8"
                        style={{ background: 'linear-gradient(90deg, var(--sakura-pink), var(--gold-warm))' }} />
                    <p className="leading-relaxed text-lg max-w-sm" style={{ color: 'var(--text-body)' }}>
                        A timeline of my professional journey, building tools and experiences for millions of users worldwide.
                    </p>
                </div>

                {/* Right list */}
                <div ref={listRef} className="w-full lg:w-2/3 flex flex-col pt-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="flex flex-col md:flex-row gap-4 md:gap-12 py-10 interactable group cursor-pointer transition-all duration-300"
                            style={index !== experiences.length - 1 ? { borderBottom: '1px solid rgba(212,120,138,0.2)' } : {}}
                        >
                            <div className="md:w-1/4 pt-1">
                                <span className="font-serif italic text-lg" style={{ color: 'var(--text-muted)' }}>{exp.period}</span>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-3xl font-bold mb-2 transition-colors duration-300"
                                    style={{ color: 'var(--text-dark)' }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura-pink)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                                >
                                    {exp.role}
                                </h3>
                                <h4 className="text-xl mb-6 font-serif italic" style={{ color: 'var(--gold-warm)' }}>{exp.company}</h4>
                                <p className="leading-relaxed max-w-2xl" style={{ color: 'var(--text-body)' }}>
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
