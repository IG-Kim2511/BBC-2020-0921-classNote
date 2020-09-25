// 즉시실행 함수 Immediately-invoked function expression
// 전역변수를 안쓰기위해서 씀
// 함수안에서 만든 변수...밖에서 쓸수없음

(() => {
  //●js 03-03 새가 움직임.특정 이미지내에서

  const actions = {
    birdFlies() {
      document.querySelector(
        `[data-index="2"] .bird`
      ).style.transform = `translateX(${window.innerWidth}px)`;
    },
  };

  //● js 02 : `data-index=''` 넣기
  //
  // 1. 말풍선이 정해진 위치에 도달하면 이미지가 바뀌게
  // 2. 말풍선(.step)- 이미지(.graphic-item)에 data 같은 이름 붙여서 묶어줌
  // 4. data-name""을 노가다로 일일이 붙이기보다 js loop 사용하는게 좋음

  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  // js 02-23 .intersectionObserver
  // observe로 관찰하는 객체들(stepElems[i])이
  // 사라지거나 , 새로 나올때
  // 그 시점마다 callback 함수가 실행이 됨

  // 현재 출력한 index + 이전,이후 index 3개만 체크하기

  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    // console.log(entries);
    // console.log(entries[0].target.dataset.index);
    ioIndex = entries[0].target.dataset.index * 1;
    console.log(ioIndex);
  });

  for (let i = 0; i < stepElems.length; i++) {
    io.observe(stepElems[i]);

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

  // ● js 06 better structure .visible
  let currentItem = graphicElems[0];

  function activate(action) {
    currentItem.classList.add("visible");
    if (action) {
      actions[action]();
    }
  }
  function inactivate() {
    currentItem.classList.remove("visible");
  }

  // js 06 첫화면 바로 보이게하기
  // currentItem.classList.add("visible");
  activate();

  //● js 04 scroll and image .visible
  window.addEventListener("scroll", () => {
    let step;
    let boundingRect;

    // ●js 02-31
    // for (let i = 0; i < stepElems.length; i++) {
    for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
      step = stepElems[i];

      // step에 값이 없으면  continue로 패스하고 다음 것 출력
      if (!step) continue;

      boundingRect = step.getBoundingClientRect();
      // console.log(boundingRect);
      // console.log(boundingRect.top);

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        // step의 dataset의 index 확인
        // console.log(step.dataset.index);

        // currentItem.classList.remove("visible");
        inactivate();

        currentItem = graphicElems[step.dataset.index];
        // currentItem.classList.add("visible");
        activate(currentItem.dataset.action);
      }
    }
  });
  activate();
})();
