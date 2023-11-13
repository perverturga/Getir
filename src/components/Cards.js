import {useState, useEffect} from "react";
import cardsData from "../api/cards.json"


export default function Cards() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    //data isteği
    setCards(cardsData);
  }, [])
  

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 mt-4 sm:px-0 gap-4 
      container mx-auto">
        {cards.length && cards.map( card => (
          <div className="bg-white p-14 rounded-lg shadow-md
          flex flex-col items-center text-center">
            <img className="w-[150px] h-[150px] mb-6" 
            src={card.image}/>
            <h6 className="font-semibold text-lg text-purple-700 ">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    )
  }
  