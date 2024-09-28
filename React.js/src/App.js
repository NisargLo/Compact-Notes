import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Read from './Pages/Read';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/read/:name' element={<Read />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/edit/:name' element={<Edit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
