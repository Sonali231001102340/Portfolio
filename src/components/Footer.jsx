function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        SD
      </div>

      <p>
        © {new Date().getFullYear()} Sonali Das. All Rights Reserved.
      </p>

      <p className="footer-tagline">
        Designed & Developed with passion.
      </p>
    </footer>
  );
}

export default Footer;
