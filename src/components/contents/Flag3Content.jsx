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
            description: "Jira is an agile project management tool that helps teams plan, track, and manage their work. It provides features for issue tracking, workflow management, and collaboration among software development teams. \n\n Ideal for: Software development projects, IT teams, and any project that follows an agile or Scrum methodology.",
            role: 'Project Management',
            imageUrl:
                'https://cdn-icons-png.flaticon.com/512/5968/5968875.png',
            coverImageUrl:
                'https://www.automation-consultants.com/wp-content/uploads/2019/06/jira-bpm-2.png',
        },
        {
            name: 'GitLab',
            description: "GitLab is a web-based Git repository manager that provides source code management and CI/CD (continuous integration/continuous deployment) capabilities. \n\n Ideal for: Software development teams using Git for version control, CI/CD pipelines, and collaboration on code repositories.",
            role: 'Version Control',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/gitlab-icon-2048x1885-1o0cwkbx.png',
            coverImageUrl:
                'https://miro.medium.com/v2/resize:fit:1400/1*YjOtv5OOEP744YTdzBxWsw.png',
        },
        {
            name: 'Asana',
            description: "Asana is a project management tool that helps teams organize and track work. It offers features for task management, project planning, and collaboration. \n\n Ideal for: Marketing teams, project managers, and any organization looking for a versatile project management solution.",
            role: 'Project Management',
            imageUrl:
                'https://cdn.iconscout.com/icon/free/png-256/free-asana-226537.png',
            coverImageUrl:
                'https://i.pcmag.com/imagery/reviews/07koiYlrzusMasUtb8S1jz8-14.fit_scale.size_760x427.v1580335304.png',
        },
        {
            name: 'OWASP',
            description: "OWASP is a non-profit organization focused on improving software security. It provides resources, tools, and best practices to help organizations develop and maintain secure web applications. \n\n Ideal for: Security Teams, Developers, Organizations Focused on Web Application Security",
            role: 'Software Security',
            imageUrl:
                'https://cydrill.com/wp-content/uploads/owasp_logo_flat2_icon.png',
            coverImageUrl:
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXswgSjKj26RbRR2u4HnZGdSURrsvscOzqMMIC9HyZeWKBdJK8tFjgWtpD-eGY_SOtzVTUz3Cwx--aocQlpJ13eyxpbL4Qu-q1ztGPlJVg1eLqsoeld-_AUWbw7CmR0XYP0M4BIAInyDj0-1XMFKuBsLGssJZzWJedbl8JK5AZyjzEL5Bg-OdA4HrR/s728-rw-ft-e30/owasp.jpg',
        },
        {
            name: 'Zendesk',
            description: "Zendesk is a customer service and engagement platform that allows organizations to provide support across different channels, including chat, email, and social media. \n\n Ideal for: Customer support teams, help desks, and companies aiming to enhance their customer service operations.",
            role: 'CMS',
            imageUrl:
                'https://static-00.iconduck.com/assets.00/zendesk-icon-2048x2048-q18vy4hu.png',
            coverImageUrl:
                'https://cdn2.downdetector.com/static/uploads/logo/zendesk_yRMO1Yp.png',
        },
        {
            name: 'Jenkins',
            description: "Jenkins is an open-source automation server that facilitates the continuous integration and continuous delivery (CI/CD) of software projects. It automates the building, testing, and deployment of code changes. \n\n Ideal for: Development and Operations Teams, CI/CD Pipelines, Automated Testing Environments",
            role: 'Automation Server',
            imageUrl:
                'https://w7.pngwing.com/pngs/829/527/png-transparent-computer-icons-jenkins-mauldin-jenkins-llc-head-communication-mauldin-jenkins-llc-thumbnail.png',
            coverImageUrl:
                'https://www.jenkins.io/images/logo-title-opengraph.png',
        },
        {
            name: 'Apigee',
            description: "Apigee is a comprehensive API management platform that  offers a set of tools and services that help organizations design, deploy, monitor, and scale APIs \n\n Ideal for: DevOps Teams, projects with the goal of modernizing IT infrastructure, enabling seamless integration, and ensuring efficient API communication across systems.",
            role: 'API Gateway',
            imageUrl:
                'https://cdn.worldvectorlogo.com/logos/apigee-1.svg',
            coverImageUrl:
                'https://nordicapis.com/wp-content/uploads/Apigee_TransparentPrimaryLogo-4.png',
        },
    ]

    return (
        <div className="bg-transparent h-full pt-6">
            <div className="mx-auto max-w-7xl h-full px-6 lg:px-8 flex items-center justify-center">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 overflow-auto">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-3xl font-bold leading-7 text-indigo-400">USEFUL TOOLS</h2>
                            <p className="mt-6 text-lg leading-8 text-white">
                                Below are some tools that might proove useful in helping you along your digital transformation journey
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