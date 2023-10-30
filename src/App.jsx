import { useState } from 'react'
import './App.css'


function App() {
  const [loginData, setData] = useState({userid :"" , password:""})

  console.log(loginData);



  function changeHandler (event){
    setData (prevFormData => {return{
          ...prevFormData ,
          [event.target.name] : event.target.value
        }
      });
  }

  function updateHandler (event){
    event.preventDefault();
    const displayInfo = document.querySelector('.displayInfo');
    displayInfo.innerText = `User ID: ${loginData.userid},
     Password: ${loginData.password}`;
 
    
  }

  return (
    <>
      <div className='backgroundIMG '>
 
      <h1 className=' text-[6rem] flex justify-center italic drop-shadow-2xl shadow-black text-white'> Travel Diary</h1>
        <div className=' h-[100vh] w-[100vw] flex justify-center ' >
          

          <form className=' bg-black w-[350px] h-[400px] rounded-3xl opacity-70 flex justify-center items-center '>
            
            <div>

            <label htmlFor='userid' className='text-white mt-6'>
              User ID
            </label>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type='text'
              placeholder='User ID'
              onChange={changeHandler}
              name = "userid"
              className='w-full rounded-md px-4 py-2 mt-2 text-black'
           ></input>

            <br/>
            <br/>
            <label htmlFor='password' className='text-white mt-6'>Password</label>
              &nbsp;&nbsp;&nbsp;
            <input
              type='text'
              placeholder='password'
              onChange={changeHandler}
              name='password'
              className='w-full rounded-md px-4 py-2 mt-2 text-black'
            />
            <br/>
            <br/>

            <div className='flex justify-center'>
              <button
                 className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none '
                onClick={updateHandler}>
                Login
              </button>
            </div>
            
            <br/>
            <br/>
            <div className='text-white mt-4 text-lg displayInfo'>

            </div>

            </div>


            
          </form>



          
        </div>
        
        
      </div>
      
    </>
  )
}

export default App
