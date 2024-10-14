// import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import {
//   HiPencil,
//   HiTrash,
//   HiEye,
//   HiArrowUpOnSquare,
//   HiArrowDownOnSquare,
// } from 'react-icons/hi2';
// import PropTypes from 'prop-types'; // Import PropTypes for validation

// import Tag from '../../ui/Tag';
// import Menus from '../../ui/Menus';
// import Modal from '../../ui/Modal';
// import ConfirmDelete from '../../ui/ConfirmDelete';
// import Table from '../../ui/Table';

// import { useDeleteBooking } from './useDeleteBooking';
// import { formatCurrency } from '../../utils/helpers';

// import { formatDistanceFromNow } from '../../utils/helpers';
// import { useCheckout } from '../check-in-out/useCheckout';
// import { format, isToday } from 'date-fns';

// const Cabin = styled.div`
//   font-size: 1.6rem;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   font-family: 'Sono';
// `;

// const Stacked = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.2rem;

//   & span:first-child {
//     font-weight: 500;
//   }

//   & span:last-child {
//     color: var(--color-grey-500);
//     font-size: 1.2rem;
//   }
// `;

// const Amount = styled.div`
//   font-family: 'Sono';
//   font-weight: 500;
// `;

// //import { parseISO, format, isToday } from 'date-fns';

// function BookingRow({
//   booking: {
//     id: bookingId,
//     startDate,
//     endDate,
//     numNights,
//     totalPrice,
//     status,
//     guests = {}, // Default to an empty object if guests is undefined
//     cabins = {},  
//   },
// }) {
//   const { fullName: guestName = 'Unknown Guest', email = 'No Email' } = guests;
//   const { name: cabinName = 'Unknown Cabin' } = cabins;
//   const { mutate: deleteBooking, isLoading: isDeleting } = useDeleteBooking();
//   const { mutate: checkout, isLoading: isCheckingOut } = useCheckout();

//   // let Name = "guestName";


//   const navigate = useNavigate();

//   const statusToTagName = {
//     unconfirmed: 'blue',
//     'checked-in': 'green',
//     'checked-out': 'silver',
//   };

//   // Ensure startDate and endDate are valid Date objects or strings
//   const validStartDate = startDate instanceof Date ? startDate.toISOString() : startDate;
//   const validEndDate = endDate instanceof Date ? endDate.toISOString() : endDate;

//   return (
//     <Table.Row role="row">
//       <Cabin>{cabinName}</Cabin>

//       <Stacked>
//         <span>{guestName}</span>
//         <span>{email}</span>
//       </Stacked>

//       <Stacked>
//         <span>
//           {validStartDate && isToday(new Date(validStartDate))
//             ? 'Today'
//             : validStartDate
//             ? formatDistanceFromNow(validStartDate)
//             : 'Invalid Date'}{' '}
//           &rarr; {numNights} night stay
//         </span>
//         <span>
//           {validStartDate
//             ? format(new Date(validStartDate), 'MMM dd yyyy')
//             : 'Invalid Date'}{' '}
//           &mdash;{' '}
//           {validEndDate
//             ? format(new Date(validEndDate), 'MMM dd yyyy')
//             : 'Invalid Date'}
//         </span>
//       </Stacked>

//       <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>

//       <Amount>{formatCurrency(totalPrice)}</Amount>

//       <Modal>
//         <Menus.Menu>
//           <Menus.Toggle id={bookingId} />
//           <Menus.List id={bookingId}>
//             <Menus.Button
//               onClick={() => navigate(`/bookings/${bookingId}`)}
//               icon={<HiEye />}
//             >
//               See details
//             </Menus.Button>

//             {status === 'unconfirmed' && (
//               <Menus.Button
//                 onClick={() => navigate(`/checkin/${bookingId}`)}
//                 icon={<HiArrowDownOnSquare />}
//               >
//                 Check in
//               </Menus.Button>
//             )}

//             {status === 'checked-in' && (
//               <Menus.Button
//                 onClick={() => checkout(bookingId)}
//                 disabled={isCheckingOut}
//                 icon={<HiArrowUpOnSquare />}
//               >
//                 Check out
//               </Menus.Button>
//             )}

//             <Menus.Button icon={<HiPencil />}>Edit booking</Menus.Button>

//             <Modal.Open opens="delete">
//               <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
//             </Modal.Open>
//           </Menus.List>
//         </Menus.Menu>

//         <Modal.Window name="delete">
//           <ConfirmDelete
//             resource="booking"
//             onConfirm={(options) => deleteBooking(bookingId, options)}
//             disabled={isDeleting}
//           />
//         </Modal.Window>
//       </Modal>
//     </Table.Row>
//   );
// }


import styled from "styled-components";
import { format, isToday } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; 
import Tag from "../../ui/Tag";
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    status,
    guest = {},
    cabins = {},
  },
}) {
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const { fullName: guestName = 'Unknown Guest', email = 'No Email' } = guest;
  const { name: cabinName = 'Unknown Cabin' } = cabins;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="booking"
            disabled={isDeleting}
            onConfirm={() => deleteBooking(bookingId)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}






// Add PropTypes for validation
BookingRow.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    numNights: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    guest: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
    cabins: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default BookingRow;
