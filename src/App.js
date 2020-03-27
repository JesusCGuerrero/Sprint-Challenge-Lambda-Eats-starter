import React, { useState, useEffect} from 'react';
import Home from './components/Home'
import Form from './components/Form'
import Order from './components/Order'
import { Route, } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const App = () => {

  const {register, handleSubmit} = useForm()
  const [order, setOrder] = useState()
  const [post, setPost] = useState([])

  const onSubmit = data => {
    
    axios
      .post("https://reqres.in/api/users", data)
      .then(res => {

        setPost(res.data);

        setOrder(
          post
        );
        
      })
      .catch(err => {
        console.log(err.res);
      });
  }

  useEffect(() => {
    console.log(post)
  }, [post])

  return (
    <div>

      <Route exact path ="/">
        <Home />
      </Route>

      <Route exact path="/pizza">
        <Form 
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        nameValidation={(register({required: true, minLength: 2}))}
        required={register({required: true})}
        notRequired={register({required: false})}
        />
      </Route>

      <Route path="/pizza/order">
        <Order order={order}/>
      </Route>

    </div>
  );
};
export default App;
