// src/components/LogoutAnimation.jsx
import { motion, AnimatePresence } from 'framer-motion';

export default function LogoutAnimation({ show }) {
    // Generate color-changing floating blocks
    const floatingBlocks = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: i * 0.08,
        x: Math.random() * 100 - 50,
        y: Math.random() * -200 - 100,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.6 + 0.4,
        colorIndex: i % 6,
    }));

    const rainbowColors = [
        'from-red-400 to-orange-500',
        'from-yellow-400 to-green-500',
        'from-green-400 to-cyan-500',
        'from-cyan-400 to-blue-500',
        'from-blue-400 to-purple-500',
        'from-purple-400 to-pink-500',
    ];

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-[100]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Floating Color-Changing Blocks */}
                    {floatingBlocks.map((block) => (
                        <motion.div
                            key={block.id}
                            className={`fixed w-10 h-10 bg-gradient-to-br ${rainbowColors[block.colorIndex]} rounded-lg shadow-lg z-[100]`}
                            style={{
                                left: '50%',
                                top: '50%',
                            }}
                            initial={{
                                x: '-50%',
                                y: '-50%',
                                scale: 0,
                                opacity: 0,
                                rotate: 0,
                            }}
                            animate={{
                                x: `calc(-50% + ${block.x}vw)`,
                                y: `calc(-50% + ${block.y}vh)`,
                                scale: block.scale,
                                opacity: [0, 1, 0],
                                rotate: block.rotation,
                            }}
                            transition={{
                                duration: 2,
                                delay: block.delay,
                                ease: "easeOut",
                            }}
                        />
                    ))}

                    {/* Logout Icon */}
                    <motion.div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[110]"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                    >
                        <motion.div
                            className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
                            animate={{
                                boxShadow: [
                                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                                    "0 0 0 30px rgba(239, 68, 68, 0)",
                                ],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            <motion.svg
                                className="w-16 h-16 text-red-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </motion.svg>
                        </motion.div>
                    </motion.div>

                    {/* Logout Text */}
                    <motion.div
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 translate-y-16 z-[110]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <p className="text-2xl font-bold text-red-600">Logging Out...</p>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
