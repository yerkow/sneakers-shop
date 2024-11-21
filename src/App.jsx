import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favouriteItems, setFavouriteItems] = React.useState([]);
  const [isCartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://673ed8cea9bc276ec4b5eb70.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...cartItems, obj]);
  };

  const onAddToFavourite = (obj) => {
    setFavouriteItems((prev) => [...favouriteItems, obj]);
  };

  return (
    <div className="wrapper clear">
      {isCartOpened && (
        <Cart items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavourite={(obj) => onAddToFavourite(obj)}
              onClickPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
