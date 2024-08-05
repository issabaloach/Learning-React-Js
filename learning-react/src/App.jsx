import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
var name = "issa"

let photos = [
  {
    id: 1,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVk1c7F6nuguH3GCuUWwnROvs7c1VHdb72w&s',
    name: 'Nissan GTR R31',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYd8hStv0w3KN12qFSv38iY_BOFz0YvENAexCylNIpv2TktzWKy5zOHOojA&s',
    name: 'Nissan GTR R32',
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUt12-60mi9t2GD4ZyZYoYZFf-8zWmzC3-3_aJPBlDglOxbBiIYxEi-Bc7A&s',
    name: 'Nissan GTR R33',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWRJ_UlPNp8INMvQ2AVPGIfyr4KieSnoptNw9fLorM7aFS-Sph34B_XrIKuQ&s',
    name: 'Nissan GTR R34',
  },
  {
    id: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKrrpUhqpMbTya5kqDAgO9pWeCObGY87TEA&s',
    name: 'Nissan GTR R35',
  }

]





  return (
    <>
      <div className='flex justify-center mt-6'>
      <img src="data:image/jpeg;base64,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" alt="" />
      </div>
      <h1 className='font-bold text-center text-3xl mt-3'>Hello {name}</h1>
      <div className="card justify-center items-center flex">
        <button className='border-2  h-9 w-[100px] rounded' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>


    {/* new code */}
    <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {photos.map((photo, index) => (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={photo.img}
              alt=""
            />
            <div className="p-6">
              <h1 className="title-font text-lg font-medium text-white mb-3">
                {photo.name}
              </h1>
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

export default App
