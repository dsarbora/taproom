import React from "react";

function AddKegForm(props) {
  let _name = null;
  let _ABV = null;
  let _cost = null;
  function handleNewKegSubmission() {
    props.onClickingAddNewKeg({
      name: _name.value,
      ABV: _ABV.value,
      cost: _cost.value
    });

    _name.value = "";
    _ABV.value = "";
    _cost.value = "";
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
