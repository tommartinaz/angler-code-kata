import axios from 'axios';
import {
    FETCH_ANGLERS,
    BASE_URL
} from './types';

export const fetch_anglers = () => {
    return {
        type: FETCH_ANGLERS,
        payload: axios.get(`${BASE_URL}/catfish`)
    }
}