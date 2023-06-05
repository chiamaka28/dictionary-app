import book from "../assets/book.png";
import toggle from "../assets/toggle.png";
import moon from "../assets/moon.png";
import search from "../assets/search.png";
import { useState } from "react";

const Header = () => {
  const [text, setText] = useState("");
  const [displaySearch, setDisplaySearch] = useState([]);

  async function handleSearch () {
   const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`)
      
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
  console.log(data)
  setDisplaySearch(data)
}


  const clickHandler = () => {
    handleSearch();
    setText("");
  };

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
        <button onClick={clickHandler} className="absolute  top-6 right-6">
          <img className="w-6" src={search} alt="" />
        </button>
      </div>
      <div>
        {displaySearch.flat().map(
          (item,
           index) => (
          <div key={index}>
            <h1>{item.word}</h1>
            <h4>{item.sourceUrls}</h4>
           <div>
              {displaySearch.meanings.map((meaning, index) => {
                return (
                    <ul  key={index}>
                      <li>{meaning}</li>
                    </ul>
                )})}
            </div>
         
          </div>
        ))}
       
      </div>
    </>
  );
};

export default Header;
