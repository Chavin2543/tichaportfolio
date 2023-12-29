"use client"

import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'

export function Star2Content() {
    return (
        <Container className="flex flex-col justify-center items-center h-full py-16 lg:py-32 text-center">
            <h1 className="font-display text-white text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Accounting{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                    <span className="relative">made simple</span>
                </span>
                {' '}for small businesses.
            </h1>
            <p className="mx-auto text-white mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Most bookkeeping software is accurate, but hard to use. We make the
                opposite trade-off, and hope you don’t get audited.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
                <Button onClick={() => { setGuideOpen(true) }}>Reading Guide</Button>
                <Button variant="outline">
                    <span className="">Start Journey</span>
                </Button>
            </div>
        </Container>
    );
}