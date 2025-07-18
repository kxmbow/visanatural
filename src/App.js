import React, { useState, useEffect } from 'react';


import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import { Player } from '@lottiefiles/react-lottie-player';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [selected, setSelected] = useState('Search');
  return (
    <div 
      className="row" 
      style={{height:'100vh',overflow:'hidden',justifyContent:'center',alignItems:'center',margin:'auto'}}
    >
      {loaded &&
        <div className='col-xl-2 col-lg-2 col-md-2 d-flex h-100 mobilecontrol' style={{justifyContent:'center',alignItems:'center'}}>
          <Navbar 
            onClick1={() => setSelected('Search')}
            onClick2={() => setSelected('Favorites')}
            onClick3={() => setSelected('Settings')}
            Selected = {selected}
          />
        </div>
      }
      
      {loaded?
        (
          <div className="d-flex col-xl-10 col-lg-10 col-md-10 col-sm-12 h-100" style={{justifyContent:'center',alignItems:'center'}}>
            {selected == 'Search' &&
              <Search />
            }

            {selected == 'Favorites' &&
              <Favorites/>
            }

            {/* {selected == 'Settings' &&
              <Settings/>
            } */}

            <BottomNavbar 
              onClick1={() => setSelected('Search')}
              onClick2={() => setSelected('Favorites')}
              onClick3={() => setSelected('Settings')}
              Selected = {selected}
            />
        
          </div>
        )

        :

        (
          <div className="d-flex col-xl-10 col-lg-10 col-md-10 col-sm-12 h-100" style={{justifyContent:'center',alignItems:'center'}}>
            <div 
              className={`d-flex custom-card animate__animated animate__fadeIn`}
              style={{justifyContent:'center',alignItems:'center'}}
            >
              <Player
                autoplay
                onEvent={event => {
                  if (event === 'complete') setLoaded(true);
                }}
                src={require('./animations/loading.json')}
                style={{ width: '100%',justifyContent:'center', alignItems:'center'}}
              />
            </div>
          </div>
        )
      }    
          
          
    </div>
  );
}

export default App;
