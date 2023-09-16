/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi2";

const Course = ({ course, handleClick }) => {
    const { id, cover, title, description, credit, price } = course;

    return (
        <div className="card bg-base-100 space-y-4 p-4 flex flex-col">
            <figure>
                <img
                    className="rounded-t-lg rounded-b-xl object-cover md:h-32 w-full"
                    src={cover}
                    alt={title}
                />
            </figure>
            <div className="card-body p-0 space-y-2 mx-auto">
                <h2 className="card-title h-auto md:h-16 items-start text-lg font-semibold text-[#1C1B1B]">
                    {title}
                </h2>
                <p className=" text-[#1C1B1B99] font-normal text-[15px]">{description}</p>

                <div className=" flex justify-between font-medium text-[#1C1B1B99] text-base md:text-[15px]">
                    {/* Price */}
                    <div className="flex items-center gap-[0px]">
                        {/* Icon */}
                        <span className="text-[#00000099]">
                            <BsCurrencyDollar></BsCurrencyDollar>
                        </span>
                        <p className="">Price : {price}</p>
                    </div>

                    {/* Credit */}
                    <div className="flex items-center gap-[2px]">
                        {/* Icon */}
                        <span className=" text-[#00000099]">
                            <HiOutlineBookOpen></HiOutlineBookOpen>
                        </span>
                        <p className="">Credit : {credit}hr</p>
                    </div>
                </div>

                <button
                    className="flex items-center gap-x-2
                btn bg-[#2F80ED] hover:hover:bg-[#2f66ed] text-white text-md lg:text-lg"
                    onClick={() => {
                        handleClick(course);
                    }}
                >
                    Select
                </button>
            </div>
        </div>
    );
};

export default Course;
