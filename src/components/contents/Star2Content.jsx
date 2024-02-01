"use client"

import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

export function Star2Content() {
    return (
        <div className="bg-transparent py-24 sm:py-32 h-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 h-full">
                <div className="mx-auto grid max-w-2xl h-full grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="hidden lg:block h-full"></div>
                    <div className="lg:pt-4 h-full">
                        <div className="px-6 py-32 lg:px-8 h-full overflow-auto">
                            <div className="mx-auto max-w-3xl rounded-3xl p-8 text-base leading-7 text-gray-700 bg-white">
                                <p className="text-3xl font-semibold leading-7 text-indigo-900">Planet AX2</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl">TECHNOLOGY ASSESSMENT</h1>
                                <p className="mt-6 text-xl text-gray-900 leading-8">
                                There are many aspects in assessing a company&apos;s technology capabilities which would depend on the company’s current technology stack. Generally companies would assess their technology capabilities in terms of data, infrastructure, security, integration, etc. However, on a high-level, the process of as-is state analysis is as follows:

                                </p>
                                <li className="mt-8 flex gap-x-3"><CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span><strong>Collect data </strong>  by preparing an application portfolio or a standardized document for application owners and users to fill out. The column would signify the aspect on which the company would want to collect data. For example, column headers could include application name, application criticality, tools and technology used for the application, pain points and bottlenecks, regulatory compliance, etc.
 </span>
                                    </li>
                                <li className="mt-5 flex gap-x-3"><CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span><strong>Store all application information in a common repository </strong>  so there is one single source of truth and information is easy to analyze for gaps </span>
                                    </li>
                                <p className="mt-8 text-gray-500"> <em>Note: For smaller SMEs you can assess the technologies you are currently using and document it down in a  centralized repository 
                                </em></p>

                            
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


