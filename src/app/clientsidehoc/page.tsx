'use client'
import withAuth from '@/components/withAuth'
import React from 'react'

function ClienSideHOC() {
  return (
    <div>This page is protectect by client side High Order Component</div>
  )
}

export default withAuth(ClienSideHOC)