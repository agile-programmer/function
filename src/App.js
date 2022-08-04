
import { Button } from '@mui/material';
import React from 'react';
import { BrowserRouter, Routes, Route,Link, NavLink } from 'react-router-dom';
import Add from './components/Add';
import Item from './components/Item';
import List from './components/List';
import Main from './components/main';
 const App = () => {
   return ( 
     <BrowserRouter>
        <div className='app'>
             <div className='nav'>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'active' : '' }
                >
                    add
                </NavLink>
                <NavLink
                    to="/main"
                    className={({isActive}) => isActive ? 'active' : '' }
                >
                    main
                </NavLink>
                <NavLink
                    to="/list"
                    className={({isActive}) => isActive ? 'active' : '' }
                >
                    add
                </NavLink>
              </div> 
                  <Routes>
                      <Route 
                          path='/'
                          element={<Add />}
                      />
                      <Route 
                          path='/main'
                          element={<Main />}
                      />
                      <Route 
                          path='/list'
                          element={<List />}
                      />
                      <Route 
                          path='/list/:id'
                          element={<Item />}
                      />
                  </Routes>
        </div>
     </BrowserRouter>
    );
 }
  
 export default App;



// import Swiper from 'swiper';

// const App = () => {
//     return ( 
//         <Swiper>
//             <SwiperSlide>Slide 1</SwiperSlide>
//             <SwiperSlide>Slide 2</SwiperSlide>
//             <span slot="container-start">Container Start</span>
//             <span slot="container-end">Container End</span>
//             <span slot="wrapper-start">Wrapper Start</span>
//             <span slot="wrapper-end">Wrapper End</span>
//         </Swiper>
//      );
// }
 
// export default App;