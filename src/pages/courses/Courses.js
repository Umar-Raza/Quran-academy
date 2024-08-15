import React from 'react'
import CoursesData from '../../constant/courseData/CoursesData'
import CoursCard from '../../components/courseCard/CoursCard'

export default function Courses() {
    return (
        <div className="container" id='courses'>
            <div className="row">
                <div className="col">
                    <div className="coursHadding">
                        <h1>COURSES</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 mx-auto">
                    <div className="row">
                        {CoursesData.map((items, index) => {
                            return <CoursCard
                                key={index}
                                img={items.img}
                                hadding={items.hadding}
                                paragaraph={items.paragaraph}
                                enroll={items.enroll}
                            />
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
