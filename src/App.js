import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  // Coupons,
  // News,
  Covid,
  // Recipes,
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />        
        <Sidebar />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>
          
          {/* <Route exact path='/coupons'>
            <Coupons />
          </Route> */}
{/* 
          <Route exact path='/news'>
            <News />
          </Route> */}

          <Route exact path='/covid'>
            <Covid />
          </Route>
          
          <Route exact path='/about'>
            <About />
          </Route>
          
          <Route exact path='/cart'>
            <Cart />
          </Route>
          
          <Route exact path='/products'>
            <Products />
          </Route>
{/* 
          <Route exact path='/recipes'>
            <Recipes />
          </Route> */}
          
          <Route exact path='/products/:id' children={<SingleProduct />} />
          
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          
          <Route path='*'>
            <Error />
          </Route>

          {/* <Route path='/cocktails'>
            <Cocktails />
          </Route> */}
        
        </Switch>
        
        <Footer />

      </Router>
    </AuthWrapper>
  )
}

export default App
