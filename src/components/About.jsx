import React from "react";
export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I am Uyasha Ishini
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            I am a dedicated and motivated student pursuing a Software
            Engineering degree at NIBM. I am passionate about coding, eager to
            learn emerging technologies, and committed to developing practical
            skills through hands-on projects. My goal is to become a skilled
            developer who can contribute effectively to innovative software
            solutions.
          </p>
        </div>

        {/* profile image */}
        <div className="relative flex items-center justify-center mb-10">
          <div className="absolute insert-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full blur-lg opacity-20">
            <img
              src=""
              alt="Profile image"
              className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
            />
          </div>

          {/* professional background */}
          <div className="bg-white shadow-md mb-1 p-6 rounded-md">
            <h1 className="text-3xl font-semibold mb-5">
              Professional Journey
            </h1>
            <div className="space-y-6 text-left max-w-4xl mx-auto">
              <p className="text-lg text-gray-600">
                My professional journey has been defined by continuous growth,
                adaptability, and a passion for learning. I have gained valuable
                experience across diverse roles, honing my skills in leadership,
                communication, and problem-solving. Each opportunity has
                strengthened my commitment to excellence and fueled my drive to
                contribute meaningfully to every endeavor.
              </p>
              <p className="text-lg text-gray-600">
                My professional journey has been defined by continuous growth,
                adaptability, and a passion for learning. I have gained valuable
                experience across diverse roles, honing my skills in leadership,
                communication, and problem-solving. Each opportunity has
                strengthened my commitment to excellence and fueled my drive to
                contribute meaningfully to every endeavor.
              </p>
            </div>
          </div>
        </div>
        {/* skill section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bh-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold text-teal-600 mb-3">
              Frontend Developer
            </h1>
            <p className="text-lg text-gray-600">
              A front-end developer designs and builds user interfaces for
              websites and applications using HTML, CSS, and JavaScript,
              ensuring responsive, accessible, and visually appealing
              experiences across all devices and browsers.
            </p>
          </div>
          <div className="p-6 bh-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold text-indigo-600 mb-3">
              Backend Developer
            </h1>
            <p className="text-lg text-gray-600">
              A back-end developer focuses on server-side logic, databases, and
              application functionality. They build and maintain the core
              systems that process data, ensuring performance, security, and
              seamless integration with front-end services.
            </p>
          </div>
          <div className="p-6 bh-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200">
            <h1 className="text-3xl font-semibold text-purple-600 mb-3">
              Web Developer
            </h1>
            <p className="text-lg text-gray-600">
              A web developer designs, builds, and maintains websites and web
              applications. They work on both front-end and back-end
              development, ensuring functionality, performance, and
              user-friendly experiences across different devices and platforms.
            </p>
          </div>
        </div>

        {/* professional Interest */}
        <div className="bg-white p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-semibold txet-cente text-gray-800 mb-16">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Open Source Contribution
              </h3>
              <p className="text-lg text-gray-800">
                I am actively contributing to open source softwares and projects
                on github.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-700 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-800">
                I am actively contributing to open source softwares and projects
                on github.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-700 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-800">
                I am actively contributing to open source softwares and projects
                on github.
              </p>
            </div>
          </div>
        </div>

        {/* call to action */}
        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 py-12 to-teal-700 p-12 text-white rounded-xl text-center">
          <h3 className="text-2xl text-white font-semibold mb-5">
            Continuous Learning
          </h3>
          <p className="text-lg text-white mx-auto mb-5">
            I am actively contributing to open source softwares and projects on
            github.
          </p>
          <a
            href=""
            className="inline-block bg-white text-indigo-800 px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-color duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
