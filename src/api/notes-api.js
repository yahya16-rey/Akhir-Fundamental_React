import { getAccessToken } from "../utils/local-storage";

const BASE_URL = "https://notes-api.dicoding.dev/v1";

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
            ...options.headers,
        },
    });
}

/* AUTH */

export async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    return response.json();
}

export async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    return response.json();
}

export async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    return response.json();
}

/* NOTES */

export async function getActiveNotes() {
    const response = await fetchWithToken(`${BASE_URL}/notes`);
    return response.json();
}

export async function getNoteDetail(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
    return response.json();
}

export async function addNote({ title, body }) {
    const response = await fetchWithToken(`${BASE_URL}/notes`, {
        method: "POST",
        body: JSON.stringify({ title, body }),
    });

    return response.json();
}

export async function deleteNote(id) {
    const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
        method: "DELETE",
    });

    return response.json();
}
