import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { addCustomerAction,removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';
function App() {

  const dispatch = useDispatch()

  const cash = useSelector(state=> state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  console.log(cash)
  const addCash = () => {
    dispatch({type:"ADD_CASH",payload:5})
  }

  const getCash = () => {
    dispatch({type:"GET_CASH",payload:5})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {

    dispatch(removeCustomerAction(customer.id))
  }
  return (
    <div className="App">
      <div>
        {cash}
      </div>
      <div>
        <button onClick={() => addCash()}>add cash</button>
      </div>
      <div>
        <button onClick={() => getCash()}>get cash</button>
      </div>
      <div>
        <button onClick={() => addCustomer(prompt())}>add customer</button>
      </div>
      <div>
        <button onClick={() => getCash()}>delete customer</button>
      </div>
      <div>
        <button onClick={() => dispatch(fetchCustomers())}>get customers from db</button>
      </div>

      {console.log(customers)}
      {customers.length > 0 ?
        <div> 
          {customers.map((item) => 
          
            <h4 onClick={() => removeCustomer(item)}>{item.name}</h4>
          )}
        </div> 
      
      :

        <div>
          no clients found
        </div>
      }
    </div>
  );
}

export default App;
