import React from 'react'
import { cn } from '../../lib/utils'

function Link({children,name,className}) {
  return (<a 
       

        className={cn('',className)} 
        href={name}>{children}
        </a>
  )
}

export default Link