"use client"

import React, { useRef, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Container } from './Container';
import { Button } from './Button';
import ReadingGuide from './ReadingGuide';
import { LoadingScreen } from '../contents/LoadingScreen';

export default function RocketPath({ stepProgress, setStepProgress, flagProgress, setFlagProgress, isMainPath, setIsMainPath }) {
    const [splineKey, setSplineKey] = useState(0);
    const splineRef = useRef();

    const rocketRef = useRef();
    const milestoneRef = useRef()

    const sunRef = useRef();
    const flag1Ref = useRef();
    const flag2Ref = useRef();
    const flag3Ref = useRef();
    const flag4Ref = useRef();

    const [childrenOpacity, setChildrenOpacity] = useState(1);
    const [isGuideOpen, setGuideOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleSplineLoad = (spline) => {
        if (spline) {
            splineRef.current = spline;
            getRocket(spline);
        }
    };

    const getRocket = (spline) => {
        const obj = spline.findObjectById("31348b44-528d-40b2-bb7f-e1486bde95cc");
        const milestoneObj = spline.findObjectById("ba90cfe3-0f78-4058-9c03-ba3501dba8ec");
        const sunObj = spline.findObjectById("4baaa56c-832a-4849-baaa-ce5872dc9828");
        const flag1Obj = spline.findObjectById("fc08452a-3a45-4db5-93b0-5ef5605b83f0");
        const flag2Obj = spline.findObjectById("a2e3cd12-040b-4561-a770-23206869d6fd");
        const flag3Obj = spline.findObjectById("62273b53-c1e4-4357-99dd-d9c9f9c9db62");

        rocketRef.current = obj;

        milestoneRef.current = milestoneObj;
        milestoneRef.current.visible = false;

        flag1Ref.current = flag1Obj
        flag2Ref.current = flag2Obj
        flag3Ref.current = flag3Obj
        sunRef.current = sunObj

        setIsLoading(false);
    }

    const moveRocketUp = (isFlag) => {
        if (!rocketRef.current || !splineRef.current) {
            return;
        }

        let speed = 0;
        let maxSpeed = 5;
        let acceleration = 20;
        let maxY = 2000;
        let opacity = 1;

        const fadeOut = () => {
            if (opacity > 0) {
                opacity -= 0.02;
                setChildrenOpacity(opacity);
                requestAnimationFrame(fadeOut);
            }
        };
        requestAnimationFrame(fadeOut);


        const animate = () => {
            if (speed < maxSpeed) {
                speed += acceleration;
            }

            rocketRef.current.position.y += speed;

            if (rocketRef.current.scale.x > 0) {
                rocketRef.current.scale.x -= 0.008;
                rocketRef.current.scale.y -= 0.008;
                rocketRef.current.scale.z -= 0.008;
            }

            if (rocketRef.current.position.y > maxY) { 
                highlightFlag(1)
                milestoneRef.current.visible = true;
                flag1Ref.current.visible = false;
                flag2Ref.current.visible = false;
                flag3Ref.current.visible = false;
        
                if (isFlag == true) {
                    setStepProgress(25);
                } else {
                    setIsMainPath(true);
                    setFlagProgress(25);
                }
                return
             } else {
                requestAnimationFrame(animate);
             }
        };

        requestAnimationFrame(animate);
    };

    const rotateSun = (progress) => {
        sunRef.current.scale.set(1, 1, 1)
        sunRef.current.rotation.z = 190
        let maxRotation = 40;
        let rotationProgression = 0;

        sunRef.current.visible = true;
        const animate = () => {
            if (rotationProgression < maxRotation) {
                sunRef.current.rotation.x += 0.04;
                rotationProgression += 1;
                requestAnimationFrame(animate);
            }
        };

        const slowAnimate = () => {
            sunRef.current.rotation.x += 0.0001;
            requestAnimationFrame(slowAnimate)
        };

        requestAnimationFrame(animate);
        requestAnimationFrame(slowAnimate);
    }

    const highlightFlag = (position) => {
        if (position == 1) {
            let targetScale = 30;
            let targetZPosition = -1200;
            let currentZPosition = 5000;

            flag1Ref.current.scale.set(targetScale, targetScale, targetScale)
            flag1Ref.current.position.z = currentZPosition;
            flag1Ref.current.visible = true

            const updateScaleAndPosition = () => {
                if (currentZPosition > targetZPosition) {
                    currentZPosition -= 20;
                    flag1Ref.current.position.z = currentZPosition;
                    flag2Ref.current.position.z -= 40
                    flag3Ref.current.position.z -= 40
                }
            };

            const animate = () => {
                updateScaleAndPosition();
                if (flag1Ref.current.position.z > targetZPosition) {
                    requestAnimationFrame(animate);
                }
            };

            const rotateSlowly = () => {
                flag1Ref.current.rotation.x += 0.0004
                requestAnimationFrame(rotateSlowly);
            }

            requestAnimationFrame(animate);
            requestAnimationFrame(rotateSlowly);
        } else if (position == 2) {
            let targetScale = 15;
            let targetZPosition = -1200;
            let currentZPosition = 5000;

            flag2Ref.current.scale.set(targetScale, targetScale, targetScale)
            flag2Ref.current.position.z = currentZPosition;
            flag2Ref.current.visible = true

            const updateScaleAndPosition = () => {
                if (currentZPosition > targetZPosition) {
                    currentZPosition -= 20;
                    flag1Ref.current.position.z -= 40
                    flag3Ref.current.position.z -= 40
                    flag2Ref.current.position.z = currentZPosition;
                }
            };

            const animate = () => {
                updateScaleAndPosition();
                if (flag2Ref.current.position.z > targetZPosition) {
                    requestAnimationFrame(animate);
                }
            };

            const rotateSlowly = () => {
                flag2Ref.current.rotation.x += 0.0004
                requestAnimationFrame(rotateSlowly);
            }

            requestAnimationFrame(animate);
            requestAnimationFrame(rotateSlowly);

        } else if (position == 3) {
            let targetScale = 15;
            let targetZPosition = -1200;
            let currentZPosition = 5000;

            flag3Ref.current.scale.set(targetScale, targetScale, targetScale)
            flag3Ref.current.position.z = currentZPosition;
            flag3Ref.current.visible = true

            const updateScaleAndPosition = () => {
                if (currentZPosition > targetZPosition) {
                    currentZPosition -= 20;
                    flag3Ref.current.position.z = currentZPosition;
                    flag2Ref.current.position.z -= 40
                    flag1Ref.current.position.z -= 40
                }
            };

            const animate = () => {
                updateScaleAndPosition();
                if (flag3Ref.current.position.z > targetZPosition) {
                    requestAnimationFrame(animate);
                }
            };

            const rotateSlowly = () => {
                flag3Ref.current.rotation.x += 0.0004
                requestAnimationFrame(rotateSlowly);
            }

            requestAnimationFrame(animate);
            requestAnimationFrame(rotateSlowly)
        }
    }

    const resetSplineScene = () => {
        setSplineKey(prevKey => prevKey + 1);
        // Reset other relevant states here
    };    

    useEffect(() => {
        if (flagProgress > 0) {
            if (flagProgress == 25) {
                highlightFlag(1);
            } else if (flagProgress == 50) {
                highlightFlag(2);
            } else if (flagProgress == 75) {
                highlightFlag(3);
            }
        } else if (flagProgress == 0) {
            setChildrenOpacity(1);
            setIsLoading(true);
            resetSplineScene();
        }
    }, [flagProgress]);

    useEffect(() => {
        if (stepProgress > 0) {
            rotateSun(stepProgress);
        } else if (stepProgress == 0) {
            setChildrenOpacity(1);
            setIsLoading(true);
            resetSplineScene();
        }
    }, [stepProgress]);

    useEffect(() => {
        if (isMainPath) {
            setFlagProgress(25);
            if (flagProgress > 0) {
                sunRef.current.visible = false
                flag1Ref.current.visible = true
                flag2Ref.current.visible = true
                flag3Ref.current.visible = true
            }
        } else {
            if (stepProgress > 0) {
                sunRef.current.visible = true
                flag1Ref.current.visible = false
                flag2Ref.current.visible = false
                flag3Ref.current.visible = false
            }
        }
    }, [isMainPath]);

    return (
        <div className='relative w-screen h-screen'>
            {isLoading && (
                <div className='fixed top-0 left-0 right-0 right-0'>
                    <LoadingScreen />
                </div>
            )}
            <Spline
                key={splineKey}
                ref={splineRef}
                scene="https://prod.spline.design/wj9ve2VdpbLDdQJN/scene.splinecode"
                onLoad={handleSplineLoad}
            />
            <div
                className="flex justify-center items-center absolute w-full h-full top-0 left-0 z-10"
                style={{ opacity: childrenOpacity, transition: 'opacity 1s ease' }}
            >
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
                    <div className="mt-10 flex justify-center gap-x-6">
                        <Button
                            onClick={() => { setGuideOpen(true) }}
                        >
                            <span className="">Reading Guide</span>
                        </Button>
                        <Button
                            onClick={() => { moveRocketUp(true) }}
                        >
                            <span className="">Understanding the sun</span>
                        </Button>
                        <Button
                            onClick={() => { moveRocketUp(false) }}
                        >
                            <span className="">Launch planetary exploration</span>
                        </Button>
                    </div>
                </Container>
                {isGuideOpen && <ReadingGuide open={isGuideOpen} setOpen={setGuideOpen} />}
            </div>
        </div>
    );
}