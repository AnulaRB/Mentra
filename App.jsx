import { useState } from 'react'
import Login from './components/Login'
import StudentDashboard from './components/StudentDashboard'
import FacultyPortal from './components/FacultyPortal'
import CounselorPortal from './components/CounselorPortal'
import AdminPortal from './components/AdminPortal'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (role) => {
    console.log('User logged in as:', role);
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  const renderDashboard = () => {
    switch(userRole) {
      case 'student':
        return <StudentDashboard onLogout={handleLogout} />;
      case 'faculty':
        return <FacultyPortal onLogout={handleLogout} />;
      case 'counselor':
        return <CounselorPortal onLogout={handleLogout} />;
      case 'admin':
        return <AdminPortal onLogout={handleLogout} />;
      default:
        return (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Welcome! You are logged in as {userRole}</h1>
            <p>Dashboard for {userRole} coming soon...</p>
            <button 
              onClick={handleLogout}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#EF4444',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontWeight: '600',
                marginTop: '1rem'
              }}
            >
              Logout
            </button>
          </div>
        );
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="phone-container">
          {renderDashboard()}
        </div>
      )}
    </div>
  )
}

export default App