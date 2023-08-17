import React from "react";
import ProductList from "./ProductList.js";
import CommentList from "./CommentList.js";
import Content from "./Content.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const VideoDetails = () => {
    const [video, setVideo] = useState({});
    const { id } = useParams();


    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const response = await fetch(`https://backend-tokpedplay-defxzpf2xq-et.a.run.app/thumbnail/${id}`);
                const data = await response.json();

                setVideo(data);
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