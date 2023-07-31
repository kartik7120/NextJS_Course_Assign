import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'

export default async function Login() {
    const handleSignUp = async (formData: FormData) => {
        'use server'
        const email = String(formData.get('email'))
        const password = String(formData.get('password'))

        const supabase = createServerActionClient({ cookies })
        await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: 'http://localhost:3000/auth/callback',
            },
        })

        revalidatePath('/')
    }

    const handleSignIn = async (formData: FormData) => {
        'use server'
        const email = String(formData.get('email'))
        const password = String(formData.get('password'))

        const supabase = createServerActionClient({ cookies })
        await supabase.auth.signInWithPassword({
            email,
            password,
        })

        revalidatePath('/')
    }

    const handleSignOut = async () => {
        'use server'
        const supabase = createServerActionClient({ cookies })
        await supabase.auth.signOut()
        revalidatePath('/')
    }

    return (
        <div className='h-full flex flex-col justify-center items-center gap-y-5 mt-15'>
            <p className='text-2xl text-white text-center'>Login</p>
            <div className='flex flex-row items-center justify-center'>
                <form action={handleSignUp}>
                    <label htmlFor="email" className='label'>
                        <span className='label-text'>Email</span>
                    </label>
                    <input name="email" className="input input-bordered w-full max-w-xs" id="email" />
                    <label htmlFor="password" className='label'>
                        <span className='label-text'> Password</span>
                    </label>
                    <input className="input input-bordered w-full max-w-xs" type="password" name="password" id="password" />
                    <div className='flex flex-row items-center gap-x-5 mt-5'>
                        <button className='btn btn-primary' >Sign up</button>
                        <button className='btn btn-secondary' formAction={handleSignIn}>Sign in</button>
                        <button className='btn btn-error' formAction={handleSignOut}>Sign out</button>
                    </div>
                </form>
            </div>
        </div>
    )
}