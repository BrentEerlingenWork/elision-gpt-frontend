import { Sidebar } from '@/components/sidebar'
import { Chat } from '@/components/chat'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Chat />
    </div>
  )
}

