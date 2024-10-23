export const Button = ({ children }) => {
  return (
    <button className="gradient-button mt-[48px] flex h-[60px] w-[260px] cursor-default items-center justify-between rounded-none">
      <span className="z-101 ml-[32px] font-grotesk-bold font-[18px] font-bold text-[#ffffff]">
        {children}
      </span>
      <img
        className="z-100 mr-[32px]"
        src="../assets/arrow-link.svg"
        alt="Arrow Link"
      />
    </button>
  );
};
