"use client";

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

const Navbar = ({ user }) => {
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

          {user && user?.email ? (
            <div className="flex space-x-4 items-center">
              <li>
                <Link href={"/myprofile"}>Profile</Link>
              </li>
              <img
                className="w-10 h-10 rounded-full"
                src={user?.picture}
                alt={user?.given_name}
              />
              <LogoutLink className="btn btn-outline">Log out</LogoutLink>
            </div>
          ) : (
            <ul className="flex items-center gap-4">
              <li>
                <RegisterLink className="btn ">Register</RegisterLink>
              </li>
              <li>
                <LoginLink className="btn btn-outline">Login</LoginLink>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
