import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

function about() {
    return (
        <div>
            <Header />
            <div className='flex flex-col items-center justify-between'>
                <h1>Developed by RCCC 😎.</h1>
                <p>This is just a clone for learning and testing purposes only.
                    Images and desccriptions obtained from TMDb API:</p>
                <a href='https://www.themoviedb.org/' target="_blank">
                    <Image
                        className='object-contain'
                        src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
                        width={200}
                        height={100}
                    />
                </a>
                <p>HULU Logo obtained from <a className='text-blue-700' href='https://commons.wikimedia.org/wiki/File:Hulu_logo_2017.svg' target='_blank'>Wikimedia Commons</a></p>
            </div>
        </div>
    )
}

export default about
