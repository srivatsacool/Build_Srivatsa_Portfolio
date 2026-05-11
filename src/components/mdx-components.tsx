import PreText from "./PreText";

export const components = {
  h1: (props: any) => (
    <PreText 
      font="700 32px Outfit, sans-serif" 
      lineHeight={40} 
      as="h1" 
      className="text-white mb-8 tracking-tight"
      {...props} 
    />
  ),
  h2: (props: any) => (
    <PreText 
      font="600 24px Outfit, sans-serif" 
      lineHeight={32} 
      as="h2" 
      className="text-white mt-16 mb-6 tracking-tight border-b border-white/5 pb-2 inline-block"
      {...props} 
    />
  ),
  h3: (props: any) => (
    <PreText 
      font="600 20px Outfit, sans-serif" 
      lineHeight={28} 
      as="h3" 
      className="text-white mt-10 mb-4 tracking-tight"
      {...props} 
    />
  ),
  p: (props: any) => (
    <PreText 
      font="400 18px Inter, sans-serif" 
      lineHeight={32} 
      as="p" 
      className="text-neutral-300 mb-8 leading-relaxed selection:bg-violet-500/30"
      {...props} 
    />
  ),
  li: (props: any) => (
    <PreText 
      font="400 18px Inter, sans-serif" 
      lineHeight={32} 
      as="li" 
      className="text-neutral-300 mb-3 list-disc ml-6 selection:bg-violet-500/30"
      {...props} 
    />
  ),
  blockquote: (props: any) => (
    <div className="my-16 relative py-4 px-10 group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-transparent rounded-full shadow-[0_0_15px_rgba(139,92,246,0.2)]"></div>
      <div className="absolute -left-4 -top-6 text-7xl text-white/5 font-serif select-none group-hover:text-white/10 transition-colors duration-500">“</div>
      <PreText 
        font="italic 400 24px 'Bodoni Moda', serif" 
        lineHeight={40} 
        as="blockquote" 
        className="text-white/90 tracking-tight leading-relaxed italic"
        {...props} 
      />
    </div>
  ),
  a: (props: any) => (
    <a 
      {...props} 
      className="text-violet-400 font-medium underline underline-offset-4 decoration-violet-500/30 hover:decoration-violet-500 hover:text-white transition-all duration-300"
    />
  ),
  // Keep code blocks with refined styling
  code: (props: any) => (
    <code 
      {...props} 
      className="bg-zinc-800/100 border border-white/5 px-2 py-0.5 rounded-md text-[0.9em] font-mono text-pink-400 shadow-sm" 
    />
  ),
  pre: (props: any) => (
    <pre 
      {...props} 
      className="bg-zinc-950/80 backdrop-blur-sm border border-white/10 p-8 rounded-2xl my-12 overflow-x-auto selection:bg-white/10" 
    />
  ),
};
