import Head from 'next/head';
import {
  AiFillGithub,
  AiFillLinkedin,

} from "react-icons/ai";

import Image from "next/image";
import image1 from "../public/james.jpg";
import  image2 from "../public/20220209_112040.jpg"
import image3 from "../public/IMG-20220711-WA0006.jpg"



export default function Home() {
  return (


    <div>
      <Head>
        <title>James Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main  className=" bg-white px-20 dark:bg-gray-900 md:px-20 lg:px-60 scroll-smooth">
      <section >
            <h1 class= "h-5">              
            </h1>
            </section>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
</svg>





      <section className="min-h-screen ">

    <nav className="sticky  top-5 z-10 bg-white">
      

  <div className="max-w-5xl mx-auto px-4">
    
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-900 font-semibold"></span>
      <div className="flex space-x-4 text-gray-900">
        
        <a class="no-underline hover:underline ... text-2x2 py-1 text-teal-600" href="#gallery">Gallery</a>
        <a class="no-underline hover:underline ... text-2x2 py-1 text-teal-600"href="#about">About</a>
        <a class="no-underline hover:underline ... text-2x2 py-1 text-teal-600"href="#skills">Skills</a>
        <a class="no-underline hover:underline ... text-2x2 py-1 text-teal-600"href="#contact">Contacts</a>

        <a href="mailto:mokoenantethe@gmail.com" class="bg-teal-600 bg-sky-50 hover:bg-teal-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-teal-600   dark:focus:bg-sky-50 " >
       
      
        Hire Me</a>
        
      </div>
    </div>
  </div>
</nav>
    

      <div class="hidden md:inline-flex my-10 md:ml-10  rounded-sm w-full  justify-center">

     

      <Image  class="rounded-full" src={image1} width={250} height={250}/>

      </div>
            
        <div className="text-center p-10 py-10">
           
            <h2 className=" py-2 text-teal-600 font-bold dark:text-teal-400 md:text-4xl">
              Ntethe James Mokoena
            </h2>
            <h3 className=" dark:text-white md:text-3xl"> 
              Software Developer  
              
            </h3>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400 ">
            

                <a 
                href="https://www.linkedin.com/in/ntethe-james-mokoena-354a3021b/"
                target="_blank"
                rel="noopener noreferrer">
                  <span className="icon">
                  <AiFillLinkedin />
                  </span>
                </a>

                <a
                
                 href="https://github.com/jamesmokoena"
                target="_blank"
                rel="noopener noreferrer"
                             >
               <span className="icon">
               <AiFillGithub />
               </span>
               </a>

              </div>
         
            </div>
           

          
         
       <section>
        <div id='gallery'>
        <section >
            <h1 class= "h-40">              
            </h1>
            </section> 
       
       <h3 class=" text-teal-600 font-bold opacity-10 text-5xl  bg-blend-soft-light">Gallery</h3>
      
         
        
         <section >
            <h1 class= " h-40">              
            </h1>
            </section> 
       <div className='flex items-center justify-between h-24 text-white shadow-md space-x-2 '>
        
       <Image  className='rounded-full ' src={image1} width={300} height={300}  />
       <Image  class='rounded-md' src={image2} width={300} height={300}  />
       <Image  className='rounded-full ' src={image3} width={300} height={300}  />
       </div>
       </div>
       </section>
      </section>
      <section>

      <section >
            <h1 class= "h-40">              
            </h1>
            </section> 


            

          <div id='about'>
          <section >
            <h1 class= "h-60">              
            </h1>
            </section> 
            <h3 class=" text-teal-600 font-bold opacity-10 text-5xl  bg-blend-soft-light">About</h3>
            <section >
            <h1 class= "h-20">              
            </h1>
            </section>
            <p className="text-md py-2 leading-9 text-gray-900 dark:text-gray-200">
            I am a highly passionate software developer with experience in Python, Java, web development, including object-oriented 
            programming and test-driven development. I am a well organized and productive individual with a huge interest in automation testing, backend development and web development.
            </p>
            <section >
            <h1 class= "h-60">              
            </h1>
            </section>
          </div>

             <section >
            <h1 class= "h-30">              
            </h1>
            </section>
            
        <div id='skills' className="lg:flex gap-13">
          
          
        <h3 class=" text-teal-600 font-bold opacity-10 text-5xl  bg-blend-soft-light">Skills</h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
             
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Java
              </h3>
              <p className="py-2">
                My introduction to Java was through Object Oriented Programming.
              </p>
              <h4 className="py-4 text-teal-600">Projects</h4>
              <p className="text-gray-800 py-1">Client-Server Project called (Robots Worlds)</p>
              <p className="text-gray-800 py-1">Mastermind</p>
              <p className="text-gray-800 py-1">Hangman</p>
              <p className="text-gray-800 py-1">Toy Robot 5</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                C#
              </h3>
              <p className="py-2">
                I used C# when while doing Qaulity Assurance, I've done different kinds of testing.
              </p>
              <h4 className="py-4 text-teal-600">I have Done</h4>
              <p className="text-gray-800 py-1"></p>
              <p className="text-gray-800 py-1">Unit testing</p>
              <p className="text-gray-800 py-1">API Testing</p>
              <p className="text-gray-800 py-1">and</p>
              <p className="text-gray-800 py-1">Graphic User Interface (GUI) Testing</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
             
              <h3 className="text-lg font-medium pt-8 pb-2 ">Web development</h3>
              <p className="py-2">
                I have enjoyed developing web applications for the past 5 years
              </p>
              <h4 className="py-4 text-teal-600">Tools</h4>
              <p className="text-gray-800 py-1">Html CSS JavaScript</p>
              <p className="text-gray-800 py-1">VueJS</p>
              <p className="text-gray-800 py-1">React Js</p>
              <p className="text-gray-800 py-1">TailwindCSS</p>
            </div>
          </div>
         
         
        </section>
        
        <section >
            <h1 class= "h-60">              
            </h1>
            </section>


     <section className="text-4xl py-1 text-teal-600 " id='contact'>
        <div class="container mx-auto">
    
      
    <div class="-mx-4 flex flex-wrap lg:justify-between">
      <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
        <div class="mb-12 max-w-[570px] lg:mb-0">
        <h3 class=" text-teal-600 font-bold opacity-10 text-5xl bg-blend-soft-light">Contact Me</h3>

           <section >
            <h1 class= "h-12">              
            </h1>
            </section> 
         
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="fill-current"
              >


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

               
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">My Location</h4>
              <p class="text-body-color text-base">
                Johannesburg, South Africa
              </p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="24"
                height="26"
                viewBox="0 0 24 26"
                class="fill-current"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
</svg>
       
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Phone Number</h4>
              <p class="text-body-color text-base">(+27) 64 412 2947</p>
            </div>
          </div>
          <div class="mb-8 flex w-full max-w-[370px]">
            <div
              class="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]"
            >
              <svg
                width="28"
                height="19"
                viewBox="0 0 28 19"
                class="fill-current"
              >
                <path
                  d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z"
                />
              </svg>
            </div>
            <div class="w-full">
              <h4 class="text-dark mb-1 text-xl font-bold">Email Address</h4>
              <p class="text-body-color text-base">mokoenantethe@gmail.com</p>
            </div>
            
          </div>
          
            <div class="bg-white flex space-x-12 p-12 justify-center items-center">
    <div class="h-20 w-20 bg-blue-500 p-2 lg:animate-spin md:animate-spin animate-none rounded-md"></div>
    <div class="h-20 w-20 bg-purple-500 p-2 animate-ping lg:animate-ping md:animate-ping animate-none rounded-md"></div>
    <div class="h-20 w-20 bg-green-500 p-2 animate-bounce lg:animate-bounce md:animate-bounce animate-none rounded-md"></div>
    <div class="h-20 w-20 bg-gray-500 p-2 animate-pulse lg:animate-pulse md:animate-pulse animate-none rounded-md"></div>
  </div>
        </div>
      </div>
    </div>
  </div>
  <section >
            <h1 class= "h-20">              
            </h1>
            </section> 

  

</section>


      </main>
    </div>
  )
}
