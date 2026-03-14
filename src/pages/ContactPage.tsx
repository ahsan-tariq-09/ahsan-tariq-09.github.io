import { useState } from "react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("atariq@knox.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-page">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-description">
        Feel free to reach out for collaborations, research opportunities, or
        just to say hello.
      </p>

      <div className="contact-email-box">
        <span className="contact-email">atariq@knox.edu</span>

        <button onClick={copyEmail} className="copy-email-btn">
          {copied ? "Copied!" : "Copy Email"}
        </button>

        <a
          href="mailto:atariq@knox.edu"
          className="email-link"
        >
          Send Email
        </a>
      </div>

      <h2 className="contact-form-title">Send me a message</h2>

      <form className="contact-form">
        <input placeholder="Your Full Name" />
        <input placeholder="Your Email" />
        <input placeholder="Your Phone Number (optional)" />
        <textarea placeholder="Your Message" rows={5}></textarea>

        <button type="submit" className="contact-button">
          CONTACT ME
        </button>
      </form>
    </section>
  );
}