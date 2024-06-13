import React from 'react'
import ShineBorder from './magicui/shine-border'
import NavLinks from './NavLinks'


const Navbar = () => {
    return (
        <div className='w-full flex-center p-5'>
            <ShineBorder
                className="text-center rounded-full p-3 min-w-[300px] min-h-[60px]"
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
                <NavLinks />
            </ShineBorder>
        </div>
    )
}

export default Navbar