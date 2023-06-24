import { useCart } from "../context/CartContext";
import { Stack, Button } from "react-bootstrap";
import items from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";
import { ItemProps } from "./Item";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCart();

  const item: ItemProps | undefined = items.find((i) => i.id === id);

  if (item === undefined) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && <span className="text-muted fs-5">x{quantity}</span>}
        </div>
        <div className="text-muted fs-5">{formatCurrency(item.price)}</div>
      </div>
      <div className="text-muted fs-5">
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
