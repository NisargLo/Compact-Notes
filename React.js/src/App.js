import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Read from './Pages/Read';
import Add from './Pages/Add';
import Edit from './Pages/Edit';
import Search from './Pages/Search';

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/read/:title' element={<Read />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/edit/:title' element={<Edit />} />
                        <Route path='/search/:title' element={<Search />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
