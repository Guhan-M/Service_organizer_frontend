import React, { useState } from "react";
import { 
  MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit, 
  MdCleaningServices, MdStar, MdAdd, MdCheck, MdSearch,
  MdFilterList, MdOutlineInfo
} from "react-icons/md";

/* ─── EXPANDED SERVICE DATA ────────────────────────────────── */
const allServicesData = [
  // Home Cleaning Category
  { id: "c1", category: "Cleaning", name: "Deep Home Cleaning", price: 2499, rating: 4.9, time: "5 hrs", Icon: MdCleaningServices },
  { id: "c2", category: "Cleaning", name: "Kitchen Degreasing", price: 899, rating: 4.7, time: "2 hrs", Icon: MdCleaningServices },
  { id: "c3", category: "Cleaning", name: "Bathroom Sanitation", price: 499, rating: 4.8, time: "1 hr", Icon: MdCleaningServices },
  { id: "c4", category: "Cleaning", name: "Sofa Shampooing", price: 799, rating: 4.6, time: "2 hrs", Icon: MdCleaningServices },
  { id: "c5", category: "Cleaning", name: "Window & Mesh Cleaning", price: 349, rating: 4.5, time: "1.5 hrs", Icon: MdCleaningServices },
  
  // Professional Technicians
  { id: "t1", category: "Electrician", name: "Fan Repair/Installation", price: 149, rating: 4.9, time: "30 mins", Icon: MdElectricBolt },
  { id: "t2", category: "Electrician", name: "Switchboard Repair", price: 199, rating: 4.8, time: "45 mins", Icon: MdElectricBolt },
  { id: "t3", category: "Plumber", name: "Tap Leakage Repair", price: 99, rating: 4.7, time: "30 mins", Icon: MdPlumbing },
  { id: "t4", category: "Plumber", name: "Toilet Pot Unblocking", price: 449, rating: 4.9, time: "1 hr", Icon: MdPlumbing },
  { id: "t5", category: "Carpenter", name: "Furniture Assembly", price: 599, rating: 4.8, time: "2 hrs", Icon: MdCarpenter },
  { id: "t6", category: "AC Service", name: "AC Deep Cleaning", price: 699, rating: 4.9, time: "1.5 hrs", Icon: MdAcUnit },
];

const categories = ["All", "Cleaning", "Electrician", "Plumber", "Carpenter", "AC Service"];

function AllServicesPage({ cartCount, setCartCount, addedItems, setAddedItems }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  // Filter Logic
  const filteredServices = allServicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "All" || service.category === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleToggleCart = (id) => {
    if (addedItems[id]) {
      // Remove from cart
      const newItems = { ...addedItems };
      delete newItems[id];
      setAddedItems(newItems);
      setCartCount(prev => prev - 1);
    } else {
      // Add to cart
      setAddedItems(prev => ({ ...prev, [id]: true }));
      setCartCount(prev => prev + 1);
    }
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", paddingBottom: 80 }}>
      
      {/* ── SEARCH BAR SECTION ── */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E2E8F0", padding: "20px 32px", position: "sticky", top: 64, zIndex: 100 }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", gap: 16 }}>
          <div style={{ 
            flex: 1, display: "flex", alignItems: "center", background: "#F1F5F9", 
            borderRadius: 12, padding: "0 16px", border: "1.5px solid #E2E8F0" 
          }}>
            <MdSearch size={22} color="#64748B" />
            <input 
              type="text" 
              placeholder="Search for 'Deep Cleaning' or 'Electrician'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ 
                border: "none", background: "transparent", outline: "none", 
                padding: "14px", width: "100%", fontSize: 15, color: "#1E293B" 
              }}
            />
          </div>
          <button style={{ 
            display: "flex", alignItems: "center", gap: 8, background: "#fff", 
            border: "1.5px solid #E2E8F0", borderRadius: 12, padding: "0 20px",
            fontWeight: 600, color: "#475569", cursor: "pointer"
          }}>
            <MdFilterList /> Filter
          </button>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1140, margin: "32px auto", display: "grid", gridTemplateColumns: "250px 1fr", gap: 32, padding: "0 24px" }}>
        
        {/* Sidebar Categories */}
        <aside style={{ position: "sticky", top: 160, height: "fit-content" }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 20 }}>Categories</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  textAlign: "left", padding: "12px 16px", borderRadius: 10, border: "none",
                  background: activeTab === cat ? "#6366F1" : "transparent",
                  color: activeTab === cat ? "#fff" : "#64748B",
                  fontWeight: 600, cursor: "pointer", transition: "0.2s"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Services Grid */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24 }}>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#1E293B" }}>
              {activeTab} Services 
              <span style={{ fontSize: 16, color: "#94A3B8", marginLeft: 12, fontWeight: 500 }}>
                ({filteredServices.length} found)
              </span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
            {filteredServices.map(service => (
              <ServiceItem 
                key={service.id} 
                service={service} 
                isAdded={!!addedItems[service.id]}
                onToggle={() => handleToggleCart(service.id)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ─── INDIVIDUAL SERVICE CARD ─── */
function ServiceItem({ service, isAdded, onToggle }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 16, border: "1px solid #E2E8F0",
      padding: 20, transition: "0.3s", position: "relative",
      boxShadow: isAdded ? "0 10px 25px rgba(99,102,241,0.1)" : "0 2px 4px rgba(0,0,0,0.02)"
    }}>
      <div style={{ 
        width: 48, height: 48, borderRadius: 12, background: "#EEF2FF",
        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
      }}>
        <service.Icon size={24} color="#6366F1" />
      </div>

      <h4 style={{ fontSize: 16, fontWeight: 700, color: "#1E293B", margin: "0 0 4px" }}>{service.name}</h4>
      
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2, color: "#F59E0B", fontWeight: 700, fontSize: 13 }}>
          <MdStar size={16} /> {service.rating}
        </div>
        <span style={{ color: "#CBD5E1" }}>•</span>
        <span style={{ color: "#64748B", fontSize: 12 }}>{service.time}</span>
      </div>

      <div style={{ borderTop: "1px dashed #E2E8F0", margin: "12px 0", paddingTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 12, color: "#94A3B8", display: "block" }}>Starts from</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: "#0F172A" }}>₹{service.price}</span>
        </div>
        
        <button
          onClick={onToggle}
          style={{
            padding: "10px 20px", borderRadius: 10, border: "none",
            background: isAdded ? "#10B981" : "linear-gradient(135deg,#6366F1,#8B5CF6)",
            color: "#fff", fontWeight: 700, cursor: "pointer", 
            display: "flex", alignItems: "center", gap: 6, transition: "0.2s"
          }}
        >
          {isAdded ? <><MdCheck /> Added</> : <><MdAdd /> Add</>}
        </button>
      </div>

      <div style={{ position: "absolute", top: 20, right: 20, color: "#CBD5E1", cursor: "pointer" }}>
        <MdOutlineInfo size={18} />
      </div>
    </div>
  );
}

export default AllServicesPage;