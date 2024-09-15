import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex sm:h-[400px] md:h-[480px] rounded-lg overflow-hidden bg-gray-400  bg-clip-padding
    backdrop-filter backdrop-blur-lg bg-opacity-0">
    <Sidebar/>
    <MessageContainer/>
    </div>
  )
}

export default Home
