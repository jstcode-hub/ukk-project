import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});

// postingan
export const fetchComplaint = (id) => API.get(`/complaints/${id}`);
export const fetchcomplaints = (page) => API.get(`/complaints?page=${page}`);
export const createComplaint = (newComplaint) => API.post('/complaints', newComplaint);
export const updateComplaint = (id, updatedComplaint) => API.patch(`/complaints/${id}`, updatedComplaint);
export const deleteComplaint = (id) => API.delete(`/complaints/${id}`);

// pengguna
export const signIn = (form) => API.post('/users/signin', form);
export const signUp = (form) => API.post('/users/signup', form);
