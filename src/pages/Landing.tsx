import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "../assets/images/images";
import image1 from "../assets/images/Rectangle 7.png";
import image2 from "../assets/images/Rectangle 8.png";
import image3 from "../assets/images/Rectangle 11.png";
import image4 from "../assets/images/Rectangle 9.png";
import image5 from "../assets/images/Rectangle 10.png";
import image6 from "../assets/images/Rectangle 12.png";
import chef1 from "../assets/images/Rectangle 2.png";
import chef2 from "../assets/images/Rectangle 4.png";
import chef3 from "../assets/images/Rectangle 5.png";

import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faCartShopping,
  faCircleUser,
  faClipboardCheck,
  faClock,
  faCreditCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Button, DescriptionCard, FoodCard } from "../components/atom";
import ChefCard from "../components/atom/ChefCard";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Landing() {
  const {
    logo,
    introImage,
    aboutImg,
    aboutImg2,
    galImg1,
    galImg2,
    galImg3,
    galImg4,
    galImg5,
    galImg6,
    reviewImg,
    imagereview,
  } = Images;
  return (
    <main className="md:px-[4.25rem] px-[1rem]">
      <header className=" justify-between items-center py-[1.875rem] hidden md:flex">
        <div className=" w-[9.75rem] h-[3.75rem]">
          <img className="w-full h-full object-contain" src={logo} />
        </div>
        <div className=" ">
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

      <section className="md:pt-[5.313rem] pt-[3rem]">
        <div className="flex md:text-start text-center">
          <div className="md:min-w-[48.563rem] w-full flex flex-col gap-5">
            <h1 className="md:text-[4.063rem] text-[2.5rem] font-[700] md:leading-[6.094rem] leading-[4rem] font-[poppins] text-[#000000] md:text-start text-center">
              Delivery First, Satisfaction All The Time
            </h1>
            <div className="md:w-[40.563rem]">
              <p className="text-[1.25rem] leading-[1.875rem] font-[400] font-[poppins] pt-[1rem]">
                Meal preped with love and care to suit your taste ood time,
                great taste eat healthy, eat clean , eat real food
              </p>
            </div>

            <div>
              <Button text="Order Now">
                <FontAwesomeIcon className="px-2" icon={faArrowRight} />
              </Button>
            </div>
          </div>
          <div className="w-[51.437rem] justify-center hidden md:flex">
            <div className="w-[30.12rem] h-[31.25rem]">
              <img className="w-full h-full object-contain" src={introImage} />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[3rem] flex justify-center">
        <div className="md:flex items-center md:gap-[3.75rem] space-y-5 md:space-y-0 justify-center">
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
      <section className="md:py-[9.313rem] py-[5rem] ">
        <div className=" flex justify-between ">
          <div className="w-[41rem]">
            <div className=" text-justify flex-col flex gap-3">
              <p className="text-[1rem] font-[poppins] font-[600] text-[#D26526]">
                About us{" "}
              </p>
              <h2 className="md:text-[2.5rem] text-[2rem] font-[600] leading-[3.75rem] font-[poppins]">
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
            <div className="pt-[3.375rem] text-center">
              <Button text="Read More" backgroundColor="#D26526" />
            </div>
          </div>
          <div className=" relative hidden md:block">
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
      <section className=" bg-[#FAF8F8] md:mt-[3.875rem]">
        <div className=" text-center md:pt-[4.75rem] pt-[2rem] ">
          <h1 className="md:text-[2.5rem] text-[2rem] leading-[3.75rem] font-[600] font-[poppins]">
            How To Order
          </h1>
          <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
            Follow these steps to place an order
          </p>
        </div>
        <div className="md:flex md:space-y-0 space-y-6 justify-between md:px-4 md:py-[4.75rem] py-[2rem]">
          <div className=" flex justify-center">
            <DescriptionCard
              icon={faCircleUser}
              text="Sign Up"
              width="18.5rem"
              height="12.438rem"
              backgroundColor="white"
              description="This stage is where you register so you can order a meal ang get it delivered to you"
            />
          </div>
          <div className=" flex justify-center">
            {" "}
            <DescriptionCard
              icon={faClipboardCheck}
              text="Pick a meal"
              width="18.5rem"
              height="12.438rem"
              backgroundColor="white"
              description="Select any of the meals finely prepared by our chef from our menu"
            />
          </div>
          <div className=" flex justify-center">
            <DescriptionCard
              icon={faLocationDot}
              text="Enter Location"
              width="18.5rem"
              height="12.438rem"
              backgroundColor="white"
              description="Put in your location so we can know wehre is most convinent for you to rcieve your order"
            />
          </div>

          <div className=" flex justify-center">
            <DescriptionCard
              icon={faCreditCard}
              text="Payment Options"
              width="18.5rem"
              height="12.438rem"
              backgroundColor="white"
              description="You can either choose to pay on delivery or you can add your card"
            />
          </div>
        </div>
        <section>
          <div className=" text-center pt-[2.75rem]">
            <h1 className="md:text-[2.5rem] text-[2rem] leading-[3.75rem] font-[600] font-[poppins]">
              Connect With Our Chefs
            </h1>
            <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
              Our professionals with experiences to live for
            </p>
          </div>
          <div className="md:flex justify-between py-[5.25rem] px-[5.75rem]">
            {chef.map((item) => (
              <div>
                <ChefCard img={item.img} name={item.name} role={item.role} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className=" text-center md:pt-[2.75rem] pt-[1.5rem]">
            <h1 className="md:text-[2.5rem] text-[2rem] leading-[3.75rem] font-[600] font-[poppins]">
              Popular food items here
            </h1>
            <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
              We offer you different taste to satisy your buds
            </p>
          </div>
          <div className="md:py-[5.25rem] py-[3rem] md:px-[5.75rem] md:flex justify-between">
            <div className="md:w-[16.625rem] md:h-[28rem] bg-[#D26526] bg-opacity-40 p-8 rounded-[0.625rem] flex justify-center gap-[2.563rem] md:flex-col flex-wrap items-center ">
              <Button text="Platter" backgroundColor="white" color="black" />
              <Button text="Dessert" backgroundColor="white" color="black" />
              <Button text="Entree" backgroundColor="white" color="black" />
              <Button text="Drinks" backgroundColor="white" color="black" />
            </div>
            <div className=" md:w-[70rem] hidden md:flex">
              <div className="flex-wrap flex justify-between space-y- px-[2rem] ">
                {foodItem.map((item) => (
                  <FoodCard
                    food={item.food}
                    description={item.description}
                    price={item.price}
                    img={item.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
      <section>
        <div className=" text-center pt-[2.75rem]">
          <h1 className="md:text-[2.5rem] text-[2rem] md:leading-[3.75rem] leading-[3rem] font-[600] font-[poppins]">
            Our Gallery
          </h1>
          <p className="text-[1rem] md:leading-[3.75rem] leading-[2rem] font-[400] font-[poppins]">
            Giving you a look through of some of our best seller over the year
          </p>
        </div>
        <div className="md:flex justify-between py-[5.25rem] hidden">
          <div className="space-y-[2rem]">
            <div className="w-[24.5rem] h-[18.25rem]">
              <img className="w-full h-full object-contain" src={galImg1} />
            </div>
            <div className="w-[24.5rem] h-[18.25rem]">
              <img className="w-full h-full object-contain" src={galImg2} />
            </div>
          </div>
          <div className="space-y-[2rem]">
            <div className="w-[22.375rem] h-[31.875rem]">
              <img className="w-full h-full object-contain" src={galImg3} />
            </div>
            <div className="w-[22.375rem] h-[14.313rem]">
              <img className="w-full h-full object-contain" src={galImg4} />
            </div>
          </div>
          <div className="space-y-[2rem]">
            <div className="w-[15.875rem] h-[19.25rem]">
              <img className="w-full h-full object-contain" src={galImg5} />
            </div>
            <div className="w-[15.875rem] h-[19.25rem]">
              <img className="w-full h-full object-contain" src={galImg6} />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="flex gap-4 overflow-hidden ">
            <div className="w-[20rem] h-[10rem] ">
              <img className="w-full h-full object-contain" src={galImg1} />
            </div>
            <div className="w-[20.5rem] h-[10rem]">
              <img className="w-full h-full object-contain" src={galImg2} />
            </div>
          </div>

          <div className="flex gap-3 justify-center py-4 ">
            <FontAwesomeIcon
              icon={faAngleLeft}
              className="border w-[1.5rem] h-[1.5rem] p-2 rounded-[7.25rem]"
            />
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border w-[1.5rem] h-[1.5rem] p-2 rounded-[7.25rem] bg-[#D2652633]"
            />
          </div>
        </div>
        <div className=" justify-center hidden md:flex">
          <Button text="Explore More" />
        </div>
      </section>
      <section className="md:pt-[10rem] pt-[4rem]">
        <div className="md:flex md:px-[.438rem] justify-between items-center">
          <div className="md:w-[30.75rem] space-y-6">
            <div>
              <h2 className="md:text-[2.5rem] text-[2rem] font-[poppins] leading-[3.75rem] font-[600]">
                Reviews
              </h2>
              <p className="text-[1rem] font-[poppins] leading-[1.5rem] font-[600]">
                What our custormers have to say about our services
              </p>
            </div>
            <div>
              <p className="text-[1rem] font-[poppins] leading-[1.5rem] font-[300] text-justify">
                The food here is the best the ciustomer service is top notch
                delivery is fast and they delivery the exact thing you order for
                For someone like me who is alway busy and has absolutely no time
                to go our anad get food chopify has come to my rescue so many
                times kudos for job well done
              </p>
              <div className="flex gap-4 items-center py-4">
                <div className="w-[3.125rem] h-[3.125rem]">
                  <img
                    className="w-full h-full object-contain"
                    src={imagereview}
                  />
                </div>
                <h4 className="text-[1rem] font-[poppins] leading-[3.75rem] font-[600] underline">
                  Lilly Reeves
                </h4>
              </div>
              <div className="flex gap-3">
                <FontAwesomeIcon
                  icon={faAngleLeft}
                  className="border w-[1.5rem] h-[1.5rem] p-2 rounded-[7.25rem]"
                />
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="border w-[1.5rem] h-[1.5rem] p-2 rounded-[7.25rem] bg-[#D2652633]"
                />
              </div>
            </div>
          </div>
          <div className=" hidden md:flex">
            <div className="md:w-[34rem] md:h-[35rem] ">
              <img className="w-full h-full oblect-contain" src={reviewImg} />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem]">
        <div className="md:flex flex-wrap  justify-between w-full px-4 font-[poppins]">
          <div className="md:flex justify-between  w-full md:w-1/4 py-4 hidden">
            <div className=" flex w-[11.25rem]  flex-col gap-[1.563rem]">
              <div className="w-[9.75rem] h-[3.75rem]">
                <img className="w-full h-full object-contain " src={logo} />
              </div>
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem] font-[poppins] font-[300] text-justify">
                All you need to get a good food right to your door steps without
                stress
              </p>
              <div className="flex justify-between md:w-full w-[8rem] text-[1rem] text-[#D26526]">
                <a href="www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="www.instagram.com">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="www.twiter.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="www.linkedin.com">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="www.linkedin.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-between  w-full md:w-3/4 py-4">
            <div className=" flex md:w-[11.25rem] w-1/3 flex-col md:gap-[1.563rem]  gap-[0.5rem] ">
              <p className="text-[1rem] text-[Mono] font-[500]">Quick Links</p>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Home
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  About
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Contact
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Delivery
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Services
                </p>
              </a>
            </div>
            <div className=" flex md:w-[11.25rem]  w-1/3  flex-col md:gap-[1.563rem]  gap-[0.5rem]">
              <p className="text-[1rem] text-[Mono] font-[500]">Support</p>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Getting Started
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Help Center
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Server Status
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Report a bug
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  Chat Support
                </p>
              </a>
            </div>
            <div className=" flex md:w-[11.25rem]  w-1/3  flex-col md:gap-[1.563rem]  gap-[0.5rem]">
              <p className="text-[1rem] text-[Mono] font-[500]">Contact Us</p>
              <a href="mailto:chopify@company.com">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  {" "}
                  chopify@company.com
                </p>
              </a>
              <a href="#">
                <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                  London, United Kingdom
                </p>
              </a>
              <p className="md:text-[0.875rem] text-[0.7rem] leading-[1.313rem]">
                {" "}
                (+24) 777 864 0904{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <footer className="md:flex justify-between text-center text-[0.75rem] font-[poppins] font-[500] py-6">
        <div>
          <p>Copyright &copy; 2022 Chopify</p>
        </div>
        <div>
          <p>
            {" "}
            All right reserved |{" "}
            <span className="text-[#D26526] underline">
              <a href="#">Terms and Conditions</a>
            </span>{" "}
            |{" "}
            <span className="text-[#D26526] underline">
              <a href="#">Privacy Policy</a>
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}

const chef = [
  {
    name: "Bobby Brown",
    img: chef1,
    role: "Assistant Chef",
  },
  {
    name: "Lilly Chad",
    img: chef2,
    role: "Chef",
  },
  {
    name: "Raj Juan",
    img: chef3,
    role: "Assistant Chef",
  },
];
const foodItem = [
  {
    img: image1,
    food: "Spicy Noodles",
    description:
      "Spicy noodles is a very nice noodle that tests your buds they are very unique and made with a special recipe",
    price: "N4,000",
  },
  {
    img: image2,
    food: "Rice and Lamb",
    description:
      "Rice and lamb is a very nice meal that tests your buds they are very unique and made with a special recipe",
    price: "N6,500",
  },
  {
    img: image3,
    food: "Afang and Fufu",
    description:
      "Afang and fufu is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N5,500",
  },
  {
    img: image4,
    food: "Couscous",
    description:
      "Couscous is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N3,500",
  },
  {
    img: image5,
    food: "Pasta and tomato sauce",
    description:
      "Pasta is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N4,500",
  },
  {
    img: image6,
    food: "Chicken Burger",
    description:
      "Chicken Burger is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N4,500",
  },
];
