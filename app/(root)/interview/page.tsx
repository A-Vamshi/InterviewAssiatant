import Agent from '@/components/Agent'
import React from 'react'

const Page = () => {
  return (
    <>
        <h3 className=''>Interview Agent</h3>
        <Agent userName="You" userId="user1" type="generate" />
    </>
  )
}

export default Page