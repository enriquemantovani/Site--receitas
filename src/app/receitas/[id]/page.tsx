import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ReceitaPage() {
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto ">
                <Link className="flex text-orange-500 hover:text-orange-700" href="receitas">
                <ChevronLeft />
                    Voltar para receitas
                </Link>

                <section>
                    {/*Imaem de capa da receita*/}
                    <div className="relative h-96 w-full">
                        <Image
                            src=""
                            fill
                            alt="Titulo da receita"
                        />
                    </div>

                    {/*Descrição da receita*/}
                    <div>
                        <h1>Titulo da receita</h1>
                        <p>Descrição</p> 

                        {/*Infos de preparo*/}
                        <div>
                            {/*TODO: componentes da info*/}
                        </div>  

                        {/*colunas */}
                        <div>
                            {/* coluna dos ingredientes*/}
                            <div>

                            </div>

                            {/*coluna do preparo */}
                            <div>
                                {/*TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )

}