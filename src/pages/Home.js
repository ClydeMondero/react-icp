import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import Task from "../components/Task";
import moment from "moment"

const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

axios.defaults.baseURL = apiUrl;

function Home() {
    useEffect(() => {
        document.title = "TASQ - Home"
    }, [])

    return (
        <div className="flex flex-col items-center h-dvh w-dvh">
            <Header username="Clyde" />
            <div className="flex-1 flex flex-col items-center gap-4 py-6 w-4/5">
                <AddTask onAdd="" />
                <div className="flex flex-col items-center gap-2 w-full h-full bg-secondary-bg px-2 py-8 rounded-lg overflow-auto md:px-8">
                </div>
            </div>
        </div>
    )
}

export default Home;
