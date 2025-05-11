import { auth } from '@/auth';
import { AppSidebar } from '@/src/components/app/AppSidebar';
import Footer from '@/src/components/app/Footer';
import Header from '@/src/components/app/Header';
import { SidebarProvider, SidebarTrigger } from '@/src/components/ui/sidebar';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await auth();

    const userName = session?.user?.name;

    if (!session) {
        return redirect('/login')
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <div className='min-h-screen w-full flex flex-col'>
                <SidebarTrigger className='absolute' />
                <Header userName={userName ?? ''} />
                <main className='flex-grow'>
                    {children}
                </main>
                <Footer />
            </div>
        </SidebarProvider>
    )
}
