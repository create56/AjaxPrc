
console.log("코드1");
// TimeHandler 타임이 없기 떄문에 function
// let num = fetch("http://sdsadsadsadas.com") // 바로 실행하는것이 아니라 이벤트 루프에 등록만 한다. 2번으로 내려온 쓰레드는
hello();
 // 블럭을 최대한 조금만 당하는것
//다시 올라가지 않는다. 
setTimeout(()=>{
    // function fsfa()
    // 3초뒤에 {} 여기에 때려질 함수
    // OS -> 쓰레드 
    // 왜 싱글 쓰레드가 인가? -> 무거운 코드 
    // 문맥 교환 -> 왔다갔다 할떄 그길을 저장 
    // 사용자가 눌렀을떄 버튼 Ajax등 무거운 코드, 오래걸리는 작업 
    // 무거운 작업을 스케쥴러에 등록해서 따로 빼서 -> 할일이 있는지 메인쓰레드가 코드3까지 실행이 끝나는
    // 것을 확인한 다음 할일이 없는 메인쓰레드가 따로 뺴놓은작업을 가지고 와서 실행한다.-> 그래서 3초 이상 있다가 실행된다.
    console.log("코드2");
}, 3000); // 이벤트 루프 순서 먼저 등록된 순서로 실행
// 이벤트 루프를 등록하고 싶다면 setTimeout을 쓴다. 싱글쓰레드로 작동하고 작업의순서가 없는 비동기적
console.log("코드3");
console.log("코드4");

// 5번을 실행하러가면 점프를 해서 여기로 온다.
async function hello() {
    let num = await fetch("http://sdsadasdasd.com")
}