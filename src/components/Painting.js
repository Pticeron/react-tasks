export default function Painting({url, title, prifilUrl, author, price}) {
    return (
    <div>
      <img src={url} alt={title} width='480' />
      <h2>{title}</h2>
      <p>
      Author: <a href={prifilUrl}>{author}</a>
      </p>
      <p>Price: {price} credite</p>
      <p>Accessibility: do you have</p>
      <button type='button'>Add to cart</button>
    </div>
  );
}