import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';
const title = (
    <h2>Search Your <span>Thousand</span> of Products </h2>
)
const desc = "We have the largest collection of product "
const bannerList = [
    {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
    },
    {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];
    
const Banner = () => {
    const[searchInput , setSearchInput] = useState("");    
    const[FilteredProducts , setfilteredProducts] = useState(productData);
//console.log(productData)

const handleSearch = e =>{
    //console.log(e.target.value)
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setfilteredProducts(filtered) ;
}
  return <div className="banner-section style-4">
    <div className='container'>
        <div className='banner-content'>
            {title}
            <form>
                <SelectedCategory select={"all"}/>
                <input type='text' name="search" id='search' placeholder='search your product'value={searchInput} 
                onChange={handleSearch} ></input>
                <button type='submit'>
                <i class="icofont-search"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className='lab-ul'>
                {
                    searchInput && FilteredProducts.map((product , i) => <li key={i}>
                    <Link to ={'/shop/${product.id}'}>{product.name}</Link>
                    </li>)
                }

            </ul>
        </div>
    </div>

    </div>;
  
}

export default Banner