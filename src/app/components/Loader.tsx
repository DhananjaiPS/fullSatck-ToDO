import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <Wrapper>
      <div className="loader">
        {/* Gradient Definitions */}
        <svg height={0} width={0}>
          <defs>
            <linearGradient id="gradient1" x1="0" y1="62" x2="0" y2="2">
              <stop stopColor="#973BED" />
              <stop offset="1" stopColor="#007CFF" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0" y1="64" x2="0" y2="0">
              <stop stopColor="#FFC800" />
              <stop offset="1" stopColor="#F0F" />
              <animateTransform
                attributeName="gradientTransform"
                type="rotate"
                values="0 32 32;-270 32 32;-540 32 32;-810 32 32;-1080 32 32"
                dur="8s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="gradient3" x1="0" y1="62" x2="0" y2="2">
              <stop stopColor="#00E0ED" />
              <stop offset="1" stopColor="#00DA72" />
            </linearGradient>
          </defs>
        </svg>

        {/* Main Loader Shapes */}
        <svg viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path
            stroke="url(#gradient1)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 54.72 3.97 H 59.95 C 58.95 17.04 49.09 27.67 36.12 29.58 V 60 H 29.58 V 31.55 C 14.9 27.67 5.04 17.04 4.05 4 H 9.28 C 10.51 15.64 20.26 24.55 32 24.71 C 43.81 24.75 53.71 15.71 54.72 3.97 Z"
            className="dash"
            pathLength={360}
          />
        </svg>

        <svg viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path
            stroke="url(#gradient2)"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 32 5 A 27 27 0 1 1 32 59 A 27 27 0 1 1 32 5"
            className="spin"
            pathLength={360}
          />
        </svg>

        <svg viewBox="0 0 64 64" height={64} width={64} className="inline-block">
          <path
            stroke="url(#gradient3)"
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 4 4 H 8.62 V 30 C 8.62 44.3 20.2 56 34.5 55.9 C 48.8 55.8 60.4 44.2 60.4 30 V 4 H 56.25 V 30 C 56.25 44.34 44.67 55.92 30.33 55.92 C 15.81 56.05 4 44.41 4 30 Z"
            className="dash"
            pathLength={360}
          />
        </svg>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding: 2em;
  }

  .inline-block {
    display: inline-block;
  }

  .dash {
    animation: dashArray 2s ease-in-out infinite, dashOffset 2s linear infinite;
  }

  .spin {
    animation: spinDashArray 2s ease-in-out infinite, spin 8s ease-in-out infinite,
      dashOffset 2s linear infinite;
    transform-origin: center;
  }

  @keyframes dashArray {
    0% {
      stroke-dasharray: 0 1 359 0;
    }
    50% {
      stroke-dasharray: 0 359 1 0;
    }
    100% {
      stroke-dasharray: 359 1 0 0;
    }
  }

  @keyframes dashOffset {
    0% {
      stroke-dashoffset: 365;
    }
    100% {
      stroke-dashoffset: 5;
    }
  }

  @keyframes spinDashArray {
    0% {
      stroke-dasharray: 270 90;
    }
    50% {
      stroke-dasharray: 0 360;
    }
    100% {
      stroke-dasharray: 270 90;
    }
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    25% {
      rotate: 270deg;
    }
    50% {
      rotate: 540deg;
    }
    75% {
      rotate: 810deg;
    }
    100% {
      rotate: 1080deg;
    }
  }
`;

export default Loader;
