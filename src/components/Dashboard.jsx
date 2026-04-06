import React, { useState } from "react";
import Topbar from './Topbar.jsx'
import ServicesList from './ServicesList.jsx'
import Footer from './Footer.jsx'
import AllServicesPage from "./Allservicespage.jsx";
import CartPage from "./CartPage.jsx";

function Dashboard() {
  const [cartCount,  setCartCount]  = useState(0);
  const [addedItems, setAddedItems] = useState({});
 

  return <>
  
  <div style={{ fontFamily:"'Segoe UI', sans-serif" }}>
      <Topbar cartCount={cartCount} />
      <ServicesList
        cartCount={cartCount}     setCartCount={setCartCount}
        addedItems={addedItems}   setAddedItems={setAddedItems}
      /> 
      {/* <AllServicesPage 
        cartCount={cartCount} 
        setCartCount={setCartCount} 
        addedItems={addedItems} 
        setAddedItems={setAddedItems} 
      /> */}
        {/* <CartPage 
         addedItems={addedItems} 
         setAddedItems={setAddedItems} 
         setCartCount={setCartCount} 
        /> */}
      <Footer />
   </div>
  </>
}

export default Dashboard