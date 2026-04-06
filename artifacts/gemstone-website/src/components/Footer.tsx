import { SiDiscord, SiGithub, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Gemstone</h3>
            <p className="text-muted-foreground max-w-sm">
              Crypto for Discord. Tip, swap, airdrop, and play, all from your Discord Server. 
              Gemstone brings the power of crypto to every community.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://discord.com/oauth2/authorize?client_id=1479292006483099838&scope=bot&permissions=534723947584" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Add to Discord</a>
              </li>
              <li>
                <a href="https://discord.com/invite/hpbMxBTDAb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Support Server</a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1EBUQzxDpNUhXUv9EPIZ6Z879k62SUPIPzgO4TgLLv-s/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="https://docs.google.com/document/d/1Bd8Fitno9Si-BfhEzOCpC_Tuee_VEC7Vem0F-FMaUUA/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Socials</h4>
            <div className="flex gap-4">
              <a href="https://discord.com/invite/hpbMxBTDAb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all">
                <SiDiscord size={18} />
              </a>
              <a href="https://x.com/gemstone_bot" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all">
                <SiX size={18} />
              </a>
              <a href="https://github.com/TechnoVisionDev/Gemstone" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all">
                <SiGithub size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Gemstone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
