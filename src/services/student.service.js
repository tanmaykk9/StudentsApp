import { fetchWrapper } from '../data/fetch-wrapper';

const baseURL = '/students';

export const studentService = {
  getAll,
  getById,
  update
};

function getAll() {
  return fetchWrapper.get(baseURL);
}

function getById(id) {
  return fetchWrapper.get(`${baseURL}/${id}`);
}

function update(id, params) {
  return fetchWrapper.put(`${baseURL}/${id}`, params);
}