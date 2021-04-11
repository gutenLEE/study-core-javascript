// 함수 선언
// 함수 호출

function first(){
    setTimeout(() => {
        console.log('The first function has been called');
    }, 1000);
}

function second(){
    setTimeout(() => {
        console.log('The Second function has been called');
    }, 500);
}

first();
second();

console.log('--------------------------------------')
// 자바 스크립트는 싱글스레드 기반 언어인데 어떻데 비동기 처리가 가능한 것일까?
/*
    https://hudi.kr/%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-javascript-%EC%8B%B1%EA%B8%80%EC%8A%A4%EB%A0%88%EB%93%9C-%EA%B8%B0%EB%B0%98-js%EC%9D%98-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EB%B0%A9%EB%B2%95/
    
    자바스크립트 엔진은 메모리 힙과 단일 호출 스택을 가지고 있다. 
    하나의 호출 스택만 가지고 있으므로, 한번에 단 하나의 함수만 처리할 수 있다. 
    그래서 js는 다른 함수가 실행되고 있을때는 그 함수가 종료되기 직전까지 
    다른 작업이 중간에 끼어들 수 없다. 이것을 Run-to-completion이라고 한다. 
*/

function fn1(){
    fn2();
    console.log('fn1');
}

function fn2(){
    console.log('fn2');
}

fn1();

// 자바스크립트 엔진, Web API, Tack Queue, Event Loop

setTimeout(function(){
    console.log('All task was done.');
}, 5000);

/*
     callStack에 setTImeout이 생긴다. Web API에 setTimeout을 전달한다. 
     5000ms 후 setTimeout의 작업 완료 및 callback 함수를 Task Queue에 전달한다.
     Event Loop는 항상 call stack이 비어있는지, task queue에 작업이 있는지 검사한다. 
     call stack이 비어있고, task queue에 수행할 작업이 있으면 call stack에 함수를 전달한다. 

    javascript 엔진은 그저 주어진 코드를 실행하는 온디맨드 실행 환경이다.
    그 코드 실행의 스케줄링은 javascript엔진이 호스팅된 런타임 환경에 맡기게 된다.

    one thread == one call stack == one thing at a time
*/
