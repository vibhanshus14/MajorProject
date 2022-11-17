import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddProducts from "../Products/AddProducts";
import "../css/nav.css";
import DisplayProductDetails from "../Products/DisplayProductDetails";
import ArtistCreatePost from "../Artist/ArtistCreatePost";
function nav(props) {
  return (
    <div class="nav">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/addProducts">Add Session Details (Post) </Link>
          </li>
          <li>
          <Link to="/getProducts"> Product Details</Link>
          </li>
          <li>
          <Link to="/create">ArtistPost</Link>
          </li>
          <li>
          <Link to="/createPost">Post Image</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<></>}>
            {" "}
          </Route>
          <Route path="/login" element={<></>}>
            {" "}
          </Route>

          <Route path="/Register" element={<></>}>
            {" "}
          </Route>
          <Route path="/addProducts" element={<AddProducts />}>
            {" "}
          </Route>
          <Route path="/getProducts" element={<DisplayProductDetails/>}>
            {" "}
          </Route>
          <Route path="/create">

     
    </Route>
    <Route path="/createpost" element={<ArtistCreatePost/>}>
            {" "}
          </Route>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

nav.propTypes = {};

export default nav;
