import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import LeftPanel from '../components/panels/leftPanel'
import RightPanel from '../components/panels/rightPanel'
import AnalogWatch from '../components/ui/analog_watch'

const Home: NextPage = () => {
  return (
      <>
        {/* <div>Hello</div> */}
          <Navbar/>
          <div className='flex contentPanel backdrop-blur-sm'>
            <LeftPanel/>
            <div className='flex-1 p-5'>
              <div className="grid grid-cols-3 gap-4">
                  <div className=" p-10 shadow-3xl box-border" key="0">
                    <AnalogWatch/>
                  </div>
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
