import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSidebar from './components/shared/LeftSidebar';
import { Home } from './pages/Home';
import Create from './pages/Create';
import Groups from './pages/Groups';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import Settings from './pages/Settings';
import Search from './pages/Search';
import News from './pages/News';
import LoginRegister from './pages/LoginRegister';


function App() {
    return (
        <Router>
            <LeftSidebar />
            <main>
                <Routes>
                    <Route path="/login" element={<LoginRegister/>} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route index element={<Home />} />
                    {/* Fallback route */}
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
