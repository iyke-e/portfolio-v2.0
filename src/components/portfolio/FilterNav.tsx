"use client"

import React, { useState } from 'react'
import Button from '../ui/Button'

const FilterNav = ({ acitveFilter, setActiveFilter }: { acitveFilter: string, setActiveFilter: (item: string) => void }) => {
    const [,] = useState("All")

    return (
        <div className='overflow-hidden'>
            <ul className='flex  grow-0 shrink-0 gap-3 md:gap-6'>
                {
                    filternav.map(item => (
                        <li key={item} onClick={() => setActiveFilter(item)}>
                            <Button className={`${item === acitveFilter ? "!bg-white text-background" : ""} whitespace-nowrap !text-sm`} >
                                {item}
                            </Button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default FilterNav


const filternav = ["All", "UI/Design", "Mobile Apps", "Web Apps", "Dashboards", "AI/ML", "Advanced",]