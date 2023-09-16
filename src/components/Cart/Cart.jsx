import PropTypes from "prop-types";
const Cart = ({ selectedCourses, totalCredit, totalPrice }) => {
    return (
        <div className="card bg-base-100 p-6">
            <div className="card-body p-0 space-y-2 w-full mx-auto">
                <div>
                    <p className="text-[#2F80ED] text-lg font-bold">
                        Credit Hour Remaining {20 - totalCredit} hr
                    </p>
                </div>
                <hr />
                <h1 className="text-[#1C1B1B] text-xl font-bold">Course Name</h1>
                <div>
                    <p className="text-center">
                        {selectedCourses.length > 0 ? "" : "No Course Taken yet!"}
                    </p>
                    <ul className="text-[#1c1b1b99] list-inside list-decimal space-y-2">
                        {selectedCourses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ul>
                </div>
                <hr />
                <div>
                    <h3 className=" text-[#1c1b1bcc] font-medium">
                        Total Credit Hour : {totalCredit}
                    </h3>
                </div>
                <hr />
                <div>
                    <h3 className=" text-[#1c1b1bcc] font-bold">
                        Total Price : {totalPrice.toFixed(2)} USD
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
Cart.propTypes = {
    selectedCourses: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};
