'use server';

import { signIn } from '@/auth';

export default async function loginAction(_prevState: any, formData: FormData) {
    try {
        await signIn('credentials', formData);
        return { success: true }
    } catch (e:any) {
        if ( e.type === 'CredentialsSignin') {
            return { success: false, message: 'Dados de login incorretos.' };
        }

        return { success: false, message: 'Ops, algum erro aconteceu!' };
    }
}