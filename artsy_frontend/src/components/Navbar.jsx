import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch, IoMdAdd } from "react-icons/io";

const Navbar = ({searchTerm, setSearchTerm, user}) => {
  const navigate = useNavigate();

  // only show the navigation bar is the if user exists
  // if(!user) return null;

  if (user){

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7">
      <div className="flex jusity-start items-center w-full px-2 rounded-md border-none outline-none focus-within:shadow-sm ">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          // updateing the new value entered int he setsearchterm
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          //we moved from basic feed to searchh feed
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>

      <div className="flex gap-3">
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user.image} alt="user-pic" className="w-14 h-12 rounded-lg" />
        </Link>

        <Link
          to="create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
}
return null;
};

export default Navbar;
