import React from "react";
import { ExternalLink } from "lucide-react";
export default function Project() {
  const project = [
    {
      id: 1,
      title: "Tuition Management  App",
      descrption:
        "An Android-based application designed to streamline the administration and communication within a tuition center. Built using Java and SQLite, the app features dedicated dashboards for Admins, Teachers, and Students, enabling efficient management of courses, attendance (via QR code scanning), assignments, course materials, results, and in-app messaging. With a user-friendly interface and robust functionality, the app aims to enhance academic coordination and ensure a seamless educational experience for all users.",
      link: "https://example.com",
      technologies: [
        "Java",
        "Android Studio",
        "SQLite",
        "XML (for UI layouts)",
        "QR Code Scanner Library (e.g., ZXing)",
      ],
    },
    {
      id: 2,
      title: "Automated Garbage Truck",
      descrption:
        "The Automated Garbage Truck project is an innovative solution designed to improve waste collection efficiency using automation and smart technology. This system uses Arduino along with various sensors (such as ultrasonic and IR sensors) to detect garbage levels in bins and control the operation of a prototype garbage truck. The truck can automatically stop, collect garbage, and move to the next location based on sensor input. This project aims to reduce manual labor, enhance hygiene, and make urban waste management smarter and more sustainable.",
      link: "https://github.com/UyashaISHINI/Automated-Garbage-Truck",
      technologies: ["C/C++", "Arduino IDE", "Arduino UNO"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      descrption:
        "This Portfolio Website is a personal project developed using React.js to showcase my skills, projects, and background as a web developer. It features a clean and user-friendly design with sections such as Home, About, Projects, and Contact. The website allows visitors to learn more about me, view the work I’ve done, and easily get in touch. It’s fully responsive and serves as a professional introduction to my work in frontend development.",
      link: "https://github.com/UyashaISHINI/Portfolio-app",
      technologies: ["React", "CodeSandbox / GitHub", "HTML5 ", "CSS3"],
    },
    {
      id: 4,
      title: "E-commerce platform",
      descrption:
        "This is an E-commerce Website for Farmers designed to help farmers buy and sell agricultural products online. Built using web technologies like HTML, CSS, JavaScript, and PHP, the platform allows users to create accounts, browse products, add items to the cart, and place orders. The goal of the project is to support the farming community by providing a convenient and accessible digital marketplace.",
      link: "https://github.com/UyashaISHINI/E-commerce-for-framers",
      technologies: ["HTML & CSS", "PHP", "Oracle", "Apache/XAMPP"],
    },
    {
      id: 5,
      title: "E-Channel platform",
      descrption:
        "E-Channel Platform is a web-based application designed to facilitate online appointment booking and management, typically for healthcare or service providers. The platform enables users to register, view available time slots, book appointments, and manage their schedules efficiently. It aims to streamline the appointment process, reduce waiting times, and improve communication between clients and service providers. The system is built using web technologies such as HTML, CSS, JavaScript, and PHP for both frontend and backend functionalities.",
      link: "https://github.com/UyashaISHINI/E-Channel-Platform-main",
      technologies: ["HTML & CSS", "React", "PHP", "MySQL", "Apache/XAMPP"],
    },
    {
      id: 6,
      title: "House price prediction",
      descrption:
        "Boston House Price Prediction is a machine learning project that aims to predict house prices in the Boston area based on various features such as location, number of rooms, and other housing attributes. The project typically uses datasets containing historical housing data to train regression models that estimate property prices. Commonly implemented using Python libraries like scikit-learn, pandas, and matplotlib, the project helps understand factors influencing housing prices and provides a predictive tool for real estate valuation.",
      link: "https://github.com/UyashaISHINI/Boston-House-Price-Prediction",
      technologies: [
        "Python",
        "pandas",
        "NumPy ",
        "scikit-learn",
        "Boston Housing Dataset",
      ],
    },
    {
      id: 7,
      title: "Gusto Restaurant",
      descrption:
        "Restaurant Project is a web application designed to manage restaurant operations such as menu display, order placement, and possibly table reservations. The platform allows users to browse available dishes, place orders, and may include features for restaurant staff to manage orders and menus efficiently. Built using common web technologies, it aims to streamline the dining experience both for customers and restaurant management.",
      link: "https://github.com/UyashaISHINI/resturant-project",
      technologies: ["HTML & CSS", "JavaScript"],
    },
    {
      id: 8,
      title: "Tax Pal Website",
      descrption:
        "web2 is a basic web development project that demonstrates fundamental concepts of creating a website using core web technologies. It typically includes HTML for structure, CSS for styling, and JavaScript for interactivity, showcasing essential front-end web development skills.",
      link: "https://github.com/UyashaISHINI/web2",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];
  return (
    <div
      id="project"
      className="min-h-screen w-ful bg-gradient-to-b from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 mt-0">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            A showcase of all projects that I have made
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {project.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-5">{project.descrption}</p>
              <div className="flex flex-wrap gap-4 mb-2">
                {project.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 bg-indigo-100 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
              >
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
