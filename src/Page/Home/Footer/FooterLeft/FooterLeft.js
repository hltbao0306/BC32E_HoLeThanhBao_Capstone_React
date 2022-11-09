import React from 'react'
import "./FooterLeft.scss"

export default function FooterLeft() {
    return (
        <div className='footer__left'>
            <div className='logo_movie pl-14'>
                <img className='logo_movie img-fluid mt-20 ml-10' src="../img/cinema.png" alt="" />
            </div>

            <div className='contact_item'>
                <ul>
                    <li>
                        <i className="fa fa-map-marker-alt text-orange-600"></i>
                        <span className='contact_title pl-2'>TP. HỒ CHÍ MINH</span>
                    </li>
                    <li>
                        <i className="fab fa-instagram text-pink-600"></i>
                        <span className='contact_title pl-2'>https://www.instagram.com</span>
                    </li>
                    <li>
                        <i className="fab fa-whatsapp text-teal-300"></i>
                        <span className='contact_title pl-2'>+84 987654321</span></li>
                    <li>
                        <i className="fab fa-facebook-square text-blue-600"></i>
                        <span className='contact_title pl-2'>https://www.facebook.com</span>
                    </li>
                    <li>
                        <i className="fab fa-youtube text-red-600"></i>
                        <span className='contact_title pl-1'>https://www.youtube.com</span>
                    </li>
                </ul>
            </div >
        </div >
    )
}
