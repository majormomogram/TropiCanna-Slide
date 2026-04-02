import React, { useState } from "react";
import { Twitter, Facebook, Instagram, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Panel = "home" | "about" | "products" | "contact";

const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${normalizedBase}${normalizedPath}`;
};

export default function App() {
  const [activePanel, setActivePanel] = useState<Panel>("home");

  const navigateTo = (panel: Panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="relative w-full h-[100dvh] bg-background overflow-hidden text-foreground font-sans">
      {/* Home Panel */}
      <div
        className={`absolute inset-0 w-full h-full panel-transition z-10 ${
          activePanel === "home" ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl("/Background.png")}
            alt="Tropical waterfall background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-white text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
            TropiCanna Water
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90 mb-16">
            Premium Branding in Every Sip.
          </p>

          <nav className="flex flex-col md:flex-row gap-6 md:gap-12">
            <button
              onClick={() => navigateTo("about")}
              data-testid="link-about"
              className="text-lg uppercase tracking-widest font-medium text-white/90 hover:text-white hover:scale-105 transition-all border-b border-transparent hover:border-accent pb-1"
            >
              About
            </button>
            <button
              onClick={() => navigateTo("products")}
              data-testid="link-products"
              className="text-lg uppercase tracking-widest font-medium text-white/90 hover:text-white hover:scale-105 transition-all border-b border-transparent hover:border-accent pb-1"
            >
              Products
            </button>
            <button
              onClick={() => navigateTo("contact")}
              data-testid="link-contact"
              className="text-lg uppercase tracking-widest font-medium text-white/90 hover:text-white hover:scale-105 transition-all border-b border-transparent hover:border-accent pb-1"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>

      {/* About Panel */}
      <div
        className={`absolute inset-0 w-full h-full bg-background panel-transition z-20 flex flex-col ${
          activePanel === "about" ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <header className="w-full p-6 flex justify-start">
          <button
            onClick={() => navigateTo("home")}
            data-testid="button-back-about"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 pb-20">
          <div className="max-w-3xl mx-auto h-full flex flex-col justify-center py-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              The Vision
            </h2>
            <div className="prose prose-lg md:prose-xl text-foreground/80 leading-relaxed mb-12">
              <p>
                We believe hydration should be a branded interaction, not a generic necessity.
                TropiCanna Water was born from the idea that every touchpoint matters — including
                the can in someone's hand.
              </p>
              <p>
                We recognized businesses were missing a premium branding opportunity with generic
                plastic and glass bottles. Aluminum cans are the solution: infinitely recyclable,
                premium-feel, custom-printed, and undeniably memorable.
              </p>
            </div>

            <div className="bg-primary text-primary-foreground p-10 md:p-14 rounded-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="text-accent text-sm uppercase tracking-widest font-bold mb-4">
                  Our Mission
                </h3>
                <p className="font-serif text-2xl md:text-4xl font-medium leading-tight">
                  Turning everyday hydration into a bold brand statement.
                </p>
              </div>
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Panel */}
      <div
        className={`absolute inset-0 w-full h-full bg-secondary panel-transition z-20 flex flex-col ${
          activePanel === "products" ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <header className="w-full p-6 flex justify-start shrink-0">
          <button
            onClick={() => navigateTo("home")}
            data-testid="button-back-products"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 pb-20">
          <div className="max-w-6xl mx-auto py-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16">
              Our Canvases
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {/* Product 1 */}
              <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                <div className="h-64 w-full relative mb-6 flex items-center justify-center">
                  <img
                    src={getAssetUrl("/can1.png")}
                    alt="330ml Thin Can"
                    className="max-h-full object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">330ml Thin Can</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Sleek, elegant, perfect for premium events and sophisticated settings.
                </p>
              </div>

              {/* Product 2 */}
              <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center relative md:-translate-y-4">
                <div className="h-64 w-full relative mb-6 flex items-center justify-center">
                  <img
                    src={getAssetUrl("/can2.png")}
                    alt="330ml Standard Can"
                    className="max-h-full object-contain drop-shadow-xl"
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">330ml Standard</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Classic format providing the maximum canvas for your custom branding.
                </p>
              </div>

              {/* Product 3 */}
              <div className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow flex flex-col items-center text-center">
                <div className="h-64 w-full relative mb-6 flex items-center justify-center">
                  <img
                    src={getAssetUrl("/can1.png")}
                    alt="500ml Standard Can"
                    className="max-h-full object-contain drop-shadow-xl transform scale-110"
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">500ml Standard</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Generous hydration that makes a bold, unmissable statement.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm font-bold uppercase tracking-widest text-accent text-center mb-8">
                Perfect For
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Exhibitions", "Corporate Events", "Branded Gifts", "Showrooms"].map((item) => (
                  <div
                    key={item}
                    className="bg-primary text-primary-foreground py-6 px-4 rounded-xl text-center font-medium shadow-md"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Panel */}
      <div
        className={`absolute inset-0 w-full h-full bg-background panel-transition z-20 flex flex-col ${
          activePanel === "contact" ? "translate-x-0 shadow-2xl" : "translate-x-full"
        }`}
      >
        <header className="w-full p-6 flex justify-start">
          <button
            onClick={() => navigateTo("home")}
            data-testid="button-back-contact"
            className="flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors font-medium"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 pb-20">
          <div className="max-w-2xl mx-auto h-full flex flex-col justify-center py-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-foreground/70">
                Ready to make hydration your brand's next power move?
              </p>
            </div>

            <ContactForm />

            <div className="mt-16 flex justify-center gap-8 border-t border-border pt-12">
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors" data-testid="social-twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors" data-testid="social-facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-foreground/50 hover:text-primary transition-colors" data-testid="social-instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/jasper@tropicannawater.com", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary/5 border border-primary/10 rounded-2xl p-12 text-center" data-testid="contact-success">
        <h3 className="font-serif text-2xl font-bold mb-2">Message Sent</h3>
        <p className="text-foreground/70 mb-8">
          Thank you for reaching out. We'll be in touch shortly to discuss elevating your brand.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setStatus("idle")}
          data-testid="button-send-another"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <Input 
          id="name" 
          name="name" 
          required 
          className="h-12 bg-background" 
          placeholder="Your full name"
          data-testid="input-name"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <Input 
          id="email" 
          type="email" 
          name="email" 
          required 
          className="h-12 bg-background" 
          placeholder="you@company.com"
          data-testid="input-email"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <Textarea 
          id="message" 
          name="message" 
          required 
          className="min-h-[150px] resize-none bg-background" 
          placeholder="Tell us about your brand and needs..."
          data-testid="input-message"
        />
      </div>
      
      {status === "error" && (
        <div className="text-destructive text-sm" data-testid="contact-error">
          There was an error sending your message. Please try again.
        </div>
      )}
      
      <Button 
        type="submit" 
        className="w-full h-12 text-lg font-medium" 
        disabled={status === "submitting"}
        data-testid="button-submit"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
