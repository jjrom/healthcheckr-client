import { Col, Row } from 'solid-bootstrap';
import styles from './ServiceCard.module.css';

const ServiceCard = ({service}) => {
  return (
    <div class="card mb-3">
      <div class="card-header">
        <Row>
          <Col xs="1">
            <span class={styles.dot} style={{ "background-color" : service.status === 200 ? 'green' : 'red' }}></span>
          </Col>
          <Col xs="1">
            <span>{service.type}</span>
          </Col>
          <Col>
            {service.title}
          </Col>
          <Col xs="2" class="text-end">
            <a href={service.url} target="_blank">Link</a>
          </Col>
        </Row>
      </div>
      <div class="card-body">
      <Row>
          <Col xs="1"></Col>
          <Col xs="1"></Col>
          <Col>
            <p>
              <span class="fw-bold">Description:</span> {service.description}
            </p>
            <p>
              <span class="fw-bold">Attributions:</span> {service.attributions}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ServiceCard;
