import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} key={1} />
        <Route path='/movie' element={<Detail />} key={2} />
      </Routes>
    </Router>
  )
}

export default App;