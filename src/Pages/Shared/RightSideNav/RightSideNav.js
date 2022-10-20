import React, { useContext } from 'react';
import './RightSideNav.css';
import Button from 'react-bootstrap/Button';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaServicestack, FaTwitch, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';




const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googlePorvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        providerLogin(googlePorvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }



    return (
        <div>
            <div>
                <Button onClick={handleGoogleLogIn} variant="outline-primary mb-2 fw-semibold w-100"> <FcGoogle className='fs-3' />  Login With Google</Button>
                <Button variant="outline-dark fw-semibold w-100"><FaGithub className='fs-3' /> Login With githum</Button>
            </div>
            <div className='mt-4'>
                <h5 className='fw-bold'>Find Us On</h5>

                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaFacebook className='fs-3 fb-text' /> Facebook</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaYoutube className='fs-3 yt-text' /> YouTube</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaTwitter className='fs-3 tw-text' /> Twitter</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaTwitch className='fs-3 tc-text' /> Twitch</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaWhatsapp className='fs-3 text-success' /> WhatsApp</Button>
                <Button variant="outline-dark fw-semibold mb-3 w-100 text-start"><FaServicestack className='fs-3 sv-text' /> Privacy Policy</Button>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;