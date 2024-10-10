'use client'
import React from 'react'
import { Button } from './ui/button'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
import { useState } from 'react'

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
    return (
        <div>
            <div className='lg:hidden '>
                <Button onClick={toggleMobileMenu}>
                    {
                        isMobileMenuOpen ? (<MdOutlineClose size={24} />
                        ) : (<MdOutlineMenu size={24} />)
                    }
                </Button>
            </div>
        </div>
    )
}

export default MobileMenu