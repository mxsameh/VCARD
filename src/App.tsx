import {  Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Test from "./views/test";

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/test' element={<Test/>} />
        </Routes>
    );
};

export default App;
