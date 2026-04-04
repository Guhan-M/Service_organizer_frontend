import React, { useState } from 'react';
import { 
  MdHome, MdEmail, MdArrowBack, MdVerified, 
  MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit 
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
/**
 * SHARED REUSABLES
 */

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{
      width: 42, height: 42, borderRadius: 12,
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(99,102,241,0.3)'
    }}>
      <MdHome size={24} color="#ffffff" />
    </div>
    <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: -1, color: '#0F172A' }}>
      Home<span style={{ color: '#6366F1' }}>Fix</span>
    </span>
  </div>
);

const InputField = ({ label, icon: Icon, placeholder }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ marginBottom: 24, width: '100%' }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 8 }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          color: focused ? '#6366F1' : '#64748B', transition: '0.2s', zIndex: 1
        }}>
          <Icon size={20} />
        </div>
        <input
          type="email"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '12px 16px 12px 48px', borderRadius: 12,
            border: `1.5px solid ${focused ? '#6366F1' : '#E2E8F0'}`,
            fontSize: 14, outline: 'none', transition: '0.2s', backgroundColor: '#ffffff',
            boxSizing: 'border-box', color: '#0F172A'
          }}
        />
      </div>
    </div>
  );
};

const PrimaryBtn = ({ children }) => (
  <button
    style={{
      width: '100%', padding: '14px', borderRadius: 12, border: 'none',
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      color: '#ffffff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(99,102,241,0.45)', transition: '0.2s'
    }}
    onMouseOver={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4F46E5, #7C3AED)'}
    onMouseOut={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #6366F1, #8B5CF6)'}
  >
    {children}
  </button>
);

const LeftPanel = () => {
  const floatIcons = [
    { icon: MdElectricBolt, top: '15%', left: '15%', delay: '0s' },
    { icon: MdPlumbing, top: '25%', left: '75%', delay: '1s' },
    { icon: MdCarpenter, top: '65%', left: '10%', delay: '2.5s' },
    { icon: MdAcUnit, top: '80%', left: '70%', delay: '1.5s' },
  ];

  return (
    <div style={{
      flex: 1.2, background: 'linear-gradient(135deg, #1E293B 0%, #312E81 60%, #4F46E5 100%)',
      padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', color: '#ffffff', minHeight: '100vh'
    }}>
      <style>{` @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } } `}</style>
      {floatIcons.map((item, i) => (
        <div key={i} style={{
          position: 'absolute', top: item.top, left: item.left,
          color: 'rgba(255,255,255,0.15)', animation: `float 4s ease-in-out infinite`,
          animationDelay: item.delay
        }}><item.icon size={52} /></div>
      ))}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 460 }}>
        <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1.5 }}>
          Don't worry, <br/> we've got you.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 32 }}>
          Security is our top priority. We'll send a secure link to your Gmail to verify your identity and reset your password.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MdVerified color="#10B981" size={22} />
            <span style={{ fontWeight: 600 }}>Secure Recovery Process</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * EXPORTED FORGOT PASSWORD PAGE
 */

export default function ForgotPasswordPage() {  
  const Navigate = useNavigate();
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', backgroundColor: '#ffffff',
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      <div style={{ display: 'block', width: '50%' }}>
        <LeftPanel />
      </div>

      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Logo />
          
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 44, marginBottom: 10, color: '#0F172A', letterSpacing: -1 }}>
            Forgot password?
          </h2>
          <p style={{ color: '#64748B', marginBottom: 36, fontSize: 15, fontWeight: 500 }}>
            No stress! Enter your Gmail and we'll send you a reset link.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <InputField label="Gmail Address" icon={MdEmail} placeholder="yourname@gmail.com" />

            <PrimaryBtn>Send Reset Link</PrimaryBtn>
          </form>

          <div 
            style={{ 
              marginTop: 32, display: 'flex', alignItems: 'center', 
              justifyContent: 'center', gap: 8, cursor: 'pointer', color: '#64748B',
              fontSize: 14, fontWeight: 700, transition: '0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = '#6366F1'}
            onMouseOut={(e) => e.currentTarget.style.color = '#64748B'}
          >
            <MdArrowBack size={18} />
            <span onClick={()=>Navigate("/login")}>Back to Login</span>
          </div>
        </div>
      </div>
    </div>
  );
}