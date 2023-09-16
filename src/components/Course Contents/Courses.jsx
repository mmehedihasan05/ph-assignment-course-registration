import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Course from "./Course";

const Courses = ({ handleClick }) => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courseData.json")
            .then((res) => res.json())
            .then((data) => {
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
Courses.propTypes = {
    handleClick: PropTypes.func.isRequired,
};
