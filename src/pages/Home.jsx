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
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const container = containerRef.current;

  //   let animationId;

  //   const animateScroll = () => {
  //     if (container) {
  //       container.scrollLeft += 1;
  //       if (container.scrollLeft >= container.scrollWidth / 2) {
  //         container.scrollLeft = 0;
  //       }
  //     }

  //     animationId = requestAnimationFrame(animateScroll);
  //   };

  //   animateScroll();

  //   return () => cancelAnimationFrame(animationId);
  // }, []);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let animationId;

    const animateScroll = () => {
      if (container) {
        container.scrollLeft += 1; // Adjust the speed of scrolling

        // Check if scrolled to the end of the content
        if (container.scrollLeft >= container.scrollWidth) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    // Start the automatic scrolling animation
    animateScroll();

    // The cleanup function cancels the animation frame when the component is unmounted
    return () => cancelAnimationFrame(animationId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
          <img src="/images/Rectangle 1 (16).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (15).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (14).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (17).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (13).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (12).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (11).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (16).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (15).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (14).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (17).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (13).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (12).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (11).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (16).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (15).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (14).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (17).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (13).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (12).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (11).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (16).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (15).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (14).png" />
          <h4>web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (17).png" />
          <h4>Branding</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (13).png" />
          <h4>Web development</h4>
        </div>
        <div className="imagee">
          <img src="/images/Rectangle 1 (12).png" />
          <h4>Branding</h4>
        </div>

        <div className="imagee">
          <img src="/images/Rectangle 1 (11).png" />
          <h4>web development</h4>
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
