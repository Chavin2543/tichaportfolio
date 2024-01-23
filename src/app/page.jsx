'use client'

import Astronaut from '@/components/atoms/Astronaut';
import { Controls } from '@/components/atoms/Controls';
import { HomeButton } from '@/components/atoms/HomeButton';
import SubNavPath, { MainNavPath } from '@/components/atoms/NavPath';
import RocketPath from '@/components/atoms/RocketPath';
import SunPlanetStepper from '@/components/atoms/SunPlanetStepper';
import { Flag1Content } from '@/components/contents/Flag1Content';
import { Flag2Content } from '@/components/contents/Flag2Content';
import { Flag3Content } from '@/components/contents/Flag3Content';
import { Flag4Content } from '@/components/contents/Flag4Content';
import { Star1Content } from '@/components/contents/Star1Content';
import { Star2Content } from '@/components/contents/Star2Content';
import { Star3Content } from '@/components/contents/Star3Content';
import { Star4Content } from '@/components/contents/Star4Content';
import { Star5Content } from '@/components/contents/Star5Content';
import { HomeIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import Draggable from 'react-draggable';

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

  const resetStates = () => {
    setStepProgress(0);
    setFlagProgress(0);
    setIsMainPath(false);
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
            {flagProgress <= 20 && <Star1Content />}
            {flagProgress > 20 && flagProgress <= 40 && <Star2Content />}
            {flagProgress > 40 && flagProgress <= 60 && <Star3Content />}
            {flagProgress > 60 && flagProgress <= 80 && <Star4Content />}
            {flagProgress == 100 && <Star5Content />}
          </div>
        )}

        {stepProgress > 0 && !isMainPath && (
          <div className='fixed top-0 left-0 right-0 z-30'>
            <SunPlanetStepper isMainPath={isMainPath} />
            <SubNavPath stepProgress={stepProgress} onStepClick={handleStepClick} />
          </div>
        )}
        {flagProgress > 0 && isMainPath && (
          <div className='fixed top-0 left-0 right-0 z-30'>
            <SunPlanetStepper isMainPath={isMainPath} />
            <MainNavPath stepProgress={flagProgress} onStepClick={handleFlagClick} />
          </div>
        )}
        <RocketPath
          stepProgress={stepProgress}
          setStepProgress={setStepProgress}
          flagProgress={flagProgress}
          setFlagProgress={setFlagProgress}
          isMainPath={isMainPath}
          setIsMainPath={setIsMainPath}
        />
        <div className='fixed bottom-0 left-0 z-50'>
          {/* <Draggable>
            <div className='w-56 h-56 sm:hidden'>
              <Astronaut />
            </div>
          </Draggable> */}
          <HomeButton onClick={resetStates} />
        </div>
        {((isMainPath && flagProgress > 0) || (!isMainPath && stepProgress > 0)) && (
          <div className='fixed bottom-0 right-0 z-50'>
            <Controls
              showBack={isMainPath ? flagProgress == 20 ? false : true : stepProgress == 25 ? false : true}
              showNext={isMainPath ? flagProgress == 100 ? false : true : stepProgress == 100 ? false : true}
              onBack={() => {
                if (isMainPath) {
                  if (flagProgress > 0) {
                    setFlagProgress(flagProgress - 20)
                  }
                } else {
                  if (stepProgress > 25) {
                    setStepProgress(stepProgress - 25)
                  }
                }
              }}
              onNext={() => {
                if (isMainPath) {
                  if (flagProgress < 100) {
                    setFlagProgress(flagProgress + 20)
                  }
                } else {
                  if (stepProgress < 100) {
                    setStepProgress(stepProgress + 25)
                  }
                }
              }}
            />
          </div>
        )}
      </main>
    </>
  );
}