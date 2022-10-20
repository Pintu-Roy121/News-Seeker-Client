import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { author, title, details, image_url, rating, category_id } = news;

    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <div className='d-flex justify-content-between align-items-center px-3'>
                    <div className='d-flex align-items-center my-4'>
                        <p className='me-2 mb-0 fw-bold'>{author?.name ? author.name : 'No Name'}: </p>
                        <p className='mb-0'> {author?.name}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='me-2 mb-0 fw-bold'>Publish Date: </p>
                        <p className='mb-0'> {author?.published_date || 'No Date Found'}</p>
                    </div>
                    <div className='d-flex align-items-center'>
                        <BsStarFill className='fs-5 text-warning' />
                        <p className='mb-0 ms-2 fw-bold'>{rating?.number}</p>
                    </div>
                </div>
                <Card.Text>
                    <span>{details}</span>
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;