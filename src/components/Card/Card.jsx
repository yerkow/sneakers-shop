import styles from "./Card.module.scss";
import React from "react";

function Card({ title, imageUrl, price, onClickFavourite, onClickPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const handleClickPlus = () => {
    onClickPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const [isFavourite, setIsFavourite] = React.useState(false);

  const handleClickFavourite = () => {
    onClickFavourite({ title, imageUrl, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img
          onClick={handleClickFavourite}
          src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Favourite icon"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} тг.</b>
        </div>
        <img
          className={styles.plus}
          onClick={() => handleClickPlus()}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
