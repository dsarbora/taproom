import React from "react";
import DeleteKeg from "./DeleteKeg";

function DeleteMenu(props) {
  return (
    <div>
      {props.kegList.map(keg => (
        <DeleteKeg
          updateKegControlState={props.updateKegControlState}
          onClickDelete={props.onClickDelete}
          recordSale={props.recordSale}
          key={keg.id}
          keg={keg}
        />
      ))}
    </div>
  );
}

export default DeleteMenu;
