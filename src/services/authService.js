import { requests } from "./rootService";

export const authService  = {
    login: (email, password) => {
        return requests.post('/users/login', { email, password });
    }
}