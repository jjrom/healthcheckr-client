import { For } from "solid-js";
import { NavLink } from "solid-app-router";
import { services } from "../App";
import ServiceCard from "../components/ServiceCard"

const Home = () => {
  
  return (
    <div>
      <h2>Data services</h2>
      <small><NavLink href="/addService">Add service</NavLink></small>
      <For each={services()}>
        {(service => <ServiceCard service={service} />)}
      </For>
    </div>
  )
}

export default Home;