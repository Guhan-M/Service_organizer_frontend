import React, { useState, useEffect, useRef } from 'react';
import { 
  MdHome, MdLock, MdVisibility, MdVisibilityOff, MdArrowBack, 
  MdCheckCircle, MdElectricBolt, MdPlumbing, MdCarpenter, MdAcUnit,
  MdVerified, MdChevronRight
} from 'react-icons/md';
import toast from 'react-hot-toast'
import AxiosService from '../../utils/AxiosService';
import ApiRoutes from '../../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';
// import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

// ── SHARED REUSABLES ──────────────────────────────────────────

const Logo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
    <div style={{
      width: 42, height: 42, borderRadius: 12,
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      display: 'flex', alignItems: 'center', justifyCenter: 'center',
      boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)',
      color: '#fff', fontSize: 24, paddingLeft: 9
    }}>
      <MdHome />
    </div>
    <span style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', letterSpacing: '-0.5px' }}>
      Home<span style={{ color: '#6366F1' }}>Fix</span>
    </span>
  </div>
);

const InputField = ({ label, type, placeholder, value, onChange, icon: Icon, error, hint }) => {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div style={{ marginBottom: 16, width: '100%' }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#334155', marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#64748B', display: 'flex' }}>
          <Icon size={18} />
        </span>
        <input
          type={isPassword ? (show ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: '100%', padding: '11px 42px 11px 40px', borderRadius: 10,
            border: `1.5px solid ${error ? '#EF4444' : '#E2E8F0'}`,
            fontSize: 14, outline: 'none', transition: 'all 0.15s',
            background: error ? '#FFF5F5' : '#ffffff'
          }}
          onFocus={(e) => e.target.style.borderColor = '#6366F1'}
          onBlur={(e) => e.target.style.borderColor = error ? '#EF4444' : '#E2E8F0'}
        />
        {isPassword && (
          <button 
            onClick={() => setShow(!show)}
            style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
          >
            {show ? <MdVisibilityOff size={18} /> : <MdVisibility size={18} />}
          </button>
        )}
      </div>
      {(error || hint) && (
        <div style={{ fontSize: 12, marginTop: 5, color: error ? '#EF4444' : '#64748B', display: 'flex', alignItems: 'center', gap: 4 }}>
          {error ? `⚠ ${error}` : hint}
        </div>
      )}
    </div>
  );
};

const PrimaryBtn = ({ children, onClick, disabled, loading, icon: Icon }) => (
  <button
    onClick={onClick}
    disabled={disabled || loading}
    style={{
      width: '100%', padding: 13, borderRadius: 10, border: 'none',
      background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
      color: '#ffffff', fontSize: 15, fontWeight: 700, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
      boxShadow: '0 4px 20px rgba(99, 102, 241, 0.45)',
      transition: 'all 0.2s', opacity: (disabled || loading) ? 0.6 : 1
    }}
    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #4F46E5, #7C3AED)'}
    onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #6366F1, #8B5CF6)'}
  >
    {loading ? 'Processing...' : (
      <>
        {children}
        {Icon && <Icon size={18} />}
      </>
    )}
  </button>
);

// ── LEFT PANEL COMPONENT ──────────────────────────────────────

const LeftPanel = () => {
  const floatAnim = {
    animation: 'float 4s ease-in-out infinite'
  };

  return (
    <div style={{
      background: 'linear-gradient(155deg, #1E293B 0%, #312E81 60%, #4F46E5 100%)',
      padding: '52px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', minHeight: 600, color: '#fff'
    }}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
      `}</style>
      
      {/* Decorative Rings */}
      {[280, 195, 120].map((size, i) => (
        <div key={i} style={{
          position: 'absolute', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)',
          width: size, height: size, bottom: -size/4, right: -size/4
        }} />
      ))}

      {/* Floating Icons */}
      <div style={{ ...floatAnim, position: 'absolute', top: '10%', left: '10%', opacity: 0.6 }}><MdElectricBolt size={32} color="#FDE68A" /></div>
      <div style={{ ...floatAnim, animationDelay: '1s', position: 'absolute', top: '70%', left: '15%', opacity: 0.6 }}><MdPlumbing size={32} color="#A7F3D0" /></div>
      <div style={{ ...floatAnim, animationDelay: '2s', position: 'absolute', top: '15%', right: '15%', opacity: 0.6 }}><MdCarpenter size={32} color="#BAE6FD" /></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(99, 102, 241, 0.22)',
          color: '#A5B4FC', padding: '6px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
          border: '1px solid rgba(99, 102, 241, 0.32)', marginBottom: 24
        }}>
          ✦ India's #1 Home Services
        </div>

        <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
          Set a new<br/><span style={{ color: '#A5B4FC' }}>strong password</span>
        </h2>
        <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.8, marginBottom: 32, maxWidth: 300 }}>
          Ensure your account stays protected with a unique password. We never store your credentials in plain text.
        </p>

        {[
          { icon: MdLock, text: "End-to-end encrypted" },
          { icon: MdVerified, text: "Never stored in plain text" },
          { icon: MdCheckCircle, text: "Instant account access" }
        ].map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#CBD5E1', fontSize: 13, marginBottom: 14 }}>
            <item.icon color="#A5B4FC" size={18} /> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

// ── AUTH PAGES (FORGOT PASSWORD FLOW) ──────────────────────────

export default function AuthPages() {
  const Navigate = useNavigate();
  const [view, setView] = useState('forgot'); // Flow: email -> otp -> newpwd -> success
  // const [step, setStep] = useState(3); // Mocking step 3 for this UI demonstration
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const getStrength = () => {
    let s = 0;
    if (password.length >= 6) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };

  console.log(confirm)

  const onsumbit = async(e)=>{
    console.log("reset trigger")
    const newPassword = {
            "newPassword": confirm
    }
    const token = window.location.pathname.split("/").pop();
    console.log(token,newPassword)
    try{
      let res =  await AxiosService.post(`${ApiRoutes.RESET_PASS.path}/${token}`,newPassword,{
        authenticate: ApiRoutes.RESET_PASS.authenticate
      })
      if(res.status =200){
        setLoading(true);
        toast.success("success")
         setTimeout(() => {
          setLoading(false);
          setView('success');
        }, 1500);
        Navigate("/login")
      }
    }
    catch(e){
      toast.error(e.message)
      setLoading(true)
    }
  }

  const strength = getStrength();
  const colors = ['#E2E8F0', '#EF4444', '#F97316', '#F59E0B', '#10B981'];
  const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];



  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', padding: 24 }}>
      <div style={{
        width: '100%', maxWidth: 920, display: 'grid', gridTemplateColumns: '1fr 1fr',
        borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 80px rgba(15, 23, 42, 0.18)', background: '#fff'
      }}>
        
        <LeftPanel />

        <div style={{ padding: '48px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Logo />

          {view === 'forgot' && (
            <div>
              <h1 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: 6 }}>Reset password</h1>
              <p style={{ fontSize: 13, color: '#64748B', textAlign: 'center', lineHeight: 1.7, marginBottom: 28 }}>
                Your new password must be different<br/>from your previous one.
              </p>

              <InputField 
                label="New password"
                type="password"
                icon={MdLock}
                placeholder="Create a strong password"
                value={password}
                onChange={setPassword}
                hint="Minimum 6 characters required"
              />

              {/* Strength Bar */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', gap: 5, marginBottom: 6 }}>
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} style={{ 
                      flex: 1, height: 4, borderRadius: 4, 
                      background: i <= strength ? colors[strength] : '#E2E8F0',
                      transition: 'background 0.3s'
                    }} />
                  ))}
                </div>
                <span style={{ fontSize: 12, color: colors[strength], fontWeight: 600 }}>
                  {password && `Strength: ${labels[strength]}`}
                </span>
              </div>

              <InputField 
                label="Confirm password"
                type="password"
                icon={MdLock}
                placeholder="Re-enter your password"
                value={confirm}
                onChange={setConfirm}
                error={confirm && password !== confirm ? "Passwords do not match" :""}
              />

              <div style={{ marginTop: 24 }}>
                <PrimaryBtn 
                  onClick={onsumbit} 
                  loading={loading}
                  disabled={strength < 2 || password !== confirm}
                  icon={MdChevronRight}
                >
                  Reset Password
                </PrimaryBtn>
              </div>

              {/* <button style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                marginTop: 20, fontSize: 13, color: '#64748B', border: 'none', background: 'none', width: '100%', cursor: 'pointer'
              }}>
                <MdArrowBack /> Back to login
              </button> */}
            </div>
          )}

          {view === 'success' && (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.38)'
              }}>
                <MdCheckCircle color="#fff" size={40} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', marginBottom: 10 }}>Password Updated!</h3>
              <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.7, marginBottom: 24 }}>
                Your HomeFix password has been reset successfully. You can now sign in with your new password.
              </p>
              {/* <PrimaryBtn onClick={() => window.location.reload()}>
                Go to Login
              </PrimaryBtn> */}
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}