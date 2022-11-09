import React, { Fragment } from 'react'
import FooterCenter from './FooterCenter/FooterCenter'
import "./FooterHome.scss"
import FooterLeft from './FooterLeft/FooterLeft'
import FooterRight from './FooterRight/FooterRight'

export default function FooterHome() {
    return (
        <Fragment>
            <div className='Footer__home' id='footer'>
                <div className="container">
                    <div className="row">
                        <div className="col-4"><FooterLeft /></div>
                        <div className="col-4"><FooterCenter /></div>
                        <div className="col-4"><FooterRight /></div>
                    </div>
                </div>
            </div>
            <div className="FooterBottom">
                <h1>COPYRIGHT 2022 BY <span className='text-red-600'>GALAXY CINEMA</span>. All RIGHTS RESERVED .</h1>
            </div>
        </Fragment>
    )
}
