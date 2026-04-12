import axios from 'axios';
import supabase from '@/utils/supabase';

const axiosInstance = axios.create();

const logToSupabase = async ({ method, url, status, response_data, error_message }) => {
    await supabase.from('api_logs').insert({ method, url, status, response_data, error_message });
};

axiosInstance.interceptors.response.use(
    (response) => {
        logToSupabase({
            method: response.config.method?.toUpperCase(),
            url: response.config.url,
            status: response.status,
            response_data: response.data,
            error_message: null
        });
        return response;
    },
    (error) => {
        logToSupabase({
            method: error.config?.method?.toUpperCase(),
            url: error.config?.url,
            status: error.response?.status ?? null,
            response_data: error.response?.data ?? null,
            error_message: error.message
        });
        return Promise.reject(error);
    }
);

export default axiosInstance;
