import gsap from "gsap";
import Image from "next/image";
// import "./loader.scss"
import React, { useLayoutEffect, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
// import { Transition } from "react-transition-group";

const Loading = (props) => {
  const wrapperRef = useRef(null);
  const circleRef = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (props.loading) {
      gsap.to(circleRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2,
      });
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    } else {
      gsap.to(wrapperRef.current, {
        display: "none",
        duration: 0.5,
        delay: 0.2,
      });
      gsap.to(circleRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: 0.2,
      });
      gsap.to(logoRef.current, {
        // display: '',
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      });
    }
  }, [props.loading]);

  return (
    <div ref={wrapperRef} className="h-screen w-screen">
      <div className="h-screen grid place-items-center">
        <span
          ref={circleRef}
          className="loading-circle"
          // style={styles}
        ></span>
      </div>
      <div
        ref={logoRef}
        className="absolute top-1/2 left-1/2 z-[100] -translate-y-1/2 -translate-x-1/2 opacity-1"
      >
        {/* <img alt="logo" src="../../mountain.png" /> */}
        {/* <CustomIcon className="w-[200px] h-auto" type="moutain-logo" /> */}
        <Image src="/logo.png" width={200} height={200} />
        <ThreeDots wrapperClass="justify-center" width="50" color="#fff" />
      </div>
    </div>
  );
};

export default Loading;
