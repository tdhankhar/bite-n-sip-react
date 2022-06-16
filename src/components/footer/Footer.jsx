import React from 'react';
import './Footer.css';
import clockIcon from '../../clock-icon.png';
import callIcon from '../../call-icon.png';
import locationIcon from '../../location-pin.png';

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
                <hr style={{
                    margin: 0,
                    height: '10px',
                    backgroundColor: 'white',
                }} />
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
        <div className='contact-us' style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <div className='footer-value' style={{
                width: '285px',
            }}>
                <div className='icon'>
                    <img src={callIcon} alt='Contact-us'/>
                </div>
                <div className='text-part'>
                    095403 88801 <br/> 087509 71111
                </div>
            </div>

            <div className='footer-value' style={{
                width: '440px',
            }}>
                <div className='icon'>
                    <img src={locationIcon} alt='Address'/>
                </div>
                <div className='text-part'>
                Shop No. 1631 Najafgarh Thana Road New Delhi, Delhi 110043, India
                </div>
            </div>

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