// Dashboard.jsx
import React, { useState } from "react";
import Topbar         from "./Topbar.jsx";
import ServicesList   from "./ServicesList.jsx";
import AllServicesPage from "./Allservicespage.jsx"
import CartPage       from "./CartPage.jsx";
import Footer         from "./Footer.jsx";

/*
  ─── PAGE FLOW ────────────────────────────────────────────
  "home"       → Dashboard (ServicesList)
  "services"   → AllServicesPage  (when user clicks a service)
  "cart"       → CartPage         (when user clicks a service in AllServicesPage)

  All pages share cartCount / addedItems state lifted here.
  ──────────────────────────────────────────────────────────
*/

function Dashboard() {
  const [page,       setPage]       = useState("home");   // "home" | "services" | "cart"
  const [cartCount,  setCartCount]  = useState(0);
  const [addedItems, setAddedItems] = useState({});
  const [selectedService, setSelectedService] = useState(null); // carries clicked service id

  /* navigate helper — always scrolls to top */
  const goTo = (pageName, serviceId = null) => {
    setSelectedService(serviceId);
    setPage(pageName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Topbar is always visible */}
      <Topbar
        cartCount={cartCount}
        onCartClick={() => goTo("cart")}   // clicking cart icon → CartPage
      />

      {/* ── PAGE SWITCH ── */}
      {page === "home" && (
        <>
          <ServicesList
            cartCount={cartCount}
            setCartCount={setCartCount}
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            onServiceClick={(id) => goTo("services", id)}   // any card click → services
          />
          <Footer />
        </>
      )}

      {page === "services" && (
        <>
          <AllServicesPage
            cartCount={cartCount}
            setCartCount={setCartCount}
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            selectedService={selectedService}
            onServiceAdd={(id) => {
              /* add to cart then navigate to cart */
              if (!addedItems[id]) {
                setAddedItems(prev => ({ ...prev, [id]: true }));
                setCartCount(c => c + 1);
              }
            }}
            onBack={() => goTo("home")}
          />
          <Footer />
        </>
      )}

      {page === "cart" && (
        <>
          <CartPage
            addedItems={addedItems}
            setAddedItems={setAddedItems}
            setCartCount={setCartCount}
            onBack={() => goTo("services")}
            onContinue={() => goTo("home")}
          />
          <Footer />
        </>
      )}

    </div>
  );
}

export default Dashboard;



// import React, { useState } from "react";
// import Topbar from './Topbar.jsx'
// import ServicesList from './ServicesList.jsx'
// import Footer from './Footer.jsx'
// import AllServicesPage from "./Allservicespage.jsx";
// import CartPage from "./CartPage.jsx";

// function Dashboard() {
//   const [cartCount,  setCartCount]  = useState(0);
//   const [addedItems, setAddedItems] = useState({});
 

//   return <>
  
//   <div style={{ fontFamily:"'Segoe UI', sans-serif" }}>
//       <Topbar cartCount={cartCount} />
//       <ServicesList
//         cartCount={cartCount}     setCartCount={setCartCount}
//         addedItems={addedItems}   setAddedItems={setAddedItems}
//       /> 
//       <AllServicesPage 
//         cartCount={cartCount} 
//         setCartCount={setCartCount} 
//         addedItems={addedItems} 
//         setAddedItems={setAddedItems} 
//       />
//         {/* <CartPage 
//          addedItems={addedItems} 
//          setAddedItems={setAddedItems} 
//          setCartCount={setCartCount} 
//         /> */}
//       <Footer />
//    </div>
//   </>
// }

// export default Dashboard