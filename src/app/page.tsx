"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ScreenshotMockup } from "./components";

/* ═══════════════════════════════════════════════════════
   Scroll fade-in hook & wrapper
   ═══════════════════════════════════════════════════════ */

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const ref = useScrollFadeIn();
  return (
    <div ref={ref} className={`opacity-0 ${delay} ${className}`}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Navigation
   ═══════════════════════════════════════════════════════ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-mark.png"
            alt="HopCircle"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-heading font-bold text-lg text-charcoal hidden sm:inline">
            HopCircle
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-charcoal-light">
          <a href="#how-it-works" className="hover:text-charcoal transition">
            How It Works
          </a>
          <a href="#features" className="hover:text-charcoal transition">
            Features
          </a>
          <a href="#app" className="hover:text-charcoal transition">
            The App
          </a>
          <a href="#testimonials" className="hover:text-charcoal transition">
            Reviews
          </a>
        </div>

        {/* CTA */}
        <a
          href="#download"
          className="btn-shimmer text-white text-sm font-bold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
        >
          Get the App
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════
   Hero
   ═══════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full border-2 border-coral/8 animate-pulse-soft" />
        <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-teal/8 animate-pulse-soft delay-200" />
        <div className="absolute w-[900px] h-[900px] rounded-full border-2 border-yellow/8 animate-pulse-soft delay-400" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left">
          {/* Logo */}
          <div className="mb-6 animate-bounce-in">
            <Image
              src="/images/logo-full.png"
              alt="HopCircle — A bunny hopping through a circle"
              width={120}
              height={120}
              className="mx-auto lg:mx-0"
              priority
            />
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight animate-fade-up">
            Playdates without
            <br />
            <span className="gradient-text">the awkward ask.</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-charcoal-light max-w-xl animate-fade-up delay-200">
            Your kid wants to play. Someone nearby wants to host.
            HopCircle makes the match — so you never have to cold-text a parent again.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-up delay-300">
            <a
              href="#download"
              className="btn-shimmer text-white font-heading font-bold text-base px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                <path d="M15.5 10.2c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-.7-.1-1.3.1-1.8.3-.3.1-.6.2-.9.2s-.5-.1-.8-.2c-.4-.2-1-.3-1.5-.3-1.6 0-3.2 1-4 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4.6 0 1-.2 1.5-.4.4-.2.9-.4 1.5-.4.5 0 1 .1 1.4.4.5.2.9.4 1.5.3 1.3 0 2.2-1.2 3-2.4.5-.7.9-1.5 1.1-2-.1 0-2.2-.8-2.2-3.3zM13.4 3c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.5-.6.7-1.1 1.9-1 3 1.1.1 2.1-.6 2.8-1.5z" />
              </svg>
              Download on the App Store
            </a>
            <a
              href="mailto:support@hopcircle.app?subject=Early%20Access%20Request&body=Hi%20HopCircle%20team%2C%0A%0AI'd%20love%20to%20join%20the%20early%20access%20TestFlight%20beta!%0A%0AThanks"
              className="text-coral font-semibold hover:underline text-sm"
            >
              Join Early Access on TestFlight →
            </a>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex-shrink-0 animate-slide-up delay-300">
          <ScreenshotMockup
            src="/images/screen-circles.png"
            alt="HopCircle app showing Open Circles nearby"
            size="large"
            className="animate-float-gentle"
          />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800">
        <div className="flex flex-col items-center gap-1 text-charcoal-light/40">
          <span className="text-xs">Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="1" y="1" width="14" height="22" rx="7" />
            <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Problem
   ═══════════════════════════════════════════════════════ */

function Problem() {
  return (
    <section className="py-20 md:py-28 px-6 relative">
      {/* Decorative family illustration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <Image
          src="/images/families.png"
          alt=""
          width={200}
          height={200}
          className="rotate-[-8deg]"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl leading-snug">
            &ldquo;I wish my kid had someone to play with this afternoon.&rdquo;
          </h2>
        </FadeIn>
        <FadeIn delay="delay-200">
          <p className="mt-6 text-lg text-charcoal-light leading-relaxed">
            You&apos;ve thought it a hundred times. Your kid&apos;s bored, you&apos;ve got a free afternoon,
            but texting another parent feels like... a lot. What if they&apos;re busy?
            What if it&apos;s weird?
          </p>
        </FadeIn>
        <FadeIn delay="delay-300">
          <p className="mt-4 text-lg text-charcoal-light leading-relaxed">
            So you don&apos;t ask. And your kid watches another screen instead.
          </p>
        </FadeIn>
        <FadeIn delay="delay-400">
          <p className="mt-6 text-xl font-heading font-bold text-coral">
            Not anymore.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   How It Works — with mini phone mockups
   ═══════════════════════════════════════════════════════ */

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post a Hop or Circle",
      desc: "Say your kid wants to play — or that you're free to host. Pick a date, time, and go.",
      screenshot: "/images/screen-post-fab.png",
      alt: "Posting a Hop or Circle in HopCircle",
    },
    {
      number: "02",
      title: "Get matched",
      desc: "HopCircle finds families at your school with matching availability and shared interests.",
      screenshot: "/images/screen-hop-detail.png",
      alt: "Accepting hoppers into your Circle in HopCircle",
    },
    {
      number: "03",
      title: "Kids play!",
      desc: "Confirm the playdate, chat with the parent, and your kids are playing by Saturday.",
      screenshot: "/images/screen-hopcircles.png",
      alt: "Managing playdates in the HopCircles calendar",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6 bg-white/60">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Just post. Just match. Just play.
            </h2>
            <p className="mt-3 text-charcoal-light max-w-lg mx-auto">
              Three steps to your kid&apos;s next playdate.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-20 md:space-y-28">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={`delay-${(i + 1) * 100}`}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Phone */}
                <div className="flex-shrink-0">
                  <ScreenshotMockup src={step.screenshot} alt={step.alt} size="medium" />
                </div>

                {/* Copy */}
                <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <span className="text-5xl md:text-6xl font-heading font-extrabold text-coral/15">
                    {step.number}
                  </span>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mt-2">{step.title}</h3>
                  <p className="mt-3 text-charcoal-light text-lg max-w-md">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay="delay-400">
          <p className="mt-16 text-center text-charcoal-light max-w-lg mx-auto">
            No awkward group chat. No favour-tracking.
            Just neighbours helping neighbours — one backyard at a time.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Features
   ═══════════════════════════════════════════════════════ */

function Features() {
  const features = [
    {
      icon: "/images/hop-bunny.png",
      title: "Hops & Circles",
      desc: "Post a Hop when your kid wants to play, or open a Circle when you're free to host. Two modes, one goal: more play.",
      color: "border-l-coral",
    },
    {
      icon: "/images/circle-ring.png",
      title: "Smart Matching",
      desc: "Matched by school, classroom, year group, shared interests, and availability. The right friends at the right time.",
      color: "border-l-teal",
    },
    {
      icon: "/images/chat-bubbles.png",
      title: "In-app Chat",
      desc: "Message other parents directly. Circle hosts get a group chat so everyone's on the same page.",
      color: "border-l-yellow",
    },
    {
      icon: "/images/families.png",
      title: "Safety First",
      desc: "Phone-verified parents only. School-based matching. Block and report tools. Your kids' safety is everything.",
      color: "border-l-green",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              Built for both sides of the couch.
            </h2>
            <p className="mt-3 text-charcoal-light max-w-lg mx-auto">
              Everything parents need. Nothing they don&apos;t.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={`delay-${(i + 1) * 100}`}>
              <div className={`card-hover bg-white rounded-2xl p-6 md:p-8 shadow-sm border-l-4 ${f.color}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-cream-dark flex items-center justify-center">
                    <Image src={f.icon} alt="" width={40} height={40} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-1.5">{f.title}</h3>
                    <p className="text-charcoal-light leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Extra value props */}
        <FadeIn delay="delay-500">
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⭐", label: "Favourites" },
              { icon: "🤝", label: "Mates" },
              { icon: "👨‍👩‍👧", label: "Co-parents" },
              { icon: "🇦🇺", label: "Made in Perth" },
            ].map((item) => (
              <div key={item.label} className="text-center bg-white/70 rounded-xl py-4 px-3">
                <div className="text-2xl mb-1">{item.icon}</div>
                <p className="text-sm font-medium text-charcoal-light">{item.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   App Showcase — horizontal phone carousel
   ═══════════════════════════════════════════════════════ */

function AppShowcase() {
  const screens = [
    { label: "Open Circles", sub: "Discover Circles near you", src: "/images/screen-circles.png" },
    { label: "Hoppers", sub: "Kids looking for playdates", src: "/images/screen-hoppers.png" },
    { label: "Circle Requests", sub: "Accept hoppers into your Circle", src: "/images/screen-hop-detail.png" },
    { label: "It's a HopCircle!", sub: "Confirmed — time to play!", src: "/images/screen-hopped-in.png" },
    { label: "Circle Detail", sub: "See who's hopping over", src: "/images/screen-open-circle.png" },
    { label: "Invitation Sent", sub: "They'll get a notification", src: "/images/screen-invitation-sent.png" },
    { label: "HopCircles", sub: "Calendar & upcoming playdates", src: "/images/screen-hopcircles.png" },
    { label: "Messages", sub: "Chat with families", src: "/images/screen-messages.png" },
    { label: "Families", sub: "Your school community", src: "/images/screen-families.png" },
    { label: "Family Detail", sub: "Invite to a Circle", src: "/images/screen-family-detail.png" },
    { label: "Post", sub: "Create a Hop or Circle", src: "/images/screen-post-fab.png" },
  ];

  return (
    <section id="app" className="py-20 md:py-28 bg-gradient-to-b from-white/60 to-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">
              See it in action.
            </h2>
            <p className="mt-3 text-charcoal-light">
              From browse to playdate — here&apos;s what the app feels like.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn>
        <div className="phone-carousel px-8 md:px-16">
          {screens.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <ScreenshotMockup src={s.src} alt={s.label} size="small" />
              <div className="mt-4 text-center">
                <p className="font-heading font-bold text-sm">{s.label}</p>
                <p className="text-xs text-charcoal-light mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="text-center mt-6 text-charcoal-light/40 text-xs md:hidden">
        ← Swipe to explore →
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Social Proof
   ═══════════════════════════════════════════════════════ */

function SocialProof() {
  const quotes = [
    {
      text: "I used it on Saturday and my daughter had a playdate within an hour.",
      author: "Mum of 2",
      school: "Quintilian School",
      border: "border-l-coral",
    },
    {
      text: "It's the app I didn't know I was waiting for. My son keeps asking me to check it.",
      author: "Dad of 1",
      school: "John XXIII College",
      border: "border-l-teal",
    },
    {
      text: "Finally something that isn't another WhatsApp group.",
      author: "TestFlight tester",
      school: "Claremont",
      border: "border-l-yellow",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 px-6 bg-cream-dark/50">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Perth parents are already hopping in.
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <FadeIn key={i} delay={`delay-${(i + 1) * 100}`}>
              <div
                className={`card-hover bg-white rounded-2xl p-6 shadow-sm text-left border-l-4 ${q.border}`}
                style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <span key={s} className="text-yellow text-sm">★</span>
                  ))}
                </div>
                <p className="text-charcoal leading-relaxed">&ldquo;{q.text}&rdquo;</p>
                <div className="mt-4">
                  <p className="text-sm font-medium text-charcoal">— {q.author}</p>
                  <p className="text-xs text-charcoal-light">{q.school}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay="delay-400">
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-charcoal-light">
            <span className="flex items-center gap-1.5">
              <Image src="/images/families.png" alt="" width={20} height={20} />
              Phone-verified parents
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/images/circle-ring.png" alt="" width={20} height={20} />
              12+ Perth schools
            </span>
            <span className="flex items-center gap-1.5">
              <Image src="/images/hop-bunny.png" alt="" width={20} height={20} />
              Built by a Perth dad
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Instagram Feed — Elfsight widget
   ═══════════════════════════════════════════════════════ */

function InstaFeed() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-heading font-bold text-2xl md:text-3xl">
            Follow the fun{" "}
            <a
              href="https://instagram.com/hopcircle.app"
              className="text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @hopcircle.app
            </a>
          </h2>
        </FadeIn>

        <FadeIn delay="delay-200">
          <div className="mt-10">
            <div
              className="elfsight-app-30f4fe4f-0b99-4d93-aad1-3425c7e3fe31"
              data-elfsight-app-lazy
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Final CTA
   ═══════════════════════════════════════════════════════ */

function FinalCTA() {
  return (
    <section
      id="download"
      className="py-20 md:py-28 px-6 bg-gradient-to-br from-coral to-coral-deep text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <FadeIn>
          <Image
            src="/images/logo-full.png"
            alt="HopCircle"
            width={80}
            height={80}
            className="mx-auto mb-6 drop-shadow-lg"
          />
        </FadeIn>
        <FadeIn delay="delay-100">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">
            Your kid&apos;s next playdate is one tap away.
          </h2>
        </FadeIn>
        <FadeIn delay="delay-200">
          <p className="mt-4 text-white/80 text-lg">
            Download HopCircle. Post your first Hop. Watch the weekend fill itself.
          </p>
        </FadeIn>
        <FadeIn delay="delay-300">
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-coral font-heading font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
              <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15.5 10.2c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-.7-.1-1.3.1-1.8.3-.3.1-.6.2-.9.2s-.5-.1-.8-.2c-.4-.2-1-.3-1.5-.3-1.6 0-3.2 1-4 2.5-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4.6 0 1-.2 1.5-.4.4-.2.9-.4 1.5-.4.5 0 1 .1 1.4.4.5.2.9.4 1.5.3 1.3 0 2.2-1.2 3-2.4.5-.7.9-1.5 1.1-2-.1 0-2.2-.8-2.2-3.3zM13.4 3c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.5-.6.7-1.1 1.9-1 3 1.1.1 2.1-.6 2.8-1.5z" />
              </svg>
              Download on the App Store
            </a>
          </div>
          <p className="mt-4 text-white/60 text-sm">Free on iOS. Made in Perth. 🇦🇺</p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   Footer
   ═══════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer className="py-10 px-6 bg-charcoal text-white/60">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/logo-mark.png"
              alt="HopCircle"
              width={28}
              height={28}
              className="rounded-md opacity-80"
            />
            <span className="font-heading font-bold text-white text-lg">HopCircle</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Use
            </a>
            <a
              href="mailto:support@hopcircle.app"
              className="hover:text-white transition"
            >
              Support
            </a>
            <a
              href="https://instagram.com/hopcircle.app"
              className="hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
          <span>Made with ☀️ in Perth · © 2026 HopCircle</span>
          <span className="text-white/40">Helping Perth kids find their next playdate</span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════
   Main Page
   ═══════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <AppShowcase />
      <SocialProof />
      <InstaFeed />
      <FinalCTA />
      <Footer />
    </main>
  );
}
