import delImgUrl from "../assets/images/shop/del.png"
import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import CheckOutPage from "./CheckOutPage";


export const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    //fetch card ite local storge
    const storedCardItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCardItems);
  }, [])

  //calculate price
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);


    //update local storge with new cart item
    localStorage.setItem("cart", JSON.stringify(cartItems));

  }

  //handle quantity decrease

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      //update local storge with new cart item
      localStorage.setItem("cart", JSON.stringify(cartItems));

    }
  };

  //handle item remove
  const handleRemoveItem = (item) => {
    const upDatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);


    //Update new cart
    setcartItems(upDatedCart);
    updateLocalStorage(upDatedCart);
  }

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  //cart sub total
  const cartsubTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0)

  //order total
  const orderTotal = cartsubTotal;

  return <div>

    <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
    <div className="shop-cart padding-tb">
      <div className="container">
        <div className="section-wrapper">
          <div className="cart-top">
            <table>
              <thead>
                <tr>
                  <th className='cat-product'>Product</th>
                  <th className='cat-price'>Price</th>
                  <th className='cat-quantity'>Quantity</th>
                  <th className='cat-toprice'>Total</th>
                  <th className='cat-edit'>Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className='product-item cat-product'>
                        <div className="p-thumb">
                          <Link to="/shop"><img src={item.img} alt="" /></Link>
                        </div>

                        <div className="p-content">
                          <Link to="/shop" >{item.name}</Link>
                        </div>
                      </td>


                      <td className='cat-price'>${item.price}
                      </td>
                      <td className='cat-quantity'>
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton " onClick={() => handleDecrease(item)}>-</div>
                          <input type='text' className='cart-plus-minus-box' name='qtybutton'
                            value={item.quantity} />
                          <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                        </div>
                      </td>
                      <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>


                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          {/*cart-top*/}
          <div className="cart-bottom">
            <div>
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input className="cart-page-input-text" type="text"
                    name="coupon" id="coupon" placeholder="coupon code ...." />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>
                    <CheckOutPage/>
                  </div>
                </form>

              </div>



              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom(UK)</option>
                          <option value="ind">India</option>
                          <option value="sau">Saudia</option>
                          <option value="tk">Turkey</option>
                          <option value="pa">Paris</option>
                        </select>
                        <span className="select-icon">
                          < i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">New York</option>
                          <option value="ind">New Dehli</option>
                          <option value="sau">Jadha</option>
                          <option value="tk">Ankara</option>
                          <option value="pa">Paris</option>
                        </select>
                        <span className="select-icon">
                          < i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <input type="text" name="postalCode" id="postalCode"
                       placeholder="Postocode/ZIP *"
                        className="cart-page-input-text" />
                        <button type="submit">Update Adress</button>







                    </div>

                  </div>
         
         <div className="col-md-6 col-12">
          <div className="cart-overview">
            <h3>Cart Totals</h3>
            <ul className="lab-ul">
              <li>
                <span className="pull-left">
                  Cart Subtotal
                </span >
                <p className="pull-right">${cartsubTotal}</p>
              </li>
               <li>
                <span className="pull-left">
                  Shipping & Handling
                </span >
                <p className="pull-right">Free Shipping</p>
              </li>

              <li>
                <span className="pull-left">
                  Order Total
                </span >
                <p className="pull-right">${orderTotal.toFixed(2)}</p>
              </li>


            </ul>
          </div>
         </div>













                </div>
              </div>










            </div>
          </div>


        </div>
      </div>

    </div>

  </div>;

};
