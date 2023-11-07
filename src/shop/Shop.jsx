import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
const showResults = "Showing result 01 - 12 of 139 results"
import Data from '../products.json'
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tag from './Tag';

const Shop = () => {
  const[GridList, setGridList]= useState(true);
  const [products, setproducts]= useState(Data);
  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) =>{
    setcurrentPage(pageNumber);
  };



  const[selectedCategory, setSelectedCategory]= useState();
  const menuItems = [...new Set(Data.map((val) => val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newval) =>{
      return newval.category === curcat;
    })
    setSelectedCategory(curcat);
    setproducts(newItem);
  }
   return (
    <div>
   <PageHeader title="Our Shop Page" curPage="shop"/>


   <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}  `}>
                    <a className='grid' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    < a className='list' onClick={() => setGridList(!GridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                    
                  </div>
                </div>
                <div>
                  <ProductCards GridList={GridList} products={currentProducts}/>
                </div>

                <Pagination 
                productsPerPage={productsPerPage}
                totalProducts = {products.length}
                paginate ={paginate}
                activePage ={currentPage}
                />

              </article>
            </div>
            <div className="col-lg-4 col-12">
            <aside>
              <Search products={products} GridList={GridList}/>
              <ShopCategory 
              filterItem={filterItem}
              setItem={setproducts}
              menuItems={menuItems}
              setproducts={setproducts}
              selectedCategory={selectedCategory}
              />
              <PopularPost/>
              <Tag/>
            </aside>
            </div>
          </div>
        </div>
      </div>
      </div>

  )
};

export default Shop