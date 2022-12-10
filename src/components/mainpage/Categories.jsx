import React from "react"
import {Link} from "react-router-dom"
const Categories = () => {
    const data = [
        {
            cateImg: "./images/category/cat1.png",
            cateName:"Fashion",
            cateLink:"/Fashion"
        },
        {
            cateImg: "./images/category/cat2.png",
            cateName: "Electronic",
            cateLink: "/Electronic",
          },
          {
            cateImg: "./images/category/cat3.png",
            cateName: "Cars",
            cateLink: "/Cars",
          },
          {
            cateImg: "./images/category/cat4.png",
            cateName: "Home & Garden",
            cateLink:"/Garden",
          },
          {
            cateImg: "./images/category/cat5.png",
            cateName: "Gifts",
            cateLink:"/Gifts",

          },
          {
            cateImg: "./images/category/cat6.png",
            cateName: "Music",
            cateLink:"/Music",
          },
          {
            cateImg: "./images/category/cat7.png",
            cateName: "Health & Beauty",
            cateLink:"/Health",

          },
          {
            cateImg: "./images/category/cat8.png",
            cateName: "Pets",
            cateLink:"/Pets",

          },
          {
            cateImg: "./images/category/cat9.png",
            cateName: "Baby Toys",
            cateLink:"/Baby Toys",
          },
          {
            cateImg: "./images/category/cat10.png",
            cateName: "Groceries",
            cateLink:"/Groceries",
          },
          {
            cateImg: "./images/category/cat11.png",
            cateName: "Books",
            cateLink:"/Books",
          },
    ]
    return (
        <>
       <div className="category">
        {
            data.map((value,index) =>{
                return(
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <Link to={value.cateLink}> <span>{value.cateName}</span></Link>
                    </div>
                )
            }
        )
     }
       </div>
        </>
    )
}

export default Categories