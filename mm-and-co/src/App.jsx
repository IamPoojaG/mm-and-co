import {
  ArrowRight,
  Handshake,
  Trophy,
  Headset,
  CalendarCheck,
  ShieldCheck,
  Truck,
  Droplets,
  Building2,
  PackageCheck,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
} from "lucide-react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const photo = {
  hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=90",
  concrete:
    "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1000&q=85",
  cement:
    "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=85",
  rmc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  chemical:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=85",
  building:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  workers:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
  skyline:
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=85",
};

const brands = [
  "ACC",
  "Chettinad",
  "MAHA",
  "JSW",
  "Shree Cement",
  "TREMCO CPG",
  "Bharathi",
  "Dalmia",
];
const clients = [
  "URC Constructions",
  "BG Shirke Construction Technologies",
  "Gina Engineering Company",
  "DSR Infra Projects",
  "Bharath Cement Products",
  "Sumadhura Developers",
  "Ahluwalia Contracts (India)",
  "RDC Concrete",
  "Hella Infra Market",
  "Floormart Global",
  "Aparna Enterprises",
  "APG Habitat",
  "Himalaya Wellness Company",
  "Shankar Narayana Constructions",
];

const products = [
  {
    title: "Cement",
    desc: "Leading brands for dependable construction requirements.",
    image: photo.cement,
    icon: PackageCheck,
  },
  {
    title: "Ready Mix Concrete (RMC)",
    desc: "Reliable concrete supply coordination for project sites.",
    image: photo.rmc,
    icon: Truck,
  },
  {
    title: "Construction Chemicals",
    desc: "Admixtures, waterproofing, grouts, sealants and more.",
    image: photo.chemical,
    icon: Droplets,
  },
  {
    title: "Building Solutions",
    desc: "Material sourcing support for modern construction.",
    image: photo.building,
    icon: Building2,
  },
];

const advantages = [
  { title: "PAN India Stockist Network", icon: Handshake },
  { title: "Competitive Manufacturer Quotes", icon: Trophy },
  { title: "Single Point of Contact", icon: Headset },
  { title: "On-Time Material Coordination", icon: CalendarCheck },
  { title: "Back-Office & Payment Support", icon: ShieldCheck },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[.2em] text-orange">
          {eyebrow}
        </p>
      )}
      <div className="section-heading">
        <span /> <h2>{title}</h2> <span />
      </div>
      {subtitle && (
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function BrandStrip() {
  return (
    <section className="border-b border-slate-200 bg-white py-5">
      <div className="container-shell flex flex-col items-center gap-4 md:flex-row md:gap-7">
        <div className="shrink-0 border-b border-slate-300 pb-2 text-center text-sm font-extrabold text-ink md:border-b-0 md:border-r md:pb-0 md:pr-7">
          Our
          <br className="hidden md:block" /> Brands
        </div>
        <div className="grid w-full grid-cols-4 items-center gap-x-4 gap-y-5 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand, i) => (
            <div key={brand} className={`brand-word brand-${i}`}>
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="hero relative flex min-h-[650px] items-center overflow-hidden pt-24 md:min-h-[720px]"
    >
      <img
        src={photo.hero}
        alt="Modern construction site with tower crane"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101e2e] via-[#101e2e]/85 to-[#101e2e]/15" />
      <div className="container-shell relative z-10 pb-16 pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.22em] text-orange">
            <span className="h-px w-8 bg-orange" /> Construction Materials
            Partner
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]">
            Building Stronger
            <br />
            Connections.
            <br />
            <span className="text-orange">Delivering Better Materials.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg md:text-xl">
            Your trusted partner for cement, RMC and construction chemical
            solutions across India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="btn-primary">
              Explore Our Services <ArrowRight size={17} />
            </a>
            <a href="#about" className="btn-outline">
              Know More
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-orange/80" />
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[.95fr_1.35fr_.55fr]">
        <div className="relative">
          <div className="absolute -bottom-3 -left-3 h-1/2 w-1/2 rounded-2xl bg-orange" />
          <img
            src={photo.concrete}
            alt="Concrete mixer at a construction project"
            className="relative z-10 h-[290px] w-full rounded-2xl object-cover shadow-soft md:h-[340px]"
          />
        </div>
        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-bold text-orange">
            <span className="h-px w-8 bg-orange" /> About MM AND CO.
          </p>
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            Your Single Point of Contact for Construction Materials
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
            MM AND CO. is a stockist, facilitator and service provider for
            cement, ready mix concrete (RMC) and construction chemicals. We
            support construction projects throughout India by coordinating with
            multiple manufacturers and helping customers source essential
            building materials.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            Our approach brings product sourcing, supply coordination and
            back-office support together through one point of contact.
          </p>
          <a href="#why-us" className="btn-outline-orange mt-6">
            Know More About Us <ArrowRight size={16} />
          </a>
        </div>
        <div className="flex flex-col items-center border-t border-orange/50 pt-7 text-center lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <Trophy size={65} strokeWidth={1.4} className="text-orange" />
          <h3 className="mt-4 text-xl font-extrabold text-ink">
            Top Seller Awards
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Recognized by manufacturers for being a “Top Seller” of cement from
            multiple brands.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="section-pad bg-mist">
      <div className="container-shell">
        <SectionTitle
          title="Our Products"
          subtitle="A coordinated range of construction materials and solutions from trusted manufacturing brands."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map(({ title, desc, image, icon: Icon }) => (
            <article key={title} className="product-card group">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
                <div className="absolute bottom-4 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/50 bg-navy text-orange shadow-lg">
                  <Icon size={23} />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-navy py-16 md:py-20"
    >
      <img
        src={photo.skyline}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-navy/80" />
      <div className="container-shell relative">
        <SectionTitle
          title="Why Choose Us?"
          subtitle="We simplify construction material procurement with coordinated service and reliable support."
        />
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center border-white/15 px-4 text-center sm:border-r last:border-r-0"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white">
                <Icon size={30} />
              </div>
              <h3 className="max-w-[170px] text-sm font-bold leading-6 text-white">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section id="clients" className="section-pad bg-white">
      <div className="container-shell">
        <SectionTitle
          title="Our Trusted Partners"
          subtitle="We are proud to have facilitated construction product purchases for reputed organizations and projects."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {clients.map((client) => (
            <div
              key={client}
              className="flex min-h-[88px] items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-4 text-center text-xs font-bold leading-5 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-orange/50 hover:shadow-soft"
            >
              {client}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-slate-500">
          And many more valued customers across India.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-16 md:py-20"
    >
      <img
        src={photo.workers}
        alt="Construction professionals at a project"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/65" />
      <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.18em] text-orange">
            Let's work together
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Let's Build Something Strong Together.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-300">
            Contact MM AND CO. for your construction material requirements. Our
            team will be happy to discuss your project needs.
          </p>
          <div className="mt-8 space-y-5 text-sm text-slate-200">
            <div className="flex gap-3">
              <MapPin className="shrink-0 text-orange" />{" "}
              <span>
                No. 2, Survey Number 23/1, Nagadasanahalli, Yelahanka Taluk,
                Bengaluru – 560064
              </span>
            </div>
            <a
              href="mailto:hmuralikrish1991@gmail.com"
              className="flex items-center gap-3 hover:text-white"
            >
              <Mail className="text-orange" /> hmuralikrish1991@gmail.com
            </a>
            <p className="flex items-center gap-3 text-slate-400">
              <Phone className="text-orange" /> Phone number to be added
            </p>
          </div>
        </div>
        <form
          className="rounded-2xl bg-white p-6 shadow-2xl md:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:hmuralikrish1991@gmail.com?subject=${encodeURIComponent("Website enquiry from " + e.currentTarget.name.value)}&body=${encodeURIComponent("Name: " + e.currentTarget.name.value + "\nEmail: " + e.currentTarget.email.value + "\nMessage: " + e.currentTarget.message.value)}`;
          }}
        >
          <h3 className="text-2xl font-extrabold text-ink">Get In Touch</h3>
          <p className="mt-2 text-sm text-slate-500">
            Send us your enquiry and we’ll get back to you.
          </p>
          <label className="form-label">
            Your Name <span>*</span>
            <input name="name" required placeholder="Enter your name" />
          </label>
          <label className="form-label">
            Your Email <span>*</span>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
            />
          </label>
          <label className="form-label">
            Your Message <span>*</span>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Tell us about your requirement"
            />
          </label>
          <button className="btn-primary w-full" type="submit">
            Submit Enquiry <ArrowRight size={16} />
          </button>
          <p className="mt-3 text-center text-[11px] text-slate-400">
            This form opens your email app to send the enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="relative overflow-hidden bg-navy py-12">
      <img
        src={photo.workers}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-transparent" />
      <div className="container-shell relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-extrabold text-white md:text-3xl">
            Building Strong Relationships. Delivering Reliable Service.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Your single point of contact for construction material coordination.
          </p>
        </div>
        <a href="#contact" className="btn-primary shrink-0">
          Contact Us <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <About />
        <Products />
        <WhyUs />
        <Clients />
        <Commitment />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
