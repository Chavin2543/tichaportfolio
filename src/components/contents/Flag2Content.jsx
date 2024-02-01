"use client"

import { Container } from '@/components/atoms/Container'
import ToolSlideOver from '../atoms/ToolSlideOver';
import { useState } from 'react';

export function Flag2Content() {
    const tools = [
        {
            name: '3D printing ',
            description: "3D printing is the process of creating a three dimensional object by printing each layer of material on top of one another.\n\n Use case: Incorporate 3D printing technology where traditional manufacturing processes is time-consuming or resource consuming \n\n Example: Incorporate 3D printing technology for the production of customized furniture since traditional manufacturing methods may be less economical for low-volume, highly customized production runs",
            role: 'Project Management',
            imageUrl:
                'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
            coverImageUrl:
                'https://www.northbridgeinsurance.ca/wp-content/uploads/2018/01/3d-printing-1-1.jpg',
        },
        {
            name: ' Artificial intelligence',
            description: "Artificial intelligence (AI) is the theory and development of computer systems that exhibit human-like intelligence. \n\nUse case: Implementing a Customer Support Chatbot powered by AI. \n\n Example: Implement AI algorithms that allow the chatbot to personalize responses based on customer history and preferences. For example, the chatbot can recommend products based on past purchases or offer personalized promotions.",
            role: 'Version Control',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png',
            coverImageUrl:
                'https://imageio.forbes.com/specials-images/imageserve/653e89602086e529d02d1c76/A-hand-is-holding-the-various-concepts-of-AI-/960x0.jpg?format=jpg&width=960',
        },
        {
            name: 'Blockchain',
            description: "Blockchain is a public distributed ledger where transactions are recorded and confirmed anonymously \n\n Use case: Implementing Blockchain-based system for ensuring transparency and traceability \n\n Example: blockchain-based supply chain traceability system to verify and communicate the journey of the company’s organic produce from farm to table",
            role: 'Project Management',
            imageUrl:
                'https://cdn.iconscout.com/icon/free/png-256/free-asana-226537.png',
            coverImageUrl:
                'data:image/jpeg;base64,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',
        },
        {
            name: 'Internet of things',
            description: "Internet of things (IoT) extends internet connectivity to a diverse range of devices and everyday things. \n\n Use case: Employ IoT devices to track and manage assets such as inventory or equipment. \n\n Example: Implemeting RFID or GPS sensors to monitor the location and condition of goods in transit or in warehouses",
            role: 'Software Security',
            imageUrl:
                'https://cydrill.com/wp-content/uploads/owasp_logo_flat2_icon.png',
            coverImageUrl:
                'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/what-is-iot-smart-home-example.jpeg',
        },
        {
            name: 'Robotics',
            description: "Robotics is the combination of engineering and computer science to automate routine and mundane tasks that follow predefined rules \n\n Use case: implementing RPA (Robotic Process Automation) to streamline processes, reduce manual effort and enhance operational efficiency \n\n Example: Automating the invoice processing workflow. RPA bots can be configured to extract relevant information, perform validation checks and automatically enter the information into the accounting or ERP",
            role: 'CMS',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/zendesk-icon-2048x2048-q18vy4hu.png',
            coverImageUrl:
                'https://fluentpro.com/wp-content/uploads/2020/08/How-to-Build-Workflows-Automate-Daily-Routine-with-Microsoft-Power-Automate.jpg',
        },
        {
            name: 'Virtual reality',
            description: "Virtual reality is a simulation of a 3D image or complete environment where users can interact in a realistic way \n\n Use case: For users to practice soft-skill and job-skill techniques since it enables workers to practice risky tasks in a safe environment \n\n Example: educating factory workers on complicated safety procedures; teaching insurance adjusters to identify water, smoke and fire damage",
            role: 'Automation Server',
            imageUrl:
                'https://w7.pngwing.com/pngs/829/527/png-transparent-computer-icons-jenkins-mauldin-jenkins-llc-head-communication-mauldin-jenkins-llc-thumbnail.png',
            coverImageUrl:
                'https://www.computeam.co.uk/img/dynamic/1000/w/90/what-is-the-future-of-virtual-reality-in-education-33858474.jpg',
        }
    ]

    const [selectedTool, setSelectedTool] = useState(null);
    const [isSlideOverOpen, setSlideOverOpen] = useState(false);

    const handleToolClick = (tool) => {
        setSelectedTool(tool);
        setSlideOverOpen(true);
    };


    return (
        <div className="py-24 pt-40 h-full flex items-center justify-center overflow-auto">
            <div className="mx-auto max-w-7xl px-6 lg:p dx-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-3xl font-bold leading-7 text-indigo-400 cursor-pointer hover:animate-bounce">EMERGING TECHNOLOGIES & USE CASES</h2>
                        <p className="mt-6 text-base leading-8 text-white">
                            Improving a process or enhancing a company requires more than just self-assessment. It involves looking beyond internal perspectives and considering external factors: what competitors and market leaders are doing
                        </p>
                    </div>
                    <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 gap-x-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">

                        {tools.map((tool) => (
                            <span key={tool.name} onClick={() => handleToolClick(tool)} className="bg-white inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-l text-bold font-medium text-black ring-1 ring-inset ring-white hover:bg-gray-600">
                                <svg className="h-1.5 w-1.5 fill-red-400" viewBox="0 0 6 6" aria-hidden="true">
                                    <circle cx={3} cy={3} r={3} />
                                </svg>
                                {tool.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <ToolSlideOver
                tool={selectedTool}
                slideOverOpen={isSlideOverOpen}
                setSlideOverOpen={setSlideOverOpen}
            />
        </div>
    );
}

