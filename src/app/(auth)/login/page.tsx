import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/src/components/ui/card';
import Link from 'next/link';
import LoginForm from './login-form';
import { auth } from '@/auth';

export default async function LoginPage() {

  const session = await auth();
  return (
    <>
      <Card className="max-w-sm w-full rounded-2xl mt-12">
        <CardHeader>
          <h2 className="text-xl font-bold">Boas Vindas</h2>
          <CardDescription>Faça seu login com email e senha.</CardDescription>
          <div className='text-xs text-gray-500 py-4 w-52'>
            Dados de sessão 
            <p>
              {JSON.stringify(session)}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground mt-3">
        Não possui cadastro?{' '}
        <Link className="text-gray-800 hover:underline" href="/cadastro">
          Registre-se
        </Link>
        .
      </p>
    </>
  );
}