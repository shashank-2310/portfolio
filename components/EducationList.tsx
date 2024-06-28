"use client";

import { Tabs } from "./ui/tabs";

export default function EducationList() {
    const tabs = [
        {
            title: "Graduation",
            value: "graduation",
            content: (
                <div className="w-4/5 sm:w-3/4 text-center sm:text-left overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 text-white bg-gradient-to-b from-red-500 to-black">
                    <h1 className="text-lg md:text-2xl font-semibold">Chandigarh Univeristy</h1>
                    <p className="text-sm md:text-base">Bachelor of Engineering</p>
                    <p className="text-sm md:text-base">Computer Science & Engineering</p>
                    <p className="text-sm md:text-base">2021 - 2025</p>
                </div>
            ),
        },
        {
            title: "Intermediate",
            value: "intermediate",
            content: (
                <div className="w-4/5 sm:w-3/4 text-center sm:text-left overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 text-white bg-gradient-to-b from-[#00C9A7] to-black">
                    <h1 className="text-lg md:text-2xl font-semibold">Campus School</h1>
                    <p className="text-sm md:text-base">CBSE</p>
                    <p className="text-sm md:text-base">Class XII</p>
                    <p className="text-sm md:text-base">2020 - 2021</p>
                </div>
            ),
        },
        {
            title: "High School",
            value: "highschool",
            content: (
                <div className="w-4/5 sm:w-3/4 text-center sm:text-left overflow-hidden relative h-full rounded-2xl p-3 sm:p-6 text-white bg-gradient-to-b from-[#1E86FF] to-black">
                    <h1 className="text-lg md:text-2xl font-semibold">Campus School</h1>
                    <p className="text-sm md:text-base">CBSE</p>
                    <p className="text-sm md:text-base">Class X</p>
                    <p className="text-sm md:text-base">2017 - 2018</p>
                </div>
            ),
        }
    ];

    return (
        <div className="h-[21rem] sm:h-[14rem] lg:h-[15rem] [perspective:1000px] rounded-xl relative flex flex-col w-full items-start justify-start lg:pl-10">
            <h1 className="md:text-xl sm:pr-2 text-center sm:text-start sm:pl-[4.3rem] lg:pl-0 text-base w-full text-gray-400 uppercase font-medium mb-6">Education</h1>
            <Tabs tabs={tabs} tabClassName="hover:bg-zinc-800 sm:mr-6"/>
        </div>
    );
}