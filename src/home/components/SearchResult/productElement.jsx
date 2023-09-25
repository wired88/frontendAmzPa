

// eslint-disable-next-line react/prop-types
function ProductElement({number}) {
  return(
    <section className={"productElement bg-dark"}>
      <div className={"productElementCOL1"}>
        <h4>
          {number}.
        </h4>
        <p>
          Rated
        </p>
      </div>
      <div className={"productElementCOL2"}>
        <p>
          PRODUCT INFORMATIONS HERE
        </p>
      </div>
      <div className={"productElementCOL3"}>
        <p>
          PRODUCT RATING HERE
        </p>
      </div>
      <div className={"productElementCOL4"}>
        <div className={"productElementCOL4ROW1 bg-dark"}>
          <p>
            amazon
          </p>
        </div>



        <button className={"action_btn"}>
          Amazon.com {/* change .com to custom */}

        </button>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          PRODUCT RECENSION'S + call-to-action HERE
        </p>
      </div>
    </section>
  );
}
export default ProductElement;