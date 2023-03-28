import React,{useState} from "react";
import CartCard from "../components/CartCard";
import ProductCard from "../components/ProductCard";
const data = [
  {
    label: "Idly",
    price: 20,
    src:"menu_items/idly.jpg"
  },
  {
    label: "Dosai",
    price: 40,
    src:"menu_items/dhosai.jpg"
  },
  {
    label: "Chappathi",
    price: 40,
    src:"menu_items/chappathi.jpg"
  },
  {
    label: "Poori",
    price: 35,
    src:"menu_items/poori.jpg"
  },
  {
    label: "Venpongal",
    price: 15,
    src:"menu_items/venpongal.webp"
  },
  {
    label: "Idiyappam",
    price: 10,
    src:"menu_items/idiyappam.webp"
  },
  {
    label: "Aapam",
    price: 35,
    src:"menu_items/aapam.jpg"
  },
  {
    label: "methu_vadai",
    price: 45,
    src:"menu_items/methu_vadai.jpg"
  },
  {
    label: "Momos",
    price: 45,
    src:"menu_items/momo.jpg"
  },
  {
    label: "Vegetable Briyani",
    price: 45,
    src:"menu_items/veg_briyani.jpg"
  },
  {
    label: "Vegetable Fried Rice",
    price: 45,
    src:"menu_items/veg_fried_rice.jpg"
  },
  {
    label: "Coffee",
    price: 45,
    src:"menu_items/coffee.webp"
  },
  {
    label: "Tea",
    price: 45,
    src:"menu_items/tea.jpg"
  }
];

function Cart() {
  const [cart, setCart] = useState([]);
  function handleChange(item = {}) {
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy.push(item);
    }
    setCart(cartCopy);
  }

  function handleCart(item = {}) {
    
    let cartCopy = [...cart];
    if (item.label) {
      cartCopy = cartCopy.filter((_data) => _data.label !== item.label);
    }
    setCart(cartCopy);
  }

  function checkCartStatus(item = {}) {
    let status = false;
    if (item.label) {
      status =
        cart.filter((_data) => _data.label === item.label).length > 0
          ? true
          : false;
    }
    return status;
  }

  return (

    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            {data.map((element,index)=>( 
              <ProductCard
              disabled={checkCartStatus(element)}
              data={element}
              onChange={handleChange} />
              ))}
          </div>
          <div className="col-lg-4">
            {cart.map((d,i) =>(<CartCard data={d} onRemove={handleCart}/>
            ) )}
          </div>
        </div>
      </div>
    </div>
  )
}
   
   

export default Cart;
