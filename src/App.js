import './App.css';
import House from "./components/House"
import Houses from "./components/Houses"
import Member from "./components/Member"
import Header from "./components/layout/header"

import {
  BrowserRouter as Router, 
  Routes,
  Route,

} from 'react-router-dom'

import gameOfThrones from './gameOfThrones'

export default function App() {
  const data = gameOfThrones
  // console.log(data)

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route 
            path ='/'
            element={<Houses data={data}/>}
          />

          <Route 
            path ='/houses/:id'
            element={<House data={data}/>}
          />

          <Route 
            path ='/houses/:houseId/members/:memberId'
            element={<Member data={data}/>}
          />

        </Routes>
      </Router>

    </div>
  )
}