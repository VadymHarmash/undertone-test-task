import './App.scss';
import Background from './components/Background';
import Empty from './components/Empty';
import Main from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter

function App() {
    return (
        <Router>
            <div className="App">
                <Background />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/empty' element={<Empty />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
