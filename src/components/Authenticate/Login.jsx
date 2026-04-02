import React, { useState } from 'react';
import { 
  MdHome, MdEmail, MdLock, MdVisibility, MdVisibilityOff, 
  MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit, MdWaterDrop, MdVerified 
} from 'react-icons/md';
import { FaGoogle, FaApple } from 'react-icons/fa';
/**
 * SHARED REUSABLE COMPONENTS
 * (Defined at the top to ensure they are available for the main page)
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
    <div style={{ marginBottom: 20, width: '100%' }}>
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
          type={type === "password" && showPass ? "text" : type}
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
        {type === "password" && (
          <div 
            onClick={() => setShowPass(!showPass)}
            style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: '#64748B' }}
          >
            {showPass ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
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
      marginTop: 10
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #4F46E5, #7C3AED)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #6366F1, #8B5CF6)';
      e.currentTarget.style.transform = 'translateY(0px)';
    }}
  >
    {children}
  </button>
);

// const SocialBtn = ({ icon: Icon, label }) => (
//   <button style={{
//     flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
//     padding: '12px', borderRadius: 12, border: '1.5px solid #E2E8F0',
//     backgroundColor: '#ffffff', cursor: 'pointer', fontSize: 14, fontWeight: 600,
//     color: '#334155', transition: '0.2s'
//   }}>
//     <Icon size={20} /> {label}
//   </button>
// );

/**
 * NAMED SUB-COMPONENTS
 */

const LeftPanel = () => {
  const floatIcons = [
    { icon: MdElectricBolt, top: '15%', left: '15%', delay: '0s' },
    { icon: MdPlumbing, top: '25%', left: '75%', delay: '1s' },
    { icon: MdCarpenter, top: '65%', left: '10%', delay: '2.5s' },
    { icon: MdAcUnit, top: '80%', left: '70%', delay: '1.5s' },
    { icon: MdWaterDrop, top: '45%', left: '85%', delay: '0.5s' },
  ];

  return (
    <div style={{
      flex: 1.2, background: 'linear-gradient(135deg, #1E293B 0%, #312E81 60%, #4F46E5 100%)',
      padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', color: '#ffffff', minHeight: '100vh'
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
      
      {/* Background Decorations */}
      <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: 450, height: 450, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)' }} />
      <div style={{ position: 'absolute', bottom: '-5%', right: '-5%', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.04)' }} />

      {floatIcons.map((item, i) => (
        <div key={i} style={{
          position: 'absolute', top: item.top, left: item.left,
          color: 'rgba(255,255,255,0.15)', animation: `float 4s ease-in-out infinite`,
          animationDelay: item.delay
        }}>
          <item.icon size={52} />
        </div>
      ))}

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 460 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px',
          background: 'rgba(255,255,255,0.1)', borderRadius: 100, fontSize: 12,
          fontWeight: 700, marginBottom: 28, border: '1px solid rgba(255,255,255,0.2)',
          letterSpacing: 0.5
        }}>
          ✦ India's #1 Home Services
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: -1.5 }}>
          Your home, <br/> reimagined.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 40 }}>
          Expert assistance for everything from leaking pipes to expert salon sessions, right at your doorstep.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {[ 'Verified Professionals', 'Safe & Secure Payments', '24/7 Priority Support' ].map((text, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <MdVerified color="#10B981" size={24} />
              <span style={{ fontWeight: 600, fontSize: 15 }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * EXPORTED PAGE COMPONENT
 */

export default function Login() {
  return (
    <div style={{
      display: 'flex', minHeight: '100vh', backgroundColor: '#ffffff',
      fontFamily: "'Segoe UI', system-ui, sans-serif"
    }}>
      {/* Left Branding Side - Fixed to 55% width */}
      <div style={{ display: 'block', width: '55%' }}>
        <LeftPanel />
      </div>

      {/* Right Form Side */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '40px', backgroundColor: '#ffffff'
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <Logo />
          
          <h2 style={{ fontSize: 32, fontWeight: 800, marginTop: 44, marginBottom: 10, color: '#0F172A', letterSpacing: -1 }}>
            Welcome back
          </h2>
          <p style={{ color: '#64748B', marginBottom: 36, fontSize: 15, fontWeight: 500 }}>
            Enter your credentials to access your dashboard.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <InputField label="Email Address" icon={MdEmail} placeholder="e.g. guhan@example.com" />
            <InputField label="Password" icon={MdLock} type="password" placeholder="••••••••" />

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 28 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#6366F1', cursor: 'pointer' }}>
                Forgot Password?
              </span>
            </div>

            <PrimaryBtn>Sign In</PrimaryBtn>
          </form>

          {/* <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '28px 0' }}>
            <div style={{ flex: 1, height: 1, background: '#E2E8F0' }} />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#94A3B8' }}>OR CONTINUE WITH</span>
            <div style={{ flex: 1, height: 1, background: '#E2E8F0' }} />
          </div>

          {/* <div style={{ display: 'flex', gap: 12, marginBottom: 36 }}>
            <SocialBtn icon={FaGoogle} label="Google" />
            <SocialBtn icon={FaApple} label="Apple" />
          </div> */} 

          <p style={{ textAlign: 'center', fontSize: 14, color: '#64748B', fontWeight: 500,marginTop: 20 }}>
            New to HomeFix? <span style={{ color: '#6366F1', fontWeight: 700, cursor: 'pointer' }}>
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}