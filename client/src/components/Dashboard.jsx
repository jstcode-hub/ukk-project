import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className='min-h-screen flex flex-col items-center bg-gradient-to-b from-sky-500 to-indigo-500'>
      <div className='w-full bg-white'>
        <div className='md:container md:mx-auto grid grid-cols-2 gap-x-36 py-24'>

          <div className='my-auto'>
            <h2 className='text-white text-5xl font-extrabold pb-2 pt-4 px-4 rounded-lg bg-gradient-to-tl from-sky-500 to-indigo-500' style={{ fontFamily: 'Josefin Sans' }}>
              Title
            </h2>

            <p className='text-justify font-medium my-3 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In, laborum beatae, saepe dignissimos corporis sapiente alias quisquam officiis at
              voluptas repudiandae assumenda, quo explicabo soluta deleniti quas? Minima, id in!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In, laborum beatae, saepe dignissimos corporis sapiente alias quisquam officiis at
              voluptas repudiandae assumenda, quo explicabo soluta deleniti quas? Minima, id in!
            </p>

            <Link className='rounded-full px-6 py-2 bg-black text-white font-bold shadow-lg hover:shadow-xl' href='/report'>Coba</Link>
          </div>

          {/* PIC 1 */}
          <div className='flex justify-end bg-white rounded-lg'>
            <lottie-player className='-mt-20' src="https://assets1.lottiefiles.com/packages/lf20_bbMc46ipEc.json" background="transparent" speed="1" style={{ height: "25rem" }} autoplay loop ref={ref}></lottie-player>
          </div>

        </div>
      </div>

      {/* TYPES */}
      <div className='lg:container lg:mx-auto grid grid-cols-3 gap-x-14 gap-y-6 py-16 px-10 text-white'>
        <div className='col-span-3 text-center text-5xl font-black' style={{ fontFamily: 'Josefin Sans' }}>Title</div>

        <div className='bg-white rounded-lg p-6 shadow hover:shadow-lg shadow-indigo-500/50 text-black'>
          <h2 className='text-2xl text-center font-bold' style={{ fontFamily: 'Josefin Sans' }}>Small</h2>
          <p className='text-justify font-medium mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, laborum beatae, saepe dignissimos corporis sapiente alias quisquam officiis at
            voluptas repudiandae assumenda, quo explicabo soluta deleniti quas? Minima, id in!
          </p>
          <Link className='rounded-full px-6 py-2 bg-indigo-500 hover:shadow-lg shadow-indigo-500/50 text-white font-bold' href='/report'>Coba</Link>
        </div>
        <div className='bg-white rounded-lg p-6 shadow hover:shadow-lg shadow-indigo-500/50 text-black'>
          <h2 className='text-2xl text-center font-bold' style={{ fontFamily: 'Josefin Sans' }}>Medium</h2>
          <p className='text-justify font-medium mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, laborum beatae, saepe dignissimos corporis sapiente alias quisquam officiis at
            voluptas repudiandae assumenda, quo explicabo soluta deleniti quas? Minima, id in!
          </p>
          <Link className='rounded-full px-6 py-2 bg-indigo-500 hover:shadow-lg shadow-indigo-500/50 text-white font-bold' href='/report'>Coba</Link>
        </div>
        <div className='bg-white rounded-lg p-6 shadow hover:shadow-lg shadow-indigo-500/50 text-black'>
          <h2 className='text-2xl text-center font-bold' style={{ fontFamily: 'Josefin Sans' }}>Large</h2>
          <p className='text-justify font-medium mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, laborum beatae, saepe dignissimos corporis sapiente alias quisquam officiis at
            voluptas repudiandae assumenda, quo explicabo soluta deleniti quas? Minima, id in!
          </p>
          <Link className='rounded-full px-6 py-2 bg-indigo-500 hover:shadow-lg shadow-indigo-500/50 text-white font-bold' href='/report'>Coba</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
