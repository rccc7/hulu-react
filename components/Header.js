import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'

function Header() {
    return (
        //RESPONSIVE Header: The alingment of the items will be flex by default; however, 
        //when we break the small breakpoint (sm:) that is when the screen size is reduced 
        //(for example in mobile screens) then change the flex direction to 'flex-col'
        //
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            {/* flex-grow: use as much space as we possible can 
            max-w-2xl: Do not occupy the entire width*/}
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image
                className='object-contain ml-10px'
                src='https://upload.wikimedia.org/wikipedia/commons/3/30/Hulu_logo_2017.svg'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header
