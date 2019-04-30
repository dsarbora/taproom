import React from "react";
import { v4 } from "uuid";

function AddKegForm(props) {
  let _name = null;
  let _ABV = null;
  let _price = null;
  let _cost = null;
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onClickingAddNewKeg({
      name: _name.value,
      ABV: _ABV.value,
      price: _price.value,
      cost: _cost.value,
      beersLeft: 125,
      id: v4()
    });

    _name.value = "";
    _ABV.value = "";
    _price.value = "";
    _cost.value = "";
  }
  return (
    <div>
      <style jsx>{`
        div {
          padding-left: 15px;
          padding-top: 20px;
        }
        input {
          width: 150px;
          height: 20px;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        button {
          padding: 10px;
          border-radius: 5px;
          background-color: lightgreen;
        }
      `}</style>
      <form onSubmit={handleNewKegSubmission}>
        <input
          type="text"
          placeholder="Beer Name"
          ref={input => {
            _name = input;
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="ABV"
          ref={input => {
            _ABV = input;
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="price/beer"
          ref={input => {
            _price = input;
          }}
          required
        />
        <br />
        <input
          type="text"
          placeholder="cost of keg"
          ref={input => {
            _cost = input;
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKegForm;
