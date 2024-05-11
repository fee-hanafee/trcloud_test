"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const RGB1 = [
  "rgba(255, 99, 132, 0.2)", //red
  "rgba(54, 162, 235, 0.2)", //blue
  "rgba(255, 206, 86, 0.2)", //yellow
  "rgba(75, 192, 192, 0.2)", //green
  "rgba(153, 102, 255, 0.2)", //purple
  "rgba(255, 159, 64, 0.2)", //orange
  "rgba(255, 99, 132, 0.2)", //red
  "rgba(54, 162, 235, 0.2)", //blue
  "rgba(255, 206, 86, 0.2)", //yellow
  "rgba(75, 192, 192, 0.2)", //green
  "rgba(153, 102, 255, 0.2)", //purple
  "rgba(255, 159, 64, 0.2)",
];
const RGB2 = [
  "rgba(255,99,132,1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
  "rgba(255,99,132,1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const URL = "https://www.trcloud.co/test/api.php";

export default function page() {
  const [sourceData, setSourceData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setSourceData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" p-4 ">
      {sourceData && (
        <div className=" flex gap-5 justify-center items-center">
          <div className="h-[500px] w-full">
            <Bar
              data={{
                labels: sourceData.map((data) => data.City),
                datasets: [
                  {
                    label: "Range by country",
                    data: sourceData.map((data) => data.Population),
                    backgroundColor: RGB1,
                    borderColor: RGB2,
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>

          <div className="h-[500px] w-full">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.City),
                datasets: [
                  {
                    label: "Range by country",
                    data: sourceData.map((data) => data.Population),
                    backgroundColor: RGB1,
                    borderColor: RGB2,
                  },
                ],
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
