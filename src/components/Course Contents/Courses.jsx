/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courseData.json")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCourses(data);
            });
    }, []);

    return (
        <div>
            <h1 className="text-2xl">Course Contents Goes here</h1>
            <div className=" grid grid-cols-3 gap-4">
                {courses.map((course) => (
                    <Course key={course.id} course={course}></Course>
                ))}
            </div>
        </div>
    );
};

export default Courses;
