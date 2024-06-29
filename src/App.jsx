import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='h-screen w-screen flex flex-col md:flex-row'>
   
      <div className='left-page w-full md:w-1/2  flex flex-col items-center'>
        
        <div className='w-full flex justify-center mt-8 md:mt-0' style={{ marginBottom: '0px' }}>
          <img className='left__page-image' src="/111-Photoroom.png" alt="logo"  />
        </div>

        <div className='form__container flex flex-col items-center space-y-4 p-8' >
          <div className='flex flex-col justify-center items-center' style={{ width: '364px', height: '200px' }}>
            <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>Welcome Back</h1>
            <h4 style={{ fontSize: '15px', fontWeight: 'bold' }}>Login with your account to access dashboard</h4>
          </div>

          <div className='justify-center items-center space-y-4' style={{ width: '364px', height: '274px' }}>
            <div className='flex items-center w-full p-2 bg-white rounded-lg border border-gray-100' style={{ width: '364px', height: '52px' }}>
              <h2 className="text-gray-700 text-lg font-medium flex-grow text-center" style={{ fontSize: '15px' }}>Organization Name</h2>
            </div>

            <div className='flex items-center w-full p-2 bg-white rounded-lg bg-blue-50' style={{ width: '364px', height: '52px' }}>
              <i className="fas fa-user p-2 text-gray-500"></i>
              <input type="text" placeholder="Username" className="w-full p-2 outline-none bg-blue-50" style={{ height: '100%', borderRadius: '15px' }} />
            </div>

            <div className='flex items-center w-full p-2 bg-white rounded-lg bg-blue-50' style={{ width: '364px', height: '52px', borderRadius: '13px' }}>
              <i className="fas fa-lock p-2 text-gray-500"></i>
              <input type="password" placeholder="Password" className="w-full p-2 outline-none bg-blue-50" style={{ height: '100%', borderRadius: '15px' }} />
            </div>

            <div className='flex justify-center w-full'>
              <button className='text-white p-2 rounded-lg shadow-2xl' style={{ width: '124px', height: '52px', borderRadius: '15px', fontSize: '15px', fontWeight: 'bold', background: 'linear-gradient(to right, #9181F4, #5038ED)' }}>Login Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='right-page w-full md:w-1/2  flex flex-col items-center justify-center' >
        <div className='right-round-circle relative flex items-center justify-center' >
          <img src="/33-Photoroom.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>

        <div className='w-11/12 md:w-96 flex flex-col items-start p-4' style={{ backgroundColor: 'rgba(255, 255, 255, 0.21)', borderRadius: '46px', border: '3px solid rgba(255, 255, 255, 0.52)', width: '350px', height: '450px',  }}>
          <h1 style={{ color: '#FFFFFF', fontWeight: 'bold', fontFamily: 'Poppins', fontSize: '48px', textAlign: 'left', lineHeight: '1.2', margin: '0' }}>
            Redefining <br /> Lab <br /> Excellence
          </h1>
          <img src="/222-Photoroom.png" alt="" style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '-50px' }} />
        </div>
      </div>
    </div>
  );
}

export default App;
