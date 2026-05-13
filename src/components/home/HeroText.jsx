import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const roles = ['Data Analyst.', 'Business Strategist.', 'Problem Solver.'];

const HeroText = () => {
  const wrapperRef = useRef(null);
  const badgeRef = useRef(null);
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef([]);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Status badge fades in first
    tl.fromTo(badgeRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 0.3
    )
    // "Hi, I'm Srivatsa —"
    .fromTo(hiRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }, 0.7
    )
    // Name with gradient
    .fromTo(nameRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1 }, 1.0
    )
    // Each role staggers in
    .fromTo(rolesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.18 }, 1.5
    )
    // Subtitle
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, 2.1
    )
    // Stats
    .fromTo(statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 2.4
    );

    // Subtle scroll parallax on the whole hero wrapper
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const y = window.scrollY;
      wrapperRef.current.style.transform = `translateY(${y * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="text-center z-10 relative pointer-events-none will-change-transform">

      {/* 1. Status badge */}
      <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm pointer-events-auto" style={{opacity:0}}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
        <span className="text-sm font-medium" style={{color:'rgba(255,255,255,0.75)'}}>Open to Opportunities &nbsp;&middot;&nbsp; PGDM @ WeSchool</span>
      </div>

      {/* Option A — split role reveal */}
      <p ref={hiRef} className="text-2xl md:text-3xl font-medium mb-2 pointer-events-auto" style={{color:'rgba(255,255,255,0.55)', opacity:0}}>
        Hi, I&apos;m Srivatsa &mdash;
      </p>

      {/* 5. Gradient accent on name */}
      <h1 ref={nameRef} className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight pointer-events-auto" style={{opacity:0, background:'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'}}>
        Srivatsa Gorti
      </h1>

      {/* Role words — staggered */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-6 pointer-events-auto">
        {roles.map((role, i) => (
          <span
            key={role}
            ref={el => rolesRef.current[i] = el}
            className="text-2xl md:text-3xl font-bold"
            style={{
              opacity: 0,
              color: i === 0 ? '#a78bfa' : i === 1 ? '#60a5fa' : 'rgba(255,255,255,0.85)'
            }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p ref={subtitleRef} className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8 pointer-events-auto" style={{color:'rgba(255,255,255,0.5)', opacity:0}}>
        I turn raw data into decisions, automation, and intelligent systems.
      </p>

      {/* 3. Quick stat chips */}
      <div ref={statsRef} className="flex flex-wrap justify-center gap-3 mb-2 pointer-events-auto" style={{opacity:0}}>
        {[
          { icon: '⚡', label: '70% automation gain' },
          { icon: '🥇', label: 'Rank 1 @ IIM Mumbai' },
          { icon: '⭐', label: '5-Star Python · HackerRank' },
        ].map(stat => (
          <span key={stat.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border border-white/10 bg-white/5 backdrop-blur-sm" style={{color:'rgba(255,255,255,0.65)'}}>
            {stat.icon} {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
