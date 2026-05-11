/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Cpu, Activity, ChevronRight, ChevronLeft, Mail, ArrowRight, 
  Server, Thermometer, Wind, ZapIcon, Layers, Flame,
  Timer, ShieldCheck, Award, TrendingUp, RefreshCcw, DollarSign, Leaf, Settings, Globe,
  Box, Sun, Droplets, Repeat, Zap, Quote, GraduationCap, MapPin, Phone,
  CloudRain, AlertTriangle, Bug, ZapOff, TrendingDown, Clock
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const [activeClientIndex, setActiveClientIndex] = useState(0);
  
  const institutions = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "University of Horticulture Science – Bagalkot",
      subtitle: "Solar & Hybrid Installation",
      content: "Deployment of both Solar Tunnel Dryer and advanced Hybrid Solar Tunnel Dryer systems for research and agricultural advancement."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Goa Energy Development Agency",
      subtitle: "Palem Project (GSBB & ICAR)",
      content: "Solar Tunnel Dryer installed for the Goa State Biodiversity Board and ICAR Goa. This specialized system is utilized for high-precision spice and kokum drying purposes."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "College of Agricultural Eng. & Technology, Anand Agricultural University",
      subtitle: "Academic Partnership",
      content: "Implementation of precision drying technologies for educational and research excellence."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Agricultural University, Banaskantha, Gujarat",
      subtitle: "Hybrid Solar Tunnel Dryer (ETC + Coil)",
      content: "Advanced installation featuring evacuated tube collector air heating integrated with electrical coil backup for year-round efficiency."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "University of Agricultural Science – Bangaluru",
      subtitle: "KVK Chamarajnagar Hybrid Installation",
      content: "Equipped with electrical coil based air heating, supporting regional farmers through Krishi Vigyan Kendra (KVK) initiatives."
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Keladi Shivappa Nayaka University of Agricultural and Horticultural Science",
      subtitle: "Shivamoga - Postharvest Department",
      content: "Solar Tunnel dryer integrated with Electrical heater and Biomass radiator for a truly multi-source hybrid drying environment at Mudigere."
    }
  ];

  const nextClient = () => setActiveClientIndex((prev) => (prev + 1) % institutions.length);
  const prevClient = () => setActiveClientIndex((prev) => (prev - 1 + institutions.length) % institutions.length);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-green-400 selection:text-black bg-[#fcfcfc] text-[#1a1a1a]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-green-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-black/5 bg-white/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
             <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-tighter text-xl">KVB GREEN <span className="text-green-600 uppercase">Energies</span></span>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-black/60">
          <a href="#benefits" className="hover:text-green-600 transition-colors">Benefits</a>
          <a href="#working" className="hover:text-green-600 transition-colors">Working</a>
          <a href="#applications" className="hover:text-green-600 transition-colors">Applications</a>
          <a href="#clientele" className="hover:text-green-600 transition-colors">Clientele</a>
          <a href="#contact" className="hover:text-green-600 transition-colors">Contact</a>
          <button className="hidden md:block px-5 py-2 bg-black text-white rounded-full text-xs hover:bg-green-600 transition-all">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col xl:flex-row items-center justify-between gap-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex-1 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-gray-900">
              HYBRID <br />
              <span className="text-green-600">SOLAR TUNNEL</span> <br />
              DRYER
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed font-light">
              Revolutionizing post-harvest preservation with 24/7 continuous operation. Optimized for efficiency, remote controlled by AI-driven IoT.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all flex items-center gap-2 group shadow-xl shadow-green-200">
              Contact Sales <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-full hover:bg-gray-50 transition-all shadow-sm">
              System Blueprint
            </button>
          </motion.div>

          <div className="pt-12 border-t border-gray-100">
             <div className="space-y-1">
                <div className="text-green-600 font-mono text-xl uppercase tracking-tighter font-black">Hybrid</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">24/7 All-Weather Operation</div>
             </div>
          </div>
        </div>
        
        <div className="flex-1 w-full h-[400px] md:h-[600px] relative">
           <div className="absolute inset-0 bg-green-100/50 blur-[120px] rounded-full"></div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="w-full h-full glass rounded-[40px] overflow-hidden border border-black/5 relative shadow-2xl flex items-center justify-center p-8"
           >
              <img 
                src="/input_file_0.png" 
                className="w-full h-full object-cover rounded-3xl opacity-100"
                alt="KVB Hybrid Solar Tunnel Dryer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent pointer-events-none"></div>
           </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 px-6 bg-red-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-700 text-[10px] font-black uppercase tracking-[0.2em]">
               The Critical Challenge
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Tired of Losing Crops to <span className="text-red-600">Rain and Spoilage?</span>
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PainPointCard 
              icon={<CloudRain />}
              title="Weather Vulnerability"
              desc="Sudden rain or prolonged cloudy days can completely halt open-sun drying and ruin batches."
            />
            <PainPointCard 
              icon={<AlertTriangle />}
              title="High Spoilage and Rot"
              desc="Slow or uneven drying leaves moisture trapped, leading to mold and causing 30–60% post-harvest crop loss."
            />
            <PainPointCard 
              icon={<Bug />}
              title="Contamination Risks"
              desc="Open drying exposes valuable produce to dust, dirt, insects, and bird droppings, destroying hygiene standards."
            />
            <PainPointCard 
              icon={<ZapOff />}
              title="Crushing Energy Costs"
              desc="Operating traditional mechanical or industrial dryers relies on expensive, unpredictable grid power or fossil fuels."
            />
            <PainPointCard 
              icon={<TrendingDown />}
              title="Inconsistent Final Quality"
              desc="Lack of environmental control degrades the natural color, flavor, and texture, forced to accept lower prices."
            />
            <PainPointCard 
              icon={<Clock />}
              title="Production Bottlenecks"
              desc="Traditional methods are incredibly slow and demand massive physical space, limiting processing capacity."
            />
          </div>
        </div>
      </section>

      {/* Technology Section - Why Upgrade */}
      <section id="benefits" className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
                 Strategic Advantage
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900">
                Why Upgrade to <span className="text-green-600">Hybrid Tunnel Dryer?</span>
              </h2>
           </div>
           
           <div className="max-w-4xl mx-auto space-y-4">
              <UpgradeCard icon={<Timer size={24} />} title="Speed" desc="Dries crops 40–70% faster than traditional open-sun methods." />
              <UpgradeCard icon={<RefreshCcw size={24} />} title="Efficiency" desc="Achieves 80–95% moisture reduction for safe storage." />
              <UpgradeCard icon={<ShieldCheck size={24} />} title="Protection" desc="Shields produce from rain, dust, pests, and contamination." />
              <UpgradeCard icon={<Award size={24} />} title="Quality" desc="Preserves natural color, flavor, texture, and nutritional value." />
              <UpgradeCard icon={<TrendingUp size={24} />} title="Yield" desc="Slashes post-harvest losses and spoilage by 30–60%." />

              <UpgradeCard icon={<Zap size={24} />} title="Reliability" desc="Hybrid models enable continuous 24/7 drying regardless of weather." />
              <UpgradeCard icon={<DollarSign size={24} />} title="Profitability" desc="Rapid 1.5 to 3-year payback with ultra-low operational costs." />
              <UpgradeCard icon={<Leaf size={24} />} title="Sustainability" desc="Reduces carbon emissions by 50–300 tons per year." />
              <UpgradeCard icon={<Settings size={24} />} title="Control" desc="AI-IoT integration for precise, remote monitoring." />
              <UpgradeCard icon={<Globe size={24} />} title="Versatility" desc="Adaptable for processing spices, herbs, fruits, nuts, and seafood." />
           </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="working" className="py-32 px-6 max-w-7xl mx-auto">
        <header className="mb-20 space-y-4 text-center md:text-left">
           <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="h-px bg-green-600/30 w-12"></div>
              <span className="font-mono text-xs text-green-600 uppercase tracking-[0.3em] font-bold">Operational Logic</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">How Does It <span className="text-gray-300">Work?</span></h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
           <ProcessStep 
             icon={<Box />} 
             title="Load" 
             desc="Produce is spread inside the enclosed, transparent tunnel." 
             step="01" 
           />
           <ProcessStep 
             icon={<Sun />} 
             title="Trap Heat" 
             desc="The clear cover lets sunlight in but traps the heat inside (the greenhouse effect), raising the temperature." 
             step="02" 
           />
           <ProcessStep 
             icon={<Droplets />} 
             title="Absorb Moisture" 
             desc="As fresh air enters and heats up, it flows over the produce and evaporates the moisture." 
             step="03" 
           />
           <ProcessStep 
             icon={<Wind />} 
             title="Exhaust" 
             desc="Fans or natural airflow push the heavy, moisture-laden air out of the dryer." 
             step="04" 
           />
           <ProcessStep 
             icon={<Repeat />} 
             title="Continuous Cycle" 
             desc="This process of heating air, absorbing moisture, and venting it out repeats until the crops are fully dried." 
             step="05" 
           />
           <ProcessStep 
             icon={<Zap />} 
             title="Hybrid Backup (Optional)" 
             desc="If sunlight fades, smart sensors automatically turn on backup heaters to keep the drying process going 24/7." 
             step="06" 
           />
        </div>
      </section>

      {/* Specialized Applications */}
      <section id="applications" className="py-32 overflow-hidden bg-white">
         <div className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900">Engineered for <span className="text-green-600">High-Value</span> Crops</h2>
         </div>
         
         <div className="relative">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>
            
            <div className="flex w-fit animate-marquee hover:pause whitespace-nowrap">
               <div className="flex gap-8 px-4">
                  {[
                    { image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", title: "Spices", desc: "Preservation of volatile oils, color, and aroma." },
                    { image: "https://images.unsplash.com/photo-1628102420277-3358d30c4476", title: "Betel Nut", desc: "Polycarbonate protection ensuring zero fungal growth." },
                    { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", title: "Coffee", desc: "Optimized drying to protect flavor profiles." },
                    { image: "https://images.unsplash.com/photo-1596362248555-08e090df4b1e", title: "Fruits", desc: "Retains natural sugars and the perfect export texture." },
                    { image: "https://images.unsplash.com/photo-1566385278483-e0742d423fdb", title: "Vegetables", desc: "Uniform dehydration for long shelf life." },
                    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", title: "Fish", desc: "Hygienic drying with zero contamination." }
                  ].map((crop, i) => (
                    <div key={i} className="flex-shrink-0 w-[240px]">
                      <AppCard 
                        image={`${crop.image}?auto=format&fit=crop&q=80&w=480`}
                        title={crop.title}
                        desc={crop.desc}
                      />
                    </div>
                  ))}
               </div>
               {/* Duplicate for seamless loop */}
               <div className="flex gap-8 px-4">
                  {[
                    { image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", title: "Spices", desc: "Preservation of volatile oils, color, and aroma." },
                    { image: "https://images.unsplash.com/photo-1628102420277-3358d30c4476", title: "Betel Nut", desc: "Polycarbonate protection ensuring zero fungal growth." },
                    { image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", title: "Coffee", desc: "Optimized drying to protect flavor profiles." },
                    { image: "https://images.unsplash.com/photo-1596362248555-08e090df4b1e", title: "Fruits", desc: "Retains natural sugars and the perfect export texture." },
                    { image: "https://images.unsplash.com/photo-1566385278483-e0742d423fdb", title: "Vegetables", desc: "Uniform dehydration for long shelf life." },
                    { image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", title: "Fish", desc: "Hygienic drying with zero contamination." }
                  ].map((crop, i) => (
                    <div key={`dup-${i}`} className="flex-shrink-0 w-[240px]">
                      <AppCard 
                        image={`${crop.image}?auto=format&fit=crop&q=80&w=480`}
                        title={crop.title}
                        desc={crop.desc}
                      />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Trusted Installations */}
      <section id="clientele" className="py-32 bg-green-50/30 border-t border-green-100">
        <div className="max-w-7xl mx-auto px-6">
           <header className="mb-20 space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
                 Proven Impact
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Trusted by <span className="text-green-600 font-black">Leading Institutions</span></h2>
           </header>

           <div className="max-w-3xl mx-auto relative group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClientIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <TestimonialCard 
                    icon={institutions[activeClientIndex].icon}
                    title={institutions[activeClientIndex].title}
                    subtitle={institutions[activeClientIndex].subtitle}
                    content={institutions[activeClientIndex].content}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center gap-6 mt-12">
                <button 
                  onClick={prevClient}
                  className="w-14 h-14 rounded-full border border-green-200 bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-lg shadow-green-100/50"
                  aria-label="Previous Institution"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2">
                  {institutions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveClientIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeClientIndex === i ? "bg-green-600 w-6" : "bg-green-200"
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={nextClient}
                  className="w-14 h-14 rounded-full border border-green-200 bg-white flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-lg shadow-green-100/50"
                  aria-label="Next Institution"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
           </div>
        </div>
      </section>

      {/* Video Demonstration */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20 space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600/10 border border-green-600/20 text-green-700 text-[10px] font-black uppercase tracking-[0.2em]">
              Visual Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              See the Dryer in <span className="text-green-600">Action</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A quick look at our field-installed hybrid tunnel dryer, showcasing its robust design and operational efficiency.
            </p>
          </header>

          <div className="max-w-[400px] mx-auto aspect-[9/16] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-900 shadow-green-100">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/QT8GbtdOkvk"
              title="KVB Hybrid Tunnel Dryer Demonstration"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="pt-32 pb-12 px-6 bg-white border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
           <div className="space-y-10">
              <h3 className="text-5xl font-black tracking-tighter text-gray-900 leading-none">LET'S <span className="text-green-600">SCALE</span> YOUR OUTPUT</h3>
              <p className="text-xl text-gray-400 font-light">Join KVB Green Energies in redefining agricultural productivity with smart solar solutions.</p>
              
              <div className="space-y-6">
                 <div className="flex items-center gap-4 text-gray-600 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="font-medium">kvbgreengenergies.com</span>
                 </div>
                 <div className="flex items-center gap-4 text-gray-600 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="font-medium">+91 954 5529 950</span>
                 </div>
                 <div className="flex items-center gap-4 text-gray-600 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100">
                    <Server className="w-5 h-5 text-green-600" />
                    <span className="font-medium">R16, KSIDC, 3rd Cross Belur Industrial Estate Dharwad - 580011</span>
                 </div>
              </div>
           </div>

           <div className="bg-gray-50 p-10 rounded-[32px] space-y-6 border border-gray-200">
              <h4 className="font-mono text-xs uppercase tracking-widest text-green-600 font-bold">Connect System</h4>
              <div className="grid grid-cols-2 gap-4">
                 <input className="bg-white border border-gray-200 p-4 rounded-xl text-sm focus:border-green-600 outline-none transition-all" placeholder="Full Name" />
                 <input className="bg-white border border-gray-200 p-4 rounded-xl text-sm focus:border-green-600 outline-none transition-all" placeholder="Email Address" />
              </div>
              <textarea className="w-full bg-white border border-gray-200 p-4 rounded-xl text-sm focus:border-green-600 outline-none transition-all" placeholder="Project Requirements" rows={4} />
              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl shadow-green-100 flex items-center justify-center gap-3">
                 Send Request <ArrowRight className="w-5 h-5" />
              </button>
           </div>
        </div>
        
        <div className="mt-40 pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.4em] text-gray-300">
           <div>SYSTEM UPTIME: 99.98%</div>
           <div className="text-gray-900 font-bold">© 2026 KVB GREEN ENERGIES.</div>
           <div>EST. 2024</div>
        </div>
      </footer>
    </div>
  );
}

function ProcessStep({ icon, title, desc, step }: { icon: React.ReactNode, title: string, desc: string, step: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-8 rounded-3xl transition-all duration-500 bg-gray-50 border border-gray-100 hover:bg-green-600 hover:text-white hover:shadow-xl hover:shadow-green-100 group cursor-default"
    >
      <div className="text-[40px] font-black absolute -top-8 right-8 text-gray-200/50 group-hover:text-white/10 transition-colors">
         {step}
      </div>
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-green-100 text-green-600 group-hover:bg-white/20 group-hover:text-white transition-colors">
         {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-500 group-hover:text-white/80 transition-colors">{desc}</p>
    </motion.div>
  );
}

function PainPointCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[180px] p-8 rounded-3xl bg-white border border-red-100 shadow-sm hover:h-[220px] transition-all duration-500 overflow-hidden cursor-default"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center transition-colors group-hover:bg-red-600 group-hover:text-white">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">{title}</h3>
      </div>
      
      <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
        <p className="text-sm leading-relaxed text-gray-600">
          {desc}
        </p>
      </div>
      
      <div className="absolute bottom-4 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <AlertTriangle size={80} className="text-red-600" />
      </div>
    </motion.div>
  );
}

function TestimonialCard({ icon, title, subtitle, content }: { icon: React.ReactNode, title: string, subtitle: string, content: string }) {
  return (
    <div className="bg-white p-10 rounded-[32px] border border-green-100 shadow-sm hover:shadow-xl hover:shadow-green-100 hover:border-green-300 transition-all duration-500 space-y-6 relative group">
       <div className="absolute top-6 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
          <Quote size={60} className="text-green-600" />
       </div>
       <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-500">
          {icon}
       </div>
       <div className="space-y-4">
          <div className="space-y-1">
             <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-green-600 transition-colors">{title}</h3>
             <p className="text-green-600 font-mono text-[10px] uppercase tracking-widest font-bold">{subtitle}</p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-green-500/20 group-hover:border-green-500 transition-colors pl-6">
             "{content}"
          </p>
       </div>
    </div>
  );
}

function UpgradeCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.01, x: 10 }}
      className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-green-100/50 hover:border-green-200 transition-all duration-300 flex items-center gap-8 group cursor-default"
    >
       <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors flex-shrink-0">
          {icon}
       </div>
       <div className="flex-1 space-y-1">
          <h3 className="font-bold text-gray-900 text-lg tracking-tight group-hover:text-green-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{desc}</p>
       </div>
       <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity pr-4">
         <ArrowRight className="text-green-600" />
       </div>
    </motion.div>
  );
}

function TechFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start">
       <div className="mt-1 text-green-600">{icon}</div>
       <div>
          <div className="text-sm font-bold text-gray-900">{title}</div>
          <div className="text-xs text-gray-500">{desc}</div>
       </div>
    </div>
  );
}

function AppCard({ image, title, desc }: { image: string, title: string, desc: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative h-[320px] rounded-[24px] overflow-hidden border border-gray-100 shadow-lg"
    >
       <img src={image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={title} />
       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent"></div>
       <div className="absolute bottom-0 p-6 space-y-2">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-white/70 text-[10px] leading-relaxed translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
             {desc}
          </p>
          <div className="w-10 h-1 bg-green-500 rounded-full"></div>
       </div>
    </motion.div>
  );
}
