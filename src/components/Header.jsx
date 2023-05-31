import book from "../assets/book.png";
import toggle from "../assets/toggle.png";
import moon from "../assets/moon.png";
import search from "../assets/search.png";

const Header = ({ setText, text }) => {
  console.log(text);
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
      <div className="relative">
        <input
          className="bg-grey w-full outline-0 py-2 px-4 my-4 rounded-lg"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="absolute  top-6 right-6">
          <img className="w-6" src={search} alt="" />
        </button>
       
      </div>
    </>
  );
};

export default Header;
