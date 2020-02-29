import React from 'react'

function Footer({ price, rating, className, ...otherProps }) {
  const classNames = ['footer']
  if (className) classNames.push(className)

  let estrellas = ''
  for (var i = 0; i < Math.round(rating); i++) {
    estrellas += '★'
  }

  return (
    <div className={classNames.join(' ')} {...otherProps}>
      <p className="price"> {'$' + price} </p>
      <span className="stars">{estrellas}</span>
    </div>
  )
}

export default Footer
