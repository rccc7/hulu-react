import Image from 'next/image'
import { ThumbIcon, ThumbUpIcon } from '@heroicons/react/outline'
//This is needed to make the FlipMove animations work
import { forwardRef } from 'react';

// TIP: To check what are the result properties we can console.log
//the result object and see its properties in debug mode
//IMPORTANT: Here, we are coding the funcion as an arrow function in order to
//apply the FlipMove effects.
//The ref parameters is necessary to be  used in forwardRef
const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'


    return (
        // Here, "transform sm:hover:scale-105 hover:z-50" means that the transform effect
        //will be applied only on big screens (sm means screens with a minimum width of 640px)
        // and the transform effect is to scale 105%.
        // "hover:z-50" means that we want the component to appear above everything else.
        <div
            //Here ref is needed to be added to the root div in order 
            //to make the animation work
            ref={ref}
            className='group cursor-pointer p-2 m-1 transition duration-200 ease-in 
            transform sm:hover:scale-105 hover:z-50'>
            {/* the images are lazy loaded as we scroll down the screen. That is, the 
            images are loaded just when they are needed (when they need to be visible
            as we scroll down) */}
            <Image
                layout='responsive'
                // This means that if there is no backdrop_path,
                //then use the result.poster_path
                src={
                    `${BASE_URL}${result.backdrop_path
                    || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            {/* p-2: Padding = 2 */}
            <div className="p-2">
                {/* Truncate the text with 3 dots so that it'll not occupy space
                max-w-md means: Max width: medium or: max-width: 28rem 448px  */}
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className='mt-1 text-2xl text-white 
                transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {result.title || result.original_name}
                </h2>
                {/* By defaulto it'll not be visible. However, whenever we hover
                 the whole group (defined in the root div above) set the opacity to 100 */}
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} • `}{' '}
                    {result.release_date || result.first_air_date} • {" "}
                    <ThumbUpIcon className="h-5 mx-2" />{result.vote_count}
                </p>
            </div>
        </div>
    )
})

Thumbnail.displayName = 'Thumbnail';

export default Thumbnail
