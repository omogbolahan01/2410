import React, { useEffect, useRef } from "react";
export default function Home() {
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   const animateScroll = () => {
  //     if (container) {
  //       container.scrollLeft += 1;
  //       if (container.scrollLeft >= container.scrollWidth / 2) {
  //         container.scrollLeft = 0;
  //       }
  //     }
  //   };

  //   const intervalId = setInterval(animateScroll, 20);
  //   return () => {};
  // }, []);
  //   return () => clearInterval(intervalId);
  // }, []);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let animationId;

    const animateScroll = () => {
      if (container) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    return () => cancelAnimationFrame(animationId);
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
          <button>Send us an email</button>
        </div>
      </div>
      <div className="image-area" ref={containerRef}>
        <div className="imagee">
          <img src="/images/Rectangle 1 (5).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (6).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (7).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (8).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (5).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (6).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (7).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (8).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (5).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (6).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (7).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (8).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (5).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (6).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (7).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (8).png" />
          <h4>Branding</h4>
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
