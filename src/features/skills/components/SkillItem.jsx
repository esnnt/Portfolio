import React from 'react';
import { motion } from 'framer-motion';

const SkillItem = ({ name, Icon, color, level }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: color }}
      className="relative flex items-center gap-4 p-4 rounded-lg bg-ui_card border border-gray-800 transition-colors duration-300 group overflow-hidden"
    >
      {/* Arkaplan Hover Efekti */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      ></div>

      {/* İkon Kutusu */}
      <div 
        className="w-12 h-12 flex items-center justify-center rounded-md bg-ui_panel border border-gray-700 group-hover:border-opacity-50 transition-colors"
        style={{ color: color }}
      >
        <Icon size={24} />
      </div>

      {/* Yazılar */}
      <div>
        <h4 className="font-bold text-gray-200 group-hover:text-white transition-colors">
          {name}
        </h4>
        <p className="text-xs text-gray-500 font-mono">
          [{level}]
        </p>
      </div>

      {/* Köşe Işıltısı */}
      <div className="absolute top-0 right-0 w-2 h-2 rounded-full opacity-50" style={{ backgroundColor: color }}></div>
    </motion.div>
  );
};

export default SkillItem;