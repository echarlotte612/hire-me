import React, { useState, useEffect } from 'react'
import ChildCard from './ChildCard';
import axios from 'axios';
import {accessToken, groupId, institutionId} from '../helpers/api';

// const accessToken = '234ffdb8-0889-4be3-b096-97ab1679752c';
// const groupId = '11fc220c-ebba-4e55-9346-cd1eed714620';
// const institutionId = 'fb6c8114-387e-4051-8cf7-4e388a77b673';

export default function ChildrenList() {
    const [children, setChildren] = useState([]);
    // const [isLoading, setisLoading] = useState(true);
    // const [length, setLength] = useState(100);

    const getChildren = async () => {
        // GET data from API //
        await axios.get(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`)
            .then(response => {
                if(response.status === 200) {
                    let results = response.data.children
                    setChildren(results)
                    console.log(response.data.children)
                }
                else {
                    console.err("Couldn't fetch data")
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getChildren()
    }, [])

    return (
        <div className="children-list">
            {children.map((child, index) =>
                <ChildCard name={child.name.fullName} key={index} id={child.childId} lastCheckedIn={child.checkinTime} image={child.image.large} />
            )}
        </div>
    )
}
