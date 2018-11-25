import { requests } from "./rootService";

export const authService  = {
    login: (email, password) => requests.post('/users/login', { email, password }).then(res => res.text)
}