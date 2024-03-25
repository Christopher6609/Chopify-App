import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  icon: IconProp;
  text: string;
  description: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
};

export default function DescriptionCard({
  icon,
  text,
  description,
  width,
  height,
  backgroundColor,
}: props) {
  return (
    <div >
      <div
        className="border rounded-[0.625rem] flex-col flex gap-4 justify-center items-center text-center md:px-5 px-2 py-5 "
        style={{ width, backgroundColor, height }}
      >
        <FontAwesomeIcon className="text-[#D26526] text-[2rem]" icon={icon} />
        <h3 className="font-[600] text-[1.125rem] leading-[1.688rem]">
          {text}
        </h3>
        <p>
          <a href="#">{description}</a>
        </p>
      </div>
    </div>
  );
}
