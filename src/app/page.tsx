import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "@/lib/globals.css";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Portfólio",
  keywords: "Portfólio",
};

export default function Page({ params }: { params: { lang: string } }) {
  return (
    <>
      <div className="flex flex-col w-full h-full">
        <div className="flex pb-12 space-x-6">
          <Image 
            src="/perfil.png" 
            alt="Logo Perfil"
            width={512}
            height={512}
            className="rounded-full border-4 border-dark3 h-44 w-44 bg-white"
          > 
          </Image>
          <div className="flex flex-col w-full space-y-3">
            <span className="text-textgray text-4xl text-start font-bold">
              Felipe Lopes de Moura
            </span>
            <h1 className="text-textgray text-lg font-normal text-start">
              Desenvolvedor Full-Stack
            </h1>
            <h1 className="text-textgray text-lg font-normal text-start">
              Sou uma pessoa da área de TI, tenho facilidade em programação e gerenciamento de dados, tenho
              experiência em linguaguens tais como: Python, Java, JavaScript, LUA. Experiência na parte de criação de interface
              gráfica, programação de servidor SQL, redes e conhecimento em algumas linguagens de marcação.
            </h1>
            <div className="flex flex-col space-y-2">
              <span className="text-textgray text-2xl text-start font-bold">
                Contato
              </span>
              <div className="flex flex-wrap gap-2">
                  <a 
                    href="mailto:felipelopesdemoura@gmail.com"
                    className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md bg-dark3 text-gray1"
                  >
                    <MdOutlineMarkEmailRead className="text-white" size={25}/>
                    <span>E-mail</span>
                  </a>
                  <a 
                    target="_blank"
                    href="https://github.com/flopessz"
                    className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md bg-dark3 text-gray1"
                  >
                    <FaGithub className="text-white" size={25}/>
                    <span>Github</span>
                  </a>
                  <a 
                    target="_blank"
                    href="https://www.linkedin.com/in/felipe-lopes-de-moura-296936246"
                    className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md bg-blue-600 text-white"
                  >
                    <FaLinkedin className="text-white" size={25}/>
                    <span>Linkedin</span>
                  </a>
                  <a 
                    target="_blank"
                    href="https://wa.me/5511996950910"
                    className="flex space-x-2 hover:bg-dark4 items-center px-4 py-2 rounded-md bg-green-500 text-white"
                  >
                    <FaWhatsapp className="text-white" size={25}/>
                    <span>WhatsApp/Telefone</span>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-8">
          <div className="flex flex-col w-full">
            <span className="text-textgray text-3xl text-start font-bold">
              Formação Acadêmica
            </span>
            <h1 className="text-textgray text-lg font-normal text-start">
              Ensino Médio Completo – concluído em 2021
              Colégio Espaço Potencial Objetivo Cotia
              Graduação em Ciências da Computação – cursando/possível conclusão em 12/2025
              Universidade São Judas Tadeu - USJT
              6º Semestre Atualmente
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-textgray text-3xl text-start font-bold">
              Habilidade e Conhecimentos
            </span>
            <h1 className="text-textgray text-lg font-normal text-start">
              Linguagens de Programação: [Python, Java, JavaScript, LUA, TypeScript].
              Desenvolvimento Web/Linguagem de Marcação: [HTML, CSS, React, Next, Node].
              Banco de Dados: [SQL, MySQL, HeidSQL, MariaDB].
              Ferramentas de Desenvolvimento: [Visual Studio Code, GitHub, Colab].
              Pacote office: [Word, PowerPoint, Excel e Power BI]
            </h1>
          </div>
          <div className="flex flex-col w-full">
            <span className="text-textgray text-3xl text-start font-bold">
              Objetivos
            </span>
            <ul className="list-disc px-4 pt-2 text-lg font-normal text-textgray">
              <li>
                Aperfeiçoar habilidades de resolução de problemas.
              </li>
              <li>
                Fortalecer habilidades de trabalho em equipe.
              </li>
              <li>
                Desenvolver habilidades de gerenciamento de projetos.
              </li>
              <li>
                Aplicar e expandir conhecumento em tecnologias de ponta.
              </li>
              <li>
                Contribuir para o crescimento e sucesso da organização.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}