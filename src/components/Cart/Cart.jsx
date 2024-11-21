function Cart({ onClose, items }) {
  return (
    <div className="overlay">
      <div className="cart">
        <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="removeBtn"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} тг.</b>
              </div>
              <img
                className="cartItemRemoveBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          ))}
        </div>
        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li>
              <span>Итого:</span>
              <div></div>
              <b>50 000 тг.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>2075 тг.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
