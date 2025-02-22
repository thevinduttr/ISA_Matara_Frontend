// src/api/projectApi.js

import axios from 'axios';

const API_BASE_URL = 'https://isa-matara-api-2005-batch.vercel.app/api/projects';

export const getProjects = async () => {
    return axios.get(API_BASE_URL);
};

export const addProject = (formData) => axios.post(API_BASE_URL, formData);
export const getProjectById = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const updateProject = (id, formData) => axios.put(`${API_BASE_URL}/${id}`, formData);
export const deleteProject = (id) => axios.delete(`${API_BASE_URL}/${id}`);
