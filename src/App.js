// import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from './components/HomePage'
import Reservations from './components/Reservations'
import ConfirmReservations from './components/ConfirmReservations';
import About from './components/About';

function App() {
  const timeList = [
    {
      id: 0,
      time: '--',
      value: '',
    },
    {
      id: 1,
      time: '17:00 PM',
      value: '5-pm',
    },
    {
      id: 2,
      time: '18:00 PM',
      value: '6-pm',
    },
    {
      id: 3,
      time: '19:00 PM',
      value: '7-pm',
    },
    {
      id: 4,
      time: '20:00 PM',
      value: '8-pm',
    },
    {
      id: 5,
      time: '21:00 PM',
      value: '9-pm',
    },
    {
      id: 6,
      time: '22:00 PM',
      value: '10-pm',
    },
  ]

  const fetchData = (date) => {
    const time = []
    const result = []

    if (date.getDate()) {
      timeList.forEach((list) => time.push(list.time))

      for (let i = 0; i < time.length; i++) {
        if (date.getDate()) {
          result.push(time[i])
        }
      }
    }

    return result
  }

  const submitData = (formData) => {
    if (formData) {
      return true
    } else {
      return false
    }
  }

  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitData(formData)) {
      navigate("/booking-a-table-on-the-little-lemon-website-react/confirm-reservations");
    }
  }

  // reducer function
  const updateTimes = (state, action) => fetchData(new Date(action))

  // initial state
  const initializeTimes = fetchData(new Date())

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

  return (
    <div>
      <Routes>
        <Route path="/booking-a-table-on-the-little-lemon-website-react" element={<HomePage />} />
        <Route path="/booking-a-table-on-the-little-lemon-website-react/about" element={<About />} />
        <Route path="/booking-a-table-on-the-little-lemon-website-react/about" element={<About />} />
        
        <Route
          path="/booking-a-table-on-the-little-lemon-website-react/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-a-table-on-the-little-lemon-website-react/confirm-reservations" element={<ConfirmReservations />} />
      </Routes>
    </div>
  );
}

export default App;
