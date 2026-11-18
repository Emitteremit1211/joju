
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Clock3,
  MessageCircle,
  Building2,
  Headphones,
  Send,
  Flame,
  ShieldCheck,
  Truck,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  CircleHelp,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

const contactOptions = [
  {
    icon: Headphones,
    title: "Customer Enquiries",
    description:
      "Need information about our gas products or services? Our team is available to help you find the right solution.",
    label: "General enquiries",
    subject: "General Enquiry",
  },
  {
    icon: Building2,
    title: "Business Enquiries",
    description:
      "Looking for a dependable gas supply partner for your business or facility? Let's discuss your requirements.",
    label: "Business solutions",
    subject: "Business Enquiry",
  },
  {
    icon: BriefcaseBusiness,
    title: "Partnerships",
    description:
      "Interested in working with Joju Ventures? We welcome conversations about business opportunities and partnerships.",
    label: "Work with us",
    subject: "Partnership Opportunity",
  },
];

const faqs = [
  {
    question: "What does Joju Ventures do?",
    answer:
      "Joju Ventures provides gas-related products and services, with a focus on dependable supply and meeting the needs of its customers.",
  },
  {
    question: "How can I make an enquiry?",
    answer:
      "You can contact our team through the enquiry form on this page. Select the relevant enquiry type and provide details about what you need.",
  },
  {
    question: "Does Joju Ventures serve businesses?",
    answer:
      "Yes. Businesses interested in gas supply or related services can reach out through the Business Enquiry option so we can better understand their requirements.",
  },
  {
    question: "How can I ask about gas availability and pricing?",
    answer:
      "Send us a message using the contact form and specify the product or service you are interested in. Our team can provide further information.",
  },
  {
    question: "Can I discuss a business partnership?",
    answer:
      "Absolutely. Select Partnership Opportunity in the contact form and tell us a little about your business and the opportunity you would like to discuss.",
  },
  {
    question: "How do I get support with an existing order?",
    answer:
      "Select Order Enquiry in the contact form and include your order details and a clear description of the assistance you need.",
  },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700;800&display=swap');

.joju {
  font-family: 'Manrope', system-ui, sans-serif;
  background: #030B18;
}

.joju .serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
  letter-spacing: -.015em;
}

.joju .wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.joju .pad {
  padding: 100px 0;
}

@media (max-width: 640px) {
  .joju .pad { padding: 72px 0; }
  .joju .wrap { padding: 0 19px; }
}

.joju .night {
  background:
    radial-gradient(850px 500px at 85% 15%, rgba(31,91,150,.20), transparent 65%),
    radial-gradient(650px 420px at 0% 90%, rgba(39,112,180,.11), transparent 65%),
    linear-gradient(180deg, #030B18 0%, #061326 100%);
}

.joju .night-2 {
  background:
    radial-gradient(700px 420px at 12% 5%, rgba(31,91,150,.15), transparent 65%),
    radial-gradient(600px 400px at 95% 100%, rgba(189,155,136,.07), transparent 65%),
    linear-gradient(180deg, #061326 0%, #030B18 100%);
}

.joju .night-3 {
  background:
    radial-gradient(800px 420px at 50% 0%, rgba(31,91,150,.13), transparent 65%),
    linear-gradient(180deg, #030B18 0%, #020713 100%);
}

.joju .accent-text {
  background: linear-gradient(110deg, #F4ECE6 0%, #E6CDBD 48%, #BD9B88 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .accent-text-soft {
  background: linear-gradient(110deg, #F4ECE6 0%, #BD9B88 55%, #9C7C69 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.joju .glass {
  background: linear-gradient(145deg, rgba(255,255,255,.075), rgba(255,255,255,.018));
  border: 1px solid rgba(189,155,136,.16);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  backdrop-filter: blur(18px) saturate(130%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.09),
    0 30px 60px -35px rgba(0,0,0,.8);
}

.joju .glass-strong {
  background: linear-gradient(145deg, rgba(16,35,61,.88), rgba(3,11,24,.94));
  border: 1px solid rgba(189,155,136,.23);
  -webkit-backdrop-filter: blur(26px) saturate(140%);
  backdrop-filter: blur(26px) saturate(140%);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.11),
    0 40px 90px -40px rgba(0,0,0,.85),
    0 0 70px -35px rgba(31,91,150,.22);
}

.joju .glass-dark {
  background: linear-gradient(145deg, rgba(16,35,61,.94), rgba(2,7,19,.97));
  border: 1px solid rgba(189,155,136,.17);
  -webkit-backdrop-filter: blur(22px);
  backdrop-filter: blur(22px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,.07),
    0 30px 70px -40px rgba(0,0,0,.8);
}

.joju .shard {
  position: absolute;
  pointer-events: none;
  background: linear-gradient(160deg, rgba(31,91,150,.23), rgba(8,24,45,.015) 75%);
}

.joju .accent-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(189,155,136,.65), transparent);
}

.joju .field {
  width: 100%;
  border-radius: 14px;
  border: 1px solid rgba(189,155,136,.20);
  background: rgba(255,255,255,.035);
  padding: 15px 16px;
  font-size: 14px;
  color: #F4ECE6;
  outline: none;
  transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
}

.joju .field::placeholder {
  color: rgba(244,236,230,.34);
}

.joju .field:focus {
  border-color: #BD9B88;
  background: rgba(255,255,255,.065);
  box-shadow: 0 0 0 3px rgba(189,155,136,.14);
}

.joju select.field option {
  background: #061326;
  color: #F4ECE6;
}

.joju .primary-button {
  background: linear-gradient(110deg, #E6CDBD, #BD9B88 60%, #9C7C69);
  color: #030B18;
  box-shadow: 0 16px 35px -17px rgba(189,155,136,.5);
  transition: transform .25s ease, box-shadow .25s ease, filter .25s ease;
}

.joju .primary-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.08);
  box-shadow: 0 20px 40px -18px rgba(189,155,136,.65);
}

.joju .soft-card {
  transition: transform .3s ease, border-color .3s ease, background .3s ease;
}

.joju .soft-card:hover {
  transform: translateY(-5px);
  border-color: rgba(189,155,136,.4);
  background: linear-gradient(145deg, rgba(31,91,150,.14), rgba(255,255,255,.025));
}

.joju .faq-answer {
  animation: jojuFaq .25s ease both;
}

@keyframes jojuFaq {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.joju [data-reveal] {
  opacity: 0;
  transform: translate3d(0, 28px, 0);
  transition:
    opacity 650ms ease,
    transform 650ms cubic-bezier(.2,.7,.2,1);
  transition-delay: var(--reveal-delay, 0ms);
}

.joju [data-reveal="left"] {
  transform: translate3d(-24px, 0, 0);
}

.joju [data-reveal="right"] {
  transform: translate3d(24px, 0, 0);
}

.joju [data-reveal].is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@keyframes jojuRise {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
}

.joju .rise {
  animation: jojuRise .8s cubic-bezier(.2,.7,.2,1) both;
}

.joju .rise-2 { animation-delay: .12s; }
.joju .rise-3 { animation-delay: .24s; }

.joju a:focus-visible,
.joju button:focus-visible {
  outline: 2px solid #BD9B88;
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .joju [data-reveal],
  .joju [data-reveal="left"],
  .joju [data-reveal="right"] {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .joju .rise,
  .joju .faq-answer {
    animation: none;
  }

  .joju .soft-card,
  .joju .primary-button,
  .joju .field {
    transition: none;
  }
}
`;

function Heading({ children, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={`serif font-semibold leading-[1.03] ${className}`}>
      {children}
    </Tag>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="mb-6 flex items-center gap-4 text-sm font-semibold text-[#BD9B88]">
      <span className="h-px w-9 bg-current opacity-70" />
      {children}
    </p>
  );
}

function Shards({ variant = "a" }) {
  const sets = {
    a: [
      {
        left: "-6%",
        top: "5%",
        width: 460,
        height: 600,
        clipPath: "polygon(0 100%, 42% 0, 100% 58%)",
        opacity: 0.75,
      },
      {
        right: "-6%",
        bottom: "-5%",
        width: 580,
        height: 450,
        clipPath: "polygon(100% 0, 100% 100%, 0 100%, 34% 38%)",
        opacity: 0.65,
      },
      {
        right: "20%",
        top: "-8%",
        width: 250,
        height: 320,
        clipPath: "polygon(50% 0, 100% 100%, 0 82%)",
        opacity: 0.4,
      },
    ],
    b: [
      {
        right: "-5%",
        top: "-5%",
        width: 500,
        height: 480,
        clipPath: "polygon(100% 0, 100% 100%, 20% 30%)",
        opacity: 0.65,
      },
      {
        left: "-5%",
        bottom: "-8%",
        width: 480,
        height: 360,
        clipPath: "polygon(0 0, 70% 100%, 0 100%)",
        opacity: 0.5,
      },
    ],
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {sets[variant].map((shape, index) => (
        <div key={index} className="shard" style={shape} />
      ))}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Enquiry",
    message: "",
  });

  const [notice, setNotice] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".joju [data-reveal]");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -45px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setNotice("");
  };

  const selectTopic = (subject) => {
    setFormData((previous) => ({
      ...previous,
      subject,
    }));

    setNotice("");

    requestAnimationFrame(scrollToForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNotice(
      "Thank you for contacting Joju Ventures. Message delivery has not been connected yet. Please contact us through our official contact channels while we set up the enquiry service."
    );
  };

  return (
    <div className="joju min-h-screen overflow-hidden bg-[#030B18] text-[#F4ECE6]">
      <style>{styles}</style>

      <Navbar />

      {/* HERO */}
      <section className="night relative overflow-hidden pb-24 pt-44 sm:pb-28 sm:pt-48">
        <Shards variant="a" />

        <div className="wrap relative z-10 text-center">
          <div
            data-reveal
            className="glass mx-auto inline-flex items-center gap-3 rounded-full px-5 py-2.5"
          >
            <span className="h-2 w-2 rounded-full bg-[#BD9B88] shadow-[0_0_12px_rgba(189,155,136,.7)]" />
            <span className="text-sm font-semibold text-[#F4ECE6]/80">
              We're here to help
            </span>
          </div>

          <div data-reveal style={{ "--reveal-delay": "100ms" }}>
            <Heading
              as="h1"
              className="mx-auto mt-9 max-w-4xl text-6xl sm:text-7xl lg:text-[94px]"
            >
              Let's start
              <br />
              <em className="accent-text pr-2 font-medium italic">
                a conversation.
              </em>
            </Heading>
          </div>

          <p
            data-reveal
            style={{ "--reveal-delay": "180ms" }}
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#F4ECE6]/60 sm:text-lg"
          >
            Have a question about our products or services? Looking for a
            reliable gas supply partner? We'd love to hear from you.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": "240ms" }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { icon: MessageCircle, label: "Customer enquiries" },
              { icon: Building2, label: "Business solutions" },
              { icon: BriefcaseBusiness, label: "Partnerships" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <span
                  key={item.label}
                  className="glass inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm text-[#F4ECE6]/75"
                >
                  <Icon size={16} className="text-[#BD9B88]" />
                  {item.label}
                </span>
              );
            })}
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "300ms" }}
            className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3"
          >
            {[
              { icon: Flame, title: "Gas solutions" },
              { icon: Truck, title: "Reliable supply" },
              { icon: ShieldCheck, title: "Customer care" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="glass rounded-2xl px-3 py-5 sm:px-5"
                >
                  <Icon
                    size={21}
                    className="mx-auto mb-3 text-[#BD9B88]"
                    strokeWidth={1.6}
                  />
                  <p className="text-[10px] font-semibold text-[#F4ECE6]/65 sm:text-xs">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="accent-line absolute bottom-0 left-0 right-0 opacity-70" />
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="pad night-2 relative">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div data-reveal="left">
              <Eyebrow>Get in touch</Eyebrow>

              <Heading className="text-5xl sm:text-6xl">
                We're only
                <br />
                <em className="accent-text-soft pr-2 font-medium italic">
                  a message away.
                </em>
              </Heading>

              <p className="mt-7 max-w-md text-sm leading-8 text-[#F4ECE6]/60 sm:text-base">
                Whether you're making an enquiry, exploring our services or
                looking to work with us, our team would be glad to hear from you.
              </p>

              <div className="mt-9 space-y-4">
                <div className="glass soft-card flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                    <Mail size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="serif text-2xl font-semibold">Email us</h3>
                    <p className="mt-1 text-sm leading-6 text-[#F4ECE6]/55">
                      Send us your questions and enquiries.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#BD9B88]">
                      Official email to be added
                    </p>
                  </div>
                </div>

                <div className="glass soft-card flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                    <Phone size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="serif text-2xl font-semibold">Call us</h3>
                    <p className="mt-1 text-sm leading-6 text-[#F4ECE6]/55">
                      Speak with our team directly.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#BD9B88]">
                      Official phone number to be added
                    </p>
                  </div>
                </div>

                <div className="glass soft-card flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                    <MapPin size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="serif text-2xl font-semibold">Visit us</h3>
                    <p className="mt-1 text-sm leading-6 text-[#F4ECE6]/55">
                      Get in touch to enquire about our business location and
                      services.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#BD9B88]">
                      Business address to be added
                    </p>
                  </div>
                </div>

                <div className="glass soft-card flex items-start gap-4 rounded-2xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                    <Clock3 size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <h3 className="serif text-2xl font-semibold">
                      Business hours
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#F4ECE6]/55">
                      Reach out to confirm our operating and enquiry hours.
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#BD9B88]">
                      Business hours to be confirmed
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-strong mt-7 rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#BD9B88] text-[#030B18]">
                    <Building2 size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.16em] text-[#BD9B88]">
                      Grow with us
                    </p>
                    <h3 className="serif text-2xl font-semibold">
                      Interested in working together?
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-[#F4ECE6]/60">
                  Let's explore how Joju Ventures can support your business
                  needs and build a valuable working relationship.
                </p>

                <button
                  type="button"
                  onClick={() => selectTopic("Partnership Opportunity")}
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#BD9B88]/60 pb-1 text-sm font-bold text-[#E6CDBD] transition hover:text-white"
                >
                  Send a partnership enquiry
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* FORM */}
            <div
              id="contact-form"
              data-reveal="right"
              className="glass-dark scroll-mt-28 rounded-[28px] p-6 sm:p-9 lg:p-10"
            >
              <div className="mb-8">
                <Eyebrow>Send us a message</Eyebrow>

                <Heading className="text-4xl sm:text-5xl">
                  How can we help?
                </Heading>

                <p className="mt-4 text-sm leading-7 text-[#F4ECE6]/55">
                  Complete the form below and tell us a little about what
                  you'd like to discuss.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#F4ECE6]/80"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="field"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#F4ECE6]/80"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="field"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-[#F4ECE6]/80"
                  >
                    What is this about?
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="field"
                  >
                    <option>General Enquiry</option>
                    <option>Product Enquiry</option>
                    <option>Gas Supply</option>
                    <option>Order Enquiry</option>
                    <option>Business Enquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Feedback or Complaint</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#F4ECE6]/80"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    minLength={10}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="field resize-none"
                  />
                </div>

                {notice && (
                  <div
                    role="status"
                    className="glass rounded-xl p-4 text-sm leading-6 text-[#E6CDBD]"
                  >
                    {notice}
                  </div>
                )}

                <button
                  type="submit"
                  className="primary-button group flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold"
                >
                  Send Message
                  <Send
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-[#F4ECE6]/35">
                  Your details should only be used to respond to your enquiry.
                  Connect this form to Joju Ventures' approved submission
                  service before publishing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ENQUIRY TYPES */}
      <section id="enquiry-types" className="pad night relative">
        <Shards variant="a" />

        <div className="wrap relative z-10">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>We're listening</Eyebrow>

            <Heading className="text-5xl sm:text-6xl lg:text-7xl">
              Whatever you need,
              <br />
              <em className="accent-text pr-2 font-medium italic">
                let's talk.
              </em>
            </Heading>

            <p className="mt-6 text-sm leading-8 text-[#F4ECE6]/55 sm:text-base">
              Choose the type of enquiry that best describes what you're
              looking for. We'll help you take it from there.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {contactOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => selectTopic(item.subject)}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                  className="glass soft-card group rounded-[26px] p-7 text-left sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>

                  <h3 className="serif mt-8 text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#F4ECE6]/55">
                    {item.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-sm font-semibold text-[#E6CDBD]">
                      {item.label}
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#BD9B88] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW CONTACT WORKS */}
      <section id="how-contact-works" className="pad night-2 relative">
        <div className="wrap relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
            <div data-reveal="left">
              <Eyebrow>Simple and straightforward</Eyebrow>

              <Heading className="text-5xl sm:text-6xl">
                Here's what
                <br />
                <em className="accent-text-soft font-medium italic">
                  happens next.
                </em>
              </Heading>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#F4ECE6]/55 sm:text-base">
                Getting in touch shouldn't be complicated. Tell us what you
                need, and provide the details that will help our team assist you.
              </p>

              <button
                type="button"
                onClick={scrollToForm}
                className="primary-button mt-8 inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold"
              >
                Contact our team
                <ArrowRight size={17} />
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  number: "01",
                  icon: Send,
                  title: "Tell us what you need",
                  description:
                    "Complete the contact form with your name, email and a clear description of your enquiry.",
                },
                {
                  number: "02",
                  icon: CheckCircle2,
                  title: "We review your enquiry",
                  description:
                    "The details you provide help our team understand your request and the assistance you need.",
                },
                {
                  number: "03",
                  icon: MessageCircle,
                  title: "We get back to you",
                  description:
                    "Our team can follow up through the contact details you provide once the enquiry submission service is connected.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    data-reveal="right"
                    style={{ "--reveal-delay": `${index * 120}ms` }}
                    className="glass flex gap-5 rounded-2xl p-5 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#BD9B88]/20 text-[#E6CDBD]">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-extrabold tracking-widest text-[#BD9B88]">
                          {item.number}
                        </span>
                        <h3 className="serif text-xl font-semibold sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-sm leading-7 text-[#F4ECE6]/50">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact-faq" className="pad night-3 relative">
        <Shards variant="b" />

        <div className="wrap relative z-10">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <div className="glass mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-[#E6CDBD]">
              <CircleHelp size={23} />
            </div>

            <Eyebrow>A little more information</Eyebrow>

            <Heading className="text-5xl sm:text-6xl">
              Frequently asked
              <br />
              <em className="accent-text font-medium italic">
                questions.
              </em>
            </Heading>

            <p className="mt-6 text-sm leading-8 text-[#F4ECE6]/55">
              Find answers to some common questions about Joju Ventures and
              getting in touch with our team.
            </p>
          </div>

          <div data-reveal className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`glass overflow-hidden rounded-2xl transition ${
                    isOpen ? "border-[#BD9B88]/35" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="serif text-xl font-semibold sm:text-2xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "rotate-180 bg-[#BD9B88] text-[#030B18]"
                          : "bg-white/[.06] text-[#BD9B88]"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="faq-answer px-5 pb-6 sm:px-6">
                      <div className="mb-4 h-px bg-gradient-to-r from-[#BD9B88]/50 to-transparent" />
                      <p className="text-sm leading-8 text-[#F4ECE6]/55">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div data-reveal className="mt-9 text-center">
            <p className="text-sm text-[#F4ECE6]/45">
              Still have questions?
            </p>
            <button
              type="button"
              onClick={scrollToForm}
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#E6CDBD] transition hover:text-white"
            >
              Send us a message
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section id="contact-cta" className="night relative pb-20 pt-8">
        <div className="wrap relative z-10">
          <div
            data-reveal
            className="glass-strong relative overflow-hidden rounded-[28px] p-6 sm:p-8 lg:p-9"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-32 h-72 w-72 rounded-full bg-[#173A59]/25 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-36 -right-20 h-80 w-80 rounded-full bg-[#BD9B88]/10 blur-3xl"
            />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-[#BD9B88]">
                  <Sparkles size={15} />
                  Joju Ventures
                </div>

                <Heading className="max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
                  Looking for dependable gas solutions?
                </Heading>

                <p className="mt-3 text-sm text-[#F4ECE6]/55">
                  Get in touch with Joju Ventures today.
                </p>
              </div>

              <Link
                to="/"
                className="primary-button group inline-flex shrink-0 items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold"
              >
                Explore Joju Ventures
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
