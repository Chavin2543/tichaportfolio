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
    <div className='fixed w-72 h-96 bottom-0 right-0'>
      <Spline
       scene="https://prod.spline.design/byExuP5U0hoYK8wi/scene.splinecode"
       onLoad={handleSplineLoad}
        />
    </div>
  );
}
