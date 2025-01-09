import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Remove any redirection logic if it exists
  return NextResponse.next()
}

