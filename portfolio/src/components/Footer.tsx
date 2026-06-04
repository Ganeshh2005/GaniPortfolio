import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: footerRef.current, start: "top 80%" } }
            );
        });
        return () => ctx.revert();
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            ref={footerRef}
            className="py-24 px-6 md:px-12 lg:px-24 w-full relative z-30 overflow-hidden rounded-t-[3rem]"
            style={{
                background: 'linear-gradient(180deg, #faeae0 0%, #f5d8c0 50%, #f0c898 100%)',
                borderTop: '1px solid rgba(212,120,138,0.2)',
            }}
        >
            {/* Multi-colour horizon line at very top */}
            <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, var(--sakura-pink), var(--gold-soft), var(--sakura-blush), transparent)' }} />

            {/* Warm golden glow top center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(245,221,176,0.25) 0%, transparent 70%)' }} />

            {/* CTA block */}
            <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-32 relative">
                <p className="tracking-[0.25em] uppercase text-sm font-semibold mb-6"
                    style={{ color: 'var(--sakura-pink)' }}>Have an idea?</p>
                <h2
                    ref={textRef}
                    className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-none interactable cursor-pointer transition-all duration-500"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura-pink)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                >
                    Let's Talk
                </h2>
                <a
                    href="mailto:ganeshlagad2005@gmail.com"
                    className="mt-10 text-xl md:text-2xl font-serif italic pb-2 transition-all duration-300 interactable"
                    style={{ color: 'var(--text-body)', borderBottom: '1px solid rgba(212,120,138,0.4)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--sakura-pink)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'var(--sakura-pink)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-body)'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'rgba(212,120,138,0.4)'; }}
                >
                    ganeshlagad2005@gmail.com
                </a>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 relative"
                style={{ borderTop: '1px solid rgba(212,120,138,0.15)' }}>
                <div className="flex gap-8 mb-6 md:mb-0">
                    {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map(link => (
                        <a
                            key={link}
                            href="#"
                            className="interactable text-sm font-semibold uppercase tracking-wider transition-colors duration-300"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura-pink)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-8">
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        © {new Date().getFullYear()} Ganesh Lagad. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="interactable text-sm font-semibold uppercase tracking-wider hidden md:block transition-colors duration-300"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura-pink)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        Back to Top ↑
                    </button>
                </div>
            </div>
        </footer>
    );
}
