import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
    const res = NextResponse.next()

    const supabase = createMiddlewareClient({ req, res })
    await supabase.auth.getSession()
    res.headers.set("Access-Control-Allow-Origin", "*")
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    res.headers.set("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, Authorization, X-Request-With")
    return res
}