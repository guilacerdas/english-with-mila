import { RxDotFilled } from "react-icons/rx";

export default function About() {
  return (
    <section className="container mx-auto px-4 xl:px-0 mb-10">
      <div
        className="flex flex-col justify-center items-center gap-y-10"
        id="about"
      >
        <h3 className="text-[#541E35] text-3xl lg:text-6xl ">Sobre Mim</h3>
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex justify-center item-center w-full md:w-3/12">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2625c733b0c2978b11c89a0a96d831baa2998986056a6d56bcdd4bddaeb53bb1?apiKey=07b8ed4b9ddf43708c50ed510d369320&"
            />
          </div>
          <ul className="flex flex-col">
            <li className="flex text-[#DF5D2E] text-base lg:text-3xl">
              <RxDotFilled className="text-2xl " />
              <p className="flex">36 anos, de Porto Alegre/RS</p>
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="aspect-square text-2xl" />
              <p>Intercambio AuPair nos Estados Unidos aos 22 anos</p>
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="aspect-square text-2xl" />
              <p>Intercambio AuPair nos Estados Unidos aos 22 anos</p>
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="text-2xl" />
              Certificação internacional de ensino de inglês (TEFL)
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="text-2xl" />
              Morei em Santiago do Chile por 4 anos
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="text-2xl" />
              Amo fotografia e conhecer culturas diferentes
            </li>
            <li className="text-[#DF5D2E] flex text-base lg:text-3xl">
              <RxDotFilled className="text-2xl" />
              10 anos ensinando inglês para nativos de português e espanhol
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
