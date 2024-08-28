import {Routes,Route} from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import Newposts from './Newposts'
import PostPages from './PostPages'
import About from './About'
import Footer from './Footer'
import './App.css'
import EditPost from './EditPost'
import { DataProvider } from './context/DataContext'


function App() {
 

  return (
    <div className='App'> 
    <DataProvider>
     <Header title={'Social Media'}/>
     <Nav/>
    <Routes>
    <Route path="/" element={<Home/>  }/>
    <Route path="/post">
      <Route index element={<Newposts/>  }/>
    </Route>
     <Route path="/post/:id" element={<PostPages /> } />
     <Route path="/edit/:id" element={<EditPost />}  />
     <Route path="/about" element={<About/> }/>
     {/* <Route path="*" element={<Missing/>  }/> */}
     </Routes>  
     <Footer/>
     </DataProvider>
    </div>
  )
}

export default App
