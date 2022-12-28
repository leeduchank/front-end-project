import React from "react";
import "./vendor.css";


const Vendor = () =>{


    return(
        <>
        <section className="Vendor">    
        <div className="container d_flex">
            <div class="login">
               <form action="" method="post">

                 <h1>Update Items to Website</h1>
                    <label className="jar">Name</label>
                    <p><input type="text" name="name" placeholder="Iphone 14 promax"/></p>
                    <label className="jar">ID</label>
                    <p><input type="text" name="id"  placeholder="1"/></p>
                    <label className="jar">Price</label>   
                    <p><input type="text" name="price" placeholder="1.000 $"/></p>
                    <label className="jar">Type</label>
                    <p><input type="text" name="type" placeholder="Electronic"/></p>                   
                    <p class="submit"><input type="submit" name="commit" value="Submit"/></p>
                    </form>

                </div>


                
        </div>

         
        </section>
        
        </>
    )
}

export default Vendor