import NavigatorBar from "./NavigatorBar.js";
import Main from "./Main.js";
import "../App.css";
import { useState, useEffect } from "react";

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        const fetchThumbnails = async () => {
            try {
                const response = await fetch("https://backend-tokpedplay-defxzpf2xq-et.a.run.app/thumbnail");
                const data = await response.json();
                setThumbnails(data);
            } catch (error) {
                console.error("Error fetching thumbnails:", error);
            }
        };

        fetchThumbnails();
    }, []);
    return (
        <div className="bgHome" style={{ minHeight: '100vh' }}>
            <NavigatorBar setSelectedCategory={setSelectedCategory} />
            <Main thumbnails={thumbnails} selectedCategory={selectedCategory} />
        </div>
    )
}

export default HomePage;