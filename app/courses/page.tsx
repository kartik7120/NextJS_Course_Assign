import Image from "next/image"
import Link from "next/link"

export const courses = [
    {
        "id": 1,
        "course_name": "Web Development 101",
        "image_link": "https://unsplash.com/photos/FHnnjk1Yj7Y",
        "video_links": [
            "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            "https://www.youtube.com/watch?v=wesUO81bH0A",
            "https://www.youtube.com/watch?v=3tDYYhRYU7w",
            "https://www.youtube.com/watch?v=rnQ1B8xSoV4"
        ],
        "course_type": "free",
        "description": "An introductory course to web development..."
    },
    {
        "id": 2,
        "course_name": "Advanced Python Programming",
        "image_link": "https://unsplash.com/photos/WE_Kv_ZB1l0",
        "video_links": [
            "https://www.youtube.com/watch?v=f79MRyMsjrQ",
            "https://www.youtube.com/watch?v=rfscVS0vtbw",
            "https://www.youtube.com/watch?v=N5vscPTWKOk",
            "https://www.youtube.com/watch?v=ZDa-Z5JzLYM"
        ],
        "course_type": "premium",
        "description": "Dive deep into Python with advanced programming techniques..."
    },
    {
        "id": 3,
        "course_name": "Machine Learning for Beginners",
        "image_link": "https://unsplash.com/photos/505eectW54k",
        "video_links": [
            "https://www.youtube.com/watch?v=KNAWp2S3w94",
            "https://www.youtube.com/watch?v=JcI5Vnw0b2c",
            "https://www.youtube.com/watch?v=aircAruvnKk",
            "https://www.youtube.com/watch?v=qFJeN9V1ZsI"
        ],
        "course_type": "free",
        "description": "Understand the basics of machine learning..."
    },
    {
        "id": 4,
        "course_name": "Mastering Data Science",
        "image_link": "https://unsplash.com/photos/Lks7vei-eAg",
        "video_links": [
            "https://www.youtube.com/watch?v=EF5-0T9DlCM",
            "https://www.youtube.com/watch?v=BgANZVRXwoY",
            "https://www.youtube.com/watch?v=ye3CwZJMKWg",
            "https://www.youtube.com/watch?v=QDaZJxHeiNg"
        ],
        "course_type": "premium",
        "description": "Become a data science expert with advanced concepts..."
    }
]


export default function Page() {
    return (
        <div>
            <div className="flex flex-col items-center gap-y-4 mt-20">
                <p className="text-5xl text-white font-bold capitalize">Courses</p>
                <p className="text-xl text-white font-thin">Challenging multi-step experiences with quizzes and progress-tracking</p>
            </div>
            <div className="flex flex-row items-start flex-wrap justify-evenly mt-20">
                {courses.map((course) => {
                    return <Link href={`/courses/${course.id}`} key={course.id} className="mt-2">
                        <div key={course.id} className="mt-2 card w-96 bg-base-100 shadow-xl hover:scale-110 duration-150 hover:cursor-pointer active:scale-75 border border-transparent rounded-lg overflow-hidden">
                            <Image src={"/course" + course.id + ".jpg"} alt={course.course_name} width={500} height={300} />
                            <div className="card-body">
                                <h2 className="card-title">{course.course_name}</h2>
                                <p>{course.description}</p>
                            </div>
                            <div className="card-body">
                                {course.course_type === "free" ? <span className="badge badge-primary">Free</span> : <span className="badge badge-secondary">Premium</span>}
                            </div>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    )
}