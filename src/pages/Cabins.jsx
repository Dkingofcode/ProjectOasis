//import { useEffect } from "react";
//import { useState } from "react";
//import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
//import CreateCabinForm from "../features/cabins/CreateCabinForm";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
//  const [showForm, setShowForm] = useState(false);


  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      {/* <p>Filter / Sort</p>
      <img src="https://wpglwmlcqrrpdyixdkic.supabase.co/storage/v1/object/sign/CabinImages/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDYWJpbkltYWdlcy9jYWJpbi0wMDEuanBnIiwiaWF0IjoxNzI4MTM1MDU4LCJleHAiOjE3NTk2NzEwNTh9.2uynhOVOEqX6qQ0WBvobJp4JoZBc2MRFz4ttWiJMClc&t=2024-10-05T13%3A30%3A57.337Z" /> */}
      <CabinTableOperations  />
    </Row>

    <Row>
    <CabinTable   />
   
    {/* <Button onClick={() => setShowForm((show) => !show)}>
      Add new cabin
    </Button>
    {showForm && <CreateCabinForm  />} */}
    <AddCabin  />
    </Row>
    </>
  );
}

export default Cabins;
