import React from 'react'
import NavBar from '../components/navbar'
import { cn } from '../../lib/utils'
import SideBar from '../components/sidebar'

function Provider(
    {children}
) {
  return (
    <>
      <SideBar>
        {children}
      </SideBar>
    </>
  )
}

export default Provider