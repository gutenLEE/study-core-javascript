function proccess(datas, callback){

    //callback(res); -> 이 위치는 undefined 뜸
    var res = 0;
    //callback(res); -> 여기서는 0 출력
    datas.forEach(item => {
        res += item;
    });
    callback(res);
}

function printResult(res){
    console.log(res);
}

// ... 
let datas = [3, 5, 7, 1, 9, 4];

console.log("요청 시작");

proccess(datas, printResult);

console.log("요청 종료");