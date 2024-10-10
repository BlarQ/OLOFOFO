"use client"

import Link from 'next/link'
import React from 'react'
import { Switch } from "@/components/ui/switch"
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import MobileMenu from './MobileMenu';
import { usePathname } from 'next/navigation';



const Navbar = () => {

    const pathname = usePathname()

    return (
        <header className='py-4 bg-white text-gray-900 transition-colors duration-300 shadow-sm'>
            <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8'>
                {/* Logo */}
                <div className='text-xl font-bold'>
                    <h1 className='font-bold text-2xl'>
                        <Link href='/'>
                            OLOFOFO
                        </Link>
                    </h1>
                </div>

                {/* desktop navbtn */}
                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList className='flex space-x-8'>
                        <NavigationMenuItem>
                            <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'text-red-500' : '' } hover:text-gray-600 font-semibold`}>
                                News
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='dark:bg-gray-900 dark:text-white'>
                                Services
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <ul className='text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2'>
                                        <li>
                                            <NavigationMenuLink href='/services/webdevelopment'
                                            className='hover:text-gray-600'>
                                                Website Development
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href='/services/app'
                                            className='hover:text-gray-600'>
                                                Mobile Apps
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink href='/services/seo'
                                            className='hover:text-gray-600'>
                                                SEO
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href='/contact' className={`${pathname === '/contact' ? 'text-red-500' : '' } hover:text-gray-600 font-semibold`}>
                                Contact
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink href='/about' className={`${pathname === '/about' ? 'text-red-500' : '' } hover:text-gray-600 font-semibold`}>
                                About
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* color switcher */}
                <div className='hidden lg:flex items-center space-x-4'>
                    <div className='flex items-center gap-2'>
                        <span>Dark Mode</span>
                        <Switch />
                    </div>

                    <Button variant="default" className='px-6'>Login</Button>

                </div>

                {/* hamburger menu */}

                <div className='lg:hidden'>

                    <MobileMenu className='hidden'/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar