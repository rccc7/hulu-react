import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

function Results({ results }) {
    return (
        //Important: Here, if we don't want to use the FlipMove component, then
        //replace it with a div, with which we will get the fully functional page,
        //but without the flipmove animations.
        //MObile first: px-5: means padding on the x axis 5.
        //my-10: Margin on the y axis of 10
        //sm:grid means that on screens with a minimum width of 640px apply grid
        //md:grid-cols-2 means that on medium screens (min width 768px) apply grid with two columns.
        //xl:grid-cols-3 mens that on extra large screens (min width 1268) apply grid with 3 columns.
        //3xl:flex flex-wrap justify-center --> Means that when the screen has a min width of 2000px 
        //(as defined in tailwind.config.js), then apply flex with flex-wrap, and justify content of center
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map(result => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Results
