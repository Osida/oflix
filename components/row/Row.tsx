import React, {useRef, useState} from "react";
import {Result} from "../../typings";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";
import {Thumbnail} from "../index";

interface IProps {
    title: string,
    // movie: Result | DocumentData[],
    movies: Result[],
}

const Row: React.FC<IProps> = ({title, movies}) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState<boolean>(false)

    const onArrowClick = (direction: string) => {
        setIsMoved(true)

        if (rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth

            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
        }
    }

    return (
        <div className={'h-40 space-y-0.5 md:space-y-2'}>
            <h2 className={'w-56 cursor-pointer text-sm font-semibold transition duration-200 text-[#e5e5e5] hover:text-white md:text-xl'}>{title}</h2>

            <div className={'group relative md:-ml-2'}>
                <ChevronLeftIcon className={`chevron-icon left-2 ${!isMoved && 'hidden'}`} onClick={(() => onArrowClick('left'))}/>

                <div
                    ref={rowRef}
                    className={'flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide     md:space-x-4 md:p-2 '}>
                    {movies.map((movie, idx) => (
                        <Thumbnail key={movie.id} movie={movie}/>
                    ))}
                </div>

                <ChevronRightIcon className={`chevron-icon right-2`} onClick={(() => onArrowClick('right'))}/>
            </div>
        </div>
    );
};

export default Row;
