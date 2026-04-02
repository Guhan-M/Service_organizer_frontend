import React, { useState } from "react";
import { 
  MdDeleteOutline, MdOutlinePayments, MdOutlineLocalShipping, 
  MdChevronRight, MdKeyboardArrowLeft, MdVerified, MdOutlineInfo
} from "react-icons/md";

/* ─── SHARED DATA (Must match your AllServices.jsx IDs) ─── */
const allServicesData = [
  { id: "c1", name: "Deep Home Cleaning", price: 2499, time: "5 hrs" },
  { id: "c2", name: "Kitchen Degreasing", price: 899, time: "2 hrs" },
  { id: "c3", name: "Bathroom Sanitation", price: 499, time: "1 hr" },
  { id: "c4", name: "Sofa Shampooing", price: 799, time: "2 hrs" },
  { id: "c5", name: "Window & Mesh Cleaning", price: 349, time: "1.5 hrs" },
  { id: "t1", name: "Fan Repair/Installation", price: 149, time: "30 mins" },
  { id: "t2", name: "Switchboard Repair", price: 199, time: "45 mins" },
  { id: "t3", name: "Tap Leakage Repair", price: 99, time: "30 mins" },
  { id: "t4", name: "Toilet Pot Unblocking", price: 449, time: "1 hr" },
  { id: "t5", name: "Furniture Assembly", price: 599, time: "2 hrs" },
  { id: "t6", name: "AC Deep Cleaning", price: 699, time: "1.5 hrs" },
];

export default function CartPage({ addedItems, setAddedItems, setCartCount }) {
  const [paymentMethod, setPaymentMethod] = useState("online");

  // Filter only items that are in the cart
  const cartItems = allServicesData.filter(item => addedItems?.[item.id]);

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const total = subtotal + tax;

  const handleRemove = (id) => {
    const newItems = { ...addedItems };
    delete newItems[id];
    setAddedItems(newItems);
    setCartCount(prev => Math.max(0, prev - 1));
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "100px 24px", background: "#F8FAFC", minHeight: "80vh" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="Empty" style={{ width: 120, opacity: 0.5, marginBottom: 20 }} />
        <h2 style={{ color: "#1E293B", fontWeight: 800 }}>Your cart is empty</h2>
        <p style={{ color: "#64748B", marginBottom: 32 }}>Looks like you haven't added any services yet.</p>
        <button style={{ background: "#6366F1", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 12, fontWeight: 700, cursor: "pointer" }}>
          Browse Services
        </button>
      </div>
    );
  }

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh", padding: "40px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 32, cursor: "pointer", color: "#64748B" }}>
          <MdKeyboardArrowLeft size={24} />
          <span style={{ fontWeight: 600 }}>Continue Shopping</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>
          
          {/* Left: Cart Items */}
          <section>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0F172A", marginBottom: 24 }}>Your Cart ({cartItems.length})</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {cartItems.map(item => (
                <div key={item.id} style={{ 
                  background: "#fff", padding: "20px", borderRadius: 16, border: "1.5px solid #E2E8F0",
                  display: "flex", justifyContent: "space-between", alignItems: "center"
                }}>
                  <div>
                    <h4 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 700, color: "#1E293B" }}>{item.name}</h4>
                    <p style={{ margin: 0, fontSize: 13, color: "#64748B" }}>Service Time: {item.time}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <span style={{ fontWeight: 800, fontSize: 18, color: "#0F172A" }}>₹{item.price}</span>
                    <button 
                      onClick={() => handleRemove(item.id)}
                      style={{ background: "#FEE2E2", border: "none", padding: 8, borderRadius: 8, cursor: "pointer", color: "#EF4444" }}
                    >
                      <MdDeleteOutline size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Selection */}
            <div style={{ marginTop: 40 }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 16 }}>Select Payment Mode</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <PaymentCard 
                  active={paymentMethod === "online"} 
                  onClick={() => setPaymentMethod("online")}
                  icon={MdOutlinePayments}
                  title="Online Payment"
                  desc="UPI, Cards, NetBanking"
                />
                <PaymentCard 
                  active={paymentMethod === "cod"} 
                  onClick={() => setPaymentMethod("cod")}
                  icon={MdOutlineLocalShipping}
                  title="Cash on Delivery"
                  desc="Pay after service completion"
                />
              </div>
            </div>
          </section>

          {/* Right: Summary */}
          <aside style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "#fff", padding: "24px", borderRadius: 20, border: "1.5px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", marginBottom: 20 }}>Order Summary</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: 12, borderBottom: "1px solid #F1F5F9", paddingBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: 15 }}>
                  <span>Subtotal</span>
                  <span style={{ color: "#1E293B", fontWeight: 600 }}>₹{subtotal}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#64748B", fontSize: 15 }}>
                  <span>Taxes (GST 5%)</span>
                  <span style={{ color: "#1E293B", fontWeight: 600 }}>₹{tax}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#10B981", fontSize: 15, fontWeight: 600 }}>
                  <span>Service Discount</span>
                  <span>-₹0</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", margin: "20px 0", fontSize: 20, fontWeight: 800, color: "#0F172A" }}>
                <span>Total Amount</span>
                <span style={{ color: "#6366F1" }}>₹{total}</span>
              </div>

              <div style={{ background: "#F0FDF4", padding: "12px", borderRadius: 12, display: "flex", gap: 10, marginBottom: 24, border: "1px solid #DCFCE7" }}>
                <MdVerified color="#10B981" size={20} />
                <span style={{ fontSize: 12, color: "#166534", fontWeight: 600 }}>You are saving ₹150 on this order with member perks!</span>
              </div>

              <button style={{
                width: "100%", padding: "16px", borderRadius: 14, border: "none",
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer",
                boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8
              }}>
                Checkout <MdChevronRight size={20} />
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 20, color: "#94A3B8" }}>
                <MdOutlineInfo size={16} />
                <span style={{ fontSize: 11, fontWeight: 600 }}>Secure 256-bit SSL Encrypted Payment</span>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

/* ─── HELPER COMPONENT ─── */
function PaymentCard({ active, onClick, icon: Icon, title, desc }) {
  return (
    <div 
      onClick={onClick}
      style={{
        padding: "20px", borderRadius: 16, cursor: "pointer", border: "2px solid",
        borderColor: active ? "#6366F1" : "#E2E8F0",
        background: active ? "#F5F3FF" : "#fff",
        transition: "0.2s"
      }}
    >
      <div style={{ color: active ? "#6366F1" : "#64748B", marginBottom: 12 }}>
        <Icon size={28} />
      </div>
      <div style={{ fontWeight: 700, color: active ? "#4338CA" : "#1E293B", fontSize: 15, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 12, color: active ? "#6366F1" : "#64748B", fontWeight: 500 }}>{desc}</div>
    </div>
  );
}