import Image from "next/image";

export const SITE_NAME = "coffee.with.crafts";

export function SectionTitle({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.5em] text-[#b8763a]">
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-light leading-tight md:text-5xl ${
          dark ? "text-[#faf3e8]" : "text-[#2b1810]"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#b8763a] to-transparent" />
      {text && (
        <p className={`mt-6 ${dark ? "text-[#cdb79c]" : "text-[#8a6f5a]"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#1a0f0a] to-[#2b1810]"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#b8763a]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#b8763a]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-20 md:grid-cols-2 md:pb-32 md:pt-28">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[#d9a066]">
            Coffee Shop &amp; Handmade Cards
          </p>
          <h1 className="mt-6 text-5xl font-light leading-[1.05] text-[#faf3e8] md:text-7xl">
            Sip Slowly. <span className="italic text-[#e7c9a0]">Craft</span>{" "}
            Something Beautiful.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-[#cdb79c]">
            Freshly brewed coffee and lovingly handmade cards, together in one
            cozy corner. Order your favourite cup and a card to go with it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#order"
              className="rounded-full bg-gradient-to-r from-[#b8763a] to-[#d9a066] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90"
            >
              Order Now
            </a>
            <a
              href="#about"
              className="rounded-full border border-[#d9a066]/60 px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c9a0] transition hover:bg-[#d9a066]/10"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative h-[32rem] overflow-hidden rounded-t-full border border-[#d9a066]/40 bg-[#3b2214]">
            <Image
              src="/images/black-coffee.jpg"
              alt="Steaming cup of black coffee"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/60 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-2 bottom-20 h-40 w-28 -rotate-12 overflow-hidden rounded-md border-4 border-[#faf3e8] shadow-2xl md:-left-10">
            <Image
              src="/images/balloon-popup-card.jpg"
              alt="Hot air balloon pop-up card"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-2 bottom-28 h-40 w-28 rotate-12 overflow-hidden rounded-md border-4 border-[#faf3e8] shadow-2xl md:-right-10">
            <Image
              src="/images/friend-card.jpg"
              alt="Handmade friend card with daisies"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#d9a066]/50 bg-[#1a0f0a] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#e7c9a0]">
            Brewed fresh · Made by hand
          </div>
        </div>
      </div>
    </section>
  );
}

export function Highlights() {
  const items = [
    { icon: "☕", title: "Freshly Brewed", text: "Every cup made to order" },
    { icon: "✂️", title: "100% Handmade", text: "Cards crafted with care" },
    { icon: "🎁", title: "Gift Combos", text: "Coffee and card together" },
    { icon: "💌", title: "Custom Orders", text: "Personal messages and designs" },
  ];
  return (
    <div className="border-y border-[#b8763a]/30 bg-[#f1e3cb]">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2b1810] text-2xl">
              {i.icon}
            </span>
            <div>
              <p className="font-semibold text-[#2b1810]">{i.title}</p>
              <p className="text-sm text-[#8a6f5a]">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  const points = [
    { value: "100%", label: "Handmade cards" },
    { value: "Daily", label: "Fresh brewing" },
    { value: "Custom", label: "Designs on request" },
  ];
  return (
    <section id="about" className="bg-[#faf3e8] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative h-[28rem]">
          <div className="relative h-full overflow-hidden rounded-3xl">
            <Image
              src="/images/latte-art.jpg"
              alt="Two cups of latte art"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-2 h-44 w-36 rotate-6 overflow-hidden rounded-md border-4 border-[#faf3e8] shadow-2xl md:-right-6">
            <Image
              src="/images/birthday-kraft-card.jpg"
              alt="Handmade birthday card"
              fill
              sizes="150px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[#b8763a]">
            Our Story
          </p>
          <h2 className="mt-4 text-4xl font-light leading-tight text-[#2b1810] md:text-5xl">
            Two Loves, <span className="italic text-[#b8763a]">One Cozy</span>{" "}
            Corner
          </h2>
          <div className="mt-6 h-px w-24 bg-[#b8763a]" />
          <p className="mt-8 leading-relaxed text-[#6f4e37]">
            {SITE_NAME} started with two simple loves: a really good cup of
            coffee and a card made by hand. One warms the morning, the other
            warms a heart, so we decided to bring them together.
          </p>
          <p className="mt-5 leading-relaxed text-[#6f4e37]">
            Here you can enjoy a perfectly brewed drink, and take home a card
            that says exactly what you feel, whether it is for a birthday, a
            thank you or just because.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[#b8763a]/30 pt-8">
            {points.map((p) => (
              <div key={p.label}>
                <p className="text-2xl font-light text-[#b8763a]">{p.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#8a6f5a]">
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const reasons = [
    {
      icon: "✂️",
      title: "Made by Hand, Not by Machine",
      text: "Every card is cut, folded and finished by hand, so no two are exactly alike.",
    },
    {
      icon: "☕",
      title: "Fresh in Every Cup",
      text: "Your coffee is brewed to order, so each sip tastes warm, rich and fresh.",
    },
    {
      icon: "💝",
      title: "A Gift That Feels Personal",
      text: "Pair a card with your favourite coffee and add your own message for someone special.",
    },
    {
      icon: "🌿",
      title: "Pause, Sip and Create",
      text: "A calm cup and a little creativity can turn an ordinary day into a beautiful one.",
    },
    {
      icon: "🤍",
      title: "Small Shop, Big Heart",
      text: "Every order supports local craft and is prepared with real care and a smile.",
    },
  ];
  return (
    <section id="why" className="bg-[#2b1810] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          dark
          eyebrow="Why You Will Love Us"
          title="Five Reasons to Stay a While"
          text="Good coffee and good cards have one thing in common: they are made with care."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`rounded-3xl border border-[#d9a066]/25 bg-[#1a0f0a] p-8 transition hover:-translate-y-1 hover:border-[#d9a066] ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#b8763a]/20 text-2xl">
                {r.icon}
              </span>
              <h3 className="mt-6 text-xl text-[#faf3e8]">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#cdb79c]">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Signature() {
  const drinks = [
    {
      image: "/images/iced-caramel.jpg",
      name: "Iced Caramel Macchiato",
      text: "Cold milk, bold espresso and ribbons of golden caramel over ice.",
    },
    {
      image: "/images/iced-latte.jpg",
      name: "Iced Latte",
      text: "Smooth chilled espresso over creamy milk, refreshing and light.",
    },
    {
      image: "/images/latte-art.jpg",
      name: "Classic Latte",
      text: "Silky steamed milk and fresh espresso, finished with latte art.",
    },
  ];
  return (
    <section id="drinks" className="bg-[#f1e3cb] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Signature Drinks"
          title="Made to Be Savoured"
          text="A few of the cups our guests keep coming back for."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {drinks.map((d) => (
            <div
              key={d.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl text-[#2b1810]">{d.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8a6f5a]">
                  {d.text}
                </p>
                <a
                  href="#order"
                  className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#b8763a]"
                >
                  Order now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const tiles = [
    { src: "/images/latte-art.jpg", label: "Fresh latte moments", big: true },
    { src: "/images/balloon-popup-card.jpg", label: "Hot air balloon pop-up card" },
    { src: "/images/iced-caramel.jpg", label: "Iced caramel macchiato" },
    { src: "/images/bouquet-cards.jpg", label: "Paper bouquet cards" },
    { src: "/images/popcorn-card.jpg", label: "Popcorn surprise card" },
    { src: "/images/birthday-box.jpg", label: "Birthday explosion box" },
    { src: "/images/friend-card.jpg", label: "Pressed flower friend card" },
    { src: "/images/blue-foil-card.jpg", label: "Blue foil floral card" },
    { src: "/images/flower-popup-card.jpg", label: "Wildflower pop-up card" },
  ];
  return (
    <section id="gallery" className="bg-[#faf3e8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Gallery"
          title="Little Moments, Beautifully Made"
          text="A peek at the cups and creations that come out of our cozy corner."
        />
        <div className="mt-16 grid auto-rows-[12rem] grid-cols-2 gap-4 md:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`group relative overflow-hidden rounded-3xl bg-[#e7d3b5] ${
                t.big ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes={t.big ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm text-white">{t.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KnowCoffee() {
  const guides = [
    {
      src: "/images/coffee-guide.jpg",
      title: "A Guide to Coffee",
      text: "From espresso to mocha, see how every cup is made.",
    },
    {
      src: "/images/coffee-menu.jpg",
      title: "Coffee Styles We Love",
      text: "Hot, iced and dessert style cups for every mood.",
    },
    {
      src: "/images/coffee-beans.jpg",
      title: "Know Your Beans",
      text: "Arabica, Robusta, Liberica and Excelsa: four beans, four flavours.",
    },
  ];
  return (
    <section id="guide" className="bg-[#f1e3cb] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Coffee Corner"
          title="Know Your Coffee"
          text="A quick guide to the cups and beans behind your favourite drink."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {guides.map((g) => (
            <div
              key={g.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm"
            >
              <div className="relative h-[28rem] bg-[#e7d3b5]">
                <Image
                  src={g.src}
                  alt={g.title}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-[#2b1810]">{g.title}</h3>
                <p className="mt-2 text-sm text-[#8a6f5a]">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Quote() {
  return (
    <section className="bg-gradient-to-r from-[#b8763a] to-[#d9a066] px-6 py-24 text-center">
      <p className="text-5xl text-white/60">&ldquo;</p>
      <p className="mx-auto max-w-3xl text-3xl font-light italic leading-snug text-white md:text-5xl">
        Good coffee warms the morning. A handmade card warms a heart.
      </p>
      <p className="mt-8 text-xs uppercase tracking-[0.4em] text-white/80">
        {SITE_NAME}
      </p>
    </section>
  );
}

export function CardsShowcase() {
  const cards = [
    { src: "/images/birthday-kraft-card.jpg", title: "Birthday", text: "Warm, joyful cards for every age." },
    { src: "/images/balloon-popup-card.jpg", title: "Pop-up", text: "Cards that open into a surprise." },
    { src: "/images/friend-card.jpg", title: "Thank You", text: "Soft floral cards to say thanks." },
    { src: "/images/blue-foil-card.jpg", title: "Festive", text: "Foil and florals for celebrations." },
  ];
  return (
    <section id="cards" className="bg-[#2b1810] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          dark
          eyebrow="Craft Cards"
          title="Words Made Beautiful, By Hand"
          text="Every card is cut, folded and finished by hand, and can be personalised for you."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group overflow-hidden rounded-3xl border border-[#d9a066]/25 bg-[#1a0f0a] transition hover:border-[#d9a066]"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={c.src}
                  alt={c.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl text-[#faf3e8]">{c.title}</h3>
                <p className="mt-2 text-sm text-[#cdb79c]">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href="#order"
            className="inline-block rounded-full border border-[#d9a066] px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c9a0] transition hover:bg-[#d9a066] hover:text-[#1a0f0a]"
          >
            Shop Craft Cards
          </a>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    { icon: "🛍️", title: "Choose", text: "Pick your coffee, a card or a gift combo." },
    { icon: "✍️", title: "Personalise", text: "Add a card message or a special request." },
    { icon: "✅", title: "Place Order", text: "Tell us your name and how you would like to receive it." },
    { icon: "🎉", title: "Enjoy", text: "Pick up, dine in or share the gift with someone special." },
  ];
  return (
    <section id="how" className="bg-[#faf3e8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="How It Works" title="Four Easy Steps" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl border border-[#b8763a]/25 bg-white p-8 text-center"
            >
              <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#b8763a] text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="text-4xl">{s.icon}</p>
              <h3 className="mt-4 text-xl text-[#2b1810]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8a6f5a]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: "Ayesha T.",
      text: "The coffee was perfect and the birthday card I ordered made my friend cry happy tears. Beautifully done.",
    },
    {
      name: "Bilal H.",
      text: "I ordered a coffee and card combo as a surprise. The packaging was lovely and the card felt truly special.",
    },
    {
      name: "Hira S.",
      text: "Cozy place, delicious latte, and the handmade cards are the best I have seen. I come back every week.",
    },
  ];
  return (
    <section id="reviews" className="bg-[#f1e3cb] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Kind Words" title="Loved by Our Guests" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <p className="tracking-widest text-[#b8763a]">★★★★★</p>
              <p className="mt-5 italic leading-relaxed text-[#6f4e37]">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="mt-6 border-t border-[#b8763a]/20 pt-4 font-semibold text-[#2b1810]">
                {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const hours = [
    { day: "Monday to Friday", time: "9:00 AM to 11:00 PM" },
    { day: "Saturday", time: "9:00 AM to 12:00 AM" },
    { day: "Sunday", time: "10:00 AM to 11:00 PM" },
  ];
  const ways = [
    { icon: "🪑", title: "Dine In", text: "Relax in a cozy corner with your cup." },
    { icon: "🥡", title: "Take Away", text: "Grab your coffee and card on the go." },
    { icon: "🎁", title: "Gift Orders", text: "Send a combo to someone you love." },
  ];
  return (
    <section id="visit" className="bg-[#2b1810] py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-[#d9a066]">
            Visit Us
          </p>
          <h2 className="mt-4 text-4xl font-light leading-tight text-[#faf3e8] md:text-5xl">
            Come Say <span className="italic text-[#e7c9a0]">Hello</span>
          </h2>
          <div className="mt-6 h-px w-24 bg-[#d9a066]" />
          <div className="mt-10 divide-y divide-[#d9a066]/20 border-y border-[#d9a066]/20">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between py-4">
                <span className="text-[#cdb79c]">{h.day}</span>
                <span className="text-[#faf3e8]">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          {ways.map((w) => (
            <div
              key={w.title}
              className="flex items-center gap-5 rounded-3xl border border-[#d9a066]/25 bg-[#1a0f0a] p-6"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#b8763a]/20 text-3xl">
                {w.icon}
              </span>
              <div>
                <h3 className="text-xl text-[#faf3e8]">{w.title}</h3>
                <p className="text-sm text-[#cdb79c]">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const explore = [
    { label: "Our Story", href: "#about" },
    { label: "Drinks", href: "#drinks" },
    { label: "Craft Cards", href: "#cards" },
    { label: "Order", href: "#order" },
  ];
  const more = [
    { label: "Gallery", href: "#gallery" },
    { label: "How It Works", href: "#how" },
    { label: "Visit Us", href: "#visit" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <footer className="border-t border-[#d9a066]/30 bg-[#140a06] pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-2xl text-[#faf3e8]">
            coffee.<span className="text-[#d9a066]">with</span>.crafts
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#cdb79c]">
            Freshly brewed coffee and handmade cards, made with love and served
            with a smile.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#d9a066]">
            Explore
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[#cdb79c]">
            {explore.map((e) => (
              <li key={e.label}>
                <a href={e.href} className="hover:text-[#e7c9a0]">
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#d9a066]">
            More
          </p>
          <ul className="mt-5 space-y-3 text-sm text-[#cdb79c]">
            {more.map((e) => (
              <li key={e.label}>
                <a href={e.href} className="hover:text-[#e7c9a0]">
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[#d9a066]/15 py-6 text-center text-xs uppercase tracking-[0.25em] text-[#8a6f5a]">
        © 2026 {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}