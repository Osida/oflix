import React from 'react';
import {Result} from "../../typings";
import Image from "next/image";
import {w500ImgUrl} from "../../constants";

interface IProps {
    // movie: Result | DocumentData
    movie: Result
}

const Thumbnail: React.FC<IProps> = ({movie}) => {
    return (
        <div className={'relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'}>
            <Image
                src={`${w500ImgUrl}${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title || movie.original_title}
                layout={'fill'}
                objectFit={'cover'}
                className={'rounded-md md:rounded-md'}
            />
        </div>
    );
};

export default Thumbnail;
