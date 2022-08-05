import logo from '../public/footer-logo.svg';
import Image from 'next/image';
import questionMark from '../public/question-mark.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <h2 className='footer-title'>Abstract</h2>
        <ul className='footer-list'>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Start Trial</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Pricing</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Download</a></li>
        </ul>
      </div>
      <div className='footer-container'>
        <h2 className='footer-title'>Resources</h2>
        <ul className='footer-list'>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Blog</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Help Center</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Release notes</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Status</a></li>
        </ul>
      </div>
      <div className='footer-container'>
        <h2 className='footer-title'>Community</h2>
        <ul className='footer-list'>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Twitter</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Facebook</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Dribble</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Podcast</a></li>
        </ul>
      </div>
      <div className='footer-container'>
        <h2 className='footer-title'>Company</h2>
        <ul className='footer-list'>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>About Us</a></li>
          <li className='footer-list-item'><a href="" className='footer-list-item__link'>Careers</a></li>
          <li className='footer-list-item legal'><a href="" className='footer-list-item__link '>Legal</a></li>
          <li className='footer-list-item'>Contact Us</li>
          <li className='footer-list-item footer-list-item__link'>info@abstract.com</li>
        </ul>
      </div>
      <div className='footer-bottom'>
        <div className='footer-info'>
          <div className='footer-logo'>
            <Image src={logo} alt='abstract logo' />
          </div>
          <p >© Copyright 2022</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
        <button className='footer-button'> <Image src={questionMark} alt='question mark' />
          Help</button>
      </div>
    </footer>
  )
}
