import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchingStories, selectStories, slider } from "../../store/features/stories/storiesSlice"

import Story from "../Story/Story"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"


import './Stories.css'

const Stories = () => {

    const dispatch = useDispatch()

    const { isFetched, stories, sliding, slide } = useSelector(selectStories)

    useEffect(() => {
        if(!isFetched) {
            dispatch(fetchingStories())
        }
    }, [isFetched])

    return (
        <section>
            <div className="container">
                <div className="Stories">

                    {
                        stories.map(story => <Story key={story.id} 
                            img={story.img} 
                            username={story.username} 
                            sliding={sliding} prev={slide.prev} 
                            next={slide.next}
                        />)
                    }
                    
                    <FontAwesomeIcon className="slidePrev" icon={faCircleChevronLeft} onClick={() => dispatch(slider({prev: true, next: false, value: 250}))}/>
                    <FontAwesomeIcon className="slideNext" icon={faCircleChevronRight} onClick={() => dispatch(slider({prev: false, next: true, value: 250}))}/>
                </div> 
            </div>
        </section>
    )
}

export default Stories