import { NextResponse } from 'next/server'

let conversations = [
  { id: 1, title: 'Conversation 1' },
  { id: 2, title: 'Conversation 2' },
]

export async function GET() {
  return NextResponse.json(conversations)
}

export async function POST(request: Request) {
  const { title } = await request.json()
  const newId = conversations.length + 1
  const newConversation = { id: newId, title }
  conversations.push(newConversation)
  return NextResponse.json(newConversation)
}

