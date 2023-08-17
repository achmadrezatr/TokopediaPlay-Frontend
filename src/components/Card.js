import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/styles.css";

const ThumbnailCard = ({ title, thumbnailUrl, videoId }) => {
    return (
        <div className='container thumbnail-card'>
            <Card className='text-white fixed-size-card'>
                <div className="card-image" style={{ backgroundImage: `url(${thumbnailUrl})` }}>
                    <Link to={`/thumbnail/${videoId}`} style={{ color: 'white' }}>

                        <Card.ImgOverlay className='d-flex align-items-end'>
                            <Card.Title>
                                {title}
                            </Card.Title>
                        </Card.ImgOverlay>
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export const ProductCard = ({ linkProduct, price }) => {
    return (
        <div className="product-card">
            <img
                src={linkProduct}
                alt="Product"
                className="product-image"
            />
            <p className="product-price">Rp <span/>{price}</p>
        </div>
    )
}

export default ThumbnailCard;