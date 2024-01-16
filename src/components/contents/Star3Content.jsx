"use client"

import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export function Star3Content() {
    return (
        <div className="bg-transparent py-24 sm:py-32 h-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
                <div className="mx-auto grid max-w-2xl h-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="hidden lg:block h-full"></div>
                    <div className="lg:pt-4 h-full">
                        <div className="px-6 py-32 lg:px-8 h-full overflow-auto">
                            <div className="mx-auto max-w-3xl rounded-3xl p-8 text-base leading-7 text-gray-700 bg-white">
                                <p className="text-3xl font-semibold leading-7 text-indigo-900">Planet AX3</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">DEFINING TARGET STATE & GAPS</h1>
                                <p className="mt-6 text-xl text-gray-900 leading-8">
                                Defining target state and identifying gaps is a strategic process for the company to outline its desired future state and assess the existing gaps or differences between the current state and this envisioned future state.                                </p>
                                <p className ="mt-5 font-semibold">
                                            Action:</p>
                                            <ul role="list" className="mt-3 max-w-xl space-y-8 text-gray-600">
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            Prioritize pain points 
                                        </li>
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            Benchmark with companies with similar business models
                                        </li>
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            <span>Painpoints gathered in the <strong>First two stages + Future vision  + benchmarking = Opportunities for modernisation and target state</strong> </span>
                                        </li>
                                        <li className="flex gap-x-3">
                                            <CheckCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                            Identify gaps or difference between current and designed target state
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


