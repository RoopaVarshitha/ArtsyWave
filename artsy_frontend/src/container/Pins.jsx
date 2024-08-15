import React,{ useState} from 'react'
import {Routes, Route} from 'react-router-dom';

import {Navbar, Feed, PinDetail, CreatePin, Search} from '../components';




const Pins = ({user}) => {
  //we need the search component in everywhere so we puttting it in pins instead of search bar
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-500">
        {/* navbar  having accesss to searchterm and set search term so passing them as props */}
        {/* navbar is always present search +user kuda undali */}
        <Navbar searchTrem={searchTerm} setSearchTerm={setSearchTerm} user={user}/>

      </div>

      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed/>}/>
          <Route path="/category/:categoryId" element={<Feed/>}/>
          {/* user coming as props to our pin container so  the parent is defined at the top */}
          <Route path="/pin-detail" element={<PinDetail user={user}/>}/>
          <Route path="/create-pin" element={<CreatePin user={user }/>}/>
          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>
        </Routes>

      </div>
    </div>
  )
}

export default Pins;