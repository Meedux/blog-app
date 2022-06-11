import React from 'react'

const ImgOverlay = ({ src, width, height, radius, classname }) => {
  return (
    <img src={src} alt="NO" width={width} height={height} style={{borderRadius: {radius}, overflow: 'hidden'}} className={classname} />
  )
}

ImgOverlay.defaultProps = {
    src: "https://via.placeholder.com/100",
    width: "100px",
    height: "100px",
    radius: "0",
    classname: ""
}

export default ImgOverlay