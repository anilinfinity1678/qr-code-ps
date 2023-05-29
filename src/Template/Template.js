import React, { useEffect, useState } from "react";
import axios from "axios";

const Template = () => {
    const [tree, setTree] = useState({});

    useEffect(() => {
        const fetchTreeData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/trees/1"
                ); // Update the URL to fetch the data of the first tree
                setTree(response.data);
                console.log("Fetched tree data:", response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchTreeData();
    }, []);

    return (
        <div>
            <h3>{tree.name}</h3>
            <p>Height: {tree.height} ft</p>
            <p>Age: {tree.age} years</p>
        </div>
    );
};

export default Template;
