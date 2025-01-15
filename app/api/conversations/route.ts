import { NextResponse } from 'next/server';

import { Conversation } from '../../../lib/types';

let conversations: Conversation[] = [];

export async function GET() {
  return NextResponse.json(conversations);
}

export async function POST(request: Request) {
  const { title } = await request.json();
  const newId = conversations.length + 1;
  const newConversation = { id: newId, title };
  conversations.push(newConversation);
  return NextResponse.json(newConversation);
}
