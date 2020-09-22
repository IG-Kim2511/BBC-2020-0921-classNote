(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  for (let i = 0; i < stepElems.length; i++) {

      console.log(stepElems[i]);

    // stepElems[i].setAttribute('data-index',i);   <--같은뜻

    // stepElems[i].dataset.index = i;

  }
})();
