import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroText = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    ).fromTo(
      subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.5'
    );
  }, []);

  return (
    <div className="text-center z-10 relative pointer-events-none">
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight pointer-events-auto"
      >
        I am Srivatsa Gorti
      </h1>
      <p
        ref={subtitleRef}
        className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed pointer-events-auto"
      >
        I turn raw data into decisions, automation, and intelligent systems.
      </p>
    </div>
  );
};

export default HeroText;
