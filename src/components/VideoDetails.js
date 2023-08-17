import React from "react";
import ProductList from "./ProductList.js";
import CommentList from "./CommentList.js";
import Content from "./Content.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";

const VideoDetails = () => {
    const [video, setVideo] = useState({});
    const { id } = useParams();

    // const getIdFromParams = (match) => {
    //     return (match && match.params && match.params._id) || null;
    // };

    // useEffect((match) => {
    //     const fetchThumbnails = async () => {
    //         const id = getIdFromParams(match);
    //         const videoId = id;
    //         try {
    //             const response = await fetch(`http://localhost:2500/thumbnail/${videoId}`);
    //             const data = await response.json();

    //             setVideo(data);
    //             console.log('>>>:', response);
    //         } catch (error) {
    //             console.error("Error fetching thumbnails:", error);
    //         }
    //     };

    //     fetchThumbnails();
    // }, []);

    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const response = await fetch(`https://backend-tokpedplay-defxzpf2xq-et.a.run.app/thumbnail/${id}`);
                const data = await response.json();

                setVideo(data);
                // console.log(">>> ID:", id)
                // console.log('>>>:', response)
            } catch (error) {
                console.error("Error fetching thumbnails:", error);
            }
        };

        fetchThumbnails();
    }, [id]); // Add _id as a dependency


    return (
        <div className="layout blurred-background" style={{ backgroundImage: `url(${video.thumbnailUrl})` }}>
            <ProductList />
            <Content video={video.videoUrl} />
            <CommentList />
        </div>
    )
}


export default VideoDetails