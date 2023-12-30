"use client"

import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'

export function Flag4Content({ setIsMainPath, setFlagProgress }) {
    return (
        <Container className="flex flex-col justify-center items-center h-full py-16 lg:py-32 text-center">
            <h1 className="font-display text-white text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            We&apos;re{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                    <span className="relative">done</span>
                </span>
                {' '}here
            </h1>
            <p className="mx-auto text-white mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            it&apos;s time to move to the next planet
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
                <Button onClick={() => {
                    setIsMainPath(true);
                    setFlagProgress(25);
                }}>
                    <span className="">Next Planet</span>
                </Button>
            </div>
        </Container>
    );
}
