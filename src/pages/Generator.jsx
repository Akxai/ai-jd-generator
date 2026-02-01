import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { InferenceClient } from "@huggingface/inference";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Briefcase, 
  Clock, 
  Code, 
  Building2, 
  Copy, 
  Check,
  Download,
  RefreshCw,
  LogOut,
  User
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Generator() {
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed");
    }
  };

  const handleGenerate = async () => {
    if (!role.trim()) {
      toast.error("Please enter a job role!", {
        icon: "⚠️",
        style: {
          borderRadius: "12px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const hf = new InferenceClient(import.meta.env.VITE_HUGGINGFACE_API_KEY);

      const response = await hf.chatCompletion({
        model: "meta-llama/Llama-3.2-1B-Instruct",
        messages: [
          {
            role: "user",
            content: `Create a detailed job description for a ${role} position.

Experience Required: ${experience || "Entry level"}
Required Skills: ${skills || "Will train"}
Company Type: ${companyType || "Any"}

Please include:
1. Job Title and Summary
2. Key Responsibilities
3. Required Qualifications
4. Interview Questions

Format it professionally and make it comprehensive.`
          }
        ],
        max_tokens: 600,
        temperature: 0.7,
      });

      setResult(response.choices[0].message.content);
      toast.success("Job description generated!", {
        icon: "✨",
        style: {
          borderRadius: "12px",
          background: "#10b981",
          color: "#fff",
        },
      });
    } catch (err) {
      console.error(err);
      toast.error("Failed to generate. Please try again.", {
        icon: "❌",
        style: {
          borderRadius: "12px",
          background: "#ef4444",
          color: "#fff",
        },
      });
    }

    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    toast.success("Copied to clipboard!", {
      icon: "📋",
      style: {
        borderRadius: "12px",
        background: "#333",
        color: "#fff",
      },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([result], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${role.replace(/\s+/g, "-")}-job-description.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded!", {
      icon: "💾",
    });
  };

  const handleReset = () => {
    setRole("");
    setExperience("");
    setSkills("");
    setCompanyType("");
    setResult("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black grid-background">
      <Toaster position="top-right" />
      
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
        <motion.div
          className="absolute -bottom-40 left-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* User Info and Logout */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-6 right-6 flex items-center gap-4"
        >
          <div className="flex items-center gap-2 text-white/80">
            <User className="w-5 h-5" />
            <span className="hidden md:inline">{auth.currentUser?.email}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden md:inline">Logout</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <motion.div
              className="inline-flex items-center justify-center mb-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-12 h-12 text-white animate-pulse" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 tracking-tight">
              AI Job Description
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>
            <p className="text-white/60 text-lg">
              Create professional job descriptions in seconds with AI
            </p>
          </motion.div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-8 md:p-10 glow-effect"
          >
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Role */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="flex items-center gap-2 text-white/90 font-semibold mb-2">
                  <Briefcase className="w-5 h-5" />
                  Job Role
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent backdrop-blur-sm transition-all"
                  placeholder="e.g. Frontend Developer"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </motion.div>

              {/* Experience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <label className="flex items-center gap-2 text-white/90 font-semibold mb-2">
                  <Clock className="w-5 h-5" />
                  Experience Level
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent backdrop-blur-sm transition-all"
                  placeholder="e.g. 3-5 years"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </motion.div>

              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="flex items-center gap-2 text-white/90 font-semibold mb-2">
                  <Code className="w-5 h-5" />
                  Required Skills
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent backdrop-blur-sm transition-all"
                  placeholder="e.g. React, TypeScript, Node.js"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </motion.div>

              {/* Company Type */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label className="flex items-center gap-2 text-white/90 font-semibold mb-2">
                  <Building2 className="w-5 h-5" />
                  Company Type
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent backdrop-blur-sm transition-all"
                  placeholder="e.g. Startup / Enterprise"
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                />
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleGenerate}
                disabled={loading}
                className="flex-1 bg-gradient-to-r bg-white hover:bg-white/90 glow-effect-strong text-black font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-3 border-black/30 border-t-black rounded-full"
                    />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate JD
                  </>
                )}
              </motion.button>

              {result && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="bg-gray-800/50 backdrop-blur-sm text-white/90 font-semibold py-4 px-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-5 h-5" />
                </motion.button>
              )}
            </motion.div>

            {/* Result Display */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 glow-effect rounded-2xl p-6">
                    {/* Result Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-white" />
                        Generated Job Description
                      </h3>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleCopy}
                          className="bg-white/5 backdrop-blur-sm text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-all"
                          title="Copy to clipboard"
                        >
                          {copied ? (
                            <Check className="w-5 h-5 text-green-400" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleDownload}
                          className="bg-white/5 backdrop-blur-sm text-gray-200 p-2 rounded-lg hover:bg-white/10 transition-all"
                          title="Download as text file"
                        >
                          <Download className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Result Content */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-h-96 overflow-y-auto custom-scrollbar"
                    >
                      <pre className="text-white whitespace-pre-wrap text-sm leading-relaxed font-sans">
                        {result}
                      </pre>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading Animation */}
            <AnimatePresence>
              {loading && !result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-gray-200">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full"
                    />
                    <span className="text-lg font-semibold">
                      Creating your job description...
                    </span>
                  </div>
                  <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-gray-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8 text-white/50"
          >
            <p className="text-sm">
              Powered by AI • Create professional job descriptions instantly
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}