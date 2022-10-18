import React from 'react';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaServicestack, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <div>
                <Button variant="outline-primary mb-2 fw-semibold w-100"> <FcGoogle className='fs-3' />  Login With Google</Button>
                <Button variant="outline-dark fw-semibold w-100"><FaGithub className='fs-3' /> Login With githum</Button>
            </div>
            <div className='mt-4'>
                <h5 className='fw-bold'>Find Us On</h5>

                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaFacebook className='fs-3' /> Facebook</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaYoutube className='fs-3' /> You Tube</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaTwitter className='fs-3' /> Twitter</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaTwitch className='fs-3' /> Twitch</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaWhatsapp className='fs-3' /> WhatsApp</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaServicestack className='fs-3' /> Privacy Policy</Button>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;