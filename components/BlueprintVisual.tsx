
import React from 'react';
import { motion } from 'framer-motion';

const BlueprintVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#0a1a2f] overflow-hidden rounded-2xl border border-blue-500/30 flex items-center justify-center p-4">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Stylized House Drawing */}
      <svg viewBox="0 0 400 300" className="w-full h-full max-w-md drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        {/* Exterior Walls */}
        <motion.path 
          d="M100 250 L100 100 L200 50 L300 100 L300 250 Z" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Interior Rooms */}
        <motion.path 
          d="M100 180 H300 M200 180 V250" 
          fill="none" 
          stroke="#3b82f6" 
          strokeWidth="1.5"
          strokeDasharray="4 2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Measurements */}
        <g className="text-[10px] fill-blue-400/80 font-mono">
          <text x="190" y="40">RIDGE: +24'0"</text>
          <text x="105" y="175">LEVEL 1</text>
          <text x="310" y="180" transform="rotate(90 310 180)">42' - 6"</text>
          <text x="180" y="270">38' - 0"</text>
        </g>

        {/* Window Details */}
        <rect x="130" y="120" width="30" height="30" fill="none" stroke="#3b82f6" strokeWidth="1" />
        <rect x="240" y="120" width="30" height="30" fill="none" stroke="#3b82f6" strokeWidth="1" />
        <path d="M145 120 V150 M130 135 H160" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M255 120 V150 M240 135 H270" stroke="#3b82f6" strokeWidth="0.5" />

        {/* Annotation Circle */}
        <motion.circle 
          cx="200" cy="180" r="10" 
          fill="rgba(59,130,246,0.1)" 
          stroke="#3b82f6" 
          strokeWidth="1"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </svg>

      {/* Technical Labels */}
      <div className="absolute top-4 left-4 font-mono text-[8px] md:text-[10px] text-blue-400 opacity-60 flex flex-col gap-1">
        <div>DWG: A-101</div>
        <div>SCALE: 1/4" = 1'0"</div>
        <div>NORTH ARROW [^]</div>
      </div>
      
      <div className="absolute bottom-4 right-4 font-mono text-[8px] md:text-[10px] text-blue-400 opacity-60 uppercase text-right">
        Terra Rise Framework v2.5<br/>
        © 2025 Architectural Unit
      </div>
    </div>
  );
};

export default BlueprintVisual;
