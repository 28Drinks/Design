import React, { useState } from "react";
import Navbar from "./Navbar";
import Sportbot from "../pages/sportbot";

const Layout = ({ children }) => {

    const [botId, setBotId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted:', botId)
    }

    return (
        <div>
            <Navbar botId={botId} onBotIdChange={setBotId} onSubmit={handleSubmit}></Navbar>
            <div className="pageContentContainer">{children}</div>
        </div>
    );
};

export default Layout;