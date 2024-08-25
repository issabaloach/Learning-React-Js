function GtrHistory(){
    let photos = [
        {
          key: 1,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVk1c7F6nuguH3GCuUWwnROvs7c1VHdb72w&s',
          alt: 'gtr1',
          desc: 'The original GT-R started with Nissan Skyline range, and the Hakosuka (C10) GT-R became famous for its motorsports success in Japan',
          name: 'Nissan GTR R31',
          engine: '2.0L S20 inline-6, 160 hp'
        },
        {
          key: 2,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYd8hStv0w3KN12qFSv38iY_BOFz0YvENAexCylNIpv2TktzWKy5zOHOojA&s',
          alt: 'gtr2',
          desc: 'All-wheel-drive (ATTESA-ETS) and Super-HICAS four-wheel steering. Dominated Group A racing and gained a legendary status worldwide for its performance and technological advancements.',
          name: 'Nissan GTR R32',
          engine: '2.6L RB26DETT twin-turbo inline-6, 280 hp'
        },
        {
          key: 3,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUt12-60mi9t2GD4ZyZYoYZFf-8zWmzC3-3_aJPBlDglOxbBiIYxEi-Bc7A&s',
          name: 'Nissan GTR R33',
          alt: 'gtr3',
          desc: 'More refined than the R32, with improved handling and stability. It became the first production car to lap the Nürburgring Nordschleife in under eight minutes.',
          engine: '2.6L RB26DETT twin-turbo inline-6, 280 hp'
        },
        {
          key: 4,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRJ_UlPNp8INMvQ2AVPGIfyr4KieSnoptNw9fLorM7aFS-Sph34B_XrIKuQ&s',
          name: 'Nissan GTR R34',
          alt: 'gtr4',
          desc: 'Advanced aerodynamics, active LSD, improved ATTESA-ETS Pro AWD system, and a multifunction display in the cockpit that displayed real-time engine data. The R34 GT-R is perhaps the most iconic of the series, featured in pop culture and the Fast & Furious franchise.',
          engine: '2.6L RB26DETT twin-turbo inline-6, 280 hp'
        },
        {
          key: 5,
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKrrpUhqpMbTya5kqDAgO9pWeCObGY87TEA&s',
          name: 'Nissan GTR R35',
          alt: 'gtr5',
          desc: 'No longer branded as a Skyline, the R35 is an entirely new platform, representing a leap in technology. It introduced a dual-clutch transmission, sophisticated all-wheel-drive system, and a range of high-tech features. The R35 has undergone numerous updates over the years, with the latest models featuring even more power, improved suspension, and updated technology.',
          engine: '3.8L VR38DETT twin-turbo V6, varying between 480 hp',
        }
      ]
    
      return (
        <>
           <h1 className='text-3xl font-bold font-serif '>Nissan GTR History</h1>
          <div className="text-white body-font ">
            <div className="container px-5 py-24 mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
             
                {photos.map((photo) => (
                  <div key={photo.key} className="p-4 hover:scale-110">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src={photo.img}
                        alt={photo.alt}
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          {photo.engine}
                        </h2>
                        <h1 className="title-font text-2xl font-medium text-white mb-3 mt-3">
                          {photo.name}
                        </h1>
                        <p className="leading-relaxed mb-3">
                          {photo.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )
    }

    export default GtrHistory; 
