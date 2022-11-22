import { For } from "solid-js";
import { services, setServices } from "../App";
import ServiceCard from "../components/ServiceCard";

const refreshServices = async () => {
  const res = await fetch(import.meta.env.VITE_GET_SERVICES_ENDPOINT)
  const json = await res.json()
  setServices(json.services)
}

const Home = () => {
  
  return (
    <div class="container" style="padding-top:50px">
      <h2 style="padding-bottom:15px">Data services <span class="justify-content-end"><button class="btn btn-primary" onclick={() => refreshServices()}>Refresh</button></span></h2>
      <For each={services()}>
        {(service => <ServiceCard service={service} />)}
      </For>
    </div>
  )
}

export default Home;