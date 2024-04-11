import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../Styles/sportbot.css";
import { apiCallFunction, apiCallGraphData } from "../services/apiService";
import Graph from '../components/Graph';

const Sportbot = () => {
    const { searchTerm } = useParams();
    const [sportbot, setSportbot] = useState(null);
    const [ graphData, setGraphData ] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await apiCallFunction(searchTerm);
                setSportbot(data)
            } catch (error) {
                console.error('Error fetching data', error)
            }
        };

        fetchData();
    }, [searchTerm]);


    useEffect(() => {
        const fetchGraphData = async () => {
            if (sportbot && sportbot.sport ) {
                try {
                    const data = await apiCallGraphData(sportbot.sport);
                    setGraphData(data);
                } catch (error) {
                    console.error('Error fetching graph data', error);
                }
            }
        };

        fetchGraphData();
    }, [sportbot]);


    return(
        <div className="sportbot_container">
            {sportbot && (
                <div className="container">
                    <div class="section_container">
                        <img class="bot_image" src={sportbot.image} alt="Sportbot"></img>
                        <div class="info_container">
                            <h2>Sportbot Details</h2>
                            <p>ID: {sportbot.bot_id}</p>
                            <p>Name: {sportbot.bot_name}</p>
                            <p>Sport: {sportbot.sport}</p>
                            <p>Freebet: {sportbot.freebet}</p>
                            <p>Profit Share: {sportbot.porfitshare}</p>
                        </div>
                    </div>
                    <hr className="section_line"></hr>
                    <div className="chart_container">
                        {graphData && <Graph chartData={graphData} />}
                    </div>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Sportbot;