// src/components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1,
      },
      opacity: {
        value: 0.5,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={particlesOptions} // Pass the configuration options directly
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;
