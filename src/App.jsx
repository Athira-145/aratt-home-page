
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import('./Pages/Home'))
function App() {


  return (
    <>
       <>
      <Suspense fallback={<div className="h-screen flex justify-center items-center">
        {/* <h1>Loading ...</h1> */}
        
      </div>}>

        <Router>
          

          <Routes>
            <Route exact path="/" element={<Home />} />
           
          </Routes>
          {/* } */}
        </Router>
      </Suspense>
    </>
     
    </>
  )
}

export default App
