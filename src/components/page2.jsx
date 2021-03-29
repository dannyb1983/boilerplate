import { Route, Switch } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";

const Page2 = () => {

    return (
        <div>
        <h1>page 2</h1>
        <Link to="/">home</Link>
        <br/>
        <Link to="/page-2">page 2</Link>
        </div>
)}

export default Page2;