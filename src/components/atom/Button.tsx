import { ReactNode } from "react";
type props = {
  text: string;
  padding?: string;
  children?: ReactNode;
  backgroundColor?: string;
  color?: string;
  borderRadius?: string;
  width?: string;
};

export default function button({
  text,
  children,
  backgroundColor,
  color,
  width,
  
}: props) {
  return (
    <button
      className="bg-[#D26526] w-[12rem] p-[1rem] text-white rounded-[0.625rem] text-[1rem] font-[poppins] font-[500] leading-[2rem]"
      style={{ backgroundColor, color, width }}
    >
      {text} {children}
    </button>
  );
}
