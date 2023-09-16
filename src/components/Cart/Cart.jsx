/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Cart = () => {
    return (
        <div className="card bg-base-100 p-6">
            <div className="card-body p-0 space-y-2 w-full mx-auto">
                <div>
                    <p className="text-[#2F80ED] text-lg font-bold">Credit Hour Remaining {}7 hr</p>
                </div>
                <hr />
                <h1 className="text-[#1C1B1B] text-xl font-bold">Course Name</h1>
                <div>
                    <ul className="text-[#1c1b1b99] list-inside list-decimal space-y-2">
                        <li>Web Development with HTML, CSS & Javascript</li>
                        <li>The Complete JavaScript Course</li>
                        <li>React - The Complete Guide 2023</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <h3 className=" text-[#1c1b1bcc] font-medium">Total Credit Hour : {}13</h3>
                </div>
                <hr />
                <div>
                    <h3 className=" text-[#1c1b1bcc] font-bold">Total Price : {}45 USD</h3>
                </div>
            </div>
        </div>
    );
};

export default Cart;
