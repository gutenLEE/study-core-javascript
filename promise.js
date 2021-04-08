

var _promise = function(param){
    return new Promise(function (resolve, reject){

        this.setTimeout(function(){

            if(param){
                resolve('solved.');
            }
            else{
                reject(Error('failed.'));
            }
        }, 3000);
    });
};

_promise(true)
    .then(function(text){
        console.log(text);
    }, function(error){
        console.error(error);
    })

    // https://programmingsummaries.tistory.com/325

    

/*
promise 패턴
비동기 작업들을 순차적으로 진행하거나, 병렬로 진행하는 등의 컨드롤리 보다 수월해지고 코드의 가독성이 좋아진다. 
내부적으로 예외처리에 대한 구조가 탄탄하기 때문에 오류가 발생했을 때 오류 처리 등에 대해 보다 가시적으로 관리해줄 수 있는 장점이 있다. 
    pending 
    아직 약속을 수행 중인 상태

    fulfilled
    약속이 지켜진 상태

    rejected
    약속이 어떤 이유에서 못 지켜진 상태

    settled
    약속이 지켜졌든 안지켜졌든 일단 결론이 난 상태.
*/

// 에러 잡는 Promise.catch API
_promise(true)
    .then(JSON.parse)
    .catch(function(){
        this.alert('체이닝 중간에 에러 발생');
    })
    .then(function(text){
        console.log(text);
    })

// 여러 프로미스가 모두 완료될 때 실행 - promise.all API
var promise1 = new Promise(function(resolve, reject){

    window.setTImeout(function(){
        console.log('1 ok');
        resolve("!111");
    }, Math.random() * 20000 + 1000);
});

var promise2 = new Promise(function (resolve, reject) {
	// 비동기를 표현하기 위해 setTimeout 함수를 사용 
	window.setTimeout(function () {

		// 해결됨 
		console.log("두번째 Promise 완료");
		resolve("222222");

	}, Math.random() * 10000 + 1000);
});

Promise.all([promise1, promise2]).then(function (values) {
	console.log("모두 완료됨", values);
});

// return 하지 않고 바로 new Promise 생성하기
