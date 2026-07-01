import React from 'react';
import { List } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-6 py-4 '>

            <h1 className='text-white font-bold text-2xl px-4'>AeroForce</h1>
            <div className='flex items-center gap-4 text-white text-md'>
                <p className='gap-2'>About</p>
                <p className='gap-2'>Services</p>
                <p className='gap-2'>Feature</p>
                <p className='gap-2'>Testimonials</p>
            </div>
            <div className='flex items-center gap-4 font-bold text-lg'>
                <List size={24} color='white' />
            </div>
        </div>
    )
};

export default Navbar;