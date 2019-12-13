import React from 'react'
import HogTile from './HogTile'
const HogsList = props => {
    const {hogs,greasedStatus } = props

    let filteredHogs = hogs.filter(hog => hog.greased)


    return (
        <div className='ui grid container'>

            {!greasedStatus? 
            hogs.map(hog => {
                return <HogTile key ={`${hog.weight}`} hog={hog}/>
            })
            :
            filteredHogs.map(hog =>{
                return <HogTile hog={hog}/>
            })
        }
            }
        </div>
    )
}


export default HogsList
