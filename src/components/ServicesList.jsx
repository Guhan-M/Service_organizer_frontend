import React, { useState } from "react";
import {
  MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit,
  MdWaterDrop, MdCleaningServices, MdContentCut, MdSpa, MdStar,
  MdChevronRight, MdCheckCircle, MdAddCircleOutline,
  MdVerified, MdLocalOffer, MdHome, 
} from "react-icons/md";

import { FaTools, FaCity, FaUserTie, FaSmile, } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { TbVacuumCleaner } from "react-icons/tb";
import { GiWashingMachine, GiSofa } from "react-icons/gi";
import { BsThermometerHalf } from "react-icons/bs";
 
/* ─── DATA ────────────────────────────────────────────────── */
const serviceList = [
  { id: "001", name: "Electrician",    Icon: MdElectricBolt,    color: "#FFF3CD", accent: "#F59E0B" },
  { id: "002", name: "Plumber",        Icon: MdPlumbing,        color: "#D1FAE5", accent: "#10B981" },
  { id: "003", name: "Carpenter",      Icon: MdCarpenter,       color: "#FCE7F3", accent: "#EC4899" },
  { id: "004", name: "AC & Appliance", Icon: MdAcUnit,          color: "#DBEAFE", accent: "#3B82F6" },
  { id: "005", name: "Water Purifier", Icon: MdWaterDrop,       color: "#E0F2FE", accent: "#0EA5E9" },
  { id: "006", name: "Cleaning",       Icon: MdCleaningServices,color: "#EDE9FE", accent: "#8B5CF6" },
  { id: "007", name: "Men's Salon",    Icon: MdContentCut,      color: "#FEE2E2", accent: "#EF4444" },
  { id: "008", name: "Women's Salon",  Icon: MdSpa,             color: "#FDF2F8", accent: "#DB2777" },
];
 
const cleaningEssentials = [
  { id:"201", heading:"Chimney Cleaning",  price:"399",  oldPrice:"599",  Icon: BsThermometerHalf,  rating:4.8, reviews:2341, bg:"#FFF7ED", accent:"#F97316" },
  { id:"202", heading:"Fridge Cleaning",   price:"399",  oldPrice:"549",  Icon: GiWashingMachine,   rating:4.7, reviews:1892, bg:"#EFF6FF", accent:"#3B82F6" },
  { id:"203", heading:"Balcony Cleaning",  price:"699",  oldPrice:"899",  Icon: TbVacuumCleaner,    rating:4.9, reviews:3102, bg:"#F0FDF4", accent:"#22C55E" },
  { id:"204", heading:"Bathroom Cleaning", price:"1099", oldPrice:"1399", Icon: MdCleaningServices, rating:4.6, reviews:4210, bg:"#EDE9FE", accent:"#8B5CF6" },
];
 
const popularServices = [
  { id:"301", name:"Full Home Cleaning", price:"1499", duration:"4 hrs", badge:"Best Seller", Icon: MdHome,   rating:4.9, badgeColor:"#6366F1" },
  { id:"302", name:"AC Service & Repair",price:"599",  duration:"1 hr",  badge:"Popular",     Icon: MdAcUnit, rating:4.8, badgeColor:"#F59E0B" },
  { id:"303", name:"Sofa Deep Clean",    price:"799",  duration:"2 hrs", badge:"New",         Icon: GiSofa,   rating:4.7, badgeColor:"#10B981" },
];
 
const stats = [
  { label:"Happy Customers", value:"12M+", Icon: FaSmile   },
  { label:"Cities Covered",  value:"50+",  Icon: FaCity    },
  { label:"Professionals",   value:"40K+", Icon: FaUserTie },
  { label:"Services",        value:"100+", Icon: FaTools   },
];
 

function ServicesList({ cartCount, setCartCount, addedItems, setAddedItems }) {
  const [activeService, setActiveService] = useState(null);
 
  const handleAdd = (id) => {
    if (!addedItems[id]) {
      setAddedItems(prev => ({ ...prev, [id]: true }));
      setCartCount(c => c + 1);
    }
  };
 
  return (
    <main style={{ background:"#F8FAFC" }}>
 
      {/* ── HERO ── */}
      <div style={{
        background:"linear-gradient(135deg,#1E293B 0%,#312E81 55%,#4F46E5 100%)",
        padding:"52px 32px 0",
        position:"relative",
        overflow:"hidden"
      }}>
        {/* Decorative rings */}
        {[300,210,160,110].map((sz,i) => (
          <div key={i} style={{
            position:"absolute", width:sz, height:sz, borderRadius:"50%",
            border:"1px solid rgba(255,255,255,0.05)",
            top:[-80,10,55,110][i], right:[80,180,320,430][i], pointerEvents:"none"
          }} />
        ))}
 
        <div style={{ maxWidth:1140, margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>
          <div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:6,
              background:"rgba(99,102,241,0.25)", color:"#A5B4FC",
              padding:"5px 14px", borderRadius:20, fontSize:12, fontWeight:600, marginBottom:18,
              border:"1px solid rgba(99,102,241,0.35)"
            }}>
              <MdVerified size={14} /> Rated #1 Home Service Platform
            </div>
            <h1 style={{ fontSize:40, fontWeight:800, color:"#fff", lineHeight:1.2, letterSpacing:-1, margin:"0 0 16px" }}>
              Home Services<br />
              <span style={{ background:"linear-gradient(90deg,#A78BFA,#60A5FA)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
                at Your Doorstep
              </span>
            </h1>
            <p style={{ color:"#94A3B8", fontSize:15, margin:"0 0 28px", maxWidth:400, lineHeight:1.7 }}>
              Expert professionals for every home need. Transparent pricing, verified experts, guaranteed satisfaction.
            </p>
            <div style={{ display:"flex", gap:12 }}>
              <button style={{
                background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
                color:"#fff", border:"none", padding:"12px 28px", borderRadius:10,
                fontWeight:700, fontSize:14, cursor:"pointer",
                boxShadow:"0 4px 20px rgba(99,102,241,0.45)"
              }}>Book Now</button>
              <button style={{
                background:"rgba(255,255,255,0.08)", color:"#fff",
                border:"1px solid rgba(255,255,255,0.18)", padding:"12px 28px",
                borderRadius:10, fontWeight:600, fontSize:14, cursor:"pointer"
              }}>View All</button>
            </div>
          </div>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <img
              src="https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=600&auto=format&fit=crop"
              alt="Home Services"
              style={{ width:"100%", maxWidth:400, borderRadius:20, objectFit:"cover", height:270, boxShadow:"0 24px 60px rgba(0,0,0,0.45)" }}
            />
          </div>
        </div>
 
        {/* Stats strip */}
        <div style={{ maxWidth:1140, margin:"40px auto 0", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
          {stats.map(({ label, value, Icon }, i) => (
            <div key={i} style={{
              background:"rgba(255,255,255,0.07)", borderRadius:14, padding:"18px 20px",
              border:"1px solid rgba(255,255,255,0.09)", textAlign:"center",
              display:"flex", flexDirection:"column", alignItems:"center", gap:6
            }}>
              <Icon size={22} color="#A5B4FC" />
              <div style={{ fontSize:22, fontWeight:800, color:"#fff" }}>{value}</div>
              <div style={{ fontSize:12, color:"#94A3B8" }}>{label}</div>
            </div>
          ))}
        </div>
 
        {/* Wave divider */}
        <svg viewBox="0 0 1440 48" style={{ display:"block", marginTop:32 }} preserveAspectRatio="none">
          <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#F8FAFC" />
        </svg>
      </div>
 
      {/* ── BODY ── */}
      <div style={{ maxWidth:1140, margin:"0 auto", padding:"36px 24px" }}>
 
        {/* Service Categories */}
        <SectionHeader title="Our Services" sub="What are you looking for?" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14, marginBottom:52 }}>
          {serviceList.map(({ id, name, Icon, color, accent }) => {
            const active = activeService === id;
            return (
              <div
                key={id}
                onClick={() => setActiveService(active ? null : id)}
                style={{
                  background: active ? color : "#fff",
                  border:`2px solid ${active ? accent : "#E2E8F0"}`,
                  borderRadius:16, padding:"20px 12px",
                  cursor:"pointer", textAlign:"center",
                  transition:"all 0.18s ease",
                  boxShadow: active ? `0 8px 24px ${accent}28` : "0 1px 4px rgba(0,0,0,0.06)",
                  transform: active ? "translateY(-3px)" : "none",
                  userSelect:"none"
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = accent;
                    e.currentTarget.style.boxShadow = `0 6px 20px ${accent}22`;
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                    e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
                  }
                }}
              >
                <div style={{
                  width:52, height:52, borderRadius:14, margin:"0 auto 12px",
                  background: active ? "#fff" : color,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  boxShadow:`0 4px 12px ${accent}28`
                }}>
                  <Icon size={26} color={accent} />
                </div>
                <div style={{ fontSize:13, fontWeight:600, color: active ? accent : "#334155", lineHeight:1.3 }}>{name}</div>
                {active && (
                  <div style={{
                    marginTop:8, display:"inline-flex", alignItems:"center", gap:4,
                    fontSize:11, color:accent, fontWeight:700,
                    background:"#fff", borderRadius:6, padding:"2px 10px"
                  }}>
                    <MdCheckCircle size={12} /> Selected
                  </div>
                )}
              </div>
            );
          })}
        </div>
 
        {/* Popular Services */}
        <SectionHeader title="Popular Services" sub="Loved by thousands of customers" />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:20, marginBottom:52 }}>
          {popularServices.map(s => <ServiceCard key={s.id} {...s} />)}
        </div>
 
        {/* Cleaning Essentials */}
        <SectionHeader title="Cleaning Essentials" sub="Professional cleaning for every corner" showBtn />
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:18, marginBottom:52 }}>
          {cleaningEssentials.map(item => (
            <CleaningCard key={item.id} item={item} added={!!addedItems[item.id]} onAdd={() => handleAdd(item.id)} />
          ))}
        </div>
 
        {/* Promo Banner */}
        <div style={{
          background:"linear-gradient(135deg,#1E293B,#312E81)",
          borderRadius:20, padding:"32px 40px",
          display:"flex", justifyContent:"space-between", alignItems:"center",
          boxShadow:"0 8px 32px rgba(49,46,129,0.35)"
        }}>
          <div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:6,
              background:"rgba(99,102,241,0.3)", color:"#A5B4FC",
              padding:"4px 14px", borderRadius:20, fontSize:11, fontWeight:700,
              border:"1px solid rgba(99,102,241,0.4)", marginBottom:12
            }}>
              <BiSolidOffer size={14} /> LIMITED OFFER
            </div>
            <h3 style={{ color:"#fff", fontSize:24, fontWeight:800, margin:"0 0 8px", letterSpacing:-0.5 }}>
              Get 20% off your first booking!
            </h3>
            <p style={{ color:"#94A3B8", fontSize:14, margin:0 }}>
              Use code <strong style={{ color:"#A5B4FC" }}>HOMEFIX20</strong> at checkout
            </p>
          </div>
          <button style={{
            background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
            color:"#fff", border:"none", padding:"14px 32px",
            borderRadius:12, fontWeight:700, fontSize:15, cursor:"pointer",
            boxShadow:"0 4px 20px rgba(99,102,241,0.5)", whiteSpace:"nowrap",
            display:"flex", alignItems:"center", gap:8
          }}>
            <MdLocalOffer size={18} /> Claim Offer
          </button>
        </div>
      </div>
    </main>
  );
}
 
/* ─── Shared sub-components ─── */
function SectionHeader({ title, sub, showBtn }) {
  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
      <div>
        <h2 style={{ fontSize:22, fontWeight:800, color:"#1E293B", margin:0 }}>{title}</h2>
        <p style={{ color:"#64748B", fontSize:13, margin:"4px 0 0" }}>{sub}</p>
      </div>
      {showBtn && (
        <button style={{
          display:"flex", alignItems:"center", gap:4,
          color:"#6366F1", background:"none", border:"1px solid #6366F1",
          padding:"6px 14px", borderRadius:8, cursor:"pointer", fontSize:13, fontWeight:600
        }}>See All <MdChevronRight size={16} /></button>
      )}
    </div>
  );
}
 
function ServiceCard({ name, price, duration, badge, Icon, rating, badgeColor }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:"#fff", borderRadius:16, overflow:"hidden",
        boxShadow: hover ? "0 14px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
        border:"1px solid #E2E8F0",
        transform: hover ? "translateY(-3px)" : "none",
        transition:"all 0.2s"
      }}
    >
      <div style={{
        background:"linear-gradient(135deg,#EEF2FF,#E0E7FF)",
        height:120, display:"flex", alignItems:"center", justifyContent:"center",
        position:"relative"
      }}>
        <Icon size={56} color="#6366F1" style={{ opacity:0.8 }} />
        <span style={{
          position:"absolute", top:12, left:12,
          background:badgeColor, color:"#fff",
          fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:20
        }}>{badge}</span>
      </div>
      <div style={{ padding:16 }}>
        <div style={{ fontWeight:700, fontSize:15, color:"#1E293B", marginBottom:6 }}>{name}</div>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
          <span style={{ display:"flex", alignItems:"center", gap:3, color:"#F59E0B", fontSize:12, fontWeight:600 }}>
            <MdStar size={13} /> {rating}
          </span>
          <span style={{ color:"#CBD5E1" }}>•</span>
          <span style={{ color:"#94A3B8", fontSize:12 }}>{duration}</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontWeight:800, fontSize:18, color:"#1E293B" }}>₹{price}</span>
          <button style={{
            background:"linear-gradient(135deg,#6366F1,#8B5CF6)",
            color:"#fff", border:"none", padding:"8px 18px",
            borderRadius:8, fontWeight:600, fontSize:13, cursor:"pointer"
          }}>Book</button>
        </div>
      </div>
    </div>
  );
}
 
function CleaningCard({ item, added, onAdd }) {
  const [hover, setHover] = useState(false);
  const { heading, price, oldPrice, Icon, rating, reviews, bg, accent } = item;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:"#fff", borderRadius:16, overflow:"hidden",
        boxShadow: hover ? "0 14px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)",
        border:"1px solid #E2E8F0",
        transform: hover ? "translateY(-3px)" : "none",
        transition:"all 0.2s"
      }}
    >
      <div style={{ background:bg, height:110, display:"flex", alignItems:"center", justifyContent:"center" }}>
        <Icon size={52} color={accent} />
      </div>
      <div style={{ padding:14 }}>
        <div style={{ fontWeight:700, fontSize:14, color:"#1E293B", marginBottom:4 }}>{heading}</div>
        <div style={{ display:"flex", alignItems:"center", gap:4, marginBottom:10 }}>
          <MdStar size={13} color="#F59E0B" />
          <span style={{ color:"#64748B", fontSize:12, fontWeight:600 }}>{rating}</span>
          <span style={{ color:"#CBD5E1", fontSize:12 }}>({reviews.toLocaleString()})</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div>
            <span style={{ fontWeight:800, fontSize:16, color:"#1E293B" }}>₹{price}</span>
            <span style={{ fontSize:11, color:"#94A3B8", textDecoration:"line-through", marginLeft:6 }}>₹{oldPrice}</span>
          </div>
          <button
            onClick={onAdd}
            style={{
              display:"flex", alignItems:"center", gap:4,
              background: added
                ? "linear-gradient(135deg,#10B981,#059669)"
                : "linear-gradient(135deg,#6366F1,#8B5CF6)",
              color:"#fff", border:"none",
              padding:"7px 14px", borderRadius:8,
              fontWeight:600, fontSize:12, cursor:"pointer", transition:"all 0.2s"
            }}
          >
            {added ? <><MdCheckCircle size={14} /> Added</> : <><MdAddCircleOutline size={14} /> Add</>}
          </button>
        </div>
      </div>
    </div>
  );
}
 

export default ServicesList