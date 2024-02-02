'use client'

import { sessionStatus } from "@/utils/session"
import { redirect } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"

const ClientSide = () => {
  useLayoutEffect(() => {
    const session = sessionStatus;
    if (!session) {
      redirect('/')
    }
  }, [])

  return <p>This route is protected by client side</p>
}

export default ClientSide

// Não é uma boa prática autenticar a rota utilizando o useEffect pois a página ainda é renderizada antes do useEffect ser executado. Para isso, deve se utilizar o useLayoutEffect