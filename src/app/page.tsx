import { ArrowRight, CheckCircle, LayoutDashboard, Settings, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/src/components/ui/button"
import AnimatedSection from "@/src/components/app/animated-section"

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-2 items-center text-xl font-bold">
                        <Zap className="h-6 w-6 text-primary" />
                        <span>OrdemPro</span>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-2">
                            <Link
                                href="#recursos"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Recursos
                            </Link>
                            <Link
                                href="#como-funciona"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Como Funciona
                            </Link>
                            <Link
                                href="#precos"
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                            >
                                Preços
                            </Link>
                            <Button  variant="outline" size="sm" className="mr-2" asChild>
                                <Link href="/login">Entrar</Link>
                            </Button>
                            <Button size="sm">
                                Começar Grátis
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <AnimatedSection className="container mx-auto py-20 md:py-28">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Gerencie suas <span className="text-primary">ordens de serviço</span> com facilidade
                        </h1>
                        <p className="mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            Simplifique o gerenciamento de ordens de serviço, aumente a produtividade e melhore a satisfação dos seus
                            clientes.
                        </p>
                        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Button size="lg">
                                Começar Agora
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Agendar Demonstração
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="container mx-auto py-8 md:py-12 lg:py-16">
                    <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl">
                        <Image
                            src="/placeholder.svg?height=720&width=1280"
                            width={1280}
                            height={720}
                            alt="Dashboard do sistema de ordens de serviço"
                            className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0 opacity-40"></div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="recursos" className="container mx-auto py-16 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos Poderosos</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Tudo o que você precisa para gerenciar suas ordens de serviço de forma eficiente
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <LayoutDashboard className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Dashboard Intuitivo</h3>
                            <p className="mt-2 text-muted-foreground">
                                Visualize todas as suas ordens de serviço em um único lugar com métricas importantes e filtros
                                avançados.
                            </p>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Gestão de Clientes</h3>
                            <p className="mt-2 text-muted-foreground">
                                Mantenha um registro completo dos seus clientes, histórico de serviços e preferências.
                            </p>
                        </div>
                        <div className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                <Settings className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold">Automação de Processos</h3>
                            <p className="mt-2 text-muted-foreground">
                                Automatize notificações, lembretes e atualizações de status para economizar tempo e reduzir erros.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="como-funciona" className="bg-muted py-16 md:py-20">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">
                                Conheça o fluxo de trabalho simplificado do nosso sistema
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 items-center">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Registre a Ordem de Serviço</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Cadastre rapidamente novas ordens com todos os detalhes necessários em um formulário intuitivo.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Acompanhe o Progresso</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Visualize o status de cada ordem em tempo real e atualize conforme o serviço avança.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Finalize e Fature</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Conclua a ordem, registre os serviços realizados e gere a fatura automaticamente.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-xl border bg-background shadow-xl">
                                <Image
                                    src="/placeholder.svg?height=600&width=800"
                                    width={800}
                                    height={600}
                                    alt="Fluxo de trabalho do sistema"
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="container mx-auto py-16 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Depoimentos de Clientes</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg">
                            Veja o que nossos clientes estão dizendo sobre o OrdemPro
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-muted"></div>
                                <div>
                                    <h4 className="font-bold">Carlos Silva</h4>
                                    <p className="text-sm text-muted-foreground">Oficina Mecânica</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                "Desde que implementamos o OrdemPro, conseguimos reduzir o tempo de processamento das ordens de serviço
                                em 40%. A interface é intuitiva e nossos técnicos adoraram."
                            </p>
                        </div>
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-muted"></div>
                                <div>
                                    <h4 className="font-bold">Ana Oliveira</h4>
                                    <p className="text-sm text-muted-foreground">Assistência Técnica</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                "O sistema nos ajudou a organizar melhor nosso fluxo de trabalho. As notificações automáticas para os
                                clientes reduziram drasticamente as ligações perguntando sobre o status dos serviços."
                            </p>
                        </div>
                        <div className="rounded-lg border p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-full bg-muted"></div>
                                <div>
                                    <h4 className="font-bold">Marcos Santos</h4>
                                    <p className="text-sm text-muted-foreground">Empresa de Manutenção</p>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                "A facilidade de acessar o sistema de qualquer lugar nos permitiu gerenciar equipes em campo com muito
                                mais eficiência. O suporte ao cliente é excelente."
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection id="precos" className="bg-muted py-16 md:py-20">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Planos e Preços</h2>
                            <p className="mt-4 text-muted-foreground md:text-lg">Escolha o plano ideal para o seu negócio</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="rounded-lg border bg-background p-6">
                                <h3 className="text-xl font-bold">Básico</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">R$99</span>
                                    <span className="ml-1 text-muted-foreground">/mês</span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">Ideal para pequenos negócios</p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Até 100 ordens/mês</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>2 usuários</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Suporte por email</span>
                                    </li>
                                </ul>
                                <Button className="mt-6 w-full">Começar Agora</Button>
                            </div>
                            <div className="rounded-lg border bg-background p-6 shadow-lg relative">
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                                    Popular
                                </div>
                                <h3 className="text-xl font-bold">Profissional</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">R$199</span>
                                    <span className="ml-1 text-muted-foreground">/mês</span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">Para empresas em crescimento</p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Até 500 ordens/mês</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>5 usuários</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Suporte prioritário</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Relatórios avançados</span>
                                    </li>
                                </ul>
                                <Button className="mt-6 w-full">Começar Agora</Button>
                            </div>
                            <div className="rounded-lg border bg-background p-6">
                                <h3 className="text-xl font-bold">Empresarial</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-3xl font-bold">R$399</span>
                                    <span className="ml-1 text-muted-foreground">/mês</span>
                                </div>
                                <p className="mt-2 text-sm text-muted-foreground">Para grandes operações</p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Ordens ilimitadas</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Usuários ilimitados</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Suporte 24/7</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>API completa</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                                        <span>Personalização avançada</span>
                                    </li>
                                </ul>
                                <Button className="mt-6 w-full">Começar Agora</Button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="container mx-auto py-16 md:py-20">
                    <div className="rounded-lg border bg-muted p-8 md:p-12 lg:p-16 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Pronto para transformar sua gestão de serviços?
                        </h2>
                        <p className="mt-4 text-muted-foreground md:text-lg max-w-[800px] mx-auto">
                            Junte-se a milhares de empresas que já estão economizando tempo e aumentando a satisfação dos clientes com
                            o OrdemPro.
                        </p>
                        <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
                            <Button size="lg">
                                Começar Gratuitamente
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="lg">
                                Falar com Consultor
                            </Button>
                        </div>
                    </div>
                </AnimatedSection>
            </main>
            <footer className="border-t py-8 md:py-12">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-2 items-center text-xl font-bold">
                        <Zap className="h-6 w-6 text-primary" />
                        <span>OrdemPro</span>
                    </div>
                    <div className="flex gap-8">
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Recursos
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Preços
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Blog
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Contato
                        </Link>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} OrdemPro. Todos os direitos reservados.
                    </div>
                </div>
            </footer>
        </div>
    )
}
