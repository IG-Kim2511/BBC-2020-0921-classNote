//● `data-index=''` 넣기
// 1. 말풍선이 정해진 위치에 도달하면 이미지가 바뀌게
// 2. 말풍선(.step)- 이미지(.graphic-item)에 data 같은 이름 붙여서 묶어줌
// 4. data-name""을 노가다로 일일이 붙이기보다 js loop 사용하는게 좋음

// 즉시실행 함수 Immediately-invoked function expression
// 전역변수를 안쓰기위해서 씀
// 함수안에서 만든 변수...밖에서 쓸수없음

(() => {
  const stepElems = document.querySelectorAll(".step");
  const graphicElems = document.querySelectorAll(".graphic-item");

  for (let i = 0; i < stepElems.length; i++) {
    stepElems[i].dataset.index = i;

    graphicElems[i].dataset.index = i;
  }
})();
