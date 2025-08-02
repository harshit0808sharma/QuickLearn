'use client'

import { createContext, useState } from "react";
import { htmlData } from "@/public/htmlData";
import { cssData } from "@/public/cssData";
import { TeamData } from "@/public/assets/data";
import { TestimonialsData } from "@/public/assets/data";
import { reviews } from "@/public/assets/data";
import { CoursesData } from "@/public/assets/data";
import { artworkData } from "@/public/artworkData";

export const QuickContext = createContext();

export const QuickProvider = ({children}) => {
    
    // const [name, setName] = useState('Harshit')
    
    return(
        <QuickContext.Provider value={{htmlData, cssData, TeamData, TestimonialsData, reviews, CoursesData, artworkData}}>
            {children}
        </QuickContext.Provider>
    )
}
