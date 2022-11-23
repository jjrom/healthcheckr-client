import Header from "./components/Header";
import {Routes, Route} from 'solid-app-router';
import Home from "./pages/Home";
import AddService from "./pages/AddService";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} end path='/' />
        <Route element={<AddService />} end path='/addService' />
      </Routes>
    </div>
  );
}

export default App;
