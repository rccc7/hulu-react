import React from 'react'

function HeaderItem({ title, Icon }) {
    return (
        // The group class means that the class is applied to the entire div. 
        //The width: 12 (w-12) means that it'll not occupy the whole screen area, just 48px,
        //but when the screen is bigger (more than 640px) then the width will be 20.
        <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white' >
            {/* This is tailwind class which means "Height 8, so that the icon won't be huge" */}
            {/* mb means margin bottom *
            Also animate When we hover the entire group. However, the animation is not working. 
            After doing some research I found that it was because a bug issue with the latest version.
            See: https://github.com/tailwindlabs/play.tailwindcss.com/issues/54*/}
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            {/* the tracking-widest class gives distance between letters in the title,
            and by default the opacity will be 0 
            "group-hover:opacity-100" means that when we hover on the entire div (either the Icon
            or the p tag) the opacity of the p tag will be 100%*/}
            <p className='opacity-0 group-hover:opacity-100 tracking-widest'>{title}</p>
        </div>
    )
}

export default HeaderItem
