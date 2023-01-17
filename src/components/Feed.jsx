//@ts-check
import React, { useEffect, useState } from "react";
import "./feed.css";
import axios from "axios";
import Skeleton from "./Skeleton";
import Post from "./Post";
import { videos as dataVideos } from "../../api/fakeData";

const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [videos, setVideos] = useState([{}]);

    // useEffect(() => {
    //     const getVideos = async () => {
    //         setIsLoading(true);
    //         try {
    //             const res = await axios.get("http://localhost/api/videos/1");
    //             setVideos(res.data);
    //         } catch (err) { }
    //         setIsLoading(false);
    //     };
    //     getVideos();
    // }, []);

    useEffect(() => {
        const interval_id = setTimeout(() => {
            setIsLoading(true);
            setVideos(dataVideos);
            setIsLoading(false);
        }, 1000);

        return () => {
            clearInterval(interval_id);
        };
    }, []);

    return (
        <div className="feed">
            {
                isLoading ?
                    <Skeleton type="feed" /> :
                    (videos.map(video => <Post video={video} />))
            }
        </div>
    );
};

export default Feed;