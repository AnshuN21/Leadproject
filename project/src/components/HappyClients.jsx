/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const HappyClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/happyclients");
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching happy clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Happy Clients</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-600">{client.name}</h3>
              <p className="text-sm text-gray-500">{client.designation}</p>
              <p className="text-gray-700 mt-2">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
