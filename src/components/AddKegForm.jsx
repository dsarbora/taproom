import React from "react";

function AddKegForm(props) {
  let _name = null;
  let _ABV = null;
  let _price = null;
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onClickingAddNewKeg({
      name: _name.value,
      ABV: _ABV.value,
      price: _price.value,
      beersLeft: 20
    });

    _name.value = "";
    _ABV.value = "";
    _price.value = "";
  }
  return (
    <div>
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
          placeholder="cost"
          ref={input => {
            _price = input;
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
