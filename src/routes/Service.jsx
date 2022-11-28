import { createSignal, createEffect, Show } from 'solid-js';
import ServiceCard from "../components/ServiceCard";
import { useParams } from '@solidjs/router';

const Service = () => {

  const params = useParams();  
  const [ service, setService ] = createSignal();
  createEffect(async () => {
    const res = (await fetch(import.meta.env.VITE_GET_SERVICES_ENDPOINT + '/' + params.id));
    const json = await res.json();
    setService(json);
  });

  return (
    <div class="container" style="padding-top:50px">
        <Show when={service()}>
          <ServiceCard service={service()} />
        </Show>
    </div>
  );
  
}

export default Service;
