import { createSignal } from "solid-js";
import { Card, Col, Row } from 'solid-bootstrap';
import { A } from '@solidjs/router';
import { formatDistanceToNow, parseISO } from 'date-fns';
import styles from './ServiceCard.module.css';

function LastChecked(iso8601) {
  if ( !iso8601 ) {
    return <span class="fst-italic"></span>;
  }
  const [lastCheckedToNow, setLastCheckedToNow] = createSignal(formatDistanceToNow(parseISO(iso8601)));
  setInterval(() => setLastCheckedToNow(formatDistanceToNow(parseISO(iso8601))), 30000);
  return <span class="fst-italic">Last checked : {lastCheckedToNow()}</span>;
}

const ServiceCard = ({service}) => {

  return (
    <Card class="mb-3">
      <Card.Header>
        <Row>
          <Col xs="1">
            <span class={styles.dot} style={{ "background-color" : service.status === 200 ? 'green' : 'red' }}></span>
          </Col>
          <Col xs="1">
            <span>{service.type}</span>
          </Col>
          <Col>
            <nav><A href={"/" + service._id}>{service.title}</A></nav>
          </Col>
          <Col class="text-end">
            {LastChecked(service.last_checked)}
          </Col>
        </Row>
      </Card.Header>
    </Card>
  )
}

export default ServiceCard;
