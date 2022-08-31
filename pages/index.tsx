import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import LeftPanel from '../components/panels/leftPanel'
import RightPanel from '../components/panels/rightPanel'

const Home: NextPage = () => {
  return (
      <>
        {/* <div>Hello</div> */}
          <Navbar/>
          <div className='flex'>
            <LeftPanel/>
            <div className='flex-1 p-5'>
              <div className="grid grid-cols-4 gap-4">
                {
                  [1,2,3,4,5].map(key => 
                    (
                      <div className="bg-headerBgLightcyan p-10 shadow-3xl" key={key}>{key}</div>
                    ))
                }
                
              </div>
            </div>
            <RightPanel/>
          </div>
      </>
      )
}

export default Home
