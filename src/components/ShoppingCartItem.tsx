import { useCart } from "../context/CartContext";
import { Stack } from "react-bootstrap";
import items from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCart();

  const item = items.find((i) => i.id === id);

  if (item === undefined) {
    return null;
  }

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
}
