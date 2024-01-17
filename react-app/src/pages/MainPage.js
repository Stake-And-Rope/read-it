import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainPage(){
    return (
        <>
            <Routes>
                <Route path="/main" element={<Navbar />}/>
            </Routes>
        </>
    );
}

export default MainPage;