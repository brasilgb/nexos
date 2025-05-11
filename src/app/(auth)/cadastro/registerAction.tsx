'use server'


import db from '@/src/lib/db';
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';
export default async function registerAction(
    _prevState: any,
    formData: FormData
) {
    const entries = Array.from(formData.entries());
    const data = Object.fromEntries(entries) as {
        email: string;
        name: string;
        password: string;
    };

    if (!data.email || !data.name || !data.password) {
        return {
            message: 'Preencha todos os campos!',
            success: false,
        };
    }

    const user = await db.user.findUnique({
        where: {
            email: data.email,
        }
    });

    if (user) {
        return {
            message: 'Este usuário já existe.',
            success: false,
        }

    }

    await db.user.create({
        data: {
            email: data.email,
            name: data.name,
            password: hashSync(data.password)
        }
    });

    return redirect('/');
}