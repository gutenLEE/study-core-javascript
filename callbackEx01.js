function proccess(datas, callback){

    var res = 0;
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

console.log("----------------------------") 



function process2(datas){
    var res = 0;
    datas.forEach(item => {
        res += item;
    });
    return res;
}
// ... 
console.log("요청 시작2");

console.log(process2(datas));

console.log("요청 종료2");

// https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/#%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%B2%98%EB%A6%AC-%EA%B7%B8%EA%B2%8C-%EB%AD%94%EA%B0%80%EC%9A%94