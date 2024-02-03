import { sessionStatus } from "@/utils/session"
import { redirect } from "next/navigation"

export const ServerSide = () => {
  const session = sessionStatus;
  if (!session) {
    redirect('/')
  }
  return (
    <div>This is a server component</div>
  )
}

export default ServerSide
