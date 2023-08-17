
import '../App.css';

const Content = ({ video }) => {
    return (
        <div className="content">
            <div className="video-player">
                <iframe width='95%' height='99%' src={video} title='YouTube video player' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            </div>
        </div>
    )
}

export default Content;