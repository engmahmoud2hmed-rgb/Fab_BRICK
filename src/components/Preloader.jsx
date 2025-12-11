import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import logoImage from '../../IMG2/logo.jpg';

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress - slower for longer experience
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500);
                    return 100;
                }
                return prev + 0.5; // Slower increment (was 2) for ~10 second duration
            });
        }, 50); // Slower interval (was 30ms)

        return () => clearInterval(interval);
    }, [onComplete]);

    // Generate floating particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
    }));

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
            }}
        >
            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 animate-pulse" />
            </div>

            {/* Floating particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-emerald-400/30"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center gap-8">
                {/* Animated logo container */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    className="relative"
                >
                    {/* Glowing rings around logo */}
                    <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            border: '2px solid rgba(16, 185, 129, 0.5)',
                            filter: 'blur(2px)',
                        }}
                    />

                    <motion.div
                        className="absolute inset-0 rounded-full"
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                            ease: "easeInOut",
                        }}
                        style={{
                            border: '2px solid rgba(59, 130, 246, 0.5)',
                            filter: 'blur(2px)',
                        }}
                    />

                    {/* Logo with continuous rotation */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="relative"
                    >
                        <img
                            src={logoImage}
                            alt="ECOFAB"
                            className="w-32 h-32 rounded-full object-cover shadow-2xl"
                            style={{
                                boxShadow: '0 0 60px rgba(16, 185, 129, 0.5)',
                            }}
                        />
                    </motion.div>
                </motion.div>

                {/* Brand name with stagger animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-6xl font-bold tracking-widest mb-2">
                        {['E', 'C', 'O', 'F', 'A', 'B'].map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                                className="inline-block bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent"
                                style={{
                                    textShadow: '0 0 30px rgba(16, 185, 129, 0.5)',
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="text-emerald-300/80 text-sm md:text-base tracking-wider"
                    >
                        Transforming Textile Waste into Sustainable Design
                    </motion.p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '300px' }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="relative h-1 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm"
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                            x: ['-100%', '200%'],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>

                {/* Loading percentage */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="text-emerald-400 text-lg font-mono"
                >
                    {progress}%
                </motion.div>

                {/* Loading text with dots animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                    className="text-slate-400 text-sm tracking-widest"
                >
                    LOADING
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    >
                        .
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                    >
                        .
                    </motion.span>
                </motion.div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-emerald-500/30" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-emerald-500/30" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-emerald-500/30" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-emerald-500/30" />
        </motion.div>
    );
}
