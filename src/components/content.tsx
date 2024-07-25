"use client";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Content() {
  return (
    <>
      <div className="flex justify-between mt-32">
        <div>
          <h1 className="text-2xl lg:text-6xl text-[#541E35]">
            Aprenda inglês com uma latina
          </h1>
          <p className="text-[#DF5D2E] text-xl lg:text-6xl">
            Sou uma fotógrafa que vivi nos estados unidos por dois anos e no
            chile por mais quatro anos. Conheça meu método acessível e dinâmico,
            com aulas adaptada a o sua necessidade, onde quer que você esteja.
          </p>
          <div className="flex gap-5 ">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className="hidden lg:block">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/11ace8da2927474cbb3fee96c021745c1fc0b4399abedd682d2649af9fa155d3?apiKey=07b8ed4b9ddf43708c50ed510d369320&"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <h2 className="text-2xl lg:text-5xl text-[#541E35]">Aulas</h2>
        <div>
          <div className="bg-[#6BB38E] aspect-square rounded-full">
            <h3 className="text-[#541E35] text-2xl">Inglês Geral</h3>
          </div>
          <div className="bg-[#6BB38E] aspect-square rounded-full">
            <h3 className="text-[#541E35] text-2xl">Conversação</h3>
          </div>
          <div className="bg-[#6BB38E] aspect-square rounded-full">
            <h3 className="text-[#541E35] text-2xl">Corporativo</h3>
          </div>
        </div>
      </div>
    </>
  );
}
