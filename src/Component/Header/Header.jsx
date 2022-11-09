import React, { Fragment } from 'react';
import "./Header.scss"
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { QLNDReducer } from '../../Redux/Reducers/NDReducers'
import ProFileUser from "../../Page/User/ProFileUser"
export default function Header() {

    let { UserLogin } = useSelector((state) => state.QLNDReducer)
    const dispatch = useDispatch()
    // console.log(UserLogin, "Lấy OK")
    return (
        <nav className="HEADER">
            <div className='header_content'>
                <div className='header_left'>
                    <a href="">
                        <img className='img-fluid w-50' src="../img/cinema.png" alt="" />
                    </a>
                </div>
                <div className='header_center'>
                    <a className="center_title" href="/">Trang Chủ</a>
                    <a className="center_title" href="#hethongrap" >Hệ Thống Rạp</a>
                    <a className="center_title" href="#news" >Tin Tức</a>
                    <a className="center_title" href="#footer" >Liên Hệ</a>
                </div>
                <div className='header_right'>
                    {UserLogin !== null ? <ProFileUser UserLogin={UserLogin} /> : <Fragment>
                        <NavLink className="title_login" to="/login">Đăng Nhập</NavLink>
                        <NavLink className="title_login" to="/register">Đăng Ký</NavLink>
                    </Fragment>}
                </div>
            </div>
        </nav >
    )
}
