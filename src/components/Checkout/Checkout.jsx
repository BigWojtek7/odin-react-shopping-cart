import { useLocation } from "react-router-dom";

function Checkout() {

  const { state } = useLocation();
  const countItem = state.count
  
  return(
    <>
    {countItem ? <h1>Thank you for your purchase</h1>: <h1>Please add product to the card first!</h1>}
    </>
  ) 
}

export default Checkout;
