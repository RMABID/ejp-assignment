"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

import Link from "next/link";

const Navbar = ({ user }) => {
  console.log(user);
  return (
    <nav className="bg-gray-200 py-4">
      <div className="flex justify-evenly">
        <h1>Blog</h1>
        <ul className="flex items-center gap-x-6">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/protect"}>Protected</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          {user && user?.email ? (
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={user?.picture}
                alt={user?.given_name}
              />
              <Link className="btn" href={"/"}>
                Logout
              </Link>
            </div>
          ) : (
            <ul>
              <li>
                <RegisterLink className="btn">Register</RegisterLink>
              </li>
              <li>
                <LoginLink className="btn">Login</LoginLink>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
