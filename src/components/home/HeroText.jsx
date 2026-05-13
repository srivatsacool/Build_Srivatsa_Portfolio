import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const roles = ['Data Analyst.', 'Business Strategist.', 'Problem Solver.'];

const HeroText = () => {
  const wrapperRef = useRef(null);
  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const rolesRef = useRef([]);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(badgeRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 0.3
    )
    .fromTo(nameRef.current,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1 }, 0.7
    )
    .fromTo(rolesRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.18 }, 1.3
    )
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 }, 1.9
    )
    .fromTo(statsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }, 2.2
    );

    // Subtle scroll parallax
    const onScroll = () => {
      if (!wrapperRef.current) return;
      wrapperRef.current.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="text-center z-10 relative pointer-events-none will-change-transform">

      {/* Status badge */}
      <div ref={badgeRef} className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/8 backdrop-blur-sm pointer-events-auto" style={{opacity:0}}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
        <span className="text-sm font-semibold text-white/90">Open to Opportunities &nbsp;&middot;&nbsp; PGDM @ WeSchool</span>
      </div>

      {/* Gradient name */}
      <h1
        ref={nameRef}
        className="text-6xl md:text-8xl font-extrabold mb-4 tracking-tight pointer-events-auto"
        style={{
          opacity: 0,
          background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Srivatsa Gorti
      </h1>

      {/* Roles staggered */}
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-6 pointer-events-auto">
        {roles.map((role, i) => (
          <span
            key={role}
            ref={el => rolesRef.current[i] = el}
            className="text-2xl md:text-3xl font-bold"
            style={{
              opacity: 0,
              color: i === 0 ? '#a78bfa' : i === 1 ? '#60a5fa' : '#ffffff'
            }}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Subtitle — full white, not dimmed */}
      <p
        ref={subtitleRef}
        className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8 font-medium pointer-events-auto"
        style={{ color: 'rgba(255,255,255,0.75)', opacity: 0 }}
      >
        I turn raw data into decisions, automation, and intelligent systems.
      </p>

      {/* Stat chips — brighter border + text */}
      <div ref={statsRef} className="flex flex-wrap justify-center gap-3 mb-2 pointer-events-auto" style={{opacity:0}}>
        {[
          { icon: '\u26a1', label: '70% automation gain' },
          { icon: '\ud83e\udd47', label: 'Rank 1 @ IIM Mumbai' },
          { icon: '\u2b50', label: '5-Star Python \u00b7 HackerRank' },
        ].map(stat => (
          <span
            key={stat.label}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20 bg-white/8 backdrop-blur-sm text-white/85"
          >
            {stat.icon} {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
