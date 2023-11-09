import React from 'react'
import { Link } from 'react-router-dom';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";
import imgOne from '/src/assets/images/category/01.jpg'
import imgTwo from '/src/assets/images/category/02.jpg'
import imgThree from '/src/assets/images/category/03.jpg'
import imgFour from '/src/assets/images/category/04.jpg'
import imgFive from '/src/assets/images/category/05.jpg'
import imgSix from '/src/assets/images/category/06.jpg'

const categoryList = [
{
imgUrl: imgOne,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: imgTwo,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: imgThree,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: imgFour,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: imgFive,
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
    imgUrl: imgSix,
    imgAlt: 'category rajibraj91 rajibraj',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
    },
    ]
    


const HomeCategory = () => {
  return <div className="category-section style-4 padding-tb">
        <div className='container'>
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2 className='title'>{title}</h2>
            </div>


            <div className='section-wrapper'>
                <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to="/shop" className="category-item">
                              <div className="category-inner">
                                <div className="category-thumb">
                                    <img src={val.imgUrl} alt="" srcset="" />
                                </div>

            <div className="category-content">
                <div className="cate-icon">
                    <i className={val.iconName}></i>

                </div>
                <Link to="/shop"><h6>{val.title}</h6></Link>
            </div>







                              </div>

                            </Link>

                        </div>))
                    }
                </div>
                <div className="text-center mt-5">
                    <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                </div>
            </div>








        </div>
    </div>
  
}

export default HomeCategory