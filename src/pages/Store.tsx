import { Item } from "../components/Item";
import items from "../data/items.json";
import { Col, Row } from "react-bootstrap";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {items.map((item) => {
          return (
            <Col key={item.id}>
              <Item {...item} />
            </Col>
          );
        })}
        <Col></Col>
      </Row>
    </>
  );
}
