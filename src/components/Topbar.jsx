import React, { useState } from "react";
import {
  MdSearch, MdLocationOn, MdShoppingCart, MdStar,
  MdHome,  MdNotifications,
} from "react-icons/md";

import 'react-bootstrap'

function TopBar({ cartCount }) {
  return <>
    <nav style={{
      background:"#fff",
      padding:"0 32px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      height:64,
      boxShadow:"0 1px 4px rgba(0,0,0,0.08)",
      position:"sticky",
      top:0,
      zIndex:200,
      gap:16,
    }}>
      {/* Logo */}
      <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
        <div style={{
          width:38, height:38, borderRadius:10,
          background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
          display:"flex", alignItems:"center", justifyContent:"center",
          boxShadow:"0 4px 12px rgba(99,102,241,0.4)"
        }}>
          <MdHome size={20} color="#fff" />
        </div>
        <span style={{ fontSize:21, fontWeight:800, color:"#1E293B", letterSpacing:-0.5 }}>
          Home<span style={{ color:"#6366F1" }}>Fix</span>
        </span>
      </div>
 
      {/* Search */}
      <div style={{
        flex:1, maxWidth:380,
        display:"flex", alignItems:"center",
        background:"#F1F5F9", borderRadius:10,
        padding:"9px 16px", gap:8,
      }}>
        <MdSearch size={18} color="#94A3B8" />
        <input
          placeholder="Search for services..."
          style={{ border:"none", background:"transparent", outline:"none", fontSize:14, color:"#334155", width:"100%" }}
        />
      </div>
 
      {/* Right */}
      <div style={{ display:"flex", alignItems:"center", gap:20, flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:4, color:"#6366F1", fontSize:13, fontWeight:600, cursor:"pointer" }}>
          <MdLocationOn size={16} /> Chennai
        </div>
 
        <button style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
          <MdNotifications size={22} color="#64748B" />
          <span style={{
            position:"absolute", top:2, right:2,
            width:8, height:8, background:"#EF4444", borderRadius:"50%",
            border:"2px solid #fff"
          }} />
        </button>
 
        <button style={{ background:"none", border:"none", cursor:"pointer", position:"relative", padding:4 }}>
          <MdShoppingCart size={22} color="#64748B" />
          {cartCount > 0 && (
            <span style={{
              position:"absolute", top:-2, right:-2,
              background:"#6366F1", color:"#fff",
              borderRadius:"50%", width:18, height:18,
              fontSize:10, fontWeight:700,
              display:"flex", alignItems:"center", justifyContent:"center",
              border:"2px solid #fff"
            }}>{cartCount}</span>
          )}
        </button>
 
        <div style={{
          width:36, height:36, borderRadius:"50%",
          background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
          display:"flex", alignItems:"center", justifyContent:"center",
          color:"#fff", fontWeight:700, fontSize:14, cursor:"pointer",
          boxShadow:"0 2px 8px rgba(99,102,241,0.35)"
        }}>A</div>
      </div>
    </nav>

    {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Service Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          {/* </Nav>
          <Nav>
            <Nav.Link href="">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */} 


    </>
}

export default TopBar