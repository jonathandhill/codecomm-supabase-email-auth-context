import { useState } from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './routes/Dashboard';
import { UserAuth } from './context/AuthContext';

function App() {
  const { session } = UserAuth();
  const [currentPage, setCurrentPage] = useState('signin');

  const renderPage = () => {
    if (!session) {
      if (currentPage === 'signin') {
        return <Signin setCurrentPage={setCurrentPage} />;
      }
      return <Signup setCurrentPage={setCurrentPage} />;
    }
    return <Dashboard setCurrentPage={setCurrentPage} />;
  };

  return (
    <div>
      <h1 className="text-center text-3xl pt-4">Supabase Auth & Context</h1>
      {renderPage()}
    </div>
  );
}

export default App;
