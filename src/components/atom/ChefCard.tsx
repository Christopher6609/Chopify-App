import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type props = {
  icon: IconProp;
  name: string;
  role: string;
  img: string;
};

export default function ChefCard({ icon, name, role, img }: props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-[21.938rem] h-[26.688rem] ">
        <img
          className="w-full h-full object-contain rounded-[0.625rem]"
          src={img}
        />
      </div>
      <div className=" flex flex-col justify-center items-center py-3">
        <h3 className="font-[poppins] font-[500] text-[1.25rem] leading-[1.875rem]">
          {name}
        </h3>
        <p className="font-[poppins] font-[400] text-[1rem] leading-[1.5rem] opacity-[0.65rem]">
          {role}
        </p>
        <div className="flex gap-[1.25rem]">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faX} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}
