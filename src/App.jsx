import { useState, useEffect, useRef } from "react";
import "./App.css";
import { faker} from "@faker-js/faker";

const App = () => {
  const [allCats, setAllCats] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );

      if (!response.ok) {
        throw new Error("An error has occured");
      }

      const catsData = await response.json();
      const mainData = catsData.map((cat) => {
        return {
          ...cat,
          name: faker.person.fullName(),
          dob: faker.date.birthdate({min: 0, max: 22, mode: "age"}),
          city: faker.location.city()
        }
      })

      setAllCats(mainData);
      setErrorMsg("");
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (cat) => {
    setOpen(true);
    setSelected(cat);
  };

  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current === event.target) {
      handleClose();
    }
  };

  return (
    <>
      <h1>Cats4Lyfe</h1>

      {errorMsg !== "" && <p>{errorMsg}</p>}
      <div id="catContainer">
        {allCats.map((cat, index) => {
          return (
            <div className="catsSale" key={index}>
              <img className="img" onClick={() => handleClick(cat)} src={cat.url}></img>
              <p>{faker.commerce.price({min: 100, max: 1500, dec: 2, symbol: "£"})}</p>
            </div>
          );
        })}
      </div>

      {open && (
        <div className="modalBg" ref={modalRef} onClick={handleClickOutside}>
          <div className="modal">
            <div className="catName">
              <h2>{selected.name}</h2>
              <p>This cat is from {selected.city}!</p>
              <p>This cat was born on {selected.dob.toString()}!</p>
            </div>

            <p>{selected.description}</p>
            <button id="x" onClick={handleClose}>X</button>
            <button id="close" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;