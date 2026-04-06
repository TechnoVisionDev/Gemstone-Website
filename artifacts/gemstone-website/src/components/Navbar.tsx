import { motion } from "framer-motion";
import { Link } from "wouter";
import diamondPng from "@assets/Gemma_1775515752732.png";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={diamondPng} alt="Gemstone" className="w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(168,99,235,0.6)]" />
          <span className="text-xl font-bold tracking-tight text-white">Gemstone</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Features</a>
          <a href="#commands" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Commands</a>
          <a href="#listings" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">Listings</a>
          <a href="https://discord.com/oauth2/authorize?client_id=1479292006483099838&scope=bot&permissions=534723947584" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary/10 text-primary font-medium rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(168,99,235,0.2)] hover:shadow-[0_0_30px_rgba(168,99,235,0.5)]">
            Add to Discord
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
