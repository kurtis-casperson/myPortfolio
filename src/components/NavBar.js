import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
export default function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-orange-600 text-3xl font-bold tracking-widest"
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 mr-4 text-blue-100 hover:text-orange-600 text-3xl font-bold tracking-widest"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            exact
            activeClassName="text-blue-100 bg-blue-200"
            className="inflex-flex items-center py-6 mr-4 text-blue-100 hover:text-orange-600 text-3xl font-bold tracking-widest"
          >
            About
          </NavLink>
        </nav>
        <div className="inflex-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://mail.google.com/mail/?view=cm&fs=1&to=kcasperson7@gmail.com"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kurtis-casperson"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/kurtis-casperson"
            className="mr-4"
            target="blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  )
}
