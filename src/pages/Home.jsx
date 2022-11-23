import { For } from "solid-js";
import ServiceCard from "../components/ServiceCard";
import { Col, Row } from 'solid-bootstrap';
import { createEffect, createSignal } from "solid-js";

const [services, setServices] = createSignal([])

const refreshServices = async () => {
  const res = await fetch(import.meta.env.VITE_GET_SERVICES_ENDPOINT)
  const json = await res.json()
  setServices(json.services)
}

createEffect(refreshServices)

const Home = () => {
  
  return (
    <div class="container" style="padding-top:50px">
      <h2 style="padding-bottom:15px">
        <Row>
          <Col>Data services</Col>
          <Col class="text-end"><button class="btn btn-primary" onclick={() => refreshServices()}>Refresh</button></Col>
        </Row>
      </h2>
      <For each={services()}>
        {(service => <ServiceCard service={service} />)}
      </For>
    </div>
  )
}

export default Home;