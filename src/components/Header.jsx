import book from "../assets/book.png";
import toggle from "../assets/toggle.png";
import moon from "../assets/moon.png";
import Input from "./Input";

const Header = () => {
  return (
    <>
    <div className="flex justify-between py-5">
      <div>
        <img className="w-10" src={book} alt="" />
      </div>
      <div className="flex gap-4 items-center justify-center">
        <select className="border-r-[1px] border-gray-500">
          <option value="Serif">Serif</option>
          <option value="Sans-serif">Sans-serif</option>
        </select>
        <div>
          <img className="w-10" src={toggle} alt="" />
        </div>
        <div>
          <img className="w-9" src={moon} alt="" />
        </div>
      </div>
    </div>
    <Input/>
    </>
  );
};

export default Header;
