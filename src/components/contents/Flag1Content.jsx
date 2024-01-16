import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import { useState } from 'react';
import styles from './Flag1Content.module.css';

export function Flag1Content() {
    const [isClicked, setIsClicked] = useState(true);
    const [animationKey, setAnimationKey] = useState(0);

    const features = [
        {
            name: 'Clear project ownership',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Standardization of processes throughout across business units',
            icon: LockClosedIcon,
        },
        {
            name: 'Strategy alignment',
            icon: ServerIcon,
        },
        {
            name: 'Controls in data maintenance',
            icon: ServerIcon,
        },
    ];

    // const features2 = [
    //     {
    //         name: 'Create new value: Modernize processes and technology that will drive speed, agility and flexibility to stay ahead of the competition',
    //         icon: CloudArrowUpIcon,
    //     },
    //     {
    //         name: 'Elevate the customer journey: Rethink customer experience to build deeper connection',
    //         icon: LockClosedIcon,
    //     },
    //     {
    //         name: 'Unlock analytics and AI initiatives: Realize the potential of artificial intelligence at scale - in a way that you can trust',
    //         icon: ServerIcon,
    //     },
    //     {
    //         name: 'Enable data modernization: Improve data assets to make faster, more informed decisions',
    //         icon: ServerIcon,
    //     },
    //     {
    //         name: 'Fuel growth with talent: Transform your HR landscape with innovative people strategies and emerging technologies to attract and retain talent',
    //         icon: ServerIcon,
    //     },
    // ];

    const toggleClick = () => {
        setIsClicked(!isClicked);
        setAnimationKey(prevKey => prevKey + 1);
    };

    const renderFeatures = (featuresList) => {
        return featuresList.map((feature, index) => (
            <div 
                key={feature.name} 
                className={`relative pl-9 ${styles.itemHidden}`}
                style={{
                    animation: `fadeInRight ease forwards ${index * 1}s`
                }}
            >
                <dt className="inline font-semibold text-white">
                    <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                    {feature.name}
                </dt>
            </div>
        ));
    };

    return (
        <div className="bg-transparent py-24 sm:py-32 h-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="hidden lg:block"></div>
                    <div className="lg:pt-4 ">
                        <div className={`${styles.content} ${isClicked ? styles.visible : ''}`}>
                            <h2 className="text-3xl font-bold leading-7 text-indigo-400 cursor-pointer hover:animate-bounce" onClick={toggleClick}>
                                UNDERSTANDING DIGITAL TRANSFORMATION
                            </h2>
                            <p className="mt-6 text-base leading-8 text-white">
                            Digital transformation involves leveraging technologies to enhance efficiency, innovation, and overall business performance. It involves processes of laying the foundation to re-engineer your mission-critical operating model so that it could thrive in tomorrow’s business landscape.
                            Most companies like to focus on the technical aspect, however the pitfalls for digital transformation often lies on the people.
                            </p>
                            <p className="mt-6 text-base leading-8 text-white">
                            Most issues arise from the lack of: 
                                <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                Clear project ownership 
                                </li>
                                <li className="flex gap-x-3"> 
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                Standardization of processes throughout across business units </li>
                                <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Strategy alignment</li>
                                <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Controls in data maintenance</li>
                            </p>
                            <p className="mt-6 text-base leading-8 text-white">
                            Here are some goals and values you can keep in mind when deciding to embark on your digital transformation journey
                            <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                Clear project ownership 
                                </li>
                                <li className="flex gap-x-3"> 
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                Standardization of processes throughout across business units </li>
                                <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Strategy alignment</li>
                                <li className="flex gap-x-3">
                                <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Controls in data maintenance</li>
                            </p>


                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {/* {isClicked && renderFeatures(features2)} */}
                            </dl>
                        </div>
                        <div className={`${styles.content} ${!isClicked ? styles.visible : ''}`}>
                            <h2 className="text-3xl font-bold leading-7 text-indigo-300 cursor-pointer hover:animate-bounce" onClick={toggleClick}>
                                Goals and Values for Digital Transformation
                            </h2>
                            <dl className="mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                                {/* {!isClicked && renderFeatures(features2)} */}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
