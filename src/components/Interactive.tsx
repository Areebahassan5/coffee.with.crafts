"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionTitle, SITE_NAME } from "./Sections";

// Apna WhatsApp number yahan likhein (country code ke sath, bina + ke), jaise "923001234567".
// Khali rakhenge to order sirf screen par summary dikhayega.
const WHATSAPP_NUMBER = "";

/* ---------------- Navbar ---------------- */

const links = [
  { label: "Our Story", href: "#about" },
  { label: "Drinks", href: "#drinks" },
  { label: "Cards", href: "#cards" },
  { label: "Order", href: "#order" },
  { label: "Visit", href: "#visit" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9a066]/25 bg-[#1a0f0a]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="text-xl text-[#faf3e8] md:text-2xl">
          coffee.<span className="text-[#d9a066]">with</span>.crafts
        </a>

        <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.25em] text-[#cdb79c] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-[#e7c9a0]">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#order"
          className="hidden rounded-full bg-gradient-to-r from-[#b8763a] to-[#d9a066] px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:opacity-90 md:block"
        >
          Order Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-[#e7c9a0] md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#d9a066]/25 bg-[#1a0f0a] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5 text-sm uppercase tracking-[0.25em] text-[#cdb79c]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#e7c9a0]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Order / Shop ---------------- */

type Item = {
  id: string;
  type: "Coffee" | "Card" | "Combo";
  category: string;
  name: string;
  desc: string;
  price: number;
  emoji: string;
  gradient: string;
  image?: string;
};

const items: Item[] = [
  // Coffee
  { id: "c1", type: "Coffee", category: "Espresso", name: "Single Espresso", desc: "Pure, bold and aromatic.", price: 350, emoji: "☕", gradient: "from-[#3b2214] to-[#7c4a21]" },
  { id: "c2", type: "Coffee", category: "Espresso", name: "Americano", desc: "Espresso lengthened with hot water.", price: 400, emoji: "☕", gradient: "from-[#2b1810] to-[#6f4e37]", image: "/images/black-coffee.jpg" },
  { id: "c3", type: "Coffee", category: "Milk Coffee", name: "Cappuccino", desc: "Equal parts espresso, milk and foam.", price: 550, emoji: "☕", gradient: "from-[#7c4a21] to-[#e7c9a0]" },
  { id: "c4", type: "Coffee", category: "Milk Coffee", name: "Classic Latte", desc: "Smooth espresso with silky steamed milk.", price: 580, emoji: "🥛", gradient: "from-[#a0703f] to-[#f1e3cb]", image: "/images/latte-art.jpg" },
  { id: "c5", type: "Coffee", category: "Milk Coffee", name: "Iced Caramel Macchiato", desc: "Milk, espresso and caramel drizzle over ice.", price: 650, emoji: "🍮", gradient: "from-[#92400e] to-[#fbbf24]", image: "/images/iced-caramel.jpg" },
  { id: "c6", type: "Coffee", category: "Milk Coffee", name: "Cafe Mocha", desc: "Espresso with chocolate and steamed milk.", price: 620, emoji: "🍫", gradient: "from-[#3b1d12] to-[#a0522d]" },
  { id: "c7", type: "Coffee", category: "Cold Coffee", name: "Iced Latte", desc: "Chilled espresso over milk and ice.", price: 600, emoji: "🧊", gradient: "from-[#475569] to-[#cbd5e1]", image: "/images/iced-latte.jpg" },
  { id: "c8", type: "Coffee", category: "Cold Coffee", name: "Slow Cold Brew", desc: "Steeped for hours, smooth and sweet.", price: 580, emoji: "🧊", gradient: "from-[#1f2937] to-[#6b7280]" },
  { id: "c9", type: "Coffee", category: "Cold Coffee", name: "Coffee Frappe", desc: "Thick, creamy and blended with ice.", price: 700, emoji: "🥤", gradient: "from-[#78350f] to-[#fcd34d]" },
  { id: "c10", type: "Coffee", category: "Specials", name: "Hazelnut Latte", desc: "Nutty, warm and comforting.", price: 680, emoji: "🌰", gradient: "from-[#7c2d12] to-[#fdba74]" },
  { id: "c11", type: "Coffee", category: "Specials", name: "Craft Signature Mocha", desc: "Our house special with dark chocolate.", price: 750, emoji: "✨", gradient: "from-[#451a03] to-[#b8763a]" },

  // Cards
  { id: "k1", type: "Card", category: "Birthday", name: "Birthday Kraft Card", desc: "Kraft paper, pink details and a heart tag.", price: 450, emoji: "🎂", gradient: "from-[#e11d48] to-[#fb923c]", image: "/images/birthday-kraft-card.jpg" },
  { id: "k2", type: "Card", category: "Birthday", name: "Hot Air Balloon Pop-up Card", desc: "A 3D balloon that rises when opened.", price: 900, emoji: "🎈", gradient: "from-[#db2777] to-[#fbbf24]", image: "/images/balloon-popup-card.jpg" },
  { id: "k3", type: "Card", category: "Birthday", name: "Birthday Explosion Box", desc: "A box that opens into a cake, photos and messages.", price: 1500, emoji: "🎁", gradient: "from-[#0ea5e9] to-[#bae6fd]", image: "/images/birthday-box.jpg" },
  { id: "k4", type: "Card", category: "Birthday", name: "Popcorn Surprise Card", desc: "A funny, cheerful card with paper popcorn.", price: 600, emoji: "🍿", gradient: "from-[#dc2626] to-[#fde68a]", image: "/images/popcorn-card.jpg" },
  { id: "k5", type: "Card", category: "Thank You", name: "Pressed Flower Friend Card", desc: "Dried daisies, lace and a tiny wax seal.", price: 450, emoji: "🌸", gradient: "from-[#7c3aed] to-[#f472b6]", image: "/images/friend-card.jpg" },
  { id: "k6", type: "Card", category: "Thank You", name: "Paper Bouquet Cards (Set of 4)", desc: "Four cards with hand cut paper flowers.", price: 1400, emoji: "💐", gradient: "from-[#be185d] to-[#fbcfe8]", image: "/images/bouquet-cards.jpg" },
  { id: "k7", type: "Card", category: "Festive", name: "Blue Foil Floral Card", desc: "A fancy fold card with shiny blue flowers.", price: 800, emoji: "🌙", gradient: "from-[#1e3a8a] to-[#818cf8]", image: "/images/blue-foil-card.jpg" },
  { id: "k8", type: "Card", category: "Love", name: "Wildflower Pop-up Card", desc: "Hand coloured flowers that pop out of the card.", price: 750, emoji: "🌻", gradient: "from-[#9f1239] to-[#fda4af]", image: "/images/flower-popup-card.jpg" },
  { id: "k9", type: "Card", category: "Love", name: "Motivation Tickets Box", desc: "Pull a ticket full of sweet messages.", price: 1200, emoji: "🎟️", gradient: "from-[#db2777] to-[#fbcfe8]", image: "/images/motivation-tickets.jpg" },
  { id: "k10", type: "Card", category: "Love", name: "Custom Name Card", desc: "Your name or message, hand lettered.", price: 700, emoji: "🖋️", gradient: "from-[#4338ca] to-[#c4b5fd]" },

  // Combos
  { id: "b1", type: "Combo", category: "Gift Combos", name: "Coffee & Card Duo", desc: "Any latte with any card up to Rs. 600.", price: 1100, emoji: "🎁", gradient: "from-[#b8763a] to-[#e7c9a0]", image: "/images/latte-art.jpg" },
  { id: "b2", type: "Combo", category: "Gift Combos", name: "Birthday Surprise Box", desc: "Two coffees with a pop-up birthday card.", price: 2000, emoji: "🎂", gradient: "from-[#e11d48] to-[#fbbf24]", image: "/images/balloon-popup-card.jpg" },
  { id: "b3", type: "Combo", category: "Gift Combos", name: "Thank You Treat", desc: "An iced latte with a pressed flower card.", price: 900, emoji: "🌷", gradient: "from-[#7c3aed] to-[#f9a8d4]", image: "/images/friend-card.jpg" },
  { id: "b4", type: "Combo", category: "Gift Combos", name: "Sweet Love Set", desc: "Two mochas with a wildflower pop-up card.", price: 1800, emoji: "💞", gradient: "from-[#9f1239] to-[#fda4af]", image: "/images/flower-popup-card.jpg" },
];

const tabs: { type: Item["type"]; label: string }[] = [
  { type: "Coffee", label: "Coffee Menu" },
  { type: "Card", label: "Craft Cards" },
  { type: "Combo", label: "Gift Combos" },
];

function money(n: number) {
  return "Rs. " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function Shop() {
  const [tab, setTab] = useState<Item["type"]>("Coffee");
  const [cat, setCat] = useState("All");
  const [qty, setQty] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [mode, setMode] = useState("Pickup");
  const [notes, setNotes] = useState("");
  const [placed, setPlaced] = useState(false);

  const tabItems = items.filter((i) => i.type === tab);
  const categories = ["All", ...Array.from(new Set(tabItems.map((i) => i.category)))];
  const visible = cat === "All" ? tabItems : tabItems.filter((i) => i.category === cat);

  const lines = items.filter((i) => (qty[i.id] ?? 0) > 0);
  const count = lines.reduce((s, i) => s + (qty[i.id] ?? 0), 0);
  const total = lines.reduce((s, i) => s + i.price * (qty[i.id] ?? 0), 0);

  const change = (id: string, amount: number) =>
    setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + amount) }));

  const changeTab = (t: Item["type"]) => {
    setTab(t);
    setCat("All");
  };

  const place = (e: React.FormEvent) => {
    e.preventDefault();
    if (count === 0) return;

    if (WHATSAPP_NUMBER) {
      const list = lines
        .map(
          (i) =>
            `${qty[i.id]} x ${i.name} (${money(i.price * (qty[i.id] ?? 0))})`
        )
        .join("\n");
      const text = `Hello ${SITE_NAME}! New order\n\nName: ${name}\nType: ${mode}\n\n${list}\n\nTotal: ${money(total)}${
        notes ? `\n\nNote: ${notes}` : ""
      }`;
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }

    setPlaced(true);
  };

  const reset = () => {
    setQty({});
    setName("");
    setNotes("");
    setMode("Pickup");
    setPlaced(false);
  };

  const field =
    "w-full rounded-xl border border-[#b8763a]/30 bg-white px-4 py-3 text-[#2b1810] outline-none focus:border-[#b8763a]";

  return (
    <section id="order" className="bg-[#faf3e8] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Order Online"
          title="Build Your Perfect Order"
          text="Add coffee, handmade cards or a gift combo, then place your order below."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {tabs.map((t) => (
            <button
              key={t.type}
              onClick={() => changeTab(t.type)}
              className={`rounded-full border px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                tab === t.type
                  ? "border-[#2b1810] bg-[#2b1810] text-[#faf3e8]"
                  : "border-[#b8763a]/40 text-[#6f4e37] hover:border-[#2b1810]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.15em] transition ${
                cat === c
                  ? "bg-[#b8763a] text-white"
                  : "bg-[#f1e3cb] text-[#6f4e37] hover:bg-[#e7d3b5]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
            {visible.map((i) => {
              const q = qty[i.id] ?? 0;
              return (
                <div
                  key={i.id}
                  className="overflow-hidden rounded-3xl border border-[#b8763a]/20 bg-white transition hover:shadow-lg"
                >
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${i.gradient}`}
                  >
                    {i.image ? (
                      <Image
                        src={i.image}
                        alt={i.name}
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-6xl">{i.emoji}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-[#b8763a]">
                      {i.category}
                    </p>
                    <h3 className="mt-2 text-xl text-[#2b1810]">{i.name}</h3>
                    <p className="mt-1 text-sm text-[#8a6f5a]">{i.desc}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-lg font-semibold text-[#2b1810]">
                        {money(i.price)}
                      </span>
                      {q === 0 ? (
                        <button
                          onClick={() => change(i.id, 1)}
                          className="rounded-full bg-[#2b1810] px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#faf3e8] hover:bg-[#b8763a]"
                        >
                          Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => change(i.id, -1)}
                            className="h-8 w-8 rounded-full border border-[#b8763a] text-[#b8763a] hover:bg-[#b8763a] hover:text-white"
                          >
                            −
                          </button>
                          <span className="w-4 text-center font-semibold">{q}</span>
                          <button
                            onClick={() => change(i.id, 1)}
                            className="h-8 w-8 rounded-full bg-[#b8763a] text-white hover:bg-[#2b1810]"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="your-order" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-[#2b1810] p-8 text-[#faf3e8] shadow-xl">
              <h3 className="text-2xl">Your Order</h3>
              <div className="mt-3 h-px w-16 bg-[#d9a066]" />

              {placed ? (
                <div className="mt-6">
                  <p className="text-4xl">🎉</p>
                  <p className="mt-3 text-xl">Thank you, {name}!</p>
                  <p className="mt-2 text-sm text-[#cdb79c]">
                    {WHATSAPP_NUMBER
                      ? "WhatsApp has opened with your order. Please press Send there to confirm it."
                      : `Your order summary is ready (${mode}).`}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm">
                    {lines.map((i) => (
                      <li key={i.id} className="flex justify-between gap-4">
                        <span>
                          {qty[i.id]} × {i.name}
                        </span>
                        <span>{money(i.price * (qty[i.id] ?? 0))}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex justify-between border-t border-[#d9a066]/30 pt-4 text-lg">
                    <span>Total</span>
                    <span className="text-[#e7c9a0]">{money(total)}</span>
                  </div>
                  {notes && (
                    <p className="mt-4 rounded-xl bg-white/10 p-3 text-sm text-[#cdb79c]">
                      Note: {notes}
                    </p>
                  )}
                  <button
                    onClick={reset}
                    className="mt-6 w-full rounded-full border border-[#d9a066] py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c9a0] hover:bg-[#d9a066] hover:text-[#1a0f0a]"
                  >
                    Start a New Order
                  </button>
                </div>
              ) : (
                <form onSubmit={place} className="mt-6">
                  {lines.length === 0 ? (
                    <p className="rounded-xl bg-white/10 p-4 text-sm text-[#cdb79c]">
                      Your order is empty. Add something delicious to begin.
                    </p>
                  ) : (
                    <ul className="space-y-3 text-sm">
                      {lines.map((i) => (
                        <li key={i.id} className="flex items-start justify-between gap-4">
                          <span>
                            {qty[i.id]} × {i.name}
                          </span>
                          <span className="shrink-0 text-[#e7c9a0]">
                            {money(i.price * (qty[i.id] ?? 0))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex justify-between border-t border-[#d9a066]/30 pt-4 text-lg">
                    <span>Total</span>
                    <span className="text-[#e7c9a0]">{money(total)}</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className={field}
                    />
                    <select
                      value={mode}
                      onChange={(e) => setMode(e.target.value)}
                      className={field}
                    >
                      <option>Pickup</option>
                      <option>Dine In</option>
                      <option>Delivery</option>
                    </select>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Card message or special request (optional)"
                      className={field}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={count === 0}
                    className="mt-6 w-full rounded-full bg-gradient-to-r from-[#b8763a] to-[#d9a066] py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Place Order
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {count > 0 && !placed && (
        <a
          href="#your-order"
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-[#b8763a] px-8 py-3 text-sm font-semibold text-white shadow-xl lg:hidden"
        >
          View Order ({count}) · {money(total)}
        </a>
      )}
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "How do I order coffee and cards together?",
    a: "Add any coffee, card or gift combo from the menu above, then place your order with your name and how you would like to receive it.",
  },
  {
    q: "Can I get a custom card made?",
    a: "Yes. Choose the Custom Name Card, or write what you would like in the notes and we will craft it for you. Custom cards may take a little extra time.",
  },
  {
    q: "Are the cards really handmade?",
    a: "Every card is cut, folded and finished by hand, so each one is a little bit unique.",
  },
  {
    q: "Can I add a personal message to a gift?",
    a: "Of course. Write your message in the notes box before placing your order and we will add it to your card.",
  },
  {
    q: "Do you have options for allergies or dietary needs?",
    a: "Please mention any allergy or dietary need in the notes and we will do our best to help you choose safely.",
  },
  {
    q: "Can I pick up my order or have it delivered?",
    a: "You can choose Pickup, Dine In or Delivery when you place your order.",
  },
];

export function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#faf3e8] py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionTitle eyebrow="Questions" title="Frequently Asked" />
        <div className="mt-14 divide-y divide-[#b8763a]/25 border-y border-[#b8763a]/25">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg text-[#2b1810]">{f.q}</span>
                <span className="text-2xl text-[#b8763a]">
                  {active === i ? "−" : "+"}
                </span>
              </button>
              {active === i && (
                <p className="pb-6 leading-relaxed text-[#8a6f5a]">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Newsletter ---------------- */

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section className="bg-[#f1e3cb] px-6 py-28">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#2b1810] to-[#1a0f0a] px-6 py-16 text-center md:px-16">
        <p className="text-xs uppercase tracking-[0.5em] text-[#d9a066]">
          Join the Coffee Club
        </p>
        <h2 className="mt-4 text-3xl font-light text-[#faf3e8] md:text-5xl">
          Fresh News, <span className="italic text-[#e7c9a0]">Warm Offers</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[#cdb79c]">
          New drinks, new card designs and seasonal offers from {SITE_NAME},
          shared gently.
        </p>

        {done ? (
          <p className="mx-auto mt-10 max-w-md rounded-2xl border border-[#d9a066]/50 bg-[#d9a066]/10 p-4 text-[#e7c9a0]">
            Welcome to the club. Thank you for joining us.
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full border border-[#d9a066]/40 bg-transparent px-6 py-4 text-[#faf3e8] outline-none placeholder:text-[#8a6f5a] focus:border-[#d9a066]"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[#b8763a] to-[#d9a066] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}