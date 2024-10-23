import './App.css';
import { Button } from './components/Button';
import { Tile } from './components/Tile';
import { useWindowWidth } from './hooks/useWindowWidth';

function App() {
  const winWidth = useWindowWidth();

  return (
    <div>
      <div className="grid">
        <div className="relative col-start-1 row-start-1 flex">
          <img
            className="absolute right-[10px] top-[10px] h-[77.22px] w-[140px] sm:left-[39px] sm:top-[23px] sm:h-[155px] sm:w-[281px]"
            src="../assets/stamp.png"
            alt="Postal Stamp"
          />
          <div className="ml-auto hidden h-full w-[517px] bg-wave-pattern bg-no-repeat sm:block" />
        </div>
        <div className="z-10 col-start-1 row-start-1 flex items-center justify-center sm:h-[675px]">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr]">
            <div className="flex w-full flex-col p-[30px] sm:max-w-[530px] sm:p-0 sm:pl-[96px]">
              <div className="gradient-text w-[max-content] translate-x-[-0.5em] transform font-haikus text-[24px] sm:mb-[1rem] sm:translate-x-[-1.2em] sm:text-[32px]">
                Our Extraordinary
              </div>
              <div className="mb-[32px] transform font-domaine-bold text-[30px] leading-[36px] text-main sm:mb-[26px] sm:translate-y-[-0.85rem] sm:text-[64px] sm:leading-[45px]">
                Villa Holidays
              </div>
              <div className="font-grotesk text-[1rem] leading-[25.6px] text-main sm:text-[18px] sm:leading-[28.8px]">
                Private villa holidays with Villa Travels are all about the
                extraordinary, especially when it comes to our collection of
                villas and chateaux. Quirky, stylish and full of character, our
                villas for rent have been handpicked by our knowledgeable
                destination experts who are the best in the business. So one
                year you could be in a medieval castle, and the next you could
                be soaking up the sun on your very own private island.
              </div>
              {winWidth > 640 && <Button>Book Now</Button>}
            </div>
            <div className="grid h-[374px] w-full grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[3px] sm:h-[555px] sm:max-w-[679px]">
              <Tile
                title="Villas with Pools"
                imgPath="../assets/pool-villas.png"
                alt="Villas with pools"
              />
              <Tile
                title="Romantic Villas"
                imgPath="../assets/romantic-villas.png"
                alt="Romantic villas"
              />
              <Tile
                title="Beach Villas"
                imgPath="../assets/beach-villas.png"
                alt="Beach villas"
              />
              <Tile
                title="Sustainable Villas"
                imgPath="../assets/sustainable-villas.png"
                alt="Sustainable villas"
              />
            </div>
            {winWidth <= 640 && (
              <div className="mb-[39px] flex w-full justify-center">
                <Button>Book Now</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
