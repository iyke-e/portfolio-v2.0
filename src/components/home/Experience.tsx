import React from 'react'

const Experience = () => {
    return (
        <div className='pt-10 '>
            <div className='pad-auto mb-6'>
                <p className='mb-6 px-4 py-2 bg-gradient-to-r from-white/20  to-white/0 w-fit '>Experience</p>
                <div className='md:flex justify-between items-start'>
                    <h1 className='text-[32px] md:text-5xl max-w-80 md:max-w-140 md:leading-16 mb-4'>My Most Recent Experiences </h1>
                </div>
            </div>
            <div className='grid'>
                {
                    experiences.slice(0, 2).map((item, index) => (
                        <div key={index} className={`${index % 2 === 0 ? "bg-white/5 " : ""} pad-auto py-6 md:py-10 cursor-pointer hover:bg-white/10 md:grid md:grid-cols-[5fr_4fr] md:items-center`}>
                            <div className='mb-4 lg:mb-0'>
                                <h3 className='font-bold mb-2 text-lg md:text-xl'>{item.role} at {item.company} ({item.type})</h3>
                                <p className='text-white/70'>{item.description}</p>
                            </div>

                            <div>
                                <p className='text-right md:text-2xl font-bold'>{item.year}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default Experience


const experiences = [
    {
        role: "Mobile Development Trainee",
        company: "Rise Academy",
        type: "Remote",
        description:
            "Built cross-platform mobile features in React Native, including reusable UI components, improving development efficiency by 20%.",
        year: "Jan 2025 – Present",
    },
    {
        role: "Frontend Development Intern",
        company: "Integrated Software Services Ltd (ISSL)",
        type: "Onsite",
        description:
            "Assisted in building and maintaining responsive web pages using HTML, CSS, and JavaScript, reducing page load times by 15% through optimization.",
        year: "May 2024 - Nov 2024",
    },
    {
        role: "Software Engineering Intern",
        company: "Acme Software Labs",
        type: "Remote",
        description:
            "Collaborated with the engineering team to develop and test REST APIs. Fixed 12+ critical bugs and implemented new features that improved system reliability.",
        year: "Jun 2024 – Aug 2024",
    },
    {
        role: "Graphic Designer",
        company: "Miracle Ventures",
        type: "Onsite",
        description:
            "Designed marketing assets (banners, book covers, flyers) that improved client brand visibility and contributed to a 25% increase in campaign engagement.",
        year: "2020 – 2021",
    },
];
