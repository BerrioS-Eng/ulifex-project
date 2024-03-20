"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import logoUlifex from '@public/LogoUlifex.svg'
import UlifexIconNavbar from './UlifexIconNavbar';
import Link from 'next/link';

const Navbar = () => {
    const navItems = [
        { id: 1, text: "Inicio" },
        { id: 2, text: "Servicios" },
        { id: 3, text: "Sobre nosotros" },
        { id: 4, text: "Contacto" }
    ];
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    const menuRef = useRef<HTMLUListElement>(null);
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, [])
    const handleClickOutside = (e: { target: any; }) => {
        if (!menuRef.current?.contains(e.target)) {
            setNav(false)
        }

    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-4 px-4'>
            <Image
                priority
                src={logoUlifex}
                alt='Logo Ulifex'
                width={200}
                height={95}
            />

            {/*Desktop navigation*/}
            <ul className='hidden lg:flex'>
                {
                    navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-2 m-4 cursor-pointer'
                        >
                            {item.text}
                        </li>
                    ))
                }
            </ul>

            <div className='flex items-center gap-2'>
                <Link
                    href={"/"}
                    className='hidden md:inline-flex bg-[#9966FF] w-[200px] h-[50px] text-center items-center justify-center rounded-[50px] text-white font-semibold font-league text-lg'>
                    Descubre más
                </Link>
                {/*Mobile navigation*/}
                {/*Icon*/}
                <button
                    onClick={handleNav}
                    className='block lg:hidden bg-[#86D7FF] rounded-xl pt-[1px] pr-[1px]'>
                    {nav ? <UlifexIconNavbar size='60' color='FF6699' /> : <UlifexIconNavbar size='60' color='FF6699' />}
                </button>
            </div>

            {/*Menú*/}
            <ul
                ref={menuRef}
                className={
                    nav ? 'fixed lg:hidden right-0 top-0 h-full w-[40%] border-l border-l-gray-900 bg-[#FF6699] ease-in-out duration-500'
                        : 'fixed top-0 bottom-0 right-[-50%] w-[40%] ease-in-out duration-500'
                }
            >
                {/*Mobile logo*/}
                <h1 className='w-full text-3xl font-bold text-[#86D7FF] m-4'>
                    Ulifex
                </h1>
                {/*Mobile Navigation Items*/}
                {
                    navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl duration-300 cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar