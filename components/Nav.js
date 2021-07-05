import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'

function Nav() {
    //useRouter(): the builtin hook from next
    const router = useRouter();
    return (
        // Assign this nav the class of relative becuase it's child div (from the bottom)
        // has the absolute class
        <nav className='relative'>
            {/* last:pr-24 means that the padding right of the last child will be 24 
            so that the last title won't be sticked to the browser's border
            px-10 means: padding at the x axis of 10 or padding left 40px
            sm:px-20 means that when we hit the small breakpoint then 
            the padding will be just 20 
            whitspace-nowrap means that the text won't wrap when there is an item which
            text contains more than one word (that is for example the second word goes
            to a new line)
            space-x-10 defines the space between titles
            sm:space-x-20 defines the space between titles when we hit the small break
            overflow-x-scroll: means that the content will scroll when it overflows
            the screen width
            */}
            <div className='last:pr-24 flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {/* Here, the object requests contains the array of keys and
                 values, which we are destruturing into a title and url.
                 We also need to add a key so that React knows how to 
                 re-render the list */}
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        key={key}
                        // Call the built in hook from next: router.push()
                        onClick={() => router.push(`/?genre=${key}`)}
                        className='cursor-pointer transition duration-100 
                        transform hover:scale-125 hover:text-white 
                        active:text-red-500'>
                        {title}
                    </h2>
                ))}
            </div>
            {/* Create the fade effect at the right side of the Nav 
            bg-gradient-to-l stands for: "Background gradient to the left"
            from-[#06202A] means the gradient will start from that color. We could alos specify
            a to-[color] to define the end of the gradient; however, since we didn't specified, then
            the end of the gradient will be transparent.
            h-10 stands for height of 10 and w-1/12 means that the width will be 1/12 of the screens width*/}
            <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
        </nav>
    )
}

export default Nav
