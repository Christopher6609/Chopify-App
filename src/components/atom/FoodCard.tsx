type props = {
    img: string;
    food: string;
    description:string;
    price:string;

}
export default function FoodCard({img, food, description, price}:props) {
  return (
    <div className="flex flex-col items-center relative h-[28rem]  md:p-6">
      <div className="w-[16.188rem] h-[15.5rem]">
        <img src={img} className="w-full h-full object-contain" />
      </div>
      <div className="w-[15.188rem] rounded-[0.625rem] text-start text-[1rem] font-[500] font-[poppins] space-y-3 bg-[#FFFFFF] px-1 py-3 absolute top-[50%]">
        <h3 className="text-center">{food}</h3>
        <p className="text-[1rem] font-[300] font-[poppins]">
          {description}
        </p>
        <div className="flex items-center justify-between text-[1rem] font-[500] font-[poppins]">
          <p>{price}</p>
          <button className="border-[2px] border-[#D26526] p-1 rounded-[1rem] text-[#D26526]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
