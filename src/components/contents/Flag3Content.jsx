"use client"

import { useState } from "react";
import ToolSlideOver from "../atoms/ToolSlideOver";


export function Flag3Content() {
    const [selectedTool, setSelectedTool] = useState(null);
    const [isSlideOverOpen, setSlideOverOpen] = useState(false);

    const handleToolClick = (tool) => {
        setSelectedTool(tool);
        setSlideOverOpen(true);
    };

    const tools = [
        {
            name: 'Jira',
            description: "Mock Description",
            role: 'Project Management',
            imageUrl:
                'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
            coverImageUrl:
                'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
        },
        {
            name: 'GitLab',
            description: "Mock Description",
            role: 'Version Control',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png',
            coverImageUrl:
                'https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png',
        },
        {
            name: 'Asana',
            description: "Mock Description",
            role: 'Project Management',
            imageUrl:
                'https://cdn.iconscout.com/icon/free/png-256/free-asana-226537.png',
            coverImageUrl:
                'https://cdn.iconscout.com/icon/free/png-256/free-asana-226537.png',
        },
        {
            name: 'OWASP',
            description: "Mock Description",
            role: 'Software Security',
            imageUrl:
                'https://cydrill.com/wp-content/uploads/owasp_logo_flat2_icon.png',
            coverImageUrl:
                'https://cydrill.com/wp-content/uploads/owasp_logo_flat2_icon.png',
        },
        {
            name: 'Zendesk',
            description: "Mock Description",
            role: 'CMS',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/zendesk-icon-2048x2048-q18vy4hu.png',
            coverImageUrl:
                'https://static-00.iconduck.com/assets.00/zendesk-icon-2048x2048-q18vy4hu.png',
        },
        {
            name: 'Jenkins',
            description: "Mock Description",
            role: 'Automation Server',
            imageUrl:
                'https://w7.pngwing.com/pngs/829/527/png-transparent-computer-icons-jenkins-mauldin-jenkins-llc-head-communication-mauldin-jenkins-llc-thumbnail.png',
            coverImageUrl:
                'https://w7.pngwing.com/pngs/829/527/png-transparent-computer-icons-jenkins-mauldin-jenkins-llc-head-communication-mauldin-jenkins-llc-thumbnail.png',
        },
        {
            name: 'Apigee',
            description: "Mock Description",
            role: 'API Gateway',
            imageUrl:
                'https://cdn.worldvectorlogo.com/logos/apigee-1.svg',
            coverImageUrl:
                'https://cdn.worldvectorlogo.com/logos/apigee-1.svg',
        },
    ]

    return (
        <div className="bg-transparent w-full h-full">
            <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-center">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 overflow-auto">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-3xl font-bold leading-7 text-indigo-600">USEFUL TOOLS</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A better workflow</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Useful tools description
                            </p>
                        </div>
                    </div>
                    <div className="lg:pt-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    onClick={() => handleToolClick(tool)}
                                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white hover:bg-indigo-200 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                                >
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={tool.imageUrl} alt="" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900">{tool.name}</p>
                                            <p className="truncate text-sm text-gray-500">{tool.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
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