import Button from '../../ui/Button';
import { useCheckout } from './useCheckout';
import Proptypes from "prop-types"

function CheckoutButton({ bookingId }) {
  const { isLoading, mutate: checkout } = useCheckout();

  return (
    <Button
      variation='primary'
      size='small'
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

CheckoutButton.propTypes = {
  bookingId: Proptypes.number.isRequired
}

export default CheckoutButton;
