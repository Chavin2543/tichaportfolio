"use client"

import { Container } from '@/components/atoms/Container'

export function Flag2Content() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-white">Emerging Technologies and use case themes</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                            scelerisque amet ullamcorper eu enim et fermentum, augue.
                        </p>
                    </div>
                    <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-red-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            3D printing
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-yellow-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            Artificial intelligence
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-green-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            Blockchain
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-blue-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            Internet of things
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-indigo-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            Robotics
                        </span>
                        <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-white ring-1 ring-inset ring-white hover:bg-gray-600">
                            <svg className="h-1.5 w-1.5 fill-purple-400" viewBox="0 0 6 6" aria-hidden="true">
                                <circle cx={3} cy={3} r={3} />
                            </svg>
                            Virtual reality
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

