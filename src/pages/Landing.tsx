import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../assets/images/images";
import {
  faArrowRight,
  faCartShopping,
  faCircleUser,
  faClipboardCheck,
  faClock,
  faCreditCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Button, DescriptionCard } from "../components/atom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ChefCard from "../components/atom/ChefCard";

export default function Landing() {
  const { logo, introImage, aboutImg, aboutImg2, chef1, chef2, chef3 } = Images;
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
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="border-[#D26526] border rounded-[0.625rem] px-[1.875rem] py-[0.625rem] font-[poppins] text-[1.25rem] leading-[1.875rem] font-[600] text-[#D26526]">
            Sign Up
          </button>
        </div>
      </header>

      <section className="pt-[5.313rem]">
        <div className="flex">
          <div className="min-w-[48.563rem] flex flex-col gap-5">
            <h1 className="text-[4.063rem] font-[700] leading-[6.094rem] font-[poppins] text-[#000000]">
              Delivery First, Satisfaction All The Time
            </h1>
            <div className="w-[40.563rem]">
              <p className="text-[1.25rem] leading-[1.875rem] font-[400] font-[poppins] pt-[1rem]">
                Meal preped with love and care to suit your taste ood time,
                great taste eat healthy, eat clean , eat real food
              </p>
            </div>

            <div className="">
              <Button text="Order Now">
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Button>
            </div>
          </div>
          <div className="w-[51.437rem] flex justify-center">
            <div className="w-[30.12rem] h-[31.25rem]">
              <img className="w-full h-full object-contain" src={introImage} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[3rem]">
        <div className="flex gap-[3.75rem] justify-center">
          <DescriptionCard
            icon={faLocationDot}
            text="Hatfield,Hertfordshire"
            description="Get Directions"
            width="14.5rem"
          />
          <DescriptionCard
            icon={faClock}
            text="Everyday 9am-10pm"
            description="Working Hours"
            width="14.5rem"
          />
        </div>
      </section>
      <section className="py-[9.313rem] ">
        <div className=" flex justify-between ">
          <div className="w-[41rem]">
            <div className=" text-justify flex-col flex gap-3">
              <p className="text-[1rem] font-[poppins] font-[600] text-[#D26526]">
                About us{" "}
              </p>
              <h2 className="text-[2.5rem] font-[600] leading-[3.75rem] font-[poppins]">
                Food Is Very Important For Healthy And Happy Living
              </h2>
              <p className="text-[1rem] font-[poppins] font-[500] leading-[2rem]">
                At chopify we provide you with the best food and services that
                makes both your taste buds and pocket happy because we are so
                concernec with customers being happy our prices are very pocket
                friendly and our delivery service is top notch
              </p>
              <p className="text-[1rem] font-[poppins] font-[500] leading-[2rem]">
                At chopify we provide you with the best food and services that
                makes both your taste buds and pocket happy because we are so
                concernec with customers being happy our prices are very pocket
                friendly and our delivery service is top notch
              </p>
            </div>
            <div className="pt-[3.375rem]">
              <Button text="Read More" backgroundColor="#D26526" />
            </div>
          </div>
          <div className=" relative">
            <div className="w-[30.625rem] h-[29rem] ">
              <img
                className="w-full h-full object-contain rounded-[2rem]"
                src={aboutImg}
              />
            </div>
            <div className="w-[20.313rem] h-[18rem] absolute top-[25rem] right-[15rem]">
              <img
                className="w-full h-full object-contain rounded-[2rem]"
                src={aboutImg2}
              />
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-[#FAF8F8] mt-[3.875rem] ">
        <div className=" text-center pt-[4.75rem]">
          <h1 className="text-[2.5rem] leading-[3.75rem] font-[600] font-[poppins]">
            How To Order
          </h1>
          <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
            Follow these steps to place an order
          </p>
        </div>
        <div className="flex justify-between px-4 py-[4.75rem]">
          <DescriptionCard
            icon={faCircleUser}
            text="Sign Up"
            width="18.5rem"
            height="12.438rem"
            backgroundColor="white"
            description="This stage is where you register so you can order a meal ang get it delivered to you"
          />
          <DescriptionCard
            icon={faClipboardCheck}
            text="Pick a meal"
            width="18.5rem"
            height="12.438rem"
            backgroundColor="white"
            description="Select any of the meals finely prepared by our chef from our menu"
          />
          <DescriptionCard
            icon={faLocationDot}
            text="Enter Location"
            width="18.5rem"
            height="12.438rem"
            backgroundColor="white"
            description="Put in your location so we can know wehre is most convinent for you to rcieve your order"
          />
          <DescriptionCard
            icon={faCreditCard}
            text="Payment Options"
            width="18.5rem"
            height="12.438rem"
            backgroundColor="white"
            description="You can either choose to pay on delivery or you can add your card"
          />
        </div>
        <section>
          <div className=" text-center pt-[2.75rem]">
            <h1 className="text-[2.5rem] leading-[3.75rem] font-[600] font-[poppins]">
              Connect With Our Chefs
            </h1>
            <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
              Our professionals with experiences to live for
            </p>
          </div>
          <div className="flex py-[5.25rem] px-[7.75rem]">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-[21.938rem] h-[26.688rem] ">
                <img
                  className="w-full h-full object-contain rounded-[0.625rem]"
                  src={chef1}
                />
              </div>
              <div className=" flex flex-col justify-center items-center py-3">
                <h3 className="font-[poppins] font-[500] text-[1.25rem] leading-[1.875rem]">
                  Bobby Brown
                </h3>
                <p className="font-[poppins] font-[400] text-[1rem] leading-[1.5rem] opacity-[0.65rem]">
                  Assistance Chef
                </p>
                <div className="flex gap-[1.25rem]">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

const chef = [
  {
    name: "Bobby Brown",
   // img: chef1,
    role: "Assistant Chef",
  },
  {
    name: "Lilly Chad",
    role: "Chef",
  },
  {
    name: "Raj Juan",
    role: "Assistant Chef",
  },
];
