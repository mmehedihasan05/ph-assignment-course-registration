/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Course Contents/Courses";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <>
            <div className=" max-w-7xl mx-auto px-4 pb-8">
                <Header></Header>
                <div className=" grid grid-cols-4 gap-4">
                    {/* Course Contents */}
                    <div className="col-span-3">
                        <Courses></Courses>
                    </div>
                    {/* Cart */}
                    <div className="order-1">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
