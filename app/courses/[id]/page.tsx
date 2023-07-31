"use client";
import { useParams } from "next/navigation"
import { courses } from "../page"
import { useEffect, useState } from "react"

export default function Page() {
    const params = useParams()
    const [videoUrl, setVideoUrl] = useState("")

    useEffect(() => {
        courses.map((course) => {
            if (course.id.toString() === params.id as string) {
                setVideoUrl(course.video_links[0])
            }
        })
    }, [params.id])

    return (
        <div className="mt-10">
            {courses.map((course) => {
                if (course.id.toString() === params.id as string) {
                    return (
                        <div key={course.id}>
                            <h1 className="text-5xl text-white text-center">{course.course_name}</h1>
                            <p className="text-xl font-thin text-white text-center">{course.description}</p>
                            <div className="flex flex-row items-center justify-center mt-10">
                                <video src={videoUrl} controls crossOrigin="anonymous" />
                            </div>
                            <div className="flex flex-col items-center gap-y-6 mt-10">
                                {course.video_links.map((video_link, index) => {
                                    return (
                                        <button key={index} onClick={() => setVideoUrl(video_link)} className="btn">
                                            Play Video {index + 1}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}