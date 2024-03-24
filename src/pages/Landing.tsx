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
import { Button, DescriptionCard, FoodCard } from "../components/atom";
import ChefCard from "../components/atom/ChefCard";

export default function Landing() {
  const {
    logo,
    introImage,
    aboutImg,
    aboutImg2,
    chef1,
    chef2,
    chef3,
    foodImg1,
    galImg1,
    galImg2,
    galImg3,
    galImg4,
    galImg5,
    galImg6,
    reviewImg,
  } = Images;
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
          <div className="flex justify-between py-[5.25rem] px-[5.75rem]">
            {chef.map((item) => (
              <div>
                <ChefCard img="" name={item.name} role={item.role} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className=" text-center pt-[2.75rem]">
            <h1 className="text-[2.5rem] leading-[3.75rem] font-[600] font-[poppins]">
              Popular food items here
            </h1>
            <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
              We offer you different taste to satisy your buds
            </p>
          </div>
          <div className="py-[5.25rem] px-[5.75rem] flex justify-between">
            <div className="w-[16.625rem] h-[28rem] bg-[#D26526] bg-opacity-40 p-8 rounded-[0.625rem] flex gap-[2.563rem] flex-col items-center">
              <Button text="Platter" backgroundColor="white" color="black" />
              <Button text="Dessert" backgroundColor="white" color="black" />
              <Button text="Entree" backgroundColor="white" color="black" />
              <Button text="Drinks" backgroundColor="white" color="black" />
            </div>
            <div className=" w-[70rem]">
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
          <h1 className="text-[2.5rem] leading-[3.75rem] font-[600] font-[poppins]">
            Our Gallery
          </h1>
          <p className="text-[1rem] leading-[3.75rem] font-[400] font-[poppins]">
            Giving you a look through of some of our best seller over the year
          </p>
        </div>
        <div className="flex justify-between py-[5.25rem] px-[5.75rem]">
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
        <div className="flex justify-center">
          <Button text="Explore More" />
        </div>
      </section>
      <section className="pt-[10rem]">
        <div className="flex px-[13.438rem] justify-between items-center">
          <div className="w-[30.75rem] space-y-6">
            <div>
              <h2 className="text-[2.5rem] font-[poppins] leading-[3.75rem] font-[600]">
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
              <h4 className="text-[1rem] font-[poppins] leading-[3.75rem] font-[600] underline">
                Lilly Reeves
              </h4>
            </div>
          </div>
          <div>
            <div className="w-[34rem] h-[35rem]">
              <img className="w-full h-full oblect-contain" src={reviewImg} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const chef = [
  {
    name: "Bobby Brown",

    role: "Assistant Chef",
  },
  {
    name: "Lilly Chad",
    img: "chef1",
    role: "Chef",
  },
  {
    name: "Raj Juan",
    img: "chef1",
    role: "Assistant Chef",
  },
];
const foodItem = [
  {
    img: "foodImg1",
    food: "Spicy Noodles",
    description:
      "Spicy noodles is a very nice noodle that tests your buds they are very unique and made with a special recipe",
    price: "N4,000",
  },
  {
    img: "foodImg1",
    food: "Rice and Lamb",
    description:
      "Rice and lamb is a very nice meal that tests your buds they are very unique and made with a special recipe",
    price: "N6,500",
  },
  {
    img: "foodImg1",
    food: "Afang and Fufu",
    description:
      "Afang and fufu is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N5,500",
  },
  {
    img: "foodImg1",
    food: "Couscous",
    description:
      "Couscous is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N3,500",
  },
  {
    img: "foodImg1",
    food: "Pasta and tomato sauce",
    description:
      "Pasta is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N4,500",
  },
  {
    img: "foodImg1",
    food: "Chicken Burger",
    description:
      "Chicken Burger is a very nice meal that tests your buds they are very unique and made with a special recipe ",
    price: "N4,500",
  },
];
