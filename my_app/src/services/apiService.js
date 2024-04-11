const apiCallFunction = async (searchTerm) => {
    const response = {
        "bot_id": searchTerm,
        "bot_name": "Sportbot #5",
        "sport": "soccer",
        "freebet": "200",
        "porfitshare": "995",
        "image": "https://sportsbot.rollbot.com/pics/4aa2adeb2e5288c74902e743ac285ab5.webp"
        };
    return response
  };


const apiCallGraphData = async (searchTerm) => {

    const response = [
        { time: '2018-12-22', value: 32.51 },
        { time: '2018-12-23', value: 31.11 },
        { time: '2018-12-24', value: 27.02 },
        { time: '2018-12-25', value: 27.32 },
        { time: '2018-12-26', value: 25.17 },
        { time: '2018-12-27', value: 28.89 },
        { time: '2018-12-28', value: 25.46 },
        { time: '2018-12-29', value: 23.92 },
        { time: '2018-12-30', value: 22.68 },
        { time: '2018-12-31', value: 22.67 },
        { time: '2019-01-01', value: 32.51 },
        { time: '2019-01-02', value: 42.51 },
        { time: '2019-01-03', value: 12.51 },
        { time: '2019-01-04', value: 32.51 },
        { time: '2019-01-05', value: 42.51 },
        { time: '2019-01-06', value: 252.51 },
        { time: '2019-01-07', value: 22.51 },
    ];

    return response;
};


export { apiCallFunction, apiCallGraphData }

  