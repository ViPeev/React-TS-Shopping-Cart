import { Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./ShoppingCartItem";

export function ShoppingCart() {
  const { closeCart, isOpen, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
