import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Participant from './pages/participant';
import ParticipantDetail from './pages/participantDetail';
function App() {
  return (
    <Routes>
        
       <Route path='/' element={<Participant />} />
       <Route path='/:id' element={<ParticipantDetail />} />
    </Routes>
  );
}

export default App;
