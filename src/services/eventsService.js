import { requests } from "./rootService";

export const eventsService  = {
    newEvent: (data) => requests.post(''),

    login: (email, password) => requests.post('/users/login', { email, password }).then(res => res.text)
}