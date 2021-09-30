import React, { useState, useEffect } from 'react'
import ChildCard from './ChildCard';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { accessToken, groupId, institutionId } from '../helpers/api';

export default function ChildrenList() {
    const [children, setChildren] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [length, setLength] = useState(0);

    const getChildren = async () => {
        setIsLoading(true)
        // GET data from API //
        await axios.get(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`)
            .then(response => {
                if (response.status === 200) {
                    let results = response.data.children
                    setLength(results.length)
                    setChildren([...children, ...results.slice(children.length,children.length+4)]);
                    console.log(children)
                    setIsLoading(false)
                }
                else {
                    console.err("Couldn't fetch data")
                }
            })
            .catch(err => {
                console.error(err)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getChildren(setChildren)
    }, [])

    return (
        <div className="children-list-wrap">
            <ul className="children-list">
                <InfiniteScroll
                    dataLength={children.length} // Length of current array //
                    next={getChildren} // action to get more data //
                    hasMore={children.length < length} // decider to call more data: Boolean //
                    scrollableTarget="app" // Reference to parent node //
                    className="children-list"
                    endMessage={ // On data end //
                        <p className="infinite-scroll-message">
                            <b>No more records to show.</b>
                        </p>
                    } 
                >
                    {children.map((child, index) =>
                        <ChildCard name={child.name.fullName} key={index} id={child.childId} lastCheckedIn={child.checkinTime} image={child.image.large} />
                    )}
                </InfiniteScroll>
            </ul>
            {isLoading &&
                <div className="loading">
                    <p>Loading...</p>
                </div>
            }
        </div>
    )
}