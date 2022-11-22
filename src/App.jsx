import Header from "./components/Header";
import {Routes, Route} from 'solid-app-router';
import Home from "./pages/Home";
import AddService from "./pages/AddService";
import { createEffect, createSignal } from "solid-js";

const [services, setServices] = createSignal([])

createEffect(async () => {
  const res = await fetch(import.meta.env.VITE_GET_SERVICES_ENDPOINT)
  const json = await res.json()
  setServices(json.services)
})

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

export { services, setServices }
export default App;
