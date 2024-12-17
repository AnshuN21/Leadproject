/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ProjectsAdmin = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all projects
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const response = await fetch("http://localhost:5000/projects");
    const data = await response.json();
    setProjects(data);
  };

  // Handle form input changes
  const handleChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  // Add or update project
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newProject.title || !newProject.description || !newProject.image) {
      alert("Please fill all fields!");
      return;
    }

    if (editMode) {
      // Update existing project
      const response = await fetch(`http://localhost:5000/projects/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });

      if (response.ok) {
        alert("Project updated successfully!");
        setEditMode(false);
        setEditId(null);
      } else {
        alert("Failed to update project!");
      }
    } else {
      // Add new project
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newProject, id: Date.now() }),
      });

      if (response.ok) {
        alert("Project added successfully!");
      } else {
        alert("Failed to add project!");
      }
    }

    setNewProject({ title: "", description: "", image: "" });
    fetchProjects();
  };

  // Delete project
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      const response = await fetch(`http://localhost:5000/projects/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Project deleted successfully!");
        fetchProjects();
      } else {
        alert("Failed to delete project!");
      }
    }
  };

  // Edit project
  const handleEdit = (project) => {
    setNewProject({
      title: project.title,
      description: project.description,
      image: project.image,
    });
    setEditMode(true);
    setEditId(project.id);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">Manage Projects</h2>

      {/* Add or Edit Project Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 border p-4 rounded shadow bg-gray-100"
      >
        <div className="mb-4">
          <label className="block font-medium">Project Title</label>
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter project title"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Project Description</label>
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter project description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Project Image URL</label>
          <input
            type="text"
            name="image"
            value={newProject.image}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter image URL"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          {editMode ? "Update Project" : "Add Project"}
        </button>
      </form>

      {/* List of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border p-4 rounded shadow flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => handleEdit(project)}
                className="text-green-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAdmin;
