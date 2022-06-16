import React from 'react';
import './Footer.css';
import clockIcon from '../../clock-icon.png';
import callIcon from '../../call-icon.png';
import locationIcon from '../../location-pin.png';
import mailIcon from '../../mail-icon.jpeg';


const HeadingBlock = () => {
    return (
        <div className='heading-block' style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '80px',
        }}>
            <div className='reach-us' style={{
                color: 'white',
                fontSize: '64px',
            }}>
                Reach Us
                <hr className="reach-us-line" />
            </div>
            <button className='visit-us-button' onClick={()=> {
                window.open("https://www.google.com/maps/place/Bunny's+Bite+N+Sip+-+Best+Restaurant+In+Najafgarh+%7C+Best+Chinese+and+Continental+Restaurant+In+Najafgarh/@28.6104687,76.9815019,19.78z/data=!4m5!3m4!1s0x390d0fdc9b750eb1:0xc99332565f3e3e4e!8m2!3d28.610212!4d76.9818885")
            }}>
                Visit Us
            </button>
        </div>
    )
}

const ContactCard = () => {
    return (
        <div>
            <div className='contact-us'>
                <div className='footer-value' style={{
                    width: '285px',
                }}>
                    <div className='icon'>
                        <img src={callIcon} alt='Contact-us'/>
                    </div>
                    <div className='text-part'>
                        070110 80431 <br/> 095403 88801
                    </div>
                </div>
                <div className='footer-value' style={{
                    width: '600px',
                }}>
                    <div className='icon'>
                        <img src={mailIcon} alt='Email-us'/>
                    </div>
                    <div className='text-part'>
                        connect@bunnysbitensip.shop
                    </div>
                </div>
            </div>
            <div className='contact-us'>
                <div className='footer-value' style={{
                    width: '412px',
                }}>
                    <div className='icon'>
                        <img src={clockIcon} alt='Timings'/>
                    </div>
                    <div className='text-part'>
                        Mon - Sun <br/> 10:00 AM - 10:00 PM
                    </div>
                </div>
                <div className='footer-value' style={{
                    width: '600px',
                }}>
                    <div className='icon'>
                        <img src={locationIcon} alt='Address'/>
                    </div>
                    <div className='text-part'>
                        Shop No. 1631, Thana Road, Najafgarh, New Delhi, Delhi, 110043, India
                    </div>
                </div>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className='footer-container'>
                <HeadingBlock />
                <ContactCard />
            </div>
        </div>
    )
}

export default Footer;
