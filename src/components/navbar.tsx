"use client";
export default function Navbar() {
  return (
    <nav className="container mx-auto w-full px-4 mt-3">
      <div className="flex bg-white flex-col md:flex-row md:items-end pb-2 md:justify-between border-b">
        <img
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8eb79c94b80aa0f3e9df2d163d9e02c429d9c8b7302486a6c8633fbd5e7f88dd?apiKey=07b8ed4b9ddf43708c50ed510d369320&"
          className="w-full md:w-[134px]"
        />
        <div className="flex gap-5 justify-between">
          <a href="/" className="text-[#541E35] text-base lg:text-2xl">
            Home
          </a>
          <a href="#classes" className="text-[#541E35] text-base lg:text-2xl">
            Aulas
          </a>
          <a href="#about" className="text-[#541E35] text-base lg:text-2xl">
            Sobre a Professora
          </a>
        </div>
      </div>
    </nav>
  );
}
