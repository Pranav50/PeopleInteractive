import React, { useState, useEffect } from "react";

export default function useAllImages(page) {
    console.log("PAGE", page)
    const [data, setData] = useState([])

    const [isLoader, setIsLoader] = useState(false)

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=10&page=${page}`)
        .then((response) => response.json())
        .then((result) => {
            setData([...data, ...result.results])
            setIsLoader(false)
        }).catch((e) => console.log(e));
    }, [page])

        return [data, setData, isLoader];
}