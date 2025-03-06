import React, {
  ChangeEvent,
  useContext,
  useState,
} from "react";
import "./App.css";
import MapComponent from "./Components/MapComponent";
import { ContextApi } from "./Components/Context";

function App() {
  const [place, setPlace] = useState<string>("");
  const receiveData = useContext(ContextApi);

  function HandleChange(e: ChangeEvent<HTMLInputElement>) {
    setPlace(e.target.value);
  }
  return (
    <>
      <div className="mockup-phone border-primary bg-amber-100 relative right-7 h-[40rem] ">
        <div className="actio  flex flex-col justify-center items-center absolute z-2">
          <div className="mockup-phone-camera h-10 "></div>
          <div className="rounded-2xltext-black  h-10 flex justify-center items-center">
            <input
               onChange={HandleChange}
               value={place}
              className="border-1 outline-none"
              type="search"
              placeholder="Enter Name"
            />
            <button onClick={()=>{receiveData?.setLocation(place)}} className="btn btn-accent">Search</button>
          </div>
        </div>

        <div className="mockup-phone-display z-1">
          <div className="w-full bg-red-400 h-full z-20">
            <MapComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
