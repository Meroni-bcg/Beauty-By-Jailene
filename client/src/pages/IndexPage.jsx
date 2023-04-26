import {Link} from "react-router-dom";
import LoginPage from "./LoginPage";


export default function IndexPage() {
    return (
      <body>
      <header className="p-4 flex justify-between gap-5">
        <a href= "" className='flex items-center gap-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -90 rotate">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
<span className='font-bold text-xl'>Beauty by Jailene</span>
    </a>
      {/* search  */}
    <div className='flex gap-2 border border-gray-300 bg-orange-100 rounded-full py-3 px-4 shadow-md shadow-gray-300'>
      <div><a href= 'https://app.squarespacescheduling.com/schedule.php?owner=26626301'>Book</a> </div>
      <div className="border-l border-gray-300"></div>
      <div><a href= 'https://www.google.com/maps/dir//1371+W+Warm+Springs+Rd+a,+Henderson,+NV+89014/@36.0555377,-115.1150174,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80c8d141b142f4a3:0x197f80589c5c70ba!2m2!1d-115.0449773!2d36.0555581'  >Location </a></div>
      <div className="border-l border-gray-300"></div>
      <div><a href= 'http://www.beautybyjailene.com/contact.html'> Contact</a> </div>
      <div className="border-l border-gray-300"></div>
      <div><a href='http://www.beautybyjailene.com/'>Website</a> </div>
      <button className='bg-primary text-white px-0.4 rounded-full'>


      </button>
    </div>
      {/* user the link to login makes the icon a clickable link to another page */}
      <Link to={'/login'}className="flex items-center gap-2 border border-gray-300 bg-orange-100 rounded-full py-2 px-4">
         {/* hamburger menu */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>
   <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">{/* user icon */}
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>

</div>
      </Link>
    </header> 

<main id="box">

    <div className="container1">
          <div className="container-img1">
            <img src="http://www.beautybyjailene.com/uploads/1/4/2/4/142461732/editor/bry.jpg?1663353873" alt="Microblading.jpg" />
            Microblading
          </div>
        </div>

        <div className="container2">
          <div className="container-img2">
            <img src="http://www.beautybyjailene.com/uploads/1/4/2/4/142461732/published/thumbnail.jpg?1673046403" alt="OmbreBrows.jpg" />
            Ombre Brow
          </div>
        </div>

        <div className="container3">
          <div className="container-img3">
            <img src="http://www.beautybyjailene.com/uploads/1/4/2/4/142461732/published/thumbnail-orig.jpg?1673046617" alt="PowderCombo.jpg.jpg" />
            Powder Combo
          </div>
        </div>

        <div className="container4">
          <div className="container-img4">
            <img src="http://www.beautybyjailene.com/uploads/1/4/2/4/142461732/jackie_orig.jpg" alt="Microblade&Shade1.jpg.jpg" />
            Microblade & Shade
          </div>
        </div>
</main>

  <div className="vid">
    <source src="Beauty-By-Jailene\assets\logo-vid.mp4" alt="C:\Users\TMadd\code\project2\Beauty-By-Jailene\assets\logo-vid.mp4" type="video/mp4"/>
  </div>
</body>

);
  
}