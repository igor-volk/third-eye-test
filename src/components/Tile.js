export const Tile = ({ title, imgPath, alt }) => {
  return (
    <div className="relative overflow-hidden">
      <img className="z-1 h-full w-full object-cover" src={imgPath} alt={alt} />
      <div className="z-2 absolute bottom-0 flex h-[30%] w-full items-center justify-between px-[32px]">
        <span className="font-grotesk-bold text-[20px] leading-[24px] text-[#ffffff] sm:text-[24px] sm:leading-[30.72px]">
          {title}
        </span>
        <img src="../assets/arrow-link.svg" alt="Arrow Link" />
      </div>
    </div>
  );
};
