import React, { useState } from 'react'
import TrailerFilmDetail from '../../Page/DetailFilm/TrailerFilmDetail'

export default function Play({ trailer }) {
    let idtrailer = trailer.trailer?.slice(30, trailer.trailer.legnth)

    const [hasid, setHasId] = useState('')
    const showTrailer = (id) => {
        if ((hasid.length > 0))
            return < TrailerFilmDetail id={id} />
    }
    return (
        <div>
            <div className='play__btn'>
                <button onClick={() => {
                    setHasId(idtrailer)
                }} className='fa fa-play'>
                </button>
            </div>
        </div>
    )
}
