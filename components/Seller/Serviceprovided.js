import React from 'react'

const Serviceprovided = () => {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Welcome</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Services We provide</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="overflow-hidden w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png"/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Tours</h2>
          </div>
          <div className="flex-grow">
            {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> */}
            <img className='h-28 mx-auto' src="https://cdn-icons-png.flaticon.com/512/854/854894.png"/>

            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="overflow-hidden w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <img className="" src='https://cdn-icons-png.flaticon.com/512/7210/7210744.png'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Bike Rentals</h2>
          </div>
          <div className="flex-grow">
            {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> */}
            <img className="h-28 mx-auto" src='https://cdn-icons-png.flaticon.com/512/7210/7210744.png'/>

            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="overflow-hidden w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img className="" src='https://cdn-icons.flaticon.com/png/512/3393/premium/3393370.png?token=exp=1649319436~hmac=acd37be1039565673d0d551aafd58b27'/>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Cab Rentals</h2>
          </div>
          <div className="flex-grow">
            {/* <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p> */}
            <img className="h-28 mx-auto" src='https://cdn-icons.flaticon.com/png/512/3393/premium/3393370.png?token=exp=1649319436~hmac=acd37be1039565673d0d551aafd58b27'/>

            <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Serviceprovided