import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { BsStarFill } from "react-icons/bs";

const NewsSummery = ({ news }) => {
    const { _id, author, title, details, image_url, rating, total_view
    } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img className='rounded-5 me-2' style={{ height: '50px' }} src={author?.img} alt="" />
                    <div>
                        <h5 className='mb-0'>{author?.name ? author.name : 'No Name'}</h5>
                        <p className='mb-0'>{author?.published_date || 'No Date Found'}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='fs-5 me-2' />
                    <FaShareAlt className='fs-5' />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='mt-4 text-justify'>
                    {
                        details.length > 250 ?
                            <span>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></span>
                            :
                            <span>{details}</span>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <BsStarFill className='fs-4 text-warning' />
                    <p className='mb-0 ms-2 fw-semibold fs-5'>{rating?.number}</p>
                </div>
                <div className='d-flex align-items-center fs-5'>
                    <FaEye />
                    <p className='mb-0 ms-2'>{total_view ? total_view : '00'}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummery;