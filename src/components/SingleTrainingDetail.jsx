import { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Layout from "./layout";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../context/courses_context";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import { Oval } from "react-loader-spinner";
import parse from "html-react-parser";

const SingleTrainingDetail = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [selectedPricings, setSelectedPricings] = useState([]);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSingleCourse(id);
      setLoading(false);
    };
    fetchData();
  }, [id, fetchSingleCourse]);

  useEffect(() => {
    if (single_course?.Pricings?.length) {
      setSelectedPricings([single_course.Pricings[0]]);
    }
  }, [single_course]);

  const handlePricingToggle = (pricing) => {
    setSelectedPricings((prev) => {
      const exists = prev.find((p) => p.id === pricing.id);

      if (exists) {
        return prev.filter((p) => p.id !== pricing.id);
      } else {
        return [...prev, pricing];
      }
    });
  };
  const totalPrice = selectedPricings.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          height={50}
          width={50}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  const {
    courseID,
    title,
    instructor,
    // duration,
    // price,
    discountedPrice,
    description,
    what_you_will_learn,
    // content,
    imageSrc,
    Pricings,
    webinarDate,
    duration,
    areas_covered,
    who_will_benefit,
    instructor_profile,
    why_register,
    background,
    // target_companies,
    // target_association,
  } = single_course;

  const dateTime = new Date(webinarDate);

  const webinarDateUTC = new Date(webinarDate);

  const day = webinarDateUTC.getUTCDate();
  const monthYear = webinarDateUTC.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const weekday = webinarDateUTC.toLocaleString("en-US", {
    weekday: "long",
    timeZone: "UTC",
  });
  const formattedTimeEST = dateTime.toLocaleString("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedTimePST = dateTime.toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  function convertMinutes(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (minutes <= 60) {
      return `${minutes} min`;
    }

    return `${hours} hour${hours > 1 ? "s" : ""} ${remainingMinutes} min`;
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="bg-[#184e77] text-white py-3 px-6 rounded-md mb-6">
          <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-md">
                <img
                  src={imageSrc}
                  alt={imageSrc}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex flex-col">
                {/* Date row */}
                <div className="flex gap-4 items-start">
                  <CalendarDaysIcon className="w-10 h-10 text-blue-600" />
                  <div className="flex items-center space-x-4">
                    <div className="text-6xl font-semibold leading-none">
                      {day}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-lg font-medium text-gray-900">
                        {monthYear}
                      </span>
                      <span className="text-lg font-normal text-gray-900">
                        {weekday}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="ml-14 mt-5 text-sm text-black-500">
                  {formattedTimeEST} EST/ {formattedTimePST} PST
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PencilSquareIcon className="w-7 h-7 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Created by</p>
                    <p className="font-medium">
                      {instructor?.replace(/"/g, "")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ClockIcon className="w-7 h-7 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">
                      {duration ? convertMinutes(duration) : null}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t px-6 py-5">
              {description ? (
                <div className="container flex flex-col mt-3">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">Description :</span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {description ? parse(description) : null}
                  </p>
                </div>
              ) : null}
              {why_register ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">Why Register :</span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {why_register ? parse(why_register) : null}
                  </p>
                </div>
              ) : null}
              {what_you_will_learn ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">
                      Why Should You Attend :{" "}
                    </span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {what_you_will_learn ? parse(what_you_will_learn) : null}
                  </p>
                </div>
              ) : null}
              {areas_covered ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">
                      Areas Covered in the Webinar Session :
                    </span>
                  </h2>

                  <div className="text-gray-500 dark:text-gray-300">
                    {areas_covered ? parse(areas_covered) : null}
                  </div>
                </div>
              ) : null}
              {who_will_benefit ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">Who will benefit?</span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {who_will_benefit ? parse(who_will_benefit) : null}
                  </p>
                </div>
              ) : null}
              {instructor_profile ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">Instructor Profile :</span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {instructor_profile ? parse(instructor_profile) : null}
                  </p>
                </div>
              ) : null}
              {background ? (
                <div className="container flex flex-col mt-1">
                  <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                    <span className="text-blue-500">Background :</span>
                  </h2>

                  <p className="text-gray-500 dark:text-gray-300">
                    {background ? parse(background) : null}
                  </p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-5">
            <div className="text-center">
              <p className="text-sm text-orange-500 line-through">
                Was:$
                {totalPrice != null && totalPrice > 0
                  ? (totalPrice + selectedPricings.length * 49).toFixed(2)
                  : "00.00"}
              </p>
              <p className="text-3xl font-bold text-blue-600">
                $
                {totalPrice != null && totalPrice > 0
                  ? totalPrice.toFixed(2)
                  : "00.00"}
              </p>
              <p className="text-sm text-red-500">
                You Save: ${selectedPricings.length * 49}
              </p>
            </div>
            <Link
              to={selectedPricings.length === 0 ? "#" : "/cart"}
              className={`group relative w-full flex justify-center py-3 px-4 text-m font-medium rounded-md text-white mt-10
    ${
      selectedPricings.length === 0
        ? "bg-purple-300 cursor-not-allowed pointer-events-none"
        : "bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    }
  `}
              onClick={(e) => {
                if (selectedPricings.length === 0) {
                  e.preventDefault();
                  return;
                }
                addToCart(
                  courseID,
                  imageSrc,
                  title,
                  instructor,
                  selectedPricings.length > 0 ? totalPrice : discountedPrice,
                  selectedPricings
                );
              }}
            >
              Add to Cart
            </Link>
            <div>
              <h3 className="font-semibold text-lg mb-3">Session Type</h3>

              {Pricings?.map((pricing) => {
                const isChecked = selectedPricings.some(
                  (p) => p.id === pricing.id
                );

                return (
                  <label
                    key={pricing.id}
                    className="flex items-center justify-between border p-3 rounded-md mt-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handlePricingToggle(pricing)}
                      />
                      <span>
                        {pricing.sessionType} - ${pricing.price}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleTrainingDetail;
