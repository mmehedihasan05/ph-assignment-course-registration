/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({ handleClick }) => {
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
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course) => (
                    <Course key={course.id} course={course} handleClick={handleClick}></Course>
                ))}
            </div>
        </div>
    );
};

export default Courses;
