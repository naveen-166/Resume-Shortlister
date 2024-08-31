import React, { useEffect } from 'react';
import image from "../assets/home1.jpg";
import "../index.css";

import AOS from 'aos';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
        });
    }, []);

    return (
        <div>
            <section id='home'>
            <Navbar />
            <div
                className='bg-cover w-screen h-screen'
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className='p-48'>
                    <p data-aos="fade-in" data-aos-delay="500" className='text-white text-4xl font-bold font-Courgette'>Welcome to Jobsek</p>
                    <p data-aos="fade-in" data-aos-delay="650" className='text-white text-2xl font-bold font-Courgette pt-6'>Your gateway to top talent and career opportunities.</p>
                    <p data-aos="fade-in" data-aos-delay="850" className='text-white text-2xl font-bold font-Courgette pt-6'>Connecting exceptional people with outstanding companies.</p>
                    <p data-aos="fade-in" data-aos-delay="1050" className='text-white text-4xl font-bold font-oswald pt-16 flex'> Start your journey here!
                        <div className='pl-6 pt-0.5'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white hover:text-emerald-500 transition-colors duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                    </p>
                    <Link to='/form'>
                    <div data-aos-delay="1250" data-aos="fade-in" className='mt-4 rounded-lg cursor-pointer bg-white w-44'>
                        <p className='box-border bg-white h-8 w-full rounded-md shadow-2xl flex items-center justify-center text-center text-xl font-oswald hover:bg-black hover:text-white duration-300 shadow-black hover:shadow-white'>Click Here</p>
                    </div>
                    </Link>
                </div>
            </div>
            
            </section>
            {/* <section data-aos="fade-up" className='bg-black' >
                <div className='bg-cover text-white w-screen h-screen p-8' id='about' style={{ backgroundImage: `url(${abimg})` }}>
            <div className='max-w-4xl mx-auto mt-28' >
                <h2 data-aos="fade-up" className='text-4xl font-semibold mb-6 font-oswald'>About Me</h2>
                <p data-aos="fade-up" data-aos-delay="300" className='text-lg mb-6 font-serif ml-12'>
                    Hi! I’m Naveen, a B.Tech student at KEC with a passion for Full Stack Development and Deep Learning. I’m currently exploring these fields through coursework and personal projects.
                </p>
                
                <h2 data-aos="fade-up" data-aos-delay="500" className='text-3xl font-semibold mb-6 font-oswald'>Projects</h2>
                <p data-aos="fade-up" data-aos-delay="700" className='text-lg mb-6 font-serif ml-12'>
                    I’m working on projects involving the MERN stack and Deep Learning. These include developing web apps and building ML models.
                </p>
                
                <h2 data-aos="fade-up" data-aos-delay="900" className='text-3xl font-semibold mb-6 font-oswald'>Goals</h2>
                <p data-aos="fade-up" data-aos-delay="1100" className='text-lg mb-6 font-serif ml-12'>
                    My goal is to pursue a career in software development, focusing on innovative technologies and research.
                </p>
                
                <h2 data-aos="fade-up" data-aos-delay="1200" className='text-3xl font-semibold mb-6 font-oswald'>Connect</h2>
                <p data-aos="fade-up" data-aos-delay="1350" className='text-lg font-serif ml-12'>
                    I’m open to connecting with others in the tech community. Feel free to reach out via email or LinkedIn.
                </p>
            </div></div>
        </section>
        <section className=' bg-black'  >
            <div data-aos='fade-up' className='bg-cover text-white w-screen h-screen p-8' id='contact' style={{ backgroundImage: `url(${conimg})` }}>
            <div className='max-w-4xl mx-auto mt-36'>
                <h2 data-aos="fade-up" className='text-4xl font-semibold mb-6 font-oswald'>Contact Me</h2>
                <p data-aos="fade-up" data-aos-delay="300" className='text-lg mb-6 font-mono'>
                    Feel free to get in touch using the contact details below.
                </p>
                
                <div data-aos="fade-up" data-aos-delay="500" className='mb-8'>
                    <h3 className='text-3xl font-semibold mb-4 font-oswald'>Email</h3>
                    <p className='text-lg font-mono'>
                        You can reach me at: <a href='mailto:naveenramce.22aid@kongu.edu' className='text-blue-400 hover:underline'>naveenramce.22aid@kongu.edu</a>
                    </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="700">
                    <h3 className='text-3xl font-semibold mb-4 font-oswald' >Connect with Me</h3>
                    <p className='text-lg font-mono'>
                        LinkedIn: <a href='https://www.linkedin.com/in/naveen' className='text-blue-400 hover:underline' target='_blank' rel='noopener noreferrer'>linkedin.com/in/naveen</a>
                    </p>
                </div>
            </div>
            </div>
        </section> */}
        </div>
    );
}

export default Home;
