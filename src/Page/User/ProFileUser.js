
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../Redux/Reducers/NDReducers';
import "./ProFileUser.scss";

export default function ProFileUser(props) {
    let { UserLogin } = props
    // console.log(UserLogin, "Lấy ok")
    const dispatch = useDispatch()
    // const dangXuat = () => {dispatch(logOut())}

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='userlogin'>
            <div className='title_right'>Xin Chào : {UserLogin.taiKhoan}</div>
            <div className="dropdown">
                <img className="img_info dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" src="https://cdn.hubs.vn/pv-blog/2020/05/14.png" alt="" />
                <div className="dropdown-menu">
                    <NavLink to='/info' onClick={() => {
                        setIsModalOpen(true)
                    }} className="dropdown-item" >Thông Tin Tài Khoản</NavLink> 
                    <a className="dropdown-item" href="#admin">Chuyển Quyền Admin</a>
                    <a className="dropdown-item" href='#'>Đăng xuất</a>
                </div>
            </div>
        </div >
    )
}
