"use client"

import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import Roadmap from './RocketPath';
import { useState } from 'react';
import ReadingGuide from './ReadingGuide';
import Spline from '@splinetool/react-spline';
import NavPath from './NavPath';

export function Hero() {

  const [isGuideOpen, setGuideOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(0);

  return (
    <Roadmap>
      <Container className="flex flex-col justify-center items-center h-full py-16 lg:py-32 text-center">
        <h1 className="font-display text-white text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Accounting{' '}
          <span className="relative whitespace-nowrap text-indigo-600">
            <span className="relative">made simple</span>
          </span>
          {' '}for small businesses.
        </h1>
        <p className="mx-auto text-white mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
        <div className="mt-10 flex justify-center px-6">
          <Button onClick={() => { setGuideOpen(true) }}>Reading Guide</Button>
          <Button variant="outline">
            <span className="">Start Journey</span>
          </Button>
        </div>
      </Container>
      {isGuideOpen && <ReadingGuide onClose={() => { setGuideOpen(false) }} />}
      {/* <Spline scene="https://prod.spline.design/1PaVVbYgGp0dR9K4/scene.splinecode" /> */}
    </Roadmap>
  );
}
