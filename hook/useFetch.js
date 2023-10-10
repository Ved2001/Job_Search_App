import React, { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            ...query
        },
        headers: {
            'X-RapidAPI-Key': '02fe2a4b91mshb8252d0cb2a889ap170dbfjsn404c2e7b15b4',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsloading(true)
        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsloading(false)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setIsloading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const reFetch = () => {
        setIsloading(true)
        fetchData()
    }
    return { data, isloading, error, reFetch }
}

export default useFetch
