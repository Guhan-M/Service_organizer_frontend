import React, { useState } from 'react';
import { 
  MdHome, MdEmail, MdLock, MdPerson, MdVisibility, MdVisibilityOff, 
  MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit, MdVerified 
} from 'react-icons/md';
/** * SHARED REUSABLES 
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

const InputField = ({ label, icon: Icon, type = "text", placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [showPass, setShowPass] = useState(false);

  return (
    <div style={{ marginBottom: 18, width: '100%' }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
          color: focused ? '#6366F1' : '#64748B', transition: '0.2s', zIndex: 1
        }}>
          <Icon size={18} />
        </div>
        <input
          type={type === "password" && showPass ? "text" : type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '11px 16px 11px 44px', borderRadius: 12,
            border: `1.5px solid ${focused ? '#6366F1' : '#E2E8F0'}`,
            fontSize: 14, outline: 'none', transition: '0.2s', backgroundColor: '#ffffff',
            boxSizing: 'border-box', color: '#0F172A'
          }}
        />
        {type === "password" && (
          <div 
            onClick={() => setShowPass(!showPass)}
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#64748B' }}
          >
            {showPass ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
          </div>
        )}
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
      boxShadow: '0 4px 20px rgba(99,102,241,0.45)', transition: '0.2s',
      marginTop: 8
    }}
  >
    {children}
  </button>
);

/**
 * NAMED SUB-COMPONENTS
 */

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
          Join the HomeFix <br/> community.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 32 }}>
          Create an account to track bookings, save your favorite pros, and get exclusive offers.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[ 'Secure Data Encryption', 'No Hidden Charges', 'Instant Confirmation' ].map((text, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <MdVerified color="#10B981" size={22} />
              <span style={{ fontWeight: 600 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * EXPORTED SIGNUP PAGE
 */

export default function SignupPage() {
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
        <div style={{ width: '100%', maxWidth: 420 }}>
          <Logo />
          
          <h2 style={{ fontSize: 28, fontWeight: 800, marginTop: 32, marginBottom: 8, color: '#0F172A', letterSpacing: -1 }}>
            Create new account
          </h2>
          <p style={{ color: '#64748B', marginBottom: 32, fontSize: 14, fontWeight: 500 }}>
            Start managing your home services today.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <InputField label="Name" icon={MdPerson} placeholder="Enter your full name" />
            <InputField label="Gmail" icon={MdEmail} placeholder="yourname@gmail.com" />
            <InputField label="Password" icon={MdLock} type="password" placeholder="Create a strong password" />
            <InputField label="Confirm Password" icon={MdLock} type="password" placeholder="Repeat your password" />

            <div style={{ margin: '20px 0', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <input type="checkbox" style={{ marginTop: 4, cursor: 'pointer' }} id="terms" />
              <label htmlFor="terms" style={{ fontSize: 12, color: '#64748B', lineHeight: 1.4 }}>
                I agree to the <span style={{ color: '#6366F1', fontWeight: 700, cursor: 'pointer' }}>Terms of Service</span> and <span style={{ color: '#6366F1', fontWeight: 700, cursor: 'pointer' }}>Privacy Policy</span>.
              </label>
            </div>

            <PrimaryBtn>Create Account</PrimaryBtn>
          </form>

          <p style={{ textAlign: 'center', fontSize: 14, color: '#64748B', fontWeight: 500, marginTop: 32 }}>
            Already have an account? <span style={{ color: '#6366F1', fontWeight: 700, cursor: 'pointer' }}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}