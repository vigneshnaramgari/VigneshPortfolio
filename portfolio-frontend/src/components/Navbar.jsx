import { useEffect, useRef } from 'react'

export default function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                navRef.current.classList.add(
                    'bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm',
                    'dark:bg-darkTheme','dark:shadow-white/20'
                );
            } else {
                navRef.current.classList.remove(
                    'bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm',
                    'dark:bg-darkTheme','dark:shadow-white/20'
                );
            }
        });
    }, [])

    return (
        <nav
            ref={navRef}
            className="w-full fixed px-6 lg:px-12 xl:px-[8%] py-5 flex items-center justify-between z-50"
        >

            {/* LEFT — Code-style Name */}
            <a href="#top">
                <div className="px-4 py-2 rounded-xl border border-gray-300 dark:border-white/30 bg-white/70 dark:bg-transparent shadow-sm font-mono text-lg text-indigo-500">
                    &lt; Vignesh Naramgari /&gt;
                </div>
            </a>

            {/* CENTER — Navigation Links */}
            <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/30 dark:bg-transparent">
                <li><a href="#top">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact me</a></li>
            </ul>

            {/* RIGHT — Empty space keeps balance */}
            <div className="w-[120px]"></div>
        </nav>
    )
}

