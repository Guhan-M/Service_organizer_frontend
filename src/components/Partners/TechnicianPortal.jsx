import React, { useState } from "react";
import { 
  MdOutlineAssignmentTurnedIn, MdOutlineHourglassEmpty, 
  MdCheckCircle, MdSearch, MdFilterList, MdMoreVert,
  MdOutlineCalendarToday, MdOutlineLocationOn
} from "react-icons/md";

/* ─── MOCK SERVICE REQUESTS DATA ────────────────────────── */
const initialRequests = [
  { id: "SR-1001", customer: "Guhan M", service: "AC Deep Cleaning", date: "2026-04-05", time: "10:00 AM", location: "Adyar, Chennai", status: "Pending", price: "₹699" },
  { id: "SR-1002", customer: "Suresh Raina", service: "Kitchen Degreasing", date: "2026-04-05", time: "02:00 PM", location: "Velachery, Chennai", status: "Pending", price: "₹899" },
  { id: "SR-1003", customer: "Priya K", service: "Fan Installation", date: "2026-04-06", time: "09:30 AM", location: "T. Nagar, Chennai", status: "Assigned", price: "₹149" },
  { id: "SR-1004", customer: "Amit Shah", service: "Bathroom Sanitation", date: "2026-04-06", time: "11:00 AM", location: "Guindy, Chennai", status: "Pending", price: "₹499" },
  { id: "SR-1005", customer: "Vijay Sethu", service: "Deep Home Cleaning", date: "2026-04-07", time: "08:00 AM", location: "Mylapore, Chennai", status: "Pending", price: "₹2499" },
];

export default function TechnicianPortal() {
  const [services, setServices] = useState(initialRequests);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAssign = (id) => {
    setServices(prev => prev.map(item => 
      item.id === id ? { ...item, status: "Assigned" } : item
    ));
    alert(`Service ${id} has been successfully assigned to you!`);
  };

  const filteredServices = services.filter(s => 
    s.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: "Available Jobs", count: services.filter(s => s.status === "Pending").length, icon: MdOutlineHourglassEmpty, color: "#F59E0B" },
    { label: "My Assignments", count: services.filter(s => s.status === "Assigned").length, icon: MdOutlineAssignmentTurnedIn, color: "#6366F1" },
    { label: "Completed", count: 124, icon: MdCheckCircle, color: "#10B981" },
  ];

  return (
    <div style={{ background: "#F1F5F9", minHeight: "100vh", padding: "32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0F172A", margin: 0 }}>Technician Dashboard</h1>
            <p style={{ color: "#64748B", marginTop: 4 }}>Manage and accept service requests in your area.</p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
             <button style={{ background: "#fff", border: "1px solid #E2E8F0", padding: "10px 16px", borderRadius: 10, fontWeight: 600, cursor: "pointer" }}>Export CSV</button>
             <button style={{ background: "#6366F1", color: "#fff", border: "none", padding: "10px 20px", borderRadius: 10, fontWeight: 700, cursor: "pointer" }}>Refresh List</button>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 32 }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ background: "#fff", padding: "24px", borderRadius: 16, border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ background: `${stat.color}15`, color: stat.color, padding: 12, borderRadius: 12 }}>
                <stat.icon size={28} />
              </div>
              <div>
                <div style={{ fontSize: 14, color: "#64748B", fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: "#1E293B" }}>{stat.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #E2E8F0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)" }}>
          
          {/* Table Controls */}
          <div style={{ padding: "20px 24px", borderBottom: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ position: "relative", width: 350 }}>
              <MdSearch style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#94A3B8" }} size={20} />
              <input 
                type="text" 
                placeholder="Search by ID, Customer or Service..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%", padding: "10px 10px 10px 40px", borderRadius: 10, border: "1px solid #E2E8F0", outline: "none", fontSize: 14 }}
              />
            </div>
            <button style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid #E2E8F0", padding: "8px 16px", borderRadius: 8, color: "#64748B", fontWeight: 600, cursor: "pointer" }}>
              <MdFilterList /> Filters
            </button>
          </div>

          {/* Actual Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead style={{ background: "#F8FAFC" }}>
                <tr>
                  {["Order ID", "Customer", "Service Type", "Schedule", "Location", "Status", "Action"].map(head => (
                    <th key={head} style={{ padding: "16px 24px", fontSize: 13, fontWeight: 700, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.025em" }}>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((row) => (
                  <tr key={row.id} style={{ borderBottom: "1px solid #F1F5F9", transition: "0.2s" }} onMouseEnter={e => e.currentTarget.style.backgroundColor = "#FBFBFF" } onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent" }>
                    <td style={{ padding: "20px 24px", fontSize: 14, fontWeight: 700, color: "#6366F1" }}>{row.id}</td>
                    <td style={{ padding: "20px 24px", fontSize: 14, fontWeight: 600, color: "#1E293B" }}>{row.customer}</td>
                    <td style={{ padding: "20px 24px" }}>
                      <span style={{ background: "#EEF2FF", color: "#6366F1", padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700 }}>{row.service}</span>
                    </td>
                    <td style={{ padding: "20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#1E293B", fontWeight: 500 }}>
                        <MdOutlineCalendarToday color="#94A3B8" /> {row.date}
                      </div>
                      <div style={{ fontSize: 12, color: "#64748B", marginTop: 4 }}>{row.time}</div>
                    </td>
                    <td style={{ padding: "20px 24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#64748B" }}>
                        <MdOutlineLocationOn /> {row.location}
                      </div>
                    </td>
                    <td style={{ padding: "20px 24px" }}>
                      <span style={{ 
                        padding: "6px 12px", borderRadius: 20, fontSize: 11, fontWeight: 800,
                        background: row.status === "Pending" ? "#FFF7ED" : "#F0FDF4",
                        color: row.status === "Pending" ? "#EA580C" : "#16A34A"
                      }}>
                        {row.status.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ padding: "20px 24px" }}>
                      {row.status === "Pending" ? (
                        <button 
                          onClick={() => handleAssign(row.id)}
                          style={{ background: "#6366F1", color: "#fff", border: "none", padding: "8px 16px", borderRadius: 8, fontWeight: 700, cursor: "pointer", fontSize: 12 }}
                        >
                          Assign Me
                        </button>
                      ) : (
                        <div style={{ color: "#10B981", display: "flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 700 }}>
                          <MdCheckCircle size={16} /> Claimed
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}