
import { MdHome, MdPhone, MdEmail,
} from "react-icons/md";

import {FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";


const footerLinks = {
  Company:  ["About Us","Careers","Press","Blog"],
  Services: ["Electrician","Plumber","Cleaning","Salon"],
  Support:  ["Help Center","Track Order","Refund Policy","Contact"],
};
 
function Footer() {
  const socials = [
    { Icon: FaFacebook,  color:"#1877F2" },
    { Icon: FaInstagram, color:"#E1306C" },
    { Icon: FaTwitter,   color:"#1DA1F2" },
    { Icon: FaYoutube,   color:"#FF0000" },
  ];
  return (
    <footer style={{ background:"#0F172A", color:"#94A3B8", paddingTop:48 }}>
      <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 24px 40px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40 }}>
 
        {/* Brand column */}
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
            <div style={{
              width:36, height:36, borderRadius:10,
              background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
              display:"flex", alignItems:"center", justifyContent:"center"
            }}>
              <MdHome size={18} color="#fff" />
            </div>
            <span style={{ color:"#fff", fontWeight:800, fontSize:18 }}>
              Home<span style={{ color:"#6366F1" }}>Fix</span>
            </span>
          </div>
          <p style={{ fontSize:13, lineHeight:1.8, maxWidth:240, marginBottom:20 }}>
            India's most trusted home services platform. Expert professionals at your fingertips.
          </p>
          <div style={{ display:"flex", gap:10 }}>
            {socials.map(({ Icon, color }, i) => (
              <div key={i} style={{
                width:34, height:34, borderRadius:8,
                background:"rgba(255,255,255,0.06)",
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer"
              }}>
                <Icon size={15} color={color} />
              </div>
            ))}
          </div>
        </div>
 
        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, items]) => (
          <div key={heading}>
            <div style={{ color:"#fff", fontWeight:700, fontSize:14, marginBottom:16 }}>{heading}</div>
            {items.map(item => (
              <div
                key={item}
                style={{ fontSize:13, marginBottom:10, cursor:"pointer" }}
                onMouseEnter={e => e.target.style.color = "#A5B4FC"}
                onMouseLeave={e => e.target.style.color = "#94A3B8"}
              >{item}</div>
            ))}
          </div>
        ))}
      </div>
 
      {/* Bottom bar */}
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", padding:"20px 24px" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <div style={{ display:"flex", gap:28 }}>
            <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:13 }}>
              <MdPhone size={14} color="#6366F1" /> +91 98765 43210
            </span>
            <span style={{ display:"flex", alignItems:"center", gap:6, fontSize:13 }}>
              <MdEmail size={14} color="#6366F1" /> support@homefix.in
            </span>
          </div>
          <div style={{ fontSize:12, color:"#475569" }}>
            © 2025 HomeFix. All rights reserved. · Privacy · Terms
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer