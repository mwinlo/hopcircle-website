"use client";

import Image from "next/image";

/* ════════════════════════════════════════════════════
   iPhone Mockup Frame — wraps children OR a screenshot
   ════════════════════════════════════════════════════ */

type PhoneSize = "large" | "medium" | "small";

const sizeClasses: Record<PhoneSize, string> = {
  large: "w-[280px] md:w-[300px]",
  medium: "w-[220px] md:w-[240px]",
  small: "w-[200px] md:w-[220px]",
};

const screenSizeClasses: Record<PhoneSize, string> = {
  large: "aspect-[9/19.5]",
  medium: "aspect-[9/19.5]",
  small: "aspect-[9/19.5]",
};

export function PhoneMockup({
  children,
  size = "large",
  className = "",
}: {
  children: React.ReactNode;
  size?: PhoneSize;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto ${sizeClasses[size]} ${className}`}>
      {/* Outer frame */}
      <div className="rounded-[44px] border-[5px] border-[#1a1a1a] bg-[#1a1a1a] p-[3px] shadow-2xl shadow-black/25 relative">
        {/* Side buttons */}
        <div className="absolute -left-[7px] top-[80px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[7px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -left-[7px] top-[178px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute -right-[7px] top-[140px] w-[3px] h-[70px] bg-[#2a2a2a] rounded-r-sm" />

        {/* Inner bezel */}
        <div className="rounded-[40px] overflow-hidden bg-[#F5F0EB] relative">
          {/* Screen content */}
          <div className={`${screenSizeClasses[size]} overflow-hidden`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screenshot inside iPhone frame — uses a real image
   ════════════════════════════════════════════════════ */

export function ScreenshotMockup({
  src,
  alt,
  size = "large",
  className = "",
}: {
  src: string;
  alt: string;
  size?: PhoneSize;
  className?: string;
}) {
  return (
    <PhoneMockup size={size} className={className}>
      <Image
        src={src}
        alt={alt}
        width={430}
        height={932}
        className="w-full h-full object-cover object-top"
        quality={90}
        priority={size === "large"}
      />
    </PhoneMockup>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Discovery / Browse
   ════════════════════════════════════════════════════ */

function DiscoveryCard({
  name,
  emoji,
  yearGroup,
  classroom,
  interests,
  slotType,
  slotLabel,
  spotsLeft,
  borderColor = "border-l-[#4ECDC4]",
}: {
  name: string;
  emoji: string;
  yearGroup: string;
  classroom: string;
  interests: { label: string; icon: string }[];
  slotType: "circle" | "hop";
  slotLabel: string;
  spotsLeft?: number;
  borderColor?: string;
}) {
  return (
    <div className={`bg-white rounded-[12px] p-3 shadow-sm border-l-[3px] ${borderColor}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ECDC4]/30 to-[#FF6B4A]/30 flex items-center justify-center text-sm">
            {emoji}
          </div>
          <div>
            <p className="font-bold text-[11px] text-[#2D2D2D]">{name}</p>
            <p className="text-[9px] text-[#555]">{yearGroup} · {classroom}</p>
          </div>
        </div>
        <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${
          slotType === "circle"
            ? "bg-[#4ECDC4]/15 text-[#4ECDC4]"
            : "bg-[#FF6B4A]/15 text-[#FF6B4A]"
        }`}>
          {slotType === "circle" ? "⭕" : "🐇"} {slotLabel}
        </span>
      </div>
      <div className="flex gap-1 mt-2 flex-wrap">
        {interests.map((i) => (
          <span key={i.label} className="text-[8px] bg-[#F5F0EB] text-[#555] px-1.5 py-0.5 rounded-full">
            {i.icon} {i.label}
          </span>
        ))}
      </div>
      {spotsLeft !== undefined && (
        <p className="text-[8px] text-[#4ECDC4] mt-1.5 font-medium">
          {spotsLeft} spot{spotsLeft !== 1 ? "s" : ""} left
        </p>
      )}
    </div>
  );
}

export function ScreenDiscovery() {
  return (
    <div className="bg-[#F5F0EB] min-h-full px-3 pb-4">
      {/* Greeting */}
      <div className="pt-2 pb-3">
        <p className="text-[10px] text-[#555]">Good morning</p>
        <p className="text-[14px] font-bold text-[#2D2D2D]" style={{ fontFamily: "Georgia, serif" }}>
          Sarah 👋
        </p>
      </div>

      {/* Segment toggle */}
      <div className="flex bg-white rounded-full p-0.5 mb-3 shadow-sm">
        <div className="flex-1 text-center text-[9px] font-bold py-1.5 rounded-full bg-[#4ECDC4] text-white">
          Circles
        </div>
        <div className="flex-1 text-center text-[9px] font-medium py-1.5 text-[#555]">
          Hops
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-2.5">
        <DiscoveryCard
          name="Liam C."
          emoji="⚽"
          yearGroup="Year 2"
          classroom="2B"
          interests={[
            { label: "Sports", icon: "⚽" },
            { label: "LEGO", icon: "🧱" },
            { label: "Cycling", icon: "🚲" },
          ]}
          slotType="hop"
          slotLabel="Sat 9am"
          borderColor="border-l-[#FF6B4A]"
        />
        <DiscoveryCard
          name="Anya P."
          emoji="🎨"
          yearGroup="Year 2"
          classroom="2A"
          interests={[
            { label: "Arts", icon: "🎨" },
            { label: "Music", icon: "🎵" },
            { label: "Dancing", icon: "💃" },
          ]}
          slotType="circle"
          slotLabel="Wed 3:30pm"
          spotsLeft={2}
        />
        <DiscoveryCard
          name="Chloe O."
          emoji="🏖"
          yearGroup="Year 2"
          classroom="2B"
          interests={[
            { label: "Swimming", icon: "🏊" },
            { label: "Arts", icon: "🎨" },
            { label: "Drama", icon: "🎭" },
          ]}
          slotType="circle"
          slotLabel="Fri 3pm"
          spotsLeft={3}
          borderColor="border-l-[#F5C342]"
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Match Notification
   ════════════════════════════════════════════════════ */

export function ScreenMatch() {
  return (
    <div className="bg-[#F5F0EB] min-h-full px-3 pb-4">
      <div className="pt-2 pb-2">
        <p className="text-[13px] font-bold text-[#2D2D2D] text-center" style={{ fontFamily: "Georgia, serif" }}>
          New Match! 🎯
        </p>
      </div>

      <div className="bg-white rounded-[14px] p-3.5 shadow-sm border-l-[3px] border-l-[#F5C342]">
        {/* Avatar + Name */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ECDC4]/40 to-[#FFD93D]/40 flex items-center justify-center text-lg">
            ⚽
          </div>
          <div>
            <p className="font-bold text-[13px] text-[#2D2D2D]">Liam Cooper</p>
            <p className="text-[10px] text-[#555]">Nedlands Primary · Year 2, 2B</p>
          </div>
        </div>

        {/* Match Score */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 h-2 bg-[#F5F0EB] rounded-full overflow-hidden">
            <div className="h-full w-[80%] bg-gradient-to-r from-[#4ECDC4] to-[#F5C342] rounded-full" />
          </div>
          <span className="text-[11px] font-bold text-[#F5C342]">80</span>
        </div>

        {/* Reasons */}
        <div className="space-y-1.5 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">🏫</span>
            <span className="text-[10px] text-[#2D2D2D]">Same classroom (2B)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">⚽</span>
            <span className="text-[10px] text-[#2D2D2D]">Loves Sports & LEGO</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">📅</span>
            <span className="text-[10px] text-[#2D2D2D]">Free Saturday morning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[9px]">⭐</span>
            <span className="text-[10px] text-[#2D2D2D]">In your Favourites</span>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-2 bg-[#FF6B4A] text-white text-[12px] font-bold rounded-full shadow-sm">
          We&apos;re in! 🎉
        </button>
      </div>

      {/* Time slot */}
      <div className="mt-3 bg-white rounded-[12px] p-3 shadow-sm">
        <p className="text-[10px] font-bold text-[#2D2D2D] mb-1">Available slot</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-[#2D2D2D]">Saturday</p>
            <p className="text-[9px] text-[#555]">10:00 am – 12:30 pm</p>
          </div>
          <span className="text-[8px] font-bold px-2 py-1 rounded-full bg-[#4ECDC4]/15 text-[#4ECDC4]">
            ⭕ Circle
          </span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Chat Thread
   ════════════════════════════════════════════════════ */

function ChatBubble({
  text,
  sender,
  isMine,
  time,
}: {
  text: string;
  sender: string;
  isMine: boolean;
  time: string;
}) {
  return (
    <div className={`flex flex-col ${isMine ? "items-end" : "items-start"} mb-2`}>
      {!isMine && <p className="text-[8px] text-[#555] mb-0.5 ml-1">{sender}</p>}
      <div
        className={`max-w-[85%] px-2.5 py-1.5 rounded-[10px] ${
          isMine
            ? "bg-[#4ECDC4] text-white rounded-br-[3px]"
            : "bg-white text-[#2D2D2D] rounded-bl-[3px] shadow-sm"
        }`}
      >
        <p className="text-[10px] leading-snug">{text}</p>
      </div>
      <p className="text-[7px] text-[#999] mt-0.5 mx-1">{time}</p>
    </div>
  );
}

export function ScreenChat() {
  return (
    <div className="bg-[#F5F0EB] min-h-full flex flex-col">
      {/* Chat header */}
      <div className="bg-white px-3 py-2 shadow-sm flex items-center gap-2">
        <span className="text-[10px]">←</span>
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4ECDC4]/30 to-[#FF6B4A]/30 flex items-center justify-center text-[10px]">
          J
        </div>
        <div>
          <p className="text-[11px] font-bold text-[#2D2D2D]">James Cooper</p>
          <p className="text-[8px] text-[#555]">Liam&apos;s parent</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-2.5 py-2 space-y-0.5">
        <ChatBubble
          text="Hi Sarah! Liam saw Oliver's Circle for Saturday and is super keen. Can he join?"
          sender="James"
          isMine={false}
          time="Mon 3:15pm"
        />
        <ChatBubble
          text="Of course! Oliver would love that. They're in the same class, right?"
          sender="Sarah"
          isMine={true}
          time="Mon 3:20pm"
        />
        <ChatBubble
          text="Yep, 2B! They sit together apparently 😄"
          sender="James"
          isMine={false}
          time="Mon 3:25pm"
        />
        <ChatBubble
          text="Just swimmers if it's warm — we've got a sprinkler in the backyard 💦"
          sender="Sarah"
          isMine={true}
          time="Tue 10:00am"
        />
        <ChatBubble
          text="Perfect, see you Saturday at 10! 🤙"
          sender="James"
          isMine={false}
          time="Today 2:30pm"
        />
      </div>

      {/* Input bar */}
      <div className="bg-white px-2.5 py-2 flex items-center gap-2">
        <div className="flex-1 bg-[#F5F0EB] rounded-full px-3 py-1.5 text-[9px] text-[#999]">
          Message...
        </div>
        <div className="w-6 h-6 rounded-full bg-[#4ECDC4] flex items-center justify-center">
          <span className="text-white text-[10px]">↑</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Circle Detail
   ════════════════════════════════════════════════════ */

export function ScreenCircleDetail() {
  return (
    <div className="bg-[#F5F0EB] min-h-full px-3 pb-4">
      {/* Header */}
      <div className="pt-2 pb-2 flex items-center gap-2">
        <span className="text-[10px]">←</span>
        <p className="text-[13px] font-bold text-[#2D2D2D]" style={{ fontFamily: "Georgia, serif" }}>
          Oliver&apos;s Saturday Circle
        </p>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-[14px] p-3.5 shadow-sm border-l-[3px] border-l-[#4ECDC4]">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[10px] text-[#555]">Saturday</p>
            <p className="text-[13px] font-bold text-[#2D2D2D]">10:00 am – 12:30 pm</p>
          </div>
          <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#F5C342]/20 text-[#D4A017]">
            Happening! ✨
          </span>
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[9px]">📍</span>
          <p className="text-[10px] text-[#555]">42 Stirling Hwy, Nedlands</p>
        </div>

        <p className="text-[10px] text-[#2D2D2D] bg-[#F5F0EB] rounded-lg p-2 mb-3">
          Backyard play + lunch. Bring swimmers if it&apos;s warm! ☀️
        </p>

        {/* Joined kids */}
        <p className="text-[9px] font-bold text-[#555] uppercase tracking-wider mb-2">
          Who&apos;s coming (3 / 4)
        </p>
        <div className="space-y-2">
          {[
            { name: "Oliver M.", label: "Host", color: "bg-[#4ECDC4]/15 text-[#4ECDC4]", emoji: "🏠" },
            { name: "Liam C.", label: "Confirmed", color: "bg-[#F5C342]/15 text-[#D4A017]", emoji: "⚽" },
            { name: "Chloe O.", label: "Accepted", color: "bg-[#FF6B4A]/15 text-[#FF6B4A]", emoji: "🏊" },
          ].map((kid) => (
            <div key={kid.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4ECDC4]/20 to-[#FF6B4A]/20 flex items-center justify-center text-[10px]">
                  {kid.emoji}
                </div>
                <p className="text-[10px] font-medium text-[#2D2D2D]">{kid.name}</p>
              </div>
              <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${kid.color}`}>
                {kid.label}
              </span>
            </div>
          ))}
        </div>

        {/* Spots */}
        <div className="mt-3 flex items-center gap-1">
          <div className="flex -space-x-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-[#4ECDC4]/30 border border-white" />
            ))}
            <div className="w-4 h-4 rounded-full border-2 border-dashed border-[#ccc]" />
          </div>
          <p className="text-[9px] text-[#4ECDC4] font-medium ml-1">1 spot left!</p>
        </div>
      </div>

      {/* Group Chat Preview */}
      <div className="mt-3 bg-white rounded-[12px] p-3 shadow-sm flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#4ECDC4]/15 flex items-center justify-center text-sm">
          💬
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-[#2D2D2D]">Circle Group Chat</p>
          <p className="text-[9px] text-[#555] truncate">James: Should we do a BBQ after?</p>
        </div>
        <div className="w-4 h-4 rounded-full bg-[#FF6B4A] flex items-center justify-center">
          <span className="text-white text-[7px] font-bold">2</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Create Hop / Circle
   ════════════════════════════════════════════════════ */

export function ScreenCreateHop() {
  return (
    <div className="bg-[#F5F0EB] min-h-full px-3 pb-4">
      <div className="pt-2 pb-3">
        <p className="text-[13px] font-bold text-[#2D2D2D] text-center" style={{ fontFamily: "Georgia, serif" }}>
          Post Availability
        </p>
      </div>

      {/* Hop / Circle toggle */}
      <div className="flex bg-white rounded-[12px] p-1 mb-3 shadow-sm">
        <div className="flex-1 text-center py-2 rounded-[10px] bg-[#FF6B4A] text-white">
          <p className="text-[10px] font-bold">🐇 Hop</p>
          <p className="text-[7px] opacity-80">Looking to play</p>
        </div>
        <div className="flex-1 text-center py-2 text-[#555]">
          <p className="text-[10px] font-bold">⭕ Circle</p>
          <p className="text-[7px]">Hosting kids</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-[14px] p-3.5 shadow-sm space-y-3">
        {/* Child picker */}
        <div>
          <p className="text-[9px] font-bold text-[#555] uppercase tracking-wider mb-1">Child</p>
          <div className="flex items-center gap-2 bg-[#F5F0EB] rounded-lg p-2">
            <div className="w-6 h-6 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center text-[10px]">O</div>
            <p className="text-[11px] font-medium text-[#2D2D2D]">Oliver</p>
            <span className="text-[9px] text-[#555] ml-auto">▼</span>
          </div>
        </div>

        {/* Date */}
        <div>
          <p className="text-[9px] font-bold text-[#555] uppercase tracking-wider mb-1">Date</p>
          <div className="flex gap-1.5 overflow-hidden">
            {["Thu", "Fri", "Sat", "Sun"].map((d, i) => (
              <div key={d} className={`flex-1 text-center py-1.5 rounded-lg ${
                i === 2 ? "bg-[#FF6B4A] text-white" : "bg-[#F5F0EB] text-[#555]"
              }`}>
                <p className="text-[8px]">{d}</p>
                <p className="text-[11px] font-bold">{22 + i}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Time */}
        <div>
          <p className="text-[9px] font-bold text-[#555] uppercase tracking-wider mb-1">Time</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-[#F5F0EB] rounded-lg px-2 py-1.5 text-center">
              <p className="text-[11px] font-medium text-[#2D2D2D]">10:00 am</p>
            </div>
            <span className="text-[10px] text-[#555]">→</span>
            <div className="flex-1 bg-[#F5F0EB] rounded-lg px-2 py-1.5 text-center">
              <p className="text-[11px] font-medium text-[#2D2D2D]">12:30 pm</p>
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <p className="text-[9px] font-bold text-[#555] uppercase tracking-wider mb-1">Notes</p>
          <div className="bg-[#F5F0EB] rounded-lg p-2">
            <p className="text-[10px] text-[#2D2D2D]">
              Oliver&apos;s keen for an active morning! ⚽
            </p>
          </div>
        </div>
      </div>

      {/* Submit */}
      <button className="w-full mt-3 py-2.5 bg-[#FF6B4A] text-white text-[12px] font-bold rounded-full shadow-sm">
        Post Hop 🐇
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Screen: Confirmed / Celebration
   ════════════════════════════════════════════════════ */

export function ScreenConfirmed() {
  return (
    <div className="bg-[#F5F0EB] min-h-full px-3 pb-4 flex flex-col items-center">
      {/* Celebration top area */}
      <div className="pt-6 pb-2 text-center">
        <div className="text-5xl mb-2">🎉</div>
        <p className="text-[16px] font-bold text-[#2D2D2D]" style={{ fontFamily: "Georgia, serif" }}>
          Playdate Confirmed!
        </p>
        <p className="text-[10px] text-[#555] mt-1">
          Oliver &amp; Liam are all set
        </p>
      </div>

      {/* Confetti dots */}
      <div className="relative w-full h-4 mb-2">
        {[
          "left-[10%] bg-[#FF6B4A]",
          "left-[25%] bg-[#4ECDC4]",
          "left-[40%] bg-[#FFD93D]",
          "left-[55%] bg-[#FF6B4A]",
          "left-[70%] bg-[#4ECDC4]",
          "left-[85%] bg-[#FFD93D]",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${pos}`}
            style={{ top: `${(i % 3) * 4}px` }}
          />
        ))}
      </div>

      {/* Playdate card */}
      <div className="bg-white rounded-[14px] p-3.5 shadow-sm w-full border-l-[3px] border-l-[#F5C342]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-[#F5C342]/20 text-[#D4A017]">
            Happening! ✨
          </span>
          <p className="text-[9px] text-[#555]">Saturday</p>
        </div>

        {/* Kids */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center text-lg mx-auto">🏊</div>
            <p className="text-[10px] font-bold text-[#2D2D2D] mt-1">Oliver</p>
          </div>
          <div className="text-xl text-[#F5C342]">🤝</div>
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-[#FF6B4A]/20 flex items-center justify-center text-lg mx-auto">⚽</div>
            <p className="text-[10px] font-bold text-[#2D2D2D] mt-1">Liam</p>
          </div>
        </div>

        <div className="space-y-1.5 text-[10px] text-[#2D2D2D]">
          <div className="flex items-center gap-1.5">
            <span>🕐</span>
            <span>10:00 am – 12:30 pm</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>📍</span>
            <span>42 Stirling Hwy, Nedlands</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span>🏠</span>
            <span>Hosted by Sarah (Mitchell Family)</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="w-full mt-3 space-y-2">
        <button className="w-full py-2 bg-[#4ECDC4] text-white text-[11px] font-bold rounded-full">
          Message James 💬
        </button>
        <button className="w-full py-2 bg-white text-[#2D2D2D] text-[11px] font-medium rounded-full shadow-sm border border-[#eee]">
          Add to Calendar 📅
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   Brand Image Helper
   ════════════════════════════════════════════════════ */

export function BrandImage({
  src,
  alt,
  className = "",
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      quality={90}
    />
  );
}
