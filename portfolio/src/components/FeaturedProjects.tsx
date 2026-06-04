import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import YoClubHome from '../assets/yoclub_home.png';
import FreudAiHome from '../assets/freudai_home.png';
import DripmartImage from '../assets/dripmart.png';
import VaktaAIImage from '../assets/vaktaai.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "YoClub!",
        category: "UI/UX Design • Figma Prototype",
        description: "A comprehensive manga streaming platform designed for true Otakus. Features a seamless reader, curated discovery feeds, and an immersive user experience built from the ground up for mobile.",
        image: YoClubHome,
        year: "2024",
        link: "https://www.figma.com/proto/SKWl8RNe2azK5J4OiKOhMm/UIUX-competition?node-id=1-2&starting-point-node-id=84%3A75&t=lgQKQr43JdfX8F4U-1",
        linkLabel: "View Prototype",
        aspect: "aspect-[9/16]",
        isMobile: true
    },
    {
        id: 2,
        title: "FreudAi",
        category: "Mental Health Platform • UI/UX Design",
        description: "Your mindful mental health AI companion. A sophisticated mobile platform that uses AI sound analysis and personalized assessments to track and improve mental well-being.",
        image: FreudAiHome,
        year: "2024",
        link: "https://www.figma.com/proto/4n1KmcbSYVwJPeejVl7F3J/Zephyr-TCET?page-id=0%3A1&node-id=1-1545&starting-point-node-id=1%3A69&t=zFNIZ5h7IdNakbt8-1",
        linkLabel: "View Prototype",
        aspect: "aspect-[9/16]",
        isMobile: true
    },
    {
        id: 3,
        title: "Dripmart",
        category: "Curated Fashion Experience • Fullstack Web",
        description: "A high-end digital lifestyle hub featuring modern fashion essentials, immersive discovery, and a seamless shopping experience designed for the aesthetic-conscious consumer.",
        image: DripmartImage,
        year: "2024",
        link: "https://drip-mart-ivory.vercel.app/",
        linkLabel: "Live Site",
        aspect: "aspect-video",
        isMobile: false
    },
    {
        id: 4,
        title: "VaktaAI",
        category: "AI-Powered Legal Platform • UI/UX Design",
        description: "A futuristic AI-based lawyer platform designed to uphold truth and justice. Combines specialized AI legal advice with a professional, high-trust interface for all legal services.",
        image: VaktaAIImage,
        year: "2024",
        link: "https://www.figma.com/proto/xzy3uSceF16ueaWafN0ZbV/ZevZone?page-id=0%3A1&node-id=25-1903&t=mBFkSAGfnVs3uUPy-1",
        linkLabel: "View Prototype",
        aspect: "aspect-video",
        isMobile: false
    }
];

export default function FeaturedProjects() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
            );
            
            // Re-trigger scroll animations whenever showAll changes
            ScrollTrigger.refresh();
        });
        return () => ctx.revert();
    }, [showAll]);

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section
            ref={sectionRef}
            className="py-32 px-6 md:px-12 lg:px-24 w-full relative z-30"
            style={{
                background: 'linear-gradient(180deg, #f0c898 0%, #f5d8b4 20%, #fae8d8 50%, #faeae0 100%)',
                borderTop: 'none',
            }}
        >
            {/* Primary SUN glow — bridges the gap with the animation */}
            <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none overflow-hidden">
                <div style={{
                    position: 'absolute',
                    top: '-300px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100vw',
                    height: '800px',
                    background: 'radial-gradient(ellipse, rgba(240,180,100,0.5) 0%, rgba(240,200,150,0.2) 40%, transparent 80%)'
                }} />
            </div>

            {/* Sakura petal bloom top right */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(212,120,138,0.25) 0%, transparent 70%)', transform: 'translate(10%, -10%)' }} />

            <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-36 relative">
                <div className="max-w-xl">
                    <p className="uppercase tracking-[0.4em] text-xs mb-6 font-bold"
                        style={{ color: 'var(--sakura-pink)' }}>Curated Works</p>
                    <h2 className="text-6xl md:text-[9rem] font-bold italic tracking-tighter leading-[0.85] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}>
                        Featured<br />
                        <span className="ml-12 md:ml-24" style={{ color: 'var(--sakura-pink)' }}>Projects</span>
                    </h2>
                </div>
                {!showAll && (
                    <button
                        onClick={() => setShowAll(true)}
                        className="interactable mt-12 md:mt-0 group flex items-center gap-4 text-sm font-bold uppercase tracking-widest pb-1 transition-all duration-300"
                        style={{ color: 'var(--text-dark)', borderBottom: '2px solid var(--sakura-pink)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--sakura-pink)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-dark)')}
                    >
                        Explore Portfolio
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                )}
            </div>

            <div ref={projectsRef} className="max-w-7xl mx-auto flex flex-col gap-32 md:gap-48 relative">
                {visibleProjects.map((project, index) => (
                    <div key={project.id}
                        className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center group interactable cursor-pointer`}>

                        {/* Image Frame — Responsive sizes */}
                        <div className={`w-full ${project.isMobile ? 'lg:w-[30%]' : 'lg:w-[60%]'} overflow-hidden rounded-[2.5rem] relative ${project.aspect} max-h-[700px]`}
                            style={{ 
                                background: '#fcfce7',
                                boxShadow: '0 30px 90px rgba(135, 75, 45, 0.15), 0 0 0 1px rgba(212,120,138,0.1)',
                                border: project.isMobile ? '12px solid #2d180e' : '8px solid #2d180e', // phone/bezel
                            }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                            />
                            {/* Texture overlay */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }} />
                        </div>

                        {/* Content block */}
                        <div className={`w-full ${project.isMobile ? 'lg:w-[50%]' : 'lg:w-[35%]'} flex flex-col pt-8`}>
                            <div className="flex items-center gap-8 mb-8 pb-4 border-b border-[#ebd7cb]">
                                <span className="tracking-[0.2em] text-xs font-bold uppercase" style={{ color: 'var(--sakura-pink)' }}>{project.category}</span>
                                <span className="font-serif italic text-lg" style={{ color: 'var(--text-muted)' }}>{project.year}</span>
                            </div>
                            <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-none tracking-tight"
                                style={{ fontFamily: "'Playfair Display', serif", color: 'var(--text-dark)' }}>
                                {project.title}
                            </h3>
                            {project.description && (
                                <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-body)' }}>
                                    {project.description}
                                </p>
                            )}
                            
                            <div className="flex items-center gap-8">
                                {project.link ? (
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="interactable px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300"
                                        style={{ background: 'var(--text-dark)', color: '#fff' }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--sakura-pink)'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--text-dark)'; }}
                                    >
                                        {project.linkLabel || 'View Project'}
                                    </a>
                                ) : (
                                    <span className="h-px flex-grow" style={{ background: 'linear-gradient(90deg, var(--sakura-pink), transparent)' }} />
                                )}
                                <button
                                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl"
                                    style={{ background: 'var(--text-dark)', color: '#fff' }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--sakura-pink)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--text-dark)'; (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                                >
                                    <ArrowUpRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showAll && (
                <div className="mt-24 text-center">
                    <p className="font-serif italic text-lg opacity-50" style={{ color: 'var(--text-dark)' }}>End of curated works</p>
                </div>
            )}
        </section>
    );
}
