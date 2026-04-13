// Topbar.jsx
import React, { useState } from "react";
import {
  MdSearch, MdShoppingCart, MdHome,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import toast from "react-hot-toast";

function TopBar({ cartCount, onCartClick }) {
  const doLogout  = useLogout();
  const navigate  = useNavigate();
  const [open, setOpen] = useState(false);

  const role     = sessionStorage.getItem("role");
  const name     = sessionStorage.getItem("name");
  const nameInit = name ? name[0].toUpperCase() : "";

  const handleLogout = async () => {
    doLogout();
    toast.success("Logged out!");
    setOpen(false);
  };

  return (
    <nav style={{
      background: "#fff",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64,
      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      position: "sticky",
      top: 0,
      zIndex: 200,
      gap: 16,
    }}>

      {/* ── Logo ── */}
      <div
        onClick={() => navigate("/")}
        style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, cursor: "pointer" }}
      >
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 12px rgba(99,102,241,0.4)",
        }}>
          <MdHome size={20} color="#fff" />
        </div>
        <span style={{ fontSize: 21, fontWeight: 800, color: "#1E293B", letterSpacing: -0.5 }}>
          Home<span style={{ color: "#6366F1" }}>Fix</span>
        </span>
      </div>

      {/* ── Search ── */}
      <div style={{
        flex: 1, maxWidth: 380,
        display: "flex", alignItems: "center",
        background: "#F1F5F9", borderRadius: 10,
        padding: "9px 16px", gap: 8,
      }}>
        <MdSearch size={18} color="#94A3B8" />
        <input
          placeholder="Search for services..."
          style={{
            border: "none", background: "transparent", outline: "none",
            fontSize: 14, color: "#334155", width: "100%", fontFamily: "inherit",
          }}
        />
      </div>

      {/* ── Right controls ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, flexShrink: 0 }}>

        {/* Booking history — only when logged in */}
        {name && (
          <span style={{ fontSize: 14, fontWeight: 600, color: "#6366F1", cursor: "pointer" }}>
            Booking History
          </span>
        )}

        {/* Cart icon */}
        <button
          onClick={onCartClick}
          style={{ background: "none", border: "none", cursor: "pointer", position: "relative", padding: 4 }}
        >
          <MdShoppingCart size={22} color="#64748B" />
          {cartCount > 0 && (
            <span style={{
              position: "absolute", top: -2, right: -2,
              background: "#6366F1", color: "#fff",
              borderRadius: "50%", width: 18, height: 18,
              fontSize: 10, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #fff",
            }}>{cartCount}</span>
          )}
        </button>

        {/* Avatar / Login */}
        <div style={{ position: "relative" }}>
          {nameInit ? (
            <>
              {/* Avatar bubble */}
              <div
                onClick={() => setOpen(v => !v)}
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 700, fontSize: 14,
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(99,102,241,0.35)",
                }}
              >
                {nameInit}
              </div>

              {/* Dropdown */}
              {open && (
                <div style={{
                  position: "absolute", top: 44, right: 0,
                  background: "#fff", borderRadius: 10,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  border: "1px solid #E2E8F0",
                  padding: "6px", minWidth: 140, zIndex: 300,
                }}>
                  <div style={{ padding: "8px 12px 10px", borderBottom: "1px solid #F1F5F9" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1E293B" }}>{name}</div>
                    <div style={{ fontSize: 12, color: "#64748B", textTransform: "capitalize" }}>{role}</div>
                  </div>

                  <button
                    onClick={handleLogout}
                    style={{
                      display: "flex", alignItems: "center", gap: 8, width: "100%",
                      padding: "9px 12px", border: "none", borderRadius: 8,
                      background: "none", cursor: "pointer", fontFamily: "inherit",
                      fontSize: 13, color: "#EF4444", marginTop: 4,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FFF5F5")}
                    onMouseLeave={e => (e.currentTarget.style.background = "none")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Login button */
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "8px 20px", borderRadius: 8, border: "none",
                background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
                color: "#fff", fontWeight: 700, fontSize: 13,
                cursor: "pointer", fontFamily: "inherit",
              }}
            >
              Login
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}

export default TopBar;


// import React, { use, useState} from "react";
// import {
//   MdSearch, MdLocationOn, MdShoppingCart, MdStar,
//   MdHome,  MdNotifications,
// } from "react-icons/md";
// import useLogout from "../hooks/useLogout";
// import 'react-bootstrap'
// import {useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// function TopBar({ cartCount }) {
// const uselogoutnow = useLogout();
// const Navigate = useNavigate();
// const [open, setOpen] = useState(false);
// let role = sessionStorage.getItem('role')
// let name = sessionStorage.getItem('name')
// let nameInit = name ? name[0]:"";



// const Logout=async()=>{
//  uselogoutnow();
//   toast.success("Logout !")
// }

//   return <>
//     <nav style={{
//       background:"#fff",
//       padding:"0 32px",
//       display:"flex",
//       alignItems:"center",
//       justifyContent:"space-between",
//       height:64,
//       boxShadow:"0 1px 4px rgba(0,0,0,0.08)",
//       position:"sticky",
//       top:0,
//       zIndex:200,
//       gap:16,
//     }}>
//       {/* Logo */}
//       <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
//         <div style={{
//           width:38, height:38, borderRadius:10,
//           background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
//           display:"flex", alignItems:"center", justifyContent:"center",
//           boxShadow:"0 4px 12px rgba(99,102,241,0.4)"
//         }}>
//           <MdHome size={20} color="#fff" />
//         </div>
//         <span style={{ fontSize:21, fontWeight:800, color:"#1E293B", letterSpacing:-0.5 }}>
//           Home<span style={{ color:"#6366F1" }}>Fix</span>
//         </span>
//       </div>
 
//       {/* Search */}
//       <div style={{
//         flex:1, maxWidth:380,
//         display:"flex", alignItems:"center",
//         background:"#F1F5F9", borderRadius:10,
//         padding:"9px 16px", gap:8,
//       }}>
//         <MdSearch size={18} color="#94A3B8" />
//         <input
//           placeholder="Search for services..."
//           style={{ border:"none", background:"transparent", outline:"none", fontSize:14, color:"#334155", width:"100%" }}
//         />
//       </div>
 
//       {/* Right */}
      
//       <div style={{ display:"flex", alignItems:"center", gap:20, flexShrink:0 }}>
//       {name ?  <div style={{ display:"flex", alignItems:"center", gap:4, color:"#6366F1", fontSize:16, fontWeight:600, cursor:"pointer"}}>
//            Booking History
//         </div> :""} 
 
//         {/* <button style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
//           <MdNotifications size={22} color="#64748B" />
//           <span style={{
//             position:"absolute", top:2, right:2,
//             width:8, height:8, background:"#EF4444", borderRadius:"50%",
//             border:"2px solid #fff"
//           }} />
//         </button> */}
 
//         <button style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
//           <MdShoppingCart size={22} color="#64748B" />
//           {cartCount > 0 && (
//             <span style={{
//               position:"absolute", top:-2, right:-2,
//               background:"#6366F1", color:"#fff",
//               borderRadius:"50%", width:18, height:18,
//               fontSize:10, fontWeight:700,
//               display:"flex", alignItems:"center", justifyContent:"center",
//               border:"2px solid #fff"
//             }}>{cartCount}</span>
//           )}
//         </button>
//         <div style={{ position: "relative" }}>
//       {nameInit ? (
//         <>
//           {/* Avatar */}
//           <div
//             onClick={() => setOpen(!open)}
//             style={{
//               width: 36,
//               height: 36,
//               borderRadius: "50%",
//               background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               color: "#fff",
//               fontWeight: 700,
//               fontSize: 14,
//               cursor: "pointer",
//               boxShadow: "0 2px 8px rgba(99,102,241,0.35)"
//             }}
//           >
//             {nameInit}
//           </div>

//           {/* Dropdown */}
//           {open && (
//             <div
//               style={{
//                 position: "absolute",
//                 top: 45,
//                 right: 0,
//                 background: "#fff",
//                 borderRadius: 8,
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//                 padding: "8px 0",
//                 width: 120,
//                 transition: "0.2s ease"
//               }}
//             >
//               <div
//                 onClick={Logout}
//                 style={{
//                   padding: "8px 12px",
//                   cursor: "pointer"
//                 }}
//                 onMouseEnter={(e) => (e.target.style.background = "#f3f4f6")}
//                 onMouseLeave={(e) => (e.target.style.background = "transparent")}
//               >
//                 Logout
//               </div>
//             </div>
//           )}
//         </>
//       ) : (
//         /* Login Button */
//         <button
//           style={{
//             padding: "8px 16px",
//             borderRadius: 6,
//             border: "none",
//             background: "#6366F1",
//             color: "#fff",
//             cursor: "pointer"
//           }}
//           onClick={()=>
//             Navigate('/login')}
//         >
//           Login
//         </button>
//       )}
//     </div>
//         {/* <div style={{
//           width:36, height:36, borderRadius:"50%",
//           background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
//           display:"flex", alignItems:"center", justifyContent:"center",
//           color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer",
//           boxShadow:"0 2px 8px rgba(99,102,241,0.35)"
//         }}>{nameInit}</div> */}
//       </div>
//     </nav>

//     {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">Service Hub</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           {/* </Nav>
//           <Nav>
//             <Nav.Link href="">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar> */} 


//     </>
// }

// export default TopBar