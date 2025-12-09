import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isEmailFocused, setIsEmailFocused] = useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            setShowSuccess(true);

            // Wait for animation before navigating
            setTimeout(() => {
                navigate('/');
            }, 2000);
        } catch (err) {
            setError("Failed to log in. Please check your credentials.");
            console.error(err);
            setIsLoading(false);
        }
    };

    // Determine input border color based on state
    const getInputBorderColor = (isFocused, hasValue) => {
        if (isFocused) return 'border-emerald-500 ring-2 ring-emerald-500/50';
        if (hasValue) return 'border-emerald-400';
        return 'border-stone-300';
    };

    // Generate floating blocks
    const floatingBlocks = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: i * 0.1,
        x: Math.random() * 100 - 50,
        y: Math.random() * -200 - 100,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.5 + 0.5,
    }));

    return (
        <div className="w-full min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-stone-50 via-white to-emerald-50 overflow-hidden relative">
            {/* Animated Background Circles */}
            <motion.div
                className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl"
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
                className="absolute bottom-20 right-10 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl"
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

            {/* Success Animation - Floating Blocks */}
            <AnimatePresence>
                {showSuccess && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-emerald-900/20 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Floating Blocks */}
                        {floatingBlocks.map((block) => (
                            <motion.div
                                key={block.id}
                                className="absolute w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg z-40"
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
                                }}
                                transition={{
                                    duration: 2,
                                    delay: block.delay,
                                    ease: "easeOut"
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
                                        "0 0 0 0 rgba(16, 185, 129, 0.7)",
                                        "0 0 0 30px rgba(16, 185, 129, 0)",
                                    ],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            >
                                <motion.svg
                                    className="w-16 h-16 text-emerald-600"
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
                            <p className="text-2xl font-bold text-emerald-600">Login Successful!</p>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Login Card */}
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
                {/* Logo/Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-stone-600 text-sm">Sign in to continue to ECOFAB</p>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-red-50 border border-red-200 rounded-lg p-3 overflow-hidden"
                        >
                            <p className="text-red-600 text-sm text-center font-medium">
                                ⚠️ {error}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Form */}
                <motion.form
                    onSubmit={handleLogin}
                    className="flex flex-col gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {/* Email Input */}
                    <div className="relative">
                        <motion.label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${isEmailFocused || email
                                    ? '-top-2.5 text-xs bg-white px-2 text-emerald-600 font-semibold'
                                    : 'top-3.5 text-stone-500'
                                }`}
                        >
                            Email Address
                        </motion.label>
                        <motion.input
                            type="email"
                            className={`w-full p-3.5 border-2 rounded-lg bg-white transition-all duration-300 outline-none relative z-0 ${getInputBorderColor(
                                isEmailFocused,
                                email
                            )}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setIsEmailFocused(true)}
                            onBlur={() => setIsEmailFocused(false)}
                            required
                            whileFocus={{ scale: 1.01 }}
                            animate={{
                                backgroundColor: email ? '#f0fdf4' : '#ffffff',
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Character count indicator */}
                        <AnimatePresence>
                            {email && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    className="absolute right-3 top-3.5 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center z-10"
                                >
                                    <span className="text-white text-xs font-bold">✓</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <motion.label
                            className={`absolute left-3 transition-all duration-300 pointer-events-none z-10 ${isPasswordFocused || password
                                    ? '-top-2.5 text-xs bg-white px-2 text-emerald-600 font-semibold'
                                    : 'top-3.5 text-stone-500'
                                }`}
                        >
                            Password
                        </motion.label>
                        <motion.input
                            type="password"
                            className={`w-full p-3.5 border-2 rounded-lg bg-white transition-all duration-300 outline-none relative z-0 ${getInputBorderColor(
                                isPasswordFocused,
                                password
                            )}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                            required
                            whileFocus={{ scale: 1.01 }}
                            animate={{
                                backgroundColor: password ? '#f0fdf4' : '#ffffff',
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        {/* Password strength indicator */}
                        <AnimatePresence>
                            {password && (
                                <motion.div
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{
                                        opacity: 1,
                                        width: `${Math.min((password.length / 8) * 100, 100)}%`
                                    }}
                                    exit={{ opacity: 0, width: 0 }}
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-b-lg z-0"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3.5 rounded-lg font-bold text-white shadow-lg transition-all duration-300 ${isLoading
                            ? 'bg-stone-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800'
                            }`}
                        whileHover={!isLoading ? { scale: 1.02, boxShadow: "0 10px 40px rgba(16, 185, 129, 0.4)" } : {}}
                        whileTap={!isLoading ? { scale: 0.98 } : {}}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <motion.div
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                                <span>Signing in...</span>
                            </div>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>
                </motion.form>

                {/* Sign Up Link */}
                <motion.p
                    className="mt-6 text-center text-sm text-stone-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Don't have an account?{' '}
                    <Link
                        to="/signup"
                        className="text-emerald-600 font-bold hover:text-emerald-700 underline transition-colors"
                    >
                        Create Account
                    </Link>
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                    className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full blur-2xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
}
