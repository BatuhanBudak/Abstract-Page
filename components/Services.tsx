import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import one from '../public/1.png';
import two from '../public/2.png';
import three from '../public/3.png';
import four from '../public/4.png';
import five from '../public/5.png';
import six from '../public/6.png';


export default function Services() {

    return (
        <section className='services'>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={one} alt=' mechanical parts' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>
                        Using Abstract</p>
                    <p className='service-detail'>
                        Abstract lets you manage, version, and document your designs in one place.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr; </a>
                    </Link>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={two} alt='people drawing ' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>Manage your account</p>
                    <p className='service-detail'>Configure your account settings, such as your email, profile details, and password.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr;</a>
                    </Link>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={three} alt=' puzzle piece' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>
                        Manage organizations, teams, and projects</p>
                    <p className='service-detail'>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr;</a>
                    </Link>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={four} alt='dollar symbol' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>Manage billing</p>
                    <p className='service-detail'>Change subscriptions and payment details.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr;</a>
                    </Link>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={five} alt='dialogue box' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>Authenticate to Abstract</p>
                    <p className='service-detail'>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr;</a>
                    </Link>
                </div>
            </div>
            <div className='service-container'>
                <div className='service-image-container'>
                    <Image layout='responsive' className='service-image' src={six} alt='key' />
                </div>
                <div className='service-details-container'>
                    <p className='service-details-title'>Abstract support</p>
                    <p className='service-detail'>Get in touch with a human.</p>
                    <Link href='/'>
                        <a className='service-detail-link'>Learn More &rarr;</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}
