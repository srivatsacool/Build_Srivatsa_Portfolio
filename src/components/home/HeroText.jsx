import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const ROLES = ['Business Analyst', 'Data Scientist', 'ML Engineer'];
const TYPE_SPEED = 70;
const DELETE_SPEED = 40;
const PAUSE_AFTER = 1800;
const PAUSE_BEFORE = 400;
const INITIAL_DELAY = 2600;

const HeroText = () => {
  const wrapperRef = useRef(null);
  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleLineRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);

  const [displayed, setDisplayed] = useState('');

  // All loop state in refs — never triggers re-render
  const roleIdxRef = useRef(0);
  const timeoutRef = useRef(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const type = (text, onDone) => {
      let i = 0;
      const tick = () => {
        if (!mountedRef.current) return;
        i++;
        setDisplayed(text.slice(0, i));
        if (i < text.length) {
          timeoutRef.current = setTimeout(tick, TYPE_SPEED);
        } else {
          timeoutRef.current = setTimeout(onDone, PAUSE_AFTER);
        }
      };
      timeoutRef.current = setTimeout(tick, TYPE_SPEED);
    };

    const erase = (text, onDone) => {
      let i = text.length;
      const tick = () => {
        if (!mountedRef.current) return;
        i--;
        setDisplayed(text.slice(0, i));
        if (i > 0) {
          timeoutRef.current = setTimeout(tick, DELETE_SPEED);
        } else {
          timeoutRef.current = setTimeout(onDone, PAUSE_BEFORE);
        }
      };
      timeoutRef.current = setTimeout(tick, DELETE_SPEED);
    };

    const loop = () => {
      if (!mountedRef.current) return;
      const role = ROLES[roleIdxRef.current];
      type(role, () => {
        erase(role, () => {
          roleIdxRef.current = (roleIdxRef.current + 1) % ROLES.length;
          loop();
        });
      });
    };

    // Start after initial delay so GSAP name animation finishes first
    timeoutRef.current = setTimeout(loop, INITIAL_DELAY);

    return () => {
      mountedRef.current = false;
      clearTimeout(timeoutRef.current);
    };
  }, []); // empty deps — runs once only

  // Entry animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl
      .fromTo(badgeRef.current,        { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.3)
      .fromTo(nameRef.current,         { y: 60, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 1 }, 0.7)
      .fromTo(subtitleLineRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.4)
      .fromTo(subtitleRef.current,     { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 1.9)
      .fromTo(statsRef.current,        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 2.2);

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
        <span className="text-sm font-semibold" style={{color:'rgba(255,255,255,0.9)'}}>Open to Opportunities &nbsp;&middot;&nbsp; PGDM @ WeSchool</span>
      </div>

      {/* Gradient name */}
      <h1
        ref={nameRef}
        className="text-6xl md:text-8xl font-extrabold mb-5 tracking-tight pointer-events-auto"
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

      {/* Typewriter line */}
      <div
        ref={subtitleLineRef}
        className="flex flex-wrap items-center justify-center gap-x-3 mb-6 pointer-events-auto"
        style={{opacity: 0}}
      >
        <span className="text-2xl md:text-3xl font-semibold" style={{color:'rgba(255,255,255,0.7)'}}>I am a</span>
        <span
          className="text-2xl md:text-3xl font-bold px-3 py-0.5 rounded-lg"
          style={{
            color: '#a78bfa',
            background: 'rgba(167,139,250,0.1)',
            border: '1px solid rgba(167,139,250,0.25)',
            minWidth: '260px',
            display: 'inline-block',
            textAlign: 'left'
          }}
        >
          {displayed}<span className="animate-pulse" style={{color:'#a78bfa'}}>|</span>
        </span>
      </div>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8 font-medium pointer-events-auto"
        style={{ color: 'rgba(255,255,255,0.75)', opacity: 0 }}
      >
        I turn raw data into decisions, automation, and intelligent systems.
      </p>

      {/* Stat chips */}
      <div ref={statsRef} className="flex flex-wrap justify-center gap-3 mb-2 pointer-events-auto" style={{opacity:0}}>
        {[
          { icon: '\u26a1', label: '70% automation gain' },
          { icon: '\ud83e\udd47', label: 'Rank 1 @ IIM Mumbai' },
        ].map(stat => (
          <span
            key={stat.label}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/20 backdrop-blur-sm"
            style={{color:'rgba(255,255,255,0.85)', background:'rgba(255,255,255,0.06)'}}
          >
            {stat.icon} {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HeroText;
