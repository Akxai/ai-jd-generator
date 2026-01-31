import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { 
  Sparkles, 
  Zap, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  Star
} from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden bg-black grid-background">
      {/* Animated Background Orbs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
            <span className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap">AI JD Generator</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-4"
          >
            <button
              onClick={() => navigate("/login")}
              className="text-white/70 hover:text-white transition-colors font-medium text-sm sm:text-base"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="bg-white hover:bg-white/90 text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium transition-all text-sm sm:text-base whitespace-nowrap"
            >
              Sign Up
            </button>
          </motion.div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Subtle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-8 sm:mb-10 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white/80 font-medium whitespace-nowrap">
                  AI-Powered Job Description Generator
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 sm:mb-6 leading-tight px-2"
            >
              Create{" "}
              <TypeAnimation
                sequence={[
                  'Professional',
                  3000,
                  'Stunning',
                  3000,
                  'Perfect',
                  3000,
                ]}
                wrapper="span"
                speed={50}
                className="animated-gradient"
                repeat={Infinity}
              />
              <br />
              Job Descriptions
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Leverage AI to generate comprehensive, professional job descriptions 
              in seconds. Save time and attract the right talent.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 px-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/signup")}
                className="w-full sm:w-auto bg-white hover:bg-white/95 text-black px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/login")}
                className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base transition-all backdrop-blur-sm"
              >
                Sign In
              </motion.button>
            </motion.div>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 sm:gap-3 text-white/40 text-xs sm:text-sm px-4"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20" />
                ))}
              </div>
              <span className="whitespace-nowrap">Trusted by 5,000+ companies</span>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Clock,
                title: "Save Time",
                description: "Generate complete job descriptions in seconds"
              },
              {
                icon: Sparkles,
                title: "AI-Powered",
                description: "Advanced AI creates professional descriptions"
              },
              {
                icon: CheckCircle,
                title: "Customizable",
                description: "Tailor to your specific requirements"
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 hover:bg-white/[0.07] transition-all"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-white/5 rounded-lg mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="max-w-5xl mx-auto backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {[
                { icon: Briefcase, value: "10K+", label: "Jobs Created" },
                { icon: Users, value: "5K+", label: "Happy Users" },
                { icon: TrendingUp, value: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white/70 mx-auto mb-3" />
                  <div className="text-3xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg text-white/60 mb-8 px-4">
              Join thousands of companies using AI to streamline hiring
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/signup")}
              className="w-full sm:w-auto bg-white hover:bg-white/95 text-black px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold text-base flex items-center justify-center gap-2 mx-auto shadow-lg transition-all"
            >
              Create Your First JD
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
