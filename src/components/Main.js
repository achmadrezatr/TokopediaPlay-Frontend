import ThumbnailCard from "./Card.js"
import "../style/styles.css";
import { useState, useEffect } from "react";

const Main = ({ selectedCategory, thumbnails }) => {
    const [filteredThumbnails, setFilteredThumbnails] = useState([]);

    useEffect(() => {
        if (selectedCategory === null) {
            setFilteredThumbnails(thumbnails);
        } else {
            const filteredData = thumbnails.filter(
                (data) => data.category === selectedCategory
            );
            setFilteredThumbnails(filteredData);
        }
    }, [selectedCategory, thumbnails]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="d-grid grid-cards">
                        {
                            filteredThumbnails.map(data => {
                                console.log("Rendering ThumbnailCard:", data);
                                return (
                                    <ThumbnailCard
                                        title={data.title}
                                        thumbnailUrl={data.thumbnailUrl}
                                        videoId={data.videoId}
                                    />
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;