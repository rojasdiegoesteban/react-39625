import React from 'react'

const CardDetail = ({detail}) => {
  return (
    <div className="container">
        <div className="detail">
            <img src={detail.imagen} alt="..." className="detail-img" />
            <div className="content">
                <h1>{detail.marca}</h1>
                <h2>{detail.modelo}</h2>
            </div>
        </div> 
    </div>
  )
}

export default CardDetail