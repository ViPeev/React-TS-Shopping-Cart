import { OffCanvas } from "react-bootstrap";

export function ShoppingCart() {
  return (
    <OffCanvas>
      <OffCanvas.Header closeButton>
        <OffCanvas.Title>Cart</OffCanvas.Title>
      </OffCanvas.Header>
    </OffCanvas>
  );
}
