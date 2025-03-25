import React from "react";
import Layout from "./layout";
// import tailoredSolutions from "../Assets/about/undraw_solution_mindset_re_57bf.svg";
// import experts from "../Assets/about/undraw_experts_re_i40h.svg";
// import patners from "../Assets/about/undraw_team_up_re_84ok.svg";
// import excel from "../Assets/about/undraw_details_8k13.svg";
// import impact from "../Assets/about/24372256_6909933.svg";
import aboutspageimage from "../Assets/about/aboutspageimage.jpg";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                At Britewizard, we believe in the transformative power of
                education. Our mission is to empower individuals and
                organizations worldwide through high-quality online training
                programs designed to unlock potential and drive success.
              </p>
              <div className="mt-8">
                <Link
                  to="/"
                  className="text-blue-500 hover:text-blue-600 font-medium"
                >
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img
                src={aboutspageimage}
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-100  flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl w-full space-y-8">
          <div className="bg-gray-100 shadow-md rounded-lg p-8">
            <h4 className="text-2xl font-extrabold text-gray-900 text-center mb-4">
              Empowering Learners Through Engaging Online Training
            </h4>
            <h3 className="text-2xl text-gray-700 text-center mb-8">
              Britewizard
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className=" text-gray-800">Who We Are</h4>
                <p className="mt-2 text-gray-600">
                  Established in 2024,Britewizard has quickly become a trusted
                  leader in online education. With a team of dedicated
                  professionals and experts in various fields, we are committed
                  to delivering innovative, engaging, and effective learning
                  experiences.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">What We Offer </h4>
                <p className="mt-2 text-gray-600">
                  Our comprehensive range of online training courses covers a
                  diverse array of topics. Whether you're a beginner looking to
                  acquire new skills or a seasoned professional seeking advanced
                  knowledge, we have courses tailored to meet your needs.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Why Choose Us</h4>
              </div>
              <div>
                <h4 className=" text-gray-800">Expert Instructors</h4>
                <p className="mt-2 text-gray-600">
                  Learn from industry-leading experts who bring real-world
                  experience and insights to the virtual classroom. !
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Flexibility</h4>
                <p className="mt-2 text-gray-600">
                  Access our courses anytime, anywhere, and at your own pace,
                  allowing you to balance your learning with other commitments.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Continuous Support</h4>
                <p className="mt-2 text-gray-600">
                  Our dedicated support team is here to assist you every step of
                  the way, ensuring a seamless learning experience from start to
                  finish.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">
                  Our Commitment to Excellence{" "}
                </h4>
                <p className="mt-2 text-gray-600">
                  At Britewizard, excellence is not just a goal; it's our
                  standard. We are continuously striving to improve and
                  innovate, leveraging the latest technologies and methodologies
                  to deliver the highest quality online training solutions.
                </p>
              </div>
              <div>
                <h4 className=" text-gray-800">Get Started Today</h4>
                <p className="mt-2 text-gray-600">
                  Ready to embark on your learning journey? Browse our course
                  catalog, explore our offerings, and take the first step
                  towards achieving your goals with Britewizard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aboutus;
