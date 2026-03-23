import React from 'react';
import { motion } from 'motion/react';

export default function LoadingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-brand-black flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <motion.div
          animate={{
            rotate: 360,
            borderRadius: ["50% 50% 50% 50%", "40% 60% 40% 60%", "50% 50% 50% 50%"],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            borderRadius: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-24 h-24 border-2 border-brand-purple/30 border-t-brand-purple shadow-[0_0_30px_rgba(139,92,246,0.3)]"
        />
        
        {/* Brand Logo/Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-xs font-bold tracking-[0.3em] text-brand-purple uppercase">
            NexBrain
          </span>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-[10px] uppercase tracking-[0.5em] text-white font-medium"
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
}
