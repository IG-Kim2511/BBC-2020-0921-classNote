// 즉시실행 함수 Immediately-invoked function expression
// 전역변수를 안쓰기위해서 씀
// 함수안에서 만든 변수...밖에서 쓸수없음

(() => {
  //● js 02 : `data-index=''` 넣기
  //
  // 1. 말풍선이 정해진 위치에 도달하면 이미지가 바뀌게
  // 2. 말풍선(.step)- 이미지(.graphic-item)에 data 같은 이름 붙여서 묶어줌
  // 4. data-name""을 노가다로 일일이 붙이기보다 js loop 사용하는게 좋음

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  for (let i = 0; i < stepElems.length; i++) {
    // console.log(stepElems[i]);

    // stepElems[i].setAttribute('data-index',i);   <--같은뜻

    stepElems[i].dataset.index = i;

    graphicElems[i].dataset.index = i;
  }

  //● js 04: 말풍선 어느정도 높이 도달할때, 뒤의 이미지 바꾸기
  // getboundingclientrect :  https://iankim2511.tistory.com/13
  // getBoundingClientRect 엘리먼트 위치값 알아냄
  // 윈도우높이의 10%~80% 사이에서 말풍선,이미지 호출 : step의 dataset의 index호출

  // 지금활성화된 이미지를 변수(currentItem)에 넣고, 그 변수를 지우고, 다음 이미지를 호출함
  // currentItem이 있으면 currentItem에서 .visible 삭제

  let currentItem;

  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;
    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect);
      // console.log(boundingRect.top);

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        // step의 dataset의 index 확인
        // console.log(step.dataset.index);

        if (currentItem) {
          currentItem.classList.remove("visible");
        }
        currentItem = graphicElems[step.dataset.index];
        currentItem.classList.add("visible");
      }
    }
  });
})();
