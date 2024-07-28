"use client";
import { FaInstagram, FaLinkedin, FaPeopleGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { LiaBusinessTimeSolid } from "react-icons/lia";

export default function Content() {
  return (
    <section className="container mx-auto w-full px-4 xl:px-0 mt-7 md:mt-12 lg:mt-24">
      <div className="flex justify-between mb-10">
        <div className="flex flex-col gap-5 md:w-8/12 lg:w-7/12 ">
          <h1 className="text-xl font-semibold lg:text-3xl xl:text-6xl text-[#541E35]">
            Aprenda inglês com uma latina
          </h1>
          <p className="text-[#DF5D2E] text-xl lg:text-3xl xl:text-4xl">
            Sou uma fotógrafa que vivi nos estados unidos por dois anos e no
            chile por mais quatro anos. Conheça meu método acessível e dinâmico,
            com aulas adaptada a o sua necessidade, onde quer que você esteja.
          </p>
          <div className="flex gap-5 ">
            <a
              href="https://www.instagram.com/milasimoo/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaInstagram className="text-[#541E35] text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/camila-simonetti/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="text-[#541E35] text-4xl" />
            </a>
          </div>
        </div>

        <div className="hidden md:block aspect-square md:w-3/12 lg:w-4/12">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 mb-20" id="classes">
        <h2 className="text-2xl text-center lg:text-5xl text-[#541E35]">
          Aulas
        </h2>
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-y-0 md:gap-x-10">
          <div className="bg-[#6BB38E] items-center w-full flex flex-col justify-center p-4 aspect-square rounded-full">
            <GiTeacher className="text-[#541E35] text-6xl lg:text-7xl xl:text-8xl" />
            <h3 className="text-[#541E35] text-2xl lg:text-4xl xl:text-5xl">
              Inglês Geral
            </h3>
          </div>
          <div className="bg-[#6BB38E] items-center w-full  flex flex-col justify-center p-4 aspect-square rounded-full">
            <FaPeopleGroup className="text-[#541E35] text-6xl lg:text-7xl xl:text-8xl" />
            <h3 className="text-[#541E35] text-2xl lg:text-4xl xl:text-5xl">
              Conversação
            </h3>
          </div>
          <div className="bg-[#6BB38E] items-center w-full  flex flex-col justify-center p-4 aspect-square rounded-full">
            <LiaBusinessTimeSolid className="text-[#541E35] text-6xl lg:text-7xl xl:text-8xl" />
            <h3 className="text-[#541E35] text-2xl lg:text-4xl xl:text-5xl">
              Corporativo
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
