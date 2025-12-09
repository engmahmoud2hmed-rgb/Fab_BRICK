import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isConfirmFocused, setIsConfirmFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        setIsLoading(true);
        setError('');

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setShowSuccess(true);

            // Wait for animation before navigating
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            setError("Failed to create an account. It might already exist.");
            console.error(err);
            setIsLoading(false);
        }
    };

    const getInputBorderColor = (isFocused, hasValue) => {
        if (isFocused) return 'border-purple-500 ring-2 ring-purple-500/50';
        if (hasValue) return 'border-purple-400';
        return 'border-stone-300';
    };

    // Generate color-changing floating blocks
    const floatingBlocks = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        delay: i * 0.08,
        x: Math.random() * 100 - 50,
        y: Math.random() * -200 - 100,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.6 + 0.4,
        colorIndex: i % 6, // For rainbow colors
    }));

    const rainbowColors = [
        'from-red-400 to-pink-500',
        'from-orange-400 to-yellow-500',
        'from-yellow-400 to-green-500',
        'from-green-400 to-emerald-500',
        'from-blue-400 to-indigo-500',
        'from-purple-400 to-pink-500',
    ];

    return (
        <div className="w-full min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden relative">
            {/* Animated Background Circles */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Success Animation - Color-Changing Floating Blocks */}
            <AnimatePresence>
                {showSuccess && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-purple-900/20 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Floating Color-Changing Blocks */}
                        {floatingBlocks.map((block) => (
                            <motion.div
                                key={block.id}
                                className={`absolute w-10 h-10 bg-gradient-to-br ${rainbowColors[block.colorIndex]} rounded-lg shadow-lg z-40`}
                                initial={{
                                    x: '50vw',
                                    y: '50vh',
                                    scale: 0,
                                    opacity: 0,
                                    rotate: 0,
                                }}
                                animate={{
                                    x: `calc(50vw + ${block.x}vw)`,
                                    y: `calc(50vh + ${block.y}vh)`,
                                    scale: block.scale,
                                    opacity: [0, 1, 0],
                                    rotate: block.rotation,
                                    background: [
                                        'linear-gradient(to bottom right, rgb(248, 113, 113), rgb(236, 72, 153))',
                                        'linear-gradient(to bottom right, rgb(251, 146, 60), rgb(234, 179, 8))',
                                        'linear-gradient(to bottom right, rgb(74, 222, 128), rgb(16, 185, 129))',
                                        'linear-gradient(to bottom right, rgb(96, 165, 250), rgb(99, 102, 241))',
                                        'linear-gradient(to bottom right, rgb(167, 139, 250), rgb(236, 72, 153))',
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    delay: block.delay,
                                    ease: "easeOut",
                                    background: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }}
                            />
                        ))}

                        {/* Success Checkmark Circle */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                        >
                            <motion.div
                                className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(168, 85, 247, 0.7)",
                                        "0 0 0 30px rgba(168, 85, 247, 0)",
                                    ],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            >
                                <motion.svg
                                    className="w-16 h-16 text-purple-600"
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
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                    />
                                </motion.svg>
                            </motion.div>
                        </motion.div>

                        {/* Success Text */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-16 z-50"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <p className="text-2xl font-bold text-purple-600">Account Created!</p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Signup Card */}
            <motion.div
                className="max-w-md w-full bg-white/80 backdrop-blur-lg p-8 md:p-10 rounded-2xl shadow-2xl border border-stone-200 relative z-10"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{
                    opacity: showSuccess ? 0 : 1,
                    y: showSuccess ? -50 : 0,
                    scale: showSuccess ? 0.9 : 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        Create Account
                    </h2>
                    <p className="text-stone-600 text-sm">Join ECOFAB today</p>
                </motion.div>

                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-red-50 border border-red-200 rounded-lg p-3 overflow-hidden"
                        >
                            <p className="text-red-600 text-sm text-center font-medium">⚠️ {error}</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.form
                    onSubmit={handleSignup}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Email */}
                    <div className="relative">
                        <motion.label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none ${isEmailFocused || email
                                    ? '-top-2.5 text-xs bg-white px-1 text-purple-600 font-semibold'
                                    : 'top-3.5 text-stone-500'
                                }`}
                        >
                            Email Address
                        </motion.label>
                        <motion.input
                            type="email"
                            className={`w-full p-3.5 border-2 rounded-lg bg-white transition-all duration-300 outline-none ${getInputBorderColor(isEmailFocused, email)}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                            required
                            whileFocus={{ scale: 1.01 }}
                            animate={{ backgroundColor: email ? '#faf5ff' : '#ffffff' }}
                            transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence>
                            {email && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute right-3 top-3.5 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center"
                                >
                                    <span className="text-white text-xs font-bold">✓</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <motion.label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none ${isPasswordFocused || password
                                    ? '-top-2.5 text-xs bg-white px-1 text-purple-600 font-semibold'
                                    : 'top-3.5 text-stone-500'
                                }`}
                        >
                            Password
                        </motion.label>
                        <motion.input
                            type="password"
                            className={`w-full p-3.5 border-2 rounded-lg bg-white transition-all duration-300 outline-none ${getInputBorderColor(isPasswordFocused, password)}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                            required
                            whileFocus={{ scale: 1.01 }}
                            animate={{ backgroundColor: password ? '#faf5ff' : '#ffffff' }}
                            transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence>
                            {password && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: `${Math.min((password.length / 8) * 100, 100)}%` }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-b-lg"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <motion.label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none ${isConfirmFocused || confirmPassword
                                    ? '-top-2.5 text-xs bg-white px-1 text-purple-600 font-semibold'
                                    : 'top-3.5 text-stone-500'
                                }`}
                        >
                            Confirm Password
                        </motion.label>
                        <motion.input
                            type="password"
                            className={`w-full p-3.5 border-2 rounded-lg bg-white transition-all duration-300 outline-none ${getInputBorderColor(isConfirmFocused, confirmPassword)}`}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onFocus={() => setIsConfirmFocused(true)}
                            onBlur={() => setIsConfirmFocused(false)}
                            required
                            whileFocus={{ scale: 1.01 }}
                            animate={{ backgroundColor: confirmPassword ? '#faf5ff' : '#ffffff' }}
                            transition={{ duration: 0.3 }}
                        />
                        <AnimatePresence>
                            {confirmPassword && password === confirmPassword && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute right-3 top-3.5 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                                >
                                    <span className="text-white text-xs font-bold">✓</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3.5 rounded-lg font-bold text-white shadow-lg transition-all duration-300 ${isLoading
                                ? 'bg-stone-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
                            }`}
                        whileHover={!isLoading ? { scale: 1.02, boxShadow: "0 10px 40px rgba(168, 85, 247, 0.4)" } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <motion.div
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>Creating Account...</span>
                            </div>
                        ) : (
                            'Create Account'
                        )}
                    </motion.button>
                </motion.form>

                <motion.p
                    className="mt-6 text-center text-sm text-stone-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Already have an account?{' '}
                    <Link to="/login" className="text-purple-600 font-bold hover:text-purple-700 underline transition-colors">
                        Sign In
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
}
