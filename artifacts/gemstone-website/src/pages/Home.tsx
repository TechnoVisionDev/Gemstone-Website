import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import diamondPng from "@assets/diamond_1775513675340.png";
import { Wallet, Zap, CloudRain, Gamepad2, Repeat, Store, Coins, Activity, Users, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="container mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <div className="absolute inset-0 bg-primary blur-[80px] opacity-30 rounded-full" />
            <motion.img
              src={diamondPng}
              alt="Gemstone Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(14,165,233,0.8)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-primary/60"
          >
            Crypto for Discord
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Tip, swap, airdrop, and play, all from your Discord Server. 
            Gemstone brings the power of crypto to every community.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1479292006483099838&scope=bot&permissions=534723947584" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5 fill-current" />
              Add to Discord
            </a>
            <a 
              href="#features"
              className="px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { icon: Users, label: "Active Users", value: "10K+" },
              { icon: Activity, label: "Servers", value: "550+" },
              { icon: Send, label: "Tips Sent", value: "12M+" },
              { icon: Coins, label: "Coins Supported", value: "6" }
            ].map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={stat.label} 
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Everything your server needs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gemstone brings crypto to your Discord server, allowing you to engage your community with tips, airdrops, and other games.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: "Multi-Coin Wallet", desc: "Store and manage Bitcoin, Litecoin, Dogecoin, Bitcoin Cash, Pepecoin, and Ravencoin directly inside Discord. Deposit, withdraw, and check balances instantly." },
              { icon: Zap, title: "Instant Tipping", desc: "Tip any user on Discord with any supported coins. The process is fast and easy with no fees!" },
              { icon: CloudRain, title: "Airdrops & Rain", desc: "Rain coins across the server or set up targeted airdrops. Build engagement and reward your most active members." },
              { icon: Gamepad2, title: "Games & Competitions", desc: "Trivia, red envelopes, dice rolls, and more. Gamify your server and let members compete for crypto prizes." },
              { icon: Repeat, title: "Coin Swaps", desc: "Swap between any supported coins at real-time market rates. No need to leave Discord to manage your portfolio." },
              { icon: Store, title: "Role Marketplace", desc: "Sell premium roles to your server members using crypto. Monetize your community with automated role management." }
            ].map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={feature.title}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group hover:bg-white/[0.04]"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Section */}
      <section id="commands" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Powerful Commands</h2>
            <p className="text-lg text-muted-foreground">Simple slash commands for complex crypto operations.</p>
          </div>

          <div className="grid gap-3">
            {[
              { cmd: "/tip", desc: "Send coins to any user", cat: "Tipping" },
              { cmd: "/balance", desc: "View your wallet balance", cat: "Wallet" },
              { cmd: "/deposit", desc: "Get your deposit address", cat: "Wallet" },
              { cmd: "/withdraw", desc: "Withdraw coins to external wallet", cat: "Wallet" },
              { cmd: "/airdrop", desc: "Distribute coins to active members", cat: "Airdrop" },
              { cmd: "/rain", desc: "Rain coins on online users", cat: "Airdrop" },
              { cmd: "/trivia", desc: "Start a crypto trivia game", cat: "Games" },
              { cmd: "/redenvelope", desc: "Create a lucky red envelope", cat: "Games" },
              { cmd: "/swap", desc: "Swap between supported coins", cat: "Swap" },
              { cmd: "/store", desc: "Browse and purchase server roles with crypto", cat: "Store" }
            ].map((c, i) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={c.cmd}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-primary/20 transition-colors gap-4"
              >
                <div className="flex items-center gap-4">
                  <code className="text-primary font-mono text-sm px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20">{c.cmd}</code>
                  <span className="text-white font-medium">{c.desc}</span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {c.cat}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Coins */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05),transparent_70%)]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12">Supported Coins</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["BTC", "LTC", "DOGE", "BCH", "PEPE", "RVN"].map((coin, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={coin}
                className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white font-bold tracking-wider hover:border-primary/50 hover:bg-primary/5 transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                {coin}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coin Listing Section */}
      <section id="listings" className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-black/40 to-black/60 p-10 md:p-16"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_60%)]" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
                  <Coins className="w-4 h-4" />
                  Coin Listings
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Get your coin or token listed on Gemstone
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Want your project's coin or token added to Gemstone? List it for just{" "}
                  <span className="text-white font-semibold">$25/month</span>, billed annually.
                  Give your community instant access to tipping, airdrops, swaps, and more, all inside Discord.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  To learn more and get started, join our Support Discord and open a ticket. Our team will walk you through the process.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-6 text-center">
                <div className="px-8 py-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col items-center gap-1">
                  <span className="text-4xl font-extrabold text-white">$25</span>
                  <span className="text-sm text-muted-foreground font-medium">per month, billed annually</span>
                </div>
                <a
                  href="https://discord.com/invite/hpbMxBTDAb"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-listing-discord"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_25px_rgba(14,165,233,0.4)] hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]"
                >
                  <Zap className="w-4 h-4 fill-current" />
                  Join Discord &amp; Open a Ticket
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-[3rem]" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-white/10 to-white/0 border border-white/10 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 relative z-10">
              Ready to bring crypto to your server?
            </h2>
            <a 
              href="https://discord.com/oauth2/authorize?client_id=1479292006483099838&scope=bot&permissions=534723947584" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:shadow-[0_0_50px_rgba(14,165,233,0.6)] items-center justify-center gap-2 relative z-10"
            >
              <Zap className="w-5 h-5 fill-current" />
              Add to Discord Now
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
