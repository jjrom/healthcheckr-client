import { createSignal, createEffect, Show } from 'solid-js';
import { A, useParams } from '@solidjs/router';
import SolidMarkdown from "solid-markdown";

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
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><nav><A href="/">Data services</A></nav></li>
            <li class="breadcrumb-item active" aria-current="page">{params.id}</li>
          </ol>
        </nav>
        <Show when={service()}>
          <div class="row gx-5">
            <div class="col col-8">
              <div>Service ID</div>
              <h6 style="padding-bottom:20px">{service()._id}</h6>
              <div>Service Name</div>
              <h6 style="padding-bottom:20px">{service().title}</h6>
              <div>Service description</div>
              <h6><SolidMarkdown style="padding-bottom:10px" children={service().description}></SolidMarkdown></h6>
              <div>Service Provider</div>
              <h6 style="padding-bottom:20px">
                <a href={service().providers[0].url} target="_blank">{service().providers[0].name}</a> - ({service().providers[0].roles.join(', ')})
              </h6>
              <div>Service Type</div>
              <h6 style="padding-bottom:20px">{service().type}</h6>
              <div>Service endpoint URL</div>
              <h6 style="padding-bottom:20px"><a href={service().url} target="_blank">{service().url}</a></h6>
              <div>Solar System Body</div>
              <h6 style="padding-bottom:20px">
                {service()["ssys:targets"].join(', ')}
              </h6>
            </div>
            <div class="col col-4">
              <div>Service status</div>
              <h6 style="padding-bottom:20px"><span style={{ "color" : service().status === 200 ? 'green' : 'red' }}>HTTP {service().status}</span></h6>
            </div>
          </div>
        </Show> 
    </div>
  );
  
}

export default Service;
