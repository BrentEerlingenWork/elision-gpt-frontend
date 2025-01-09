'use client'

import { MessageCircle, PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type Conversation = {
  id: number,
  title: string
}

export function Sidebar() {
  const [conversations, setConversations] = useState<Conversation[]>([])

  const startNewConversation = () => {
    const newId = conversations.length + 1
    setConversations([...conversations, { id: newId, title: `Conversation ${newId}` }])
  }

  return (
    <div className="w-64 bg-gray-800 text-white p-4 flex flex-col h-full">
      <button
        onClick={startNewConversation}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center mb-4"
      >
        <PlusCircle className="mr-2" size={20} />
        New Conversation
      </button>
      <nav>
        {conversations.map((conv) => (
          <Link
            key={conv.id}
            href={`/conversation/${conv.id}`}
            className="block py-2 px-4 hover:bg-gray-700 rounded mb-1 flex items-center"
          >
            <MessageCircle className="mr-2" size={20} />
            {conv.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}

