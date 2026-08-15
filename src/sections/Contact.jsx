import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import SocialLinks from "../components/ui/SocialLinks";
import Reveal from "../components/effects/Reveal";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const loadingToast = toast.loading("Sending your message...");

    try {
      await emailjs.sendForm(
        "service_ntjixf7", 
        "template_9oa2ih7", 
        form.current,
        "lAZOplPVC0MK2BbX-" 
      );

      toast.dismiss(loadingToast);

      toast.success("Message sent successfully!", {
        duration: 4000,
      });

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.dismiss(loadingToast);

      toast.error("Failed to send message. Please try again.", {
        duration: 4000,
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <SectionTitle
          eyebrow="Contact"
          title="Let's build something valuable together."
          subtitle="Open for collaboration, web development projects, and technical opportunities."
        />

        <Reveal>
          <div className="card-modern grid gap-8 md:grid-cols-2">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-bold">Get in touch</h3>

              <p className="mt-4 leading-7 text-neutral-400">
                You can contact me for portfolio work, freelance projects,
                system development, or collaboration opportunities.
              </p>

              <div className="mt-6 space-y-3 text-neutral-300">
                <p>Email: xyruspedido26@gmail.com</p>
                <p>Location: Project 4, Quezon City</p>
              </div>

              <div className="mt-6">
                <SocialLinks />
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4"
            >
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />

              <input
                type="email"
                name="reply_to"
                placeholder="Your email"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your message"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-cyan-400/60"
              />

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Contact;