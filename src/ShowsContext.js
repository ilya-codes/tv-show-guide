import React from "react";
import { useState } from "react";
import { createContext } from "react";

const ShowsContext = createContext({
  clickedShow: null,
});

export const ShowsContextProvider = (props) => {
  const [showSave, setShowSave] = useState(
    JSON.parse(window.localStorage.getItem("savedShow"))
  );

  const [actorId, setActorId] = useState(
    JSON.parse(window.localStorage.getItem("savedActor"))
  );

  const showSaveHander = (item) => {
    setShowSave(item);
    window.localStorage.setItem("savedShow", JSON.stringify(item));
  };

  const actorHandler = (id) => {
    setActorId(id);
  };

  // const resetHandler = () => {
  //   console.log("reset");
  //   if (location.pathname === "/") {
  //     history.goBack();
  //   } else {
  //     history.push("/");
  //   }
  // };

  // const [selectedOption, setSelectedOption] = useState(null);

  // const selectHandler = (item) => {
  //   setSelectedOption(item);
  // };
  // console.log(selectedOption);

  const context = {
    clickedShow: showSave,
    clickedActor: actorId,
    handleShowSave: showSaveHander,
    handleActor: actorHandler,
    // option: selectedOption,
    // setOption: selectHandler,
  };

  return (
    <ShowsContext.Provider value={context}>
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsContext;