import PropTypes from 'prop-types'

export default function Painting({
  url, 
  title, 
  profilUrl, 
  author='unknown',
  price, 
  quantity,
})
 {
    return (
    <div>
      <img src={url} alt={title} width='480' />
      <h2>{title}</h2>
      <p>
      Author: <a href={profilUrl}>{author}</a>
      </p>
      <p>Price: {price} credite</p>
      <p>Accessibility: {quantity < 10 ? 'expires' : 'in stock'} </p>
      <button type='button'>Add to cart</button>
    </div>
  );
}

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  profilUrl: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
}
