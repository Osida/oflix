import React, {useEffect, useState} from 'react';
import {Result} from "../../typings";
import {baseImgUrl} from "../../constants";
import Image from "next/image";
import {FaInfoCircle, FaPlay} from "react-icons/fa";
import {motion} from 'framer-motion';

interface IProps {
    netflixOriginals: Result[]
}

const Banner = ({netflixOriginals}: IProps) => {
    const [movie, setMovie] = useState<Result | null>(null);

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    }, [netflixOriginals]);

    return (
        <div
            className={'flex flex-col space-y-4 pt-20 pb-16 md:space-y-6 lg:h-[70vh] lg:justify-end lg:pb-12 lg:pt-96'}>
            {/*Banner image*/}
            <div className={'absolute top-0 left-0 w-screen h-[95vh] -z-10 max-w-full'}>
                <Image
                    src={`${baseImgUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    alt={movie?.original_title || 'Movie title'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>

            {/*Description*/}
            <h1 className={'basic-transition text-2xl font-bold md:text-3xl lg:text-4xl drop-shadow-md'}>{movie?.title || movie?.original_title}</h1>
            <p className={'basic-transition max-w-xs text-xs text-shadow-md md:max-w-lg md:text-base lg:max-w-2xl lg:text-lg drop-shadow-md'}>{movie?.overview}</p>

            {/*Buttons*/}
            <div className={'flex space-x-3'}>
                <button
                    className={'banner-btn bg-white text-black'}>
                    <FaPlay className={'h-4 w-4 text-black md:h-5 md:w-5'}/>
                    Play
                </button>
                <button className={'banner-btn bg-gray-300/25 backdrop-blur-sm'}>
                    More Info
                    <FaInfoCircle className={'h-4 w-4 md:h-6 md:w-6'}/>
                </button>
            </div>
        </div>
    );
};

export default Banner;
