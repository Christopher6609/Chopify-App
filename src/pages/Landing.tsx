import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../assets/images/images";
import { faCartShopping,} from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
  const { logo } = Images;
  return (
    <main className="px-[4.25rem]">
      <header className="flex justify-between items-center py-[1.875rem]">
        <div className=" flex justify-start">
          <img src={logo} />
        </div>
        <div className="">
          <ul className="flex gap-[3.125rem]">
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] text-[#D26526]">
              <a href="#">Home</a>
            </li>
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] ">
              <a href="#">About</a>
            </li>
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] ">
              <a href="#">Contact</a>
            </li>
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] ">
              <a href="#">Delivery</a>
            </li>
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] ">
              <a href="#">Services</a>
            </li>
            <li className="font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] ">
              <a href="#"><FontAwesomeIcon icon={faCartShopping} /> </a>
            </li>
          </ul>
        </div>
        <div>
            <button className="border-[#D26526] border rounded-[0.625rem] px-[1.875rem] py-[0.625rem] font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] text-[#D26526]">Sign Up</button>
        </div>
      </header>
    </main>
  );
}
