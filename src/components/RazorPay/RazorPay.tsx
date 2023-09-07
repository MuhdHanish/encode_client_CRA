import React from "react";
import { Course } from "../../dtos/Course";
import useRazorpay from "react-razorpay";
import { GoLock } from "react-icons/go";
import { User } from "../../dtos/User";

interface RazorpayProps {
  course: Course;
  user: User;
  handleAddcourse: () => Promise<void>;
}

const Razorpay: React.FC<RazorpayProps> = ({
  course,
  user,
  handleAddcourse,
}) => {
  const [Razorpay] = useRazorpay();
  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_ID as string,
      amount: ((course?.price as number) * 100).toString(),
      currency: "INR",
      name: "Encode learning",
      description: "Course purchasing transaction",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS04hIuIDeWTnBHw6rdC8rNdUBZ1q3zUloKEiVlKGi-0Pq0GWnVfv2k4c7ZPRXK_zth3ms&usqp=CAU",
      handler:  function (response: any) {
           handleAddcourse().then().catch(err=>console.log(err));
      },
      prefill: {
        name: user?.username as string,
        email: user?.email as string,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#9C4DF4",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response: any) {
      console.log(response);
    });

    rzp1.open();
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          className="btn-class min-w-[250px]  flex items-center justify-center gap-2"
          onClick={handlePayment}
        >
          <span className="text-shadow-black">
            <GoLock />
          </span>
          <span>Purchase & Start</span>
        </button>
      </div>
    </>
  );
};

export default Razorpay;
