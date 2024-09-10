import React from "react";
import { Thermometer, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { Scrollbar } from "react-scrollbars-custom";

const DroneCriticalsPage = () => {
  const dummyTemperatureHumidityLog = {
    logs: [
      {
        id: 1,
        timestamp: "2024-09-11 08:00:00",
        temperature: 22.5,
        humidity: 45,
      },
      {
        id: 2,
        timestamp: "2024-09-11 08:05:00",
        temperature: 22.7,
        humidity: 46,
      },
      {
        id: 3,
        timestamp: "2024-09-11 08:10:00",
        temperature: 23.0,
        humidity: 47,
      },
      {
        id: 4,
        timestamp: "2024-09-11 08:15:00",
        temperature: 23.2,
        humidity: 48,
      },
      {
        id: 5,
        timestamp: "2024-09-11 08:20:00",
        temperature: 23.5,
        humidity: 47,
      },
      {
        id: 6,
        timestamp: "2024-09-11 08:25:00",
        temperature: 23.8,
        humidity: 46,
      },
      {
        id: 7,
        timestamp: "2024-09-11 08:30:00",
        temperature: 24.0,
        humidity: 45,
      },
      {
        id: 8,
        timestamp: "2024-09-11 08:35:00",
        temperature: 24.2,
        humidity: 44,
      },
      {
        id: 9,
        timestamp: "2024-09-11 08:40:00",
        temperature: 24.5,
        humidity: 43,
      },
      {
        id: 10,
        timestamp: "2024-09-11 08:45:00",
        temperature: 24.8,
        humidity: 42,
      },
    ],
  };
  // Mock data for temperature and humidity
  const temperature = 28.5;
  const humidity = 65;

  return (
    <div className="flex h-screen bg-dark text-[#D8F3DC] pr-16 relative">
      <div className="absolute  start-0 -translate-x-1/4 top-1/4  -translate-y-1/2 z-0 bg-accent blur-[220px] h-[25rem] w-[25rem] rounded-full"></div>

      <div className="absolute  end-14 -translate-x-1/4 top-3/4  -translate-y-1/2 z-0 bg-accent blur-[300px] h-[25rem] w-[25rem] rounded-full"></div>
      {/* Left side - Drone Image */}
      <div className="z-10 w-1/2 p-8 flex items-center justify-center">
        <img
          src="/criticals.png"
          alt="Drone"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right side - Temperature and Humidity Readings */}
      <div className="flex-grow p-8 flex flex-col justify-center">
        <h1 className="text-7xl font-playfair italic font-bold mb-8 bg-gradient-to-b bg-clip-text text-transparent from-stone-500 via-stone-200 to-stone-600">
          <span className="font-suse not-italic bg-gradient-to-r from-primary via-light to-accent bg-clip-text text-transparent ">
            Drone{" "}
          </span>
          Criticals
        </h1>
        <div className="flex flex-row w-full gap-x-3">
          {/* Temperature */}
          <div className="w-1/2  bg-[#2D6A4F] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Thermometer className="text-[#95D5B2] mr-4" size={32} />
              <h2 className="text-2xl font-suse font-semibold">Temperature</h2>
            </div>
            <p className="text-5xl font-bold">{temperature}°C</p>
          </div>

          {/* Humidity */}
          <div className=" w-1/2 bg-[#40916C] p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Droplets className="text-[#95D5B2] mr-4" size={32} />
              <h2 className="text-2xl font-suse font-semibold">Humidity</h2>
            </div>
            <p className="text-5xl font-bold">{humidity}%</p>
          </div>
        </div>

        <div className="p-4 mt-8 mx-4 max-h-72 min-h-96">
          <Scrollbar style={{ width: "100%", height: 400 }}>
            <h2 className="text-xl font-bold font-suse mb-4">
              Temperature and Humidity Log
            </h2>
            <table className="text-sm font-suse w-full border-collapse">
              <thead>
                <tr className="bg-primary/20">
                  <th className="border border-gray-300 px-4 py-2">
                    Timestamp
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Temperature (°C)
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Humidity (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                {dummyTemperatureHumidityLog.logs.map((log) => (
                  <tr key={log.id} className="hover:bg-primary/10">
                    <td className="border border-gray-300 px-4 py-2">
                      {log.timestamp}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {log.temperature.toFixed(1)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {log.humidity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scrollbar>
        </div>
      </div>
      <div className="absolute z-50 start-0 top-0 m-10">
        <Link to="/">
          <span className="font-500 font-suse text-5xl font-bold">{"↜"}</span>
        </Link>
      </div>
    </div>
  );
};

export default DroneCriticalsPage;
