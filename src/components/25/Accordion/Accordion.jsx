import { React, useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(Id) {
    setSelected(selected === Id ? null : Id);
  }

  function handleMultipleSelection(Id) {
    let copyId = [...multiple];
    const checkId = copyId.indexOf(Id);

    if (checkId === -1) copyId.push(Id);
    else copyId.splice(checkId, 1);

    setMultiple(copyId)
  }

  return (
    <div className="flex font-bold flex-col h-[80vh] w-[100vw] items-center place-content-center">
      <button
        onClick={() => setSelectMultiple(!selectMultiple)}
        className="border-black border-2 p-2 mb-10"
      >
        Toggle Multiple: {selectMultiple ? "true" : "false"}
      </button>

      {data && data.length > 0
        ? data.map((dataItem) => (
            <div className="flex items-center place-content-center flex-col text-white bg-black w-[50vw] mt-2">
              <p>{dataItem.name}</p>
              <p
                className="underline"
                onClick={
                  selectMultiple
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                {selected === dataItem.id ||
                multiple.indexOf(dataItem.id) !== -1 ? 
                  <p>show less</p>
                 : 
                  <p>show more</p>
                }
              </p>
              {selectMultiple
              ? multiple.indexOf(dataItem.id) !== -1 && (
                <p className="p-4">{dataItem.description}</p>
              ) : selected === dataItem.id && (
                <p className="p-4">{dataItem.description}</p>
              )
              }
            </div>
          ))
        : "No data found"}
    </div>
  );
};

export default Accordion;
