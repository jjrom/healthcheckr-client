/*import { cuteServices, setCuteServices } from "../pages/AddService";

const likeService = (service) => {
  setCuteServices([service, ...cuteServices()]);
}

const unLikeService = (serviceId) => {
  const serviceState = cuteServices()?.filter(item => item._id !== serviceId)
  setCuteServices(serviceState)
}

const serviceIsCute = (serviceId) => {
  const service = cuteServices()?.filter(item => item._id === serviceId)
  return service?.length > 0
}
*/
const ServiceCard = ({service}) => {
  return (
    <div class="card mb-3">
      <div class="card-header">{service.title} status is {service.status}</div>
      <div class="card-body">
        <p class="card-text">{service.description}</p>
      </div>
      <div class="card-footer">
      { service.status !== 200 ? (
          <button class="btn btn-danger">
            KO
          </button>
        ) : (
          <button class="btn btn-primary">
            OK
          </button>
        )}
      </div>
    </div>
  )
}

export default ServiceCard;
