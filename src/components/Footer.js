import React from 'react'

function Footer() {
    let n = parseInt(window.innerWidth / 200);
  return (
    <div className='flex justify-center  flex-col mx-8 pb-8'>
       <p className='text-gray-400 flex justify-center text-lg mb-5'>Leading the Charge for Industries !</p>
         <div className='flex justify-between'>

         {
             [...Array(parseInt(n/2))].map((e, i) => 
             <img src={"https://th.bing.com/th/id/OIP.wmi6RlfAsZhkHbLHgYvgoAHaDJ?pid=ImgDet&rs=1"} className='h-10 w-32 rounded brightness-50'/>
             )
         }
<img src={"https://th.bing.com/th/id/OIP.wmi6RlfAsZhkHbLHgYvgoAHaDJ?pid=ImgDet&rs=1"} className='h-10 w-32 rounded '/>
          {   
             [...Array(parseInt(n/2))].map((e, i) => 
             <img src={"https://th.bing.com/th/id/OIP.wmi6RlfAsZhkHbLHgYvgoAHaDJ?pid=ImgDet&rs=1"} className='h-10 w-32 rounded brightness-50'/>
             )
         }
        </div>
    </div>
  )
}

export default Footer

