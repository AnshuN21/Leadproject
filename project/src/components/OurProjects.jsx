/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div id='2' className="py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="border p-4 rounded shadow">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p>{project.description}</p>
            <button className="mt-4 text-blue-500">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default OurProjects;
