import React from 'react'
import TopCard from '../../components/topcard'
import { cn } from '../../../lib/utils'

function Dashboard({className}) {
  return (
    <section className={cn('grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8',className)}>
        <TopCard 
        amount={"$7,846"}
        name={"daily revenue"}
        percentile={"+18%"}
        />

        <TopCard 
        amount={"$1,437,846"}
        name={"ytd revenue"}
        percentile={"-11%"}
        />

        <TopCard 
        amount={"17,846"}
        name={"customers"}
        percentile={"+17%"}
        />
    </section>
  )
}

export default Dashboard