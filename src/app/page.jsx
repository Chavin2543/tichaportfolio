'use client'

import SubNavPath, { MainNavPath } from '@/components/atoms/NavPath';
import RocketPath from '@/components/atoms/RocketPath';
import { Flag1Content } from '@/components/contents/Flag1Content';
import { Flag2Content } from '@/components/contents/Flag2Content';
import { Flag3Content } from '@/components/contents/Flag3Content';
import { Flag4Content } from '@/components/contents/Flag4Content';
import { Star1Content } from '@/components/contents/Star1Content';
import { useState } from 'react';

export default function Home() {
  const [stepProgress, setStepProgress] = useState(0);
  const [flagProgress, setFlagProgress] = useState(0);

  const [isMainPath, setIsMainPath] = useState(false);

  const handleStepClick = (progressValue) => {
    setStepProgress(progressValue);
  };

  const handleFlagClick = (progressValue) => {
    setFlagProgress(progressValue);
  };

  return (
    <>
      <main>
        {stepProgress > 0 && !isMainPath && (
          <div className='fixed w-full h-full flex justify-center items-center z-20 overflow-auto'>
            {stepProgress <= 25 && <Flag1Content />}
            {stepProgress > 25 && stepProgress <= 50 && <Flag2Content />}
            {stepProgress > 50 && stepProgress <= 75 && <Flag3Content />}
            {stepProgress > 75 && <Flag4Content setIsMainPath={setIsMainPath} setFlagProgress={setFlagProgress} />}
          </div>
        )}
        {flagProgress > 0 && isMainPath && (
          <div className='fixed w-full h-full flex justify-center items-center z-20 overflow-auto'>
            {flagProgress <= 25 && <Star1Content />}
            {flagProgress > 25 && stepProgress <= 50 && <Flag2Content />}
            {flagProgress > 50 && stepProgress <= 75 && <Flag3Content />}
          </div>
        )}
        {stepProgress > 0 && !isMainPath && (
          <div className='fixed top-0 left-0 right-0 z-30'>
            <SubNavPath stepProgress={stepProgress} onStepClick={handleStepClick} />
          </div>
        )}
        {flagProgress > 0 && isMainPath && (
          <div className='fixed top-0 left-0 right-0 z-30'>
            <MainNavPath stepProgress={flagProgress} onStepClick={handleFlagClick} />
          </div>
        )}
        <RocketPath
          stepProgress={stepProgress}
          setStepProgress={setStepProgress}
          flagProgress={flagProgress}
          setFlagProgress={setFlagProgress}
          isMainPath={isMainPath}
        />
      </main>
      {/* <Astronaut /> */}
    </>
  );
}