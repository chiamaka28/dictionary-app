import book from "../assets/book.png";
import book1 from "../assets/book1.png";
import boy from "../assets/boy.png";
import sadboy from "../assets/sadboy.png";
import moon from "../assets/moon1.png";
import sun from "../assets/sun.png";
import search from "../assets/search.png";
import play from "../assets/play.png";
import { useState, useRef } from "react";

const Main = ({ handleTheme, theme }) => {
  const ref = useRef(null);
  const [placeHolder, setPlaceHolder] = useState(true);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [displaySearch, setDisplaySearch] = useState([]);

  async function handleSearch() {
    setPlaceHolder(false);
    try{
    setError("")
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`
    );
    if (!response.ok) {
      throw new Error(" Sorry pal, we couldn't find definitions for the word you were looking for.");
    }
    console.log(response)
    const data = await response.json();
    const arr = [];
    const word = data[0];
    console.log(word);
    setDisplaySearch(arr);
    arr.push(word);
    return data;
  }
  catch (error){
    setDisplaySearch([])
    setError(error.message)
  }
  }

  // handleSearch().catch(error => {
  //    console.log(error.message)
  // })
  
  const clickHandler = () => {
    handleSearch();
    setText("");
  };

  const handleClick = () => {
    ref.current.play();
  };

  return (
    <div>
      <div className="flex justify-between py-5">
        <div>
          {theme === "dark" ? (
            <img className="w-10" src={book1} alt="" />
          ) : (
            <img className="w-10" src={book} alt="" />
          )}
        </div>
        <div className="flex gap-4 items-center justify-center">
          {/* <select className="border-r-[1px] border-gray-500">
            <option value="Serif">Serif</option>
            <option value="Sans-serif">Sans-serif</option>
          </select> */}
          <div className="relative" onClick={handleTheme}>
            <input
              type="checkbox"
              className="peer
    appearance-none cursor-pointer
    border bg-grey rounded-full
    checked:bg-lightPurple w-12 h-6"
            />
            <span
              className="peer-checked:left-7
    transition-all duration-200
    pointer-events-none w-4 h-4
    block absolute top-1 left-1
    rounded-full bg-darkGrey"
            ></span>
          </div>
          <div>
            {theme === "dark" ? (
              <img className="w-9" src={moon} alt="" />
            ) : (
              <img className="w-9" src={sun} alt="" />
            )}
          </div>
        </div>
      </div>
      <div className="relative">
        <input
          className="bg-grey w-full outline-0 py-2 px-4 my-4 rounded-lg"
          value={text}
          name="search"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={clickHandler} className="absolute  top-6 right-6">
          <img className="w-6" src={search} alt="" />
        </button>
      </div>
      {placeHolder ? (
        <div className="flex flex-col justify-center items-center mt-[120px]">
          <img className="w-56" src={boy} alt="" />
          <h2 className="font-['Pacifico'] mt-3 text-2xl dark:text-grey">
            Search For A Word
          </h2>
        </div>
      ) : (
        ""
      )}
      <div className="px-5">
        {displaySearch.map((item, index) => (
          <div key={index}>
            <h1 className="text-3xl  dark:text-white">{item.word}</h1>
            {item.phonetics.slice(0, 1).map((it, index) => {
              return (
                <div key={index} className="flex justify-between ">
                  <h3 className="text-purple">{it.text}</h3>
                  <audio src={it.audio} ref={ref}></audio>
                  <button
                    className="bg-lightPurple p-2 rounded-full text-white mb-5"
                    onClick={handleClick}
                  >
                    <img src={play} className="h-[25px]" alt="" />
                  </button>
                </div>
              );
            })}
            {item.meanings.map((meaning, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex  items-center justify-start gap-3"
                  >
                    <h2 className="font-['Pacifico'] text-[18px]  dark:text-white">
                      {meaning.partOfSpeech}
                    </h2>
                    <span className="w-[100%] h-[1px] bg-grey"></span>
                  </div>
                  <div className="pb-7">
                    <h4 className="py-4 text-gray   dark:text-white">
                      Meaning
                    </h4>

                    {meaning.definitions
                      .slice(0, 5)
                      .map((definition, index) => {
                        return (
                          <div>
                            <ul className="list-disc list-outside list-style-purple marker:text-purple">
                              <li key={index} className="py-2  dark:text-white">
                                {definition.definition}
                              </li>
                            </ul>
                            {definition.example ? (
                              <p className="text-gray  dark:text-white">
                                "{definition.example}"
                              </p>
                            ) : (
                              ""
                            )}
                            {definition.synonyms
                              .slice(0, 1)
                              .map((synonyms, index) => {
                                return (
                                  <p
                                    key={index}
                                    className="text-purple py-3  dark:text-white"
                                  >
                                    <span className="text-gray pr-5 ">
                                      Synonyms
                                    </span>
                                    {synonyms}
                                  </p>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                </>
              );
            })}
            <div className="py-4 md:flex md:gap-2 border-t-[1px] border-grey pb-12">
              <h4 className="text-gray  dark:text-white">Source</h4>
              <a
                className="underline  dark:text-white"
                href={item.sourceUrls}
                target="_blank"
              >
                {item.sourceUrls}
              </a>
            </div>
          </div>
        ))}
        {error && (
          <div className="flex flex-col justify-center items-center mt-[120px]">
            <img className="w-56" src={sadboy} alt="" />
            <p className="font-['Pacifico'] mt-3 text-2xl text-center w-[25ch]">
             {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
