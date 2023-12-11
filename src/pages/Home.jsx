import React, { useEffect, useRef } from "react";
export default function Home() {
  const handleSendEmail = () => {
    const emailAddress = "contact@2410studio.com";
    const subject = "Inquiry from your website";

    const body = "Hello 2410 team,";
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const scrollSpeed = 1;

    const animateScroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          container.scrollLeft = 0;
        }
      }

      requestAnimationFrame(animateScroll);
    };

    const startScrolling = () => {
      animateScroll();
    };

    startScrolling();

    return () => {};
  }, []);

  return (
    <div className="home-region">
      <div className="top-region">
        <img src="/images/2410.png" />
        <h3>
          We're crafting a space where creativity knows no bounds. 2410 Studio
          is under construction, and we can't wait to share our passion for
          design and No-Code development with you.
        </h3>
        <div>
          <p>Have questions or inquiries?</p>
          <button onClick={handleSendEmail}>Send us an email</button>
        </div>
      </div>
      <div className="image-area" ref={containerRef}>
        <div className="imageee">
          <img src="/images/24 imeage.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-1.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-2.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-3.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-4.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-5.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-6.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-1.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-2.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-3.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-4.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-5.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-6.png" />
        </div>{" "}
        <div className="imageee">
          <img src="/images/24 imeage.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-1.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-2.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-3.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-4.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-5.png" />
        </div>
        <div className="imageee">
          <img src="/images/24 imeage-6.png" />
        </div>
      </div>
      <div className="empty"></div>
      <div className="social-area">
        <h4>Follows us on</h4>
        <div className="social-media">
          <img src="/images/facebook.png" />
          <img src="/images/instagram (2).png" />
          <img src="/images/linkedin (4).png" />
          <img src="/images/behance.png" />
        </div>
      </div>
    </div>
  );
}
