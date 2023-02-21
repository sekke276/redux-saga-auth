import { API } from './../../config/env';

export const axiosConfigs = {
    baseURL: API,
    timeout: 5000,
    headers: {
        'Content-Type' : 'application/json',
    },
}

