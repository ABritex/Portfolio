import React from "react";
import "../../styles/components/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        <span>
          <kbd>PgUp</kbd>/<kbd>PgDn</kbd>: Scroll, <kbd>Left</kbd>/
          <kbd>Right</kbd>: Switch section, <kbd>1-4</kbd>: Jump to section,{" "}
          <kbd>Up</kbd>/<kbd>Down</kbd>: Switch item (or just use the mouse)
        </span>
      </p>
      <div className="social-links">
        <a
          href="https://github.com/[your-github]"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/[your-linkedin]"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/[your-twitter]"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
