import Card from "./components/Card/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const arr = [
  {
    name: "Мужские кроссовки Nike Blazer Mid Suede",
    price: 12500,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    name: "Мужские кроссовки Nike Air Max 270",
    price: 19800,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    name: "Мужские кроссовки Nike Air Max 270",
    price: 12314,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    name: "Мужские кроссовки Nike Air Max 270",
    price: 52312,
    imageUrl: "/img/sneakers/4.jpg",
  },
  {
    name: "Мужские кроссовки Nike Air Max 270",
    price: 14125,
    imageUrl: "/img/sneakers/5.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Cart />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {arr.map((obj) => (
            <Card
              title={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
