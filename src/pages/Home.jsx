import { For } from "solid-js";
import { NavLink } from "solid-app-router";
import { services } from "../App";
import ServiceCard from "../components/ServiceCard"

const Home = () => {
  
  return (
    <div class="container" style={{"padding-top":"100px"}}>
      <h2>Data services</h2>
      <For each={services()}>
        {(service => <ServiceCard service={service} />)}
      </For>
    </div>
  )
}

export default Home;