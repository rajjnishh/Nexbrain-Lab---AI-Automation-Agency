import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DEFAULT_MESSAGES = [
  "Initializing AI modules...",
  "Fetching latest insights...",
  "Optimizing neural pathways...",
  "Syncing with NexBrain Lab...",
  "Analyzing data patterns...",
  "Preparing your experience..."
];

interface LoadingIndicatorProps {
  message?: string;
  key?: string;
}

export default function LoadingIndicator({ message }: LoadingIndicatorProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (message) return;
    
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % DEFAULT_MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [message]);

  const displayMessage = message || DEFAULT_MESSAGES[currentMessageIndex];

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

        {/* Dynamic Loading Text */}
        <div className="mt-12 h-4 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={displayMessage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[10px] uppercase tracking-[0.4em] text-white font-medium text-center"
            >
              {displayMessage}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
