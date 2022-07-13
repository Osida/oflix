import {images} from "../../constants";
import Image from "next/image";
import {BellIcon, SearchIcon} from "@heroicons/react/solid";
import Link from "next/link";
import {useEffect, useState} from "react";
import {motion} from 'framer-motion';

const LINKS: string[] = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List']

const Header = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) setIsScrolled(true)
            else setIsScrolled(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)

    }, []);

    return (
        <header className={`${isScrolled && 'bg-[#141414]'} transition-all transition-all duration-300 ease-in-out hover:bg-[#141414]`}>
            {/*Left things*/}
            <div className={'flex items-center space-x-2 md:space-x-10'}>
                <motion.div
                    className={'w-28 h-auto'}>
                    <motion.img
                        drag dragSnapToOrigin
                        src={images.netflix.src}
                        alt={'Netflix'}
                        // layout={'responsive'}
                        // objectFit={'contain'}
                        // placeholder={'blur'}
                        className={'cursor-pointer object-contain w-full h-full'}
                    />
                </motion.div>
                <ul className={'hidden space-x-4 md:flex'}>
                    {LINKS.map((item, idx) => (
                        <li key={`${item + idx}`} className={'header-link'}>{item}</li>
                    ))}
                </ul>
            </div>

            {/*Right things*/}
            <div className={'flex items-center space-x-4 text-sm font-light'}>
                <SearchIcon
                    className={'hidden cursor-pointer w-6 h-6 transition-all duration-[.4s] ease-in-out relative bottom-0 hover:bottom-2 sm:inline'}/>

                <p className={'hidden header-link cursor-pointer lg:inline'}>Kids</p>

                <BellIcon
                    className={'cursor-pointer h-6 w-6 transition-all duration-[.4s] ease-in-out relative bottom-0 hover:bottom-2'}/>

                <Link href={'/account'}>
                    <div
                        className={'cursor-pointer h-auto w-7 transition-all duration-[.4s] ease-in-out relative bottom-0 hover:bottom-2'}>
                        <Image src={images.mysteriousMafia} alt={'Profile'}
                               layout={'responsive'} objectFit={'cover'} className={'rounded-md'}/>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
