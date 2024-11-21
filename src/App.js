import LeftSidebar from './components/LeftSidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Groups from './pages/Groups';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <LeftSidebar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/groups' element={<Groups />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/notifications' element={<Notifications />} />
      </Routes>
    </Router>
      
  );
}

export default App;
