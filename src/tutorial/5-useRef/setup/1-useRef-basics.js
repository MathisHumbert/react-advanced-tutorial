import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = refContainer.current.value;
    divContainer.current.textContent = inputValue;
    refContainer.current.value = '';
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
        <div ref={divContainer}>hello world</div>
      </form>
    </>
  );
};

export default UseRefBasics;
