import { useState, useRef, useEffect } from "react";

const GARMENTS = [
  { id: "dress",  label: "Evening Dress", emoji: "👗" },
  { id: "kurti",  label: "Kurti",         emoji: "👘" },
  { id: "blazer", label: "Blazer",        emoji: "🧥" },
  { id: "shirt",  label: "Shirt",         emoji: "👔" },
  { id: "saree",  label: "Saree",         emoji: "🥻" },
  { id: "jacket", label: "Jacket",        emoji: "🧣" },
  { id: "skirt",  label: "Skirt",         emoji: "👗" },
  { id: "pants",  label: "Trousers",      emoji: "👖" },
];

const GARMENT_SECTIONS = {
  dress:  ["Neckline","Sleeves","Bodice","Waist","Skirt","Hemline","Embroidery","Back","Lining","Buttons"],
  kurti:  ["Neckline","Collar","Sleeves","Yoke","Body","Hemline","Side Slits","Embroidery","Buttons","Cuffs"],
  blazer: ["Collar","Lapels","Sleeves","Pockets","Lining","Buttons","Back Vent","Shoulder","Cuffs","Waist"],
  shirt:  ["Collar","Neckline","Sleeves","Cuffs","Buttons","Pockets","Hem","Back Yoke","Placket","Embroidery"],
  saree:  ["Pallu","Border","Body","Blouse","Pleats","Fall","Embroidery","Zari Work","Motifs","Texture"],
  jacket: ["Hood","Collar","Zipper","Pockets","Sleeves","Lining","Cuffs","Back","Hem","Embroidery"],
  skirt:  ["Waistband","Panels","Pleats","Hemline","Slits","Embroidery","Lining","Pockets","Zipper","Texture"],
  pants:  ["Waistband","Pleats","Pockets","Leg Cut","Cuffs","Lining","Seams","Zipper","Belt Loops","Embroidery"],
};

const FABRICS  = ["Silk","Satin","Chiffon","Velvet","Linen","Cotton","Georgette","Organza","Brocade","Denim","Wool","Crepe"];
const COLORS   = ["#1a1a2e","#c9a84c","#8b2635","#2d6a4f","#4a4e69","#f2e9e4","#22223b","#9a8c98","#c05c7e","#3a86ff","#fb5607","#8338ec"];
const PATTERNS = ["Solid","Floral","Geometric","Abstract","Paisley","Stripes","Checks","Ikat","Bandhani","Embroidered"];

function MannequinDress({ activeSection, color }) {
  const s = (name) => activeSection === name ? "#fff" : color;
  const dim = (name) => activeSection === name ? 1 : 0.82;
  return (
    <svg viewBox="0 0 200 420" style={{width:"100%",height:"100%",filter:"drop-shadow(0 8px 32px rgba(0,0,0,0.5))"}}>
      <defs>
        <radialGradient id="skinGrad" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e8c99a"/>
          <stop offset="100%" stopColor="#c49a60"/>
        </radialGradient>
      </defs>
      <rect x="88" y="392" width="24" height="16" rx="3" fill="#555"/>
      <rect x="74" y="406" width="52" height="7" rx="3" fill="#444"/>
      <line x1="100" y1="388" x2="100" y2="392" stroke="#666" strokeWidth="2"/>
      <ellipse cx="100" cy="36" rx="18" ry="22" fill="url(#skinGrad)"/>
      <ellipse cx="100" cy="22" rx="18" ry="14" fill="#2a1a0e"/>
      <ellipse cx="84"  cy="30" rx="7"  ry="14" fill="#2a1a0e"/>
      <ellipse cx="116" cy="30" rx="7"  ry="14" fill="#2a1a0e"/>
      <rect x="93" y="55" width="14" height="14" rx="3" fill="url(#skinGrad)"/>
      <path d={`M82,69 Q100,82 118,69`} stroke={s("Neckline")} strokeWidth="3.5" fill="none" strokeLinecap="round" opacity={dim("Neckline")}/>
      <path d={`M68,72 Q100,68 132,72 L136,165 Q100,174 64,165Z`} fill={s("Bodice")} opacity={dim("Bodice")}/>
      <ellipse cx="100" cy="165" rx="36" ry="7" fill={s("Waist")} opacity={dim("Waist")}/>
      <path d={`M64,165 Q42,248 36,326 Q100,342 164,326 Q158,248 136,165Z`} fill={s("Skirt")} opacity={dim("Skirt")}/>
      <path d={`M36,326 Q100,344 164,326`} stroke={s("Hemline")} strokeWidth="3.5" fill="none" strokeLinecap="round" opacity={dim("Hemline")}/>
      <path d="M68,74 Q46,98 42,148" stroke={s("Sleeves")} strokeWidth="13" fill="none" strokeLinecap="round" opacity={dim("Sleeves")}/>
      <path d="M132,74 Q154,98 158,148" stroke={s("Sleeves")} strokeWidth="13" fill="none" strokeLinecap="round" opacity={dim("Sleeves")}/>
      <path d={`M78,195 Q100,188 122,195 Q112,210 100,214 Q88,210 78,195Z`} fill={s("Embroidery")} opacity={dim("Embroidery") * 0.7}/>
      <path d={`M82,240 Q100,234 118,240 Q110,252 100,255 Q90,252 82,240Z`} fill={s("Embroidery")} opacity={dim("Embroidery") * 0.5}/>
      {[105,127,149].map(y => <circle key={y} cx="100" cy={y} r="3.5" fill={s("Buttons")} opacity={dim("Buttons") * 0.9}/>)}
      <path d="M64,163 Q100,170 136,163" stroke={s("Lining")} strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity={dim("Lining")*0.8}/>
      <text x="148" y="120" fontSize="9" fill={s("Back")} opacity={dim("Back")*0.8} fontFamily="Georgia,serif">◂</text>
    </svg>
  );
}

function MannequinGeneric({ activeSection, color }) {
  const s = (name) => activeSection === name ? "#fff" : color;
  const dim = (name) => activeSection === name ? 1 : 0.82;
  return (
    <svg viewBox="0 0 200 420" style={{width:"100%",height:"100%",filter:"drop-shadow(0 8px 32px rgba(0,0,0,0.5))"}}>
      <defs>
        <radialGradient id="skinGrad2" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#e8c99a"/>
          <stop offset="100%" stopColor="#c49a60"/>
        </radialGradient>
      </defs>
      <rect x="88" y="392" width="24" height="16" rx="3" fill="#555"/>
      <rect x="74" y="406" width="52" height="7" rx="3" fill="#444"/>
      <line x1="100" y1="388" x2="100" y2="392" stroke="#666" strokeWidth="2"/>
      <ellipse cx="100" cy="36" rx="18" ry="22" fill="url(#skinGrad2)"/>
      <ellipse cx="100" cy="22" rx="18" ry="14" fill="#2a1a0e"/>
      <ellipse cx="84" cy="30" rx="7" ry="14" fill="#2a1a0e"/>
      <ellipse cx="116" cy="30" rx="7" ry="14" fill="#2a1a0e"/>
      <rect x="93" y="55" width="14" height="12" rx="3" fill="url(#skinGrad2)"/>
      <ellipse cx="64" cy="76" rx="11" ry="7" fill={s("Shoulder")} opacity={dim("Shoulder")}/>
      <ellipse cx="136" cy="76" rx="11" ry="7" fill={s("Shoulder")} opacity={dim("Shoulder")}/>
      <path d={`M84,68 Q100,80 116,68 L112,76 Q100,88 88,76Z`} fill={s("Collar")} opacity={dim("Collar")}/>
      <path d={`M84,68 Q100,64 116,68`} stroke={s("Neckline")} strokeWidth="3" fill="none" strokeLinecap="round" opacity={dim("Neckline")}/>
      <path d="M84,68 L76,118" stroke={s("Lapels")} strokeWidth="9" fill="none" strokeLinecap="round" opacity={dim("Lapels")}/>
      <path d="M116,68 L124,118" stroke={s("Lapels")} strokeWidth="9" fill="none" strokeLinecap="round" opacity={dim("Lapels")}/>
      <path d={`M64,74 Q100,82 136,74 L136,100 Q100,92 64,100Z`} fill={s("Yoke")} opacity={dim("Yoke")*0.6}/>
      <path d={`M64,74 Q100,70 136,74 L138,232 Q100,240 62,232Z`} fill={s("Body")} opacity={dim("Body")}/>
      <ellipse cx="100" cy="182" rx="38" ry="7" fill={s("Waist")} opacity={dim("Waist")*0.7}/>
      <rect x="68" y="158" width="24" height="18" rx="4" fill={s("Pockets")} opacity={dim("Pockets")*0.85}/>
      <rect x="108" y="158" width="24" height="18" rx="4" fill={s("Pockets")} opacity={dim("Pockets")*0.85}/>
      <path d="M64,78 Q40,102 38,180" stroke={s("Sleeves")} strokeWidth="19" fill="none" strokeLinecap="round" opacity={dim("Sleeves")}/>
      <path d="M136,78 Q160,102 162,180" stroke={s("Sleeves")} strokeWidth="19" fill="none" strokeLinecap="round" opacity={dim("Sleeves")}/>
      <ellipse cx="38" cy="183" rx="10" ry="6" fill={s("Cuffs")} opacity={dim("Cuffs")}/>
      <ellipse cx="162" cy="183" rx="10" ry="6" fill={s("Cuffs")} opacity={dim("Cuffs")}/>
      <path d="M62,230 Q100,240 138,230" stroke={s("Hem")} strokeWidth="3" fill="none" strokeLinecap="round" opacity={dim("Hem")*0.9}/>
      {[100,122,144,166,188].map(y => <circle key={y} cx="100" cy={y} r="3.5" fill={s("Buttons")} opacity={dim("Buttons")*0.9}/>)}
      <line x1="100" y1="80" x2="100" y2="185" stroke={s("Placket")} strokeWidth="2" strokeDasharray="5,3" opacity={dim("Placket")*0.7}/>
      <text x="148" y="92" fontSize="9" fill={s("Back Yoke")} opacity={dim("Back Yoke")*0.8} fontFamily="Georgia,serif">◂</text>
      <text x="148" y="218" fontSize="9" fill={s("Back Vent")} opacity={dim("Back Vent")*0.8} fontFamily="Georgia,serif">◂</text>
      <path d={`M78,104 Q100,98 122,104 Q110,116 100,119 Q90,116 78,104Z`} fill={s("Embroidery")} opacity={dim("Embroidery")*0.6}/>
      <line x1="100" y1="74" x2="100" y2="175" stroke={s("Zipper")} strokeWidth="2.5" strokeDasharray="4,3" opacity={dim("Zipper")*0.7}/>
      <path d={`M62,232 L59,350 L95,350 L100,280 L105,350 L141,350 L138,232Z`} fill={s("Leg Cut")} opacity={dim("Leg Cut")*0.88}/>
      <rect x="60" y="230" width="80" height="14" rx="4" fill={s("Waistband")} opacity={dim("Waistband")*0.92}/>
      {[72,88,100,112,128].map(x => <rect key={x} x={x-3} y="228" width="6" height="10" rx="1" fill={s("Belt Loops")} opacity={dim("Belt Loops")*0.85}/>)}
      <line x1="90" y1="245" x2="88" y2="290" stroke={s("Pleats")} strokeWidth="1.5" opacity={dim("Pleats")*0.7}/>
      <line x1="110" y1="245" x2="112" y2="290" stroke={s("Pleats")} strokeWidth="1.5" opacity={dim("Pleats")*0.7}/>
      <line x1="80" y1="250" x2="68" y2="345" stroke={s("Seams")} strokeWidth="1.2" strokeDasharray="3,4" opacity={dim("Seams")*0.6}/>
      <line x1="120" y1="250" x2="132" y2="345" stroke={s("Seams")} strokeWidth="1.2" strokeDasharray="3,4" opacity={dim("Seams")*0.6}/>
      <path d="M64,172 Q100,178 136,172" stroke={s("Lining")} strokeWidth="1.5" fill="none" strokeDasharray="4,4" opacity={dim("Lining")*0.7}/>
      <path d="M59,340 Q77,348 95,340" stroke={s("Cuffs")} strokeWidth="3" fill="none" opacity={dim("Cuffs")*0.8}/>
      <path d="M105,340 Q123,348 141,340" stroke={s("Cuffs")} strokeWidth="3" fill="none" opacity={dim("Cuffs")*0.8}/>
      <path d="M82,58 Q100,42 118,58 Q116,50 100,46 Q84,50 82,58Z" fill={s("Hood")} opacity={dim("Hood")*0.8}/>
      <line x1="62" y1="190" x2="60" y2="230" stroke={s("Side Slits")} strokeWidth="2.5" opacity={dim("Side Slits")*0.8}/>
      <line x1="138" y1="190" x2="140" y2="230" stroke={s("Side Slits")} strokeWidth="2.5" opacity={dim("Side Slits")*0.8}/>
      <path d={`M120,80 Q148,120 152,200 Q148,210 140,200 Q136,140 112,100Z`} fill={s("Pallu")} opacity={dim("Pallu")*0.7}/>
      <path d={`M64,228 Q100,232 138,228`} stroke={s("Border")} strokeWidth="4" fill="none" opacity={dim("Border")*0.9}/>
      <text x="68" y="155" fontSize="10" fill={s("Zari Work")} opacity={dim("Zari Work")*0.8} fontFamily="Georgia,serif">❋ ❋</text>
      <text x="72" y="195" fontSize="12" fill={s("Motifs")} opacity={dim("Motifs")*0.7} fontFamily="Georgia,serif">✿</text>
      {[140,155,170,185,200,215].map(y => <line key={y} x1="70" y1={y} x2="130" y2={y} stroke={s("Texture")} strokeWidth="0.8" strokeDasharray="2,6" opacity={dim("Texture")*0.4}/>)}
      <line x1="64" y1="220" x2="138" y2="220" stroke={s("Fall")} strokeWidth="2" strokeDasharray="5,3" opacity={dim("Fall")*0.7}/>
    </svg>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg: #0b0b12; --card: #13131c; --card2: #1a1a28;
    --border: rgba(255,255,255,0.07); --border2: rgba(255,255,255,0.13);
    --gold: #c9a84c; --gold2: #e8c870;
    --text: #eeeae2; --muted: #7a7a8e; --muted2: #4a4a5e;
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans: 'Jost', sans-serif;
  }
  body { background: var(--bg); color: var(--text); font-family: var(--font-sans); }
  .home-page { min-height:100vh; background:var(--bg); display:flex; flex-direction:column; align-items:center; position:relative; overflow:hidden; }
  .home-page::before { content:''; position:absolute; top:-200px; left:50%; transform:translateX(-50%); width:700px; height:700px; background:radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%); pointer-events:none; }
  .home-header { width:100%; padding:2rem 3rem; display:flex; align-items:center; gap:0.75rem; border-bottom:0.5px solid var(--border); }
  .logo-mark { color:var(--gold); font-size:1.3rem; line-height:1; }
  .logo-mark.sm { font-size:1rem; }
  .logo-text { font-family:var(--font-sans); font-weight:300; font-size:1.05rem; letter-spacing:0.25em; color:var(--text); text-transform:uppercase; }
  .logo-text em { font-style:normal; color:var(--gold); }
  .home-hero { max-width:820px; width:100%; padding:5rem 2rem 4rem; text-align:center; display:flex; flex-direction:column; align-items:center; gap:1.6rem; }
  .hero-eyebrow { font-size:0.72rem; letter-spacing:0.28em; text-transform:uppercase; color:var(--gold); font-weight:400; }
  .hero-title { font-family:var(--font-serif); font-weight:300; font-size:clamp(3rem,7vw,5.5rem); line-height:1.05; color:var(--text); }
  .hero-title em { font-style:italic; color:var(--gold); }
  .hero-sub { font-size:1rem; font-weight:300; color:var(--muted); max-width:500px; line-height:1.7; }
  .garment-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0.9rem; width:100%; margin-top:0.5rem; }
  .garment-card { background:var(--card); border:0.5px solid var(--border); border-radius:12px; padding:1.5rem 1rem; display:flex; flex-direction:column; align-items:center; gap:0.6rem; cursor:pointer; transition:all 0.22s ease; color:var(--text); font-family:var(--font-sans); font-weight:300; font-size:0.82rem; letter-spacing:0.08em; text-transform:uppercase; }
  .garment-card:hover { background:var(--card2); border-color:var(--gold); transform:translateY(-3px); box-shadow:0 8px 32px rgba(201,168,76,0.12); }
  .garment-emoji { font-size:2rem; }
  .garment-label { color:var(--muted); }
  .garment-card:hover .garment-label { color:var(--gold2); }
  .home-features { display:flex; gap:0.6rem; flex-wrap:wrap; justify-content:center; margin-top:0.4rem; }
  .feature-chip { font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--muted); border:0.5px solid var(--border2); border-radius:100px; padding:0.35rem 0.9rem; }
  .studio-page { min-height:100vh; background:var(--bg); display:flex; flex-direction:column; overflow:hidden; }
  .studio-topbar { display:flex; align-items:center; padding:0.9rem 1.5rem; border-bottom:0.5px solid var(--border); gap:1rem; background:var(--card); flex-shrink:0; }
  .back-btn { background:none; border:0.5px solid var(--border2); color:var(--muted); font-family:var(--font-sans); font-size:0.78rem; letter-spacing:0.1em; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer; transition:all 0.18s; }
  .back-btn:hover { color:var(--text); border-color:var(--gold); }
  .topbar-title { display:flex; align-items:center; gap:0.5rem; font-family:var(--font-sans); font-size:0.82rem; font-weight:300; letter-spacing:0.2em; text-transform:uppercase; flex:1; }
  .topbar-title em { font-style:normal; color:var(--gold); }
  .topbar-sep { color:var(--muted2); }
  .topbar-garment { color:var(--muted); }
  .topbar-tabs { display:flex; gap:0.3rem; }
  .tab-btn { background:none; border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.74rem; letter-spacing:0.12em; text-transform:uppercase; padding:0.4rem 0.9rem; border-radius:6px; cursor:pointer; transition:all 0.18s; }
  .tab-btn:hover { color:var(--text); border-color:var(--border2); }
  .tab-btn.active { color:var(--gold); border-color:var(--gold); background:rgba(201,168,76,0.06); }
  .studio-body { flex:1; display:grid; grid-template-columns:220px 1fr 320px; gap:0; overflow:hidden; height:calc(100vh - 54px); }
  .panel { border-right:0.5px solid var(--border); overflow-y:auto; scrollbar-width:thin; scrollbar-color:var(--muted2) transparent; }
  .panel::-webkit-scrollbar { width:3px; }
  .panel::-webkit-scrollbar-thumb { background:var(--muted2); border-radius:2px; }
  .panel-label { font-size:0.65rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--muted); padding:1rem 1rem 0.5rem; border-bottom:0.5px solid var(--border); }
  .mannequin-panel { background:var(--card); display:flex; flex-direction:column; }
  .mannequin-wrap { flex:1; display:flex; align-items:center; justify-content:center; padding:1.5rem 1.2rem 0.5rem; min-height:0; }
  .mannequin-info { padding:0.6rem 1rem; border-top:0.5px solid var(--border); display:flex; flex-direction:column; gap:0.35rem; }
  .info-row { display:flex; justify-content:space-between; font-size:0.75rem; }
  .info-row span { color:var(--muted); }
  .info-row strong { color:var(--text); font-weight:400; }
  .info-row.active-section strong { color:var(--gold); }
  .color-row { display:flex; flex-wrap:wrap; gap:5px; padding:0.7rem 1rem; border-top:0.5px solid var(--border); }
  .color-dot { width:20px; height:20px; border-radius:50%; border:2px solid transparent; cursor:pointer; transition:all 0.15s; }
  .color-dot:hover { transform:scale(1.2); }
  .color-dot.active { border-color:#fff; transform:scale(1.15); }
  .controls-panel { background:var(--bg); padding-bottom:1rem; }
  .sections-grid { display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; padding:0.8rem; }
  .section-btn { position:relative; background:var(--card); border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.74rem; letter-spacing:0.06em; text-transform:uppercase; padding:0.6rem 0.5rem; border-radius:7px; cursor:pointer; transition:all 0.16s; text-align:center; }
  .section-btn:hover { color:var(--text); border-color:var(--border2); background:var(--card2); }
  .section-btn.active { color:var(--gold); border-color:var(--gold); background:rgba(201,168,76,0.07); }
  .section-btn.has-note { border-color:rgba(201,168,76,0.3); }
  .note-dot { position:absolute; top:5px; right:5px; width:5px; height:5px; border-radius:50%; background:var(--gold); }
  .fabric-grid { display:flex; flex-wrap:wrap; gap:0.4rem; padding:0.6rem 0.8rem; }
  .fabric-btn { background:var(--card); border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.7rem; letter-spacing:0.05em; padding:0.3rem 0.65rem; border-radius:100px; cursor:pointer; transition:all 0.15s; }
  .fabric-btn:hover { color:var(--text); border-color:var(--border2); }
  .fabric-btn.active { color:var(--gold); border-color:var(--gold); background:rgba(201,168,76,0.06); }
  .pattern-grid { display:flex; flex-wrap:wrap; gap:0.4rem; padding:0.6rem 0.8rem; }
  .pattern-btn { background:var(--card); border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.7rem; letter-spacing:0.05em; padding:0.3rem 0.65rem; border-radius:100px; cursor:pointer; transition:all 0.15s; }
  .pattern-btn:hover { color:var(--text); border-color:var(--border2); }
  .pattern-btn.active { color:var(--gold); border-color:var(--gold); background:rgba(201,168,76,0.06); }
  .chat-panel { background:var(--card); display:flex; flex-direction:column; border-right:none; }
  .chat-messages { flex:1; overflow-y:auto; padding:0.8rem; display:flex; flex-direction:column; gap:0.7rem; scrollbar-width:thin; scrollbar-color:var(--muted2) transparent; }
  .chat-messages::-webkit-scrollbar { width:3px; }
  .chat-messages::-webkit-scrollbar-thumb { background:var(--muted2); border-radius:2px; }
  .chat-empty { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.8rem; padding:2rem; color:var(--muted2); text-align:center; }
  .chat-empty .big-mark { font-size:2rem; color:var(--muted2); }
  .chat-empty p { font-size:0.8rem; line-height:1.6; font-family:var(--font-serif); font-style:italic; }
  .chat-bubble { display:flex; gap:0.5rem; animation:fadeIn 0.2s ease; }
  @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:none; } }
  .chat-bubble.user { flex-direction:row-reverse; }
  .ai-avatar { width:24px; height:24px; border-radius:50%; background:rgba(201,168,76,0.12); border:0.5px solid var(--gold); display:flex; align-items:center; justify-content:center; font-size:0.65rem; color:var(--gold); flex-shrink:0; margin-top:2px; }
  .bubble-text { max-width:90%; font-size:0.8rem; line-height:1.65; padding:0.6rem 0.8rem; border-radius:10px; white-space:pre-wrap; word-break:break-word; }
  .user .bubble-text { background:rgba(201,168,76,0.1); border:0.5px solid rgba(201,168,76,0.2); color:var(--text); border-radius:10px 10px 2px 10px; }
  .ai .bubble-text { background:var(--card2); border:0.5px solid var(--border); color:var(--text); border-radius:2px 10px 10px 10px; }
  .dots { display:inline-flex; gap:3px; align-items:center; }
  .dots span { width:5px; height:5px; border-radius:50%; background:var(--gold); animation:bounce 1.2s infinite; }
  .dots span:nth-child(2) { animation-delay:0.2s; }
  .dots span:nth-child(3) { animation-delay:0.4s; }
  @keyframes bounce { 0%,60%,100% { transform:translateY(0); } 30% { transform:translateY(-5px); } }
  .chat-input-area { border-top:0.5px solid var(--border); padding:0.8rem; display:flex; flex-direction:column; gap:0.5rem; }
  .chat-mode-row { display:flex; gap:0.4rem; }
  .mode-btn { flex:1; background:none; border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.65rem; letter-spacing:0.1em; text-transform:uppercase; padding:0.3rem 0.4rem; border-radius:5px; cursor:pointer; transition:all 0.15s; }
  .mode-btn:hover { color:var(--text); }
  .mode-btn.active { color:var(--gold); border-color:var(--gold); background:rgba(201,168,76,0.06); }
  .chat-input-row { display:flex; gap:0.5rem; align-items:flex-end; }
  .chat-textarea { flex:1; background:var(--bg); border:0.5px solid var(--border2); color:var(--text); font-family:var(--font-sans); font-size:0.82rem; padding:0.6rem 0.8rem; border-radius:8px; resize:none; outline:none; min-height:60px; max-height:120px; transition:border-color 0.15s; }
  .chat-textarea:focus { border-color:var(--gold); }
  .chat-textarea::placeholder { color:var(--muted2); }
  .send-btn { background:var(--gold); border:none; color:#0b0b12; font-family:var(--font-sans); font-size:0.75rem; font-weight:500; letter-spacing:0.08em; text-transform:uppercase; padding:0.6rem 1rem; border-radius:8px; cursor:pointer; transition:all 0.18s; align-self:stretch; }
  .send-btn:hover { background:var(--gold2); }
  .send-btn:disabled { opacity:0.4; cursor:not-allowed; }
  .quick-chips { display:flex; flex-wrap:wrap; gap:0.35rem; padding:0 0 0.2rem; }
  .chip { background:var(--card2); border:0.5px solid var(--border); color:var(--muted); font-family:var(--font-sans); font-size:0.68rem; padding:0.28rem 0.6rem; border-radius:100px; cursor:pointer; transition:all 0.15s; }
  .chip:hover { color:var(--text); border-color:var(--border2); }
  .full-chat-panel { grid-column:2 / 4; background:var(--card); display:flex; flex-direction:column; border-right:none; }
  .generate-panel { grid-column:2 / 4; background:var(--bg); display:flex; flex-direction:column; border-right:none; }
`;

export default function FashionPlatform() {
  const [page, setPage]                     = useState("home");
  const [garment, setGarment]               = useState(null);
  const [activeSection, setActiveSection]   = useState(null);
  const [selectedFabric, setSelectedFabric] = useState("Silk");
  const [selectedColor, setSelectedColor]   = useState("#1a1a2e");
  const [selectedPattern, setSelectedPattern] = useState("Solid");
  const [prompt, setPrompt]                 = useState("");
  const [chatMode, setChatMode]             = useState("section");
  const [messages, setMessages]             = useState([]);
  const [loading, setLoading]               = useState(false);
  const [designNotes, setDesignNotes]       = useState({});
  const [tab, setTab]                       = useState("edit");
  const chatEndRef  = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function callAI(systemPrompt, userMessage) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY,
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: userMessage }],
      }),
    });
    const data = await res.json();
    return data.content?.map(b => b.text || "").join("") || "I couldn't process that. Please try again.";
  }

  function addMsg(role, text, isLoading = false) {
    setMessages(m => [...m, { role, text, loading: isLoading }]);
  }
  function resolveLastAI(text) {
    setMessages(m => m.map((msg, i) => i === m.length - 1 ? { role: "ai", text, loading: false } : msg));
  }
  function failLastAI() { resolveLastAI("Connection error. Please try again."); }

  async function handleSend() {
    if (!prompt.trim() || loading) return;
    if (chatMode === "section") await handleSectionEdit();
    else if (chatMode === "generate") await handleGenerate();
    else await handleAssistantQuery(prompt);
  }

  async function handleSectionEdit() {
    if (!activeSection) {
      addMsg("ai", "Please select a garment section first — click any section button on the left.");
      return;
    }
    const userMsg = `${garment.label} › ${activeSection} | ${selectedFabric} | ${selectedColor} | ${selectedPattern}\n${prompt}`;
    addMsg("user", userMsg);
    addMsg("ai", "", true);
    const p = prompt; setPrompt(""); setLoading(true);
    try {
      const system = `You are an expert fashion designer with 20+ years of haute couture and ready-to-wear experience. Deep knowledge of fabric behavior, pattern making, body proportions, manufacturing feasibility, and Indian traditional wear plus Western fashion.

When a user modifies a garment section:
1. Validate if the fabric supports the modification
2. Check structural feasibility
3. Assess wearability and comfort
4. Give specific, actionable design guidance
5. Mention any potential issues with alternatives
6. Be encouraging and creative

Concise (3-5 sentences). Use fashion terminology naturally. Sound like a real designer.`;
      const reply = await callAI(system, `Garment: ${garment.label} | Section: ${activeSection} | Fabric: ${selectedFabric} | Pattern: ${selectedPattern} | Request: ${p}`);
      resolveLastAI(reply);
      setDesignNotes(n => ({ ...n, [activeSection]: p }));
    } catch { failLastAI(); }
    setLoading(false);
  }

  async function handleGenerate() {
    const userMsg = prompt;
    addMsg("user", userMsg);
    addMsg("ai", "", true);
    setPrompt(""); setLoading(true);
    try {
      const system = `You are a master fashion designer creating detailed design briefs. Provide:

DESIGN BRIEF
[Evocative 2-line description]

SILHOUETTE & STRUCTURE
[Key structural details]

FABRIC RECOMMENDATION
[Primary fabric + why + 1 alternative]

COLOR & EMBELLISHMENT
[Color story, surface treatments, embroidery]

FRONT VIEW
[Describe what you'd see]

BACK VIEW
[Back design details]

DESIGNER'S NOTES
[1-2 sentences on why it works / trend relevance]

PRODUCTION FEASIBILITY
[Simple / Moderate / Complex with brief note]

Be specific, evocative, professional. Use fashion industry language.`;
      const reply = await callAI(system, userMsg);
      resolveLastAI(reply);
    } catch { failLastAI(); }
    setLoading(false);
  }

  async function handleAssistantQuery(query) {
    const context = `Garment: ${garment?.label || "not selected"} | Modified sections: ${Object.keys(designNotes).join(", ") || "none"} | Fabric: ${selectedFabric} | Pattern: ${selectedPattern} | Color: ${selectedColor}`;
    addMsg("user", query);
    addMsg("ai", "", true);
    setPrompt(""); setLoading(true);
    try {
      const system = `You are an elite fashion design consultant — part Chanel atelier director, part Sabyasachi creative director, part Zara trend forecaster. Sharp, opinionated, specific.

Current design context provided. Your role:
- Critique designs honestly but constructively
- Suggest concrete improvements with reasoning
- Recommend specific fabrics, accessories, techniques
- Estimate rough production cost ranges
- Reference relevant trends (Spring/Summer 2026, Resort collections)
- Explain WHY choices elevate or detract from a design

Be direct, expert, and inspiring. Max 150 words.`;
      const reply = await callAI(system, `${context}\n\nDesigner asks: ${query}`);
      resolveLastAI(reply);
    } catch { failLastAI(); }
    setLoading(false);
  }

  async function handleTechnical() {
    addMsg("user", "Generate technical specification sheet");
    addMsg("ai", "", true);
    setLoading(true);
    try {
      const context = `Garment: ${garment?.label} | Fabric: ${selectedFabric} | Pattern: ${selectedPattern} | Modified sections: ${JSON.stringify(designNotes)}`;
      const system = `You are a technical fashion designer producing garment specification sheets for manufacturers. Precise and practical.

Generate a TECHNICAL DESIGN SHEET with:

GARMENT SPECIFICATION
[Type, category, season]

MATERIAL REQUIREMENTS
[Fabric yardage estimate for S/M/L, lining, interfacing, trims]

CONSTRUCTION NOTES
[Key sewing techniques, special equipment needed]

PATTERN RECOMMENDATIONS
[Suggested pattern pieces, grain lines, ease allowances]

COST ESTIMATE (USD)
- Materials: $X–$X
- Production labor: $X–$X
- Total estimated cost: $X–$X

QUALITY CHECKPOINTS
[3-4 key things to inspect]

CARE INSTRUCTIONS
[Washing, storage]

Be specific with numbers. Professional.`;
      const reply = await callAI(system, context);
      resolveLastAI(reply);
    } catch { failLastAI(); }
    setLoading(false);
  }

  const sections = garment ? GARMENT_SECTIONS[garment.id] || [] : [];
  const useDressMannequin = ["dress","saree","skirt"].includes(garment?.id);

  const QUICK_SECTION = [
    "Add ruching to this section",
    "Make it more structured",
    "Add subtle embroidery",
    "Suggest a dramatic variation",
    "What fabric works best here?",
  ];
  const QUICK_ADVISOR = [
    "Critique my current design choices",
    "What's trending in S/S 2026?",
    "Suggest accessories for this look",
    "How can I reduce production cost?",
    "Give me a color palette upgrade",
  ];
  const QUICK_GENERATE = [
    "A midnight blue silk evening gown for an awards ceremony",
    "Casual fusion kurti with geometric ikat print",
    "Minimalist white linen blazer for summer",
    "Traditional kanjeevaram saree with modern blouse",
  ];

  const isAdvisorTab = tab === "assistant";
  const quickChips   = chatMode === "generate" ? QUICK_GENERATE : isAdvisorTab ? QUICK_ADVISOR : QUICK_SECTION;

  if (page === "home") return (
    <div className="home-page">
      <style>{css}</style>
      <header className="home-header">
        <div className="logo-mark">✦</div>
        <span className="logo-text">ATELIER<em>AI</em></span>
      </header>
      <div className="home-hero">
        <div className="hero-eyebrow">AI-Powered Fashion Design Studio</div>
        <h1 className="hero-title">Design Like a<br/><em>Couturier</em></h1>
        <p className="hero-sub">Create professional garments with AI design intelligence — from first sketch to full specification sheet.</p>
        <div className="garment-grid">
          {GARMENTS.map(g => (
            <button key={g.id} className="garment-card" onClick={() => {
              setGarment(g); setPage("studio");
              setMessages([]); setDesignNotes({});
              setActiveSection(null); setTab("edit"); setChatMode("section");
            }}>
              <span className="garment-emoji">{g.emoji}</span>
              <span className="garment-label">{g.label}</span>
            </button>
          ))}
        </div>
        <div className="home-features">
          {["AI Section Editing","Smart Fabric Validation","Technical Spec Sheets","Designer AI Advisor","Generate Full Briefs"].map(f => (
            <div key={f} className="feature-chip">✦ {f}</div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="studio-page">
      <style>{css}</style>
      <div className="studio-topbar">
        <button className="back-btn" onClick={() => setPage("home")}>← Home</button>
        <div className="topbar-title">
          <span className="logo-mark sm">✦</span>
          <span>ATELIER<em>AI</em></span>
          <span className="topbar-sep">—</span>
          <span className="topbar-garment">{garment?.emoji} {garment?.label}</span>
        </div>
        <div className="topbar-tabs">
          {[["edit","✏ Design"],["assistant","✦ AI Advisor"],["technical","⚙ Technical"]].map(([id,label]) => (
            <button key={id} className={`tab-btn ${tab===id?"active":""}`}
              onClick={() => {
                setTab(id);
                setChatMode(id === "assistant" ? "assistant" : id === "technical" ? "technical" : "section");
                setMessages([]);
              }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="studio-body">
        <div className="panel mannequin-panel">
          <div className="panel-label">Live Preview</div>
          <div className="mannequin-wrap">
            {useDressMannequin
              ? <MannequinDress activeSection={activeSection} color={selectedColor}/>
              : <MannequinGeneric activeSection={activeSection} color={selectedColor}/>
            }
          </div>
          <div className="mannequin-info">
            <div className="info-row"><span>Fabric</span><strong>{selectedFabric}</strong></div>
            <div className="info-row"><span>Pattern</span><strong>{selectedPattern}</strong></div>
            <div className="info-row"><span>Sections edited</span><strong>{Object.keys(designNotes).length}</strong></div>
            {activeSection && <div className="info-row active-section"><span>Editing</span><strong>{activeSection}</strong></div>}
          </div>
          <div className="color-row">
            {COLORS.map(c => (
              <button key={c} className={`color-dot ${selectedColor===c?"active":""}`}
                style={{background:c}} onClick={() => setSelectedColor(c)} title={c}/>
            ))}
          </div>
        </div>

        {tab === "edit" && (<>
          <div className="panel controls-panel">
            <div className="panel-label">Garment Sections</div>
            <div className="sections-grid">
              {sections.map(s => (
                <button key={s} className={`section-btn ${activeSection===s?"active":""} ${designNotes[s]?"has-note":""}`}
                  onClick={() => setActiveSection(s)}>
                  {designNotes[s] && <span className="note-dot"/>}
                  {s}
                </button>
              ))}
            </div>
            <div className="panel-label" style={{marginTop:"0.8rem"}}>Fabric</div>
            <div className="fabric-grid">
              {FABRICS.map(f => (
                <button key={f} className={`fabric-btn ${selectedFabric===f?"active":""}`}
                  onClick={() => setSelectedFabric(f)}>{f}</button>
              ))}
            </div>
            <div className="panel-label" style={{marginTop:"0.8rem"}}>Pattern</div>
            <div className="pattern-grid">
              {PATTERNS.map(p => (
                <button key={p} className={`pattern-btn ${selectedPattern===p?"active":""}`}
                  onClick={() => setSelectedPattern(p)}>{p}</button>
              ))}
            </div>
          </div>

          <div className="panel chat-panel">
            <div className="panel-label">
              AI Design Feedback
              {activeSection && <span style={{color:"var(--gold)",marginLeft:"0.5rem"}}>— {activeSection}</span>}
            </div>
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="chat-empty">
                  <div className="big-mark">✦</div>
                  <p>Select a section, then describe your vision. I'll validate, refine, and guide you.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`chat-bubble ${m.role}`}>
                  {m.role === "ai" && <div className="ai-avatar">✦</div>}
                  <div className="bubble-text">
                    {m.loading ? <span className="dots"><span/><span/><span/></span> : m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}/>
            </div>
            <div className="chat-input-area">
              <div className="chat-mode-row">
                <button className={`mode-btn ${chatMode==="section"?"active":""}`} onClick={() => setChatMode("section")}>Section Edit</button>
                <button className={`mode-btn ${chatMode==="generate"?"active":""}`} onClick={() => setChatMode("generate")}>Generate Brief</button>
              </div>
              <div className="quick-chips">
                {quickChips.map(q => (
                  <button key={q} className="chip" onClick={() => { setPrompt(q); setTimeout(() => textareaRef.current?.focus(), 50); }}>{q}</button>
                ))}
              </div>
              <div className="chat-input-row">
                <textarea ref={textareaRef} className="chat-textarea"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder={chatMode === "section"
                    ? activeSection ? `Describe changes to ${activeSection}…` : "Select a section first…"
                    : "Describe the garment you want to create…"}
                  rows={3}/>
                <button className="send-btn" onClick={handleSend} disabled={loading || !prompt.trim()}>Send</button>
              </div>
            </div>
          </div>
        </>)}

        {tab === "assistant" && (
          <div className="panel full-chat-panel">
            <div className="panel-label">AI Design Advisor — Critique, Trend Forecasting, Creative Direction</div>
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="chat-empty">
                  <div className="big-mark">✦</div>
                  <p>Ask for design critique, trend insights, fabric advice, accessory pairings, or cost estimates. I'm your atelier director.</p>
                  <div className="quick-chips" style={{justifyContent:"center",marginTop:"0.5rem"}}>
                    {QUICK_ADVISOR.map(q => (
                      <button key={q} className="chip" onClick={() => handleAssistantQuery(q)}>{q}</button>
                    ))}
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`chat-bubble ${m.role}`}>
                  {m.role === "ai" && <div className="ai-avatar">✦</div>}
                  <div className="bubble-text">
                    {m.loading ? <span className="dots"><span/><span/><span/></span> : m.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef}/>
            </div>
            <div className="chat-input-area">
              <div className="chat-input-row">
                <textarea className="chat-textarea"
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                  onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (prompt.trim()) handleAssistantQuery(prompt); } }}
                  placeholder="Ask your design advisor anything…"
                  rows={3}/>
                <button className="send-btn"
                  onClick={() => { if (prompt.trim()) handleAssistantQuery(prompt); }}
                  disabled={loading || !prompt.trim()}>Send</button>
              </div>
            </div>
          </div>
        )}

        {tab === "technical" && (
          <div className="panel full-chat-panel">
            <div className="panel-label">Technical Specification Sheet Generator</div>
            <div className="chat-messages">
              {messages.length === 0 && (
                <div className="chat-empty">
                  <div className="big-mark">✦</div>
                  <p>Generate a full manufacturing spec sheet — material requirements, construction notes, cost estimates, and care instructions.</p>
                  <button className="send-btn" style={{marginTop:"1rem",padding:"0.7rem 2rem",borderRadius:"8px"}}
                    onClick={handleTechnical} disabled={loading}>
                    Generate Spec Sheet for {garment?.label}
                  </button>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`chat-bubble ${m.role}`}>
                  {m.role === "ai" && <div className="ai-avatar">✦</div>}
                  <div className="bubble-text">
                    {m.loading ? <span className="dots"><span/><span/><span/></span> : m.text}
                  </div>
                </div>
              ))}
              {messages.length > 0 && (
                <div style={{padding:"0 0 0.5rem"}}>
                  <button className="send-btn" style={{padding:"0.5rem 1.2rem",borderRadius:"7px"}}
                    onClick={handleTechnical} disabled={loading}>Regenerate</button>
                </div>
              )}
              <div ref={chatEndRef}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
