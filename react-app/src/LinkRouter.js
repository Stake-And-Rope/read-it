import { Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import MainPage from "./pages/MainPage";

function LinkRouter(){
    return (
    <>
        <LoginRegisterPage />
        <MainPage />
    </>
    );
}

export default LinkRouter;