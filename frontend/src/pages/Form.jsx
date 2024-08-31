import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Authcontext } from '../context/Authcontext';
import image from "../assets/form.jpg";
import AOS from 'aos';

function Form() {
    const { filled, setfilled,email } = useContext(Authcontext);
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: email,
        phone: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        file: null
    });
    const [message, setMessage] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 900, once: true });
    }, []);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

                const form = new FormData();
                for (const key in formData) {
                    form.append(key, formData[key]);
                }

                const response = await axios.post('http://localhost:5000/form', form, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                setMessage(response.data.message);
                setModalVisible(true);

                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    address: '',
                    state: '',
                    city: '',
                    pincode: '',
                    file: null
                });

            setfilled(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form. Please try again.');
            setModalVisible(true);
        }
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };


    if (filled) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <div className="text-green-400 mb-8">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth=".8" 
                stroke="currentColor" 
                className="w-24 h-24 animate-bounce"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
                />
              </svg>
            </div>
            <h1 className="text-white text-3xl font-bold">Thanks for Submitting</h1>
            <p className="text-gray-400 mt-4 text-lg">We have received your submission and will get back to you shortly.</p>
          </div>
        );
    }

    return (
        <div data-aos="fade-in" className='h-screen w-screen bg-cover overflow-hidden' style={{ backgroundImage: `url(${image})` }}>
            <div className='flex flex-col items-center justify-center h-full mt-4'>
                <p data-aos="fade-down" data-aos-delay="100" className='text-xl mb-8 text-white text-center font-edu font-bold hover:text-black hover:transition hover:duration-300'>
                    Complete the Form to Proceed
                </p>
                <div className='relative flex justify-center w-full px-4 md:px-8'>
                    <div className='bg-white bg-opacity-5 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-4xl w-full'>
                        <form onSubmit={handleSubmit} className='text-white font-oswald'>
                            <div className="flex flex-col md:flex-row md:space-x-12 space-y-6 md:space-y-0">
                                <div className='flex flex-col space-y-6 w-full md:w-1/2' data-aos="fade-right" data-aos-delay="100">
                                    <label className='block'>Firstname</label>
                                    <input
                                        type='text'
                                        name='firstname'
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Firstname"
                                    />
                                    <label className='block'>Lastname</label>
                                    <input
                                        type='text'
                                        name='lastname'
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Lastname"
                                        
                                    />
                                    <label className='block'>Email</label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Email"
                                        readOnly
                                    />
                                    <label className='block'>Phone</label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Phone"
                                    />
                                    <label className='block'>Address</label>
                                    <input
                                        type='text'
                                        name='address'
                                        value={formData.address}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Address"
                                    />
                                </div>
                                <div className='flex flex-col space-y-6 w-full md:w-1/2' data-aos="fade-left" data-aos-delay="200">
                                    <label className='block'>State</label>
                                    <input
                                        type='text'
                                        name='state'
                                        value={formData.state}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="State"
                                    />
                                    <label className='block'>City</label>
                                    <input
                                        type='text'
                                        name='city'
                                        value={formData.city}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="City"
                                    />
                                    <label className='block'>Pincode</label>
                                    <input
                                        type='text'
                                        name='pincode'
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="Pincode"
                                    />
                                    <label className='block'>File Upload</label>
                                    <input
                                        type='file'
                                        name='file'
                                        onChange={handleChange}
                                        className='p-2 border border-gray-300 rounded-md bg-gray-900 text-white'
                                        aria-label="File Upload"
                                    />
                                    <input
                                        type='submit'
                                        value='Submit'
                                        className='py-2 border-2 border-stone-400 text-white rounded-md hover:bg-white hover:text-black transition duration-300'
                                    />
                                </div>
                            </div>
                        </form>
                        {message && (
                            <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isModalVisible ? 'block' : 'hidden'}`}>
                                <div className='bg-white p-6 rounded shadow-lg'>
                                    <p>{message}</p>
                                    <button onClick={handleCloseModal} className='mt-4 px-4 py-2 bg-red-500 text-white rounded'>
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
