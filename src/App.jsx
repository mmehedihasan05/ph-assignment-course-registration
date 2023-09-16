/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Course Contents/Courses";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClick = (course) => {
        let ans = selectedCourses.findIndex((selectedCourse) => selectedCourse.id === course.id);

        if (ans !== -1) {
            return;
        }

        let tempTotalCredit = totalCredit + course.credit;
        if (tempTotalCredit <= 20) {
            setSelectedCourses([...selectedCourses, course]);

            setTotalPrice(totalPrice + course.price);
            setTotalCredit(tempTotalCredit);
        } else {
            return;
        }
    };

    return (
        <>
            <div className=" max-w-7xl mx-auto px-4 pb-8">
                <Header></Header>
                <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Course Contents */}
                    <div className=" col-span-1 md:col-span-2 lg:col-span-3">
                        <Courses handleClick={handleClick}></Courses>
                    </div>
                    <div className=" -order-1 md:order-1">
                        <Cart
                            selectedCourses={selectedCourses}
                            totalPrice={totalPrice}
                            totalCredit={totalCredit}
                        ></Cart>
                    </div>
                </div>
                <footer></footer>
            </div>
        </>
    );
}

export default App;
