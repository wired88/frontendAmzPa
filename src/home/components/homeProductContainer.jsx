
// eslint-disable-next-line react/prop-types
function ProductContainer({ imgSrc, title }) {
  return(
    <div title={title} className={"productContainer"}>
      <img title={title} className={"categoryContainer"} src={imgSrc} alt="prods.png"/>
      <div title={title} className={"swipe_box"}>
        <p>
          {title}
        </p>
      </div>
    </div>
  );
}

export default ProductContainer;