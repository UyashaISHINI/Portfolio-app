import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* logo and brand */}
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold text-white bg-opacity-20 bg-white px-3 py-1 rounded-lg">
                  UI
                </span>
              </div>
              <div className="hidden md:block ml-4">
                <span className="text-white font-semibold text-lg">
                  UYASHA ISHINI
                </span>
              </div>
            </div>

            {/* Desktop navigation link */}
            <div className="hidden md:block">
              <ul className="flex space-x-10">
                <li>
                  <a
                    href="#about"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skill"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium">
                    Tracer
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* mobile navigation */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
              >
                About
              </a>
              <a
                href="#skill"
                className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
              >
                Skill
              </a>
              <a
                href="#project"
                className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-color duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
