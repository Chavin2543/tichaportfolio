"use client"

import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

export default function Astronaut() {
  const splineRef = useRef()
  const rocketRef = useRef();

  const handleSplineLoad = (spline) => {
    if (spline) {
      splineRef.current = spline;
    }
  };

  return (
    <Spline
      scene="https://prod.spline.design/byExuP5U0hoYK8wi/scene.splinecode"
      onLoad={handleSplineLoad}
    />
  );
}
