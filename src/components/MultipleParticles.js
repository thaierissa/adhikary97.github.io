import React, { useState, useEffect } from "react";
import Particles from "react-particles-js";

const MultipleParticles = () => {
  const [state, setState] = useState({ width: "0px", height: "0px" });

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  const updateWindowDimensions = () => {
    setState({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    });
  };

  return (
    <Particles
      {...state}
      params={{
        particles: {
          number: {
            value: 9,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "https://i.imgur.com/KAUgqiO.png",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.45770563214671817,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 32.06824121731046,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 315.65905665290904,
            color: "#820a0a",
            opacity: 0.4182482500651045,
            width: 2.367442924896818,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 243.62316369040352,
              size: 44.66424667657398,
              duration: 2,
              opacity: 0.8039564401783317,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
};

export default MultipleParticles;
