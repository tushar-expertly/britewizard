import React from "react";
import Layout from "../layout";
import Slider from "../slider/slider";
// import lowerimage from "../../Assets/lowerimage.jpg";

function Home() {
  return (
    <Layout>
      <Slider />

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
              Features
            </h2>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Expert Instructors
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Learn from industry-leading experts who bring real-world
                  experience and insights to the virtual classroom.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Interactive Learning
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our courses feature interactive elements, practical exercises,
                  and multimedia content to enhance engagement and retention.
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Flexibility
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Access our courses anytime, anywhere, and at your own pace,
                  allowing you to balance your learning with other commitments
                </dd>
              </div>
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    {/* Icon placeholder */}
                  </div>
                  <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                    Continuous Support
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Our dedicated support team is here to assist you every step of
                  the way, ensuring a seamless learning experience from start to
                  finish.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Home;
