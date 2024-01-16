"use client"

import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export function Star5Content() {
    return (
        <div className="bg-transparent py-24 sm:py-32 h-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
                <div className="mx-auto grid max-w-2xl h-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="hidden lg:block h-full"></div>
                    <div className="lg:pt-4 h-full">
                        <div className="px-6 py-32 lg:px-8 h-full overflow-auto">
                            <div className="mx-auto max-w-3xl rounded-3xl p-8 text-base leading-7 text-gray-700 bg-white">
                                <p className="text-3xl font-semibold leading-7 text-indigo-900">Planet AX5</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">PRIORITIZING PROJECTS</h1>
                                <p className="mt-6 text-xl text-gray-900 leading-8">
                                Once the company has compiled a list of projects necessary to attain its desired future state, the next step involves prioritizing the sequence in which these projects will be undertaken                                </p>
                                
                                <p className ="mt-5 font-semibold">
                                            Action:</p>
                                            <ul role="list" className="mt-3 max-w-xl space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            List out all gaps and their relevant approach for modernization
                                        </li>
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            Identify the value and the effort required for each gap, these factors will be used to prioritize projects within the companies pipeline ex: the company should prioritize projects that require low effort and high value. Basically companies should start by implementing use cases that are quick to market, scalable, easy to implement and show potential to add value for the company
                                        </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


