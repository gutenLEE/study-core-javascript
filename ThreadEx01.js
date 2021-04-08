function process(datas, printResult){
    /* 문제 */
    datas.forEach(element => {
        res += element;
    });
    printResult(res);
};

function printResult(result){
    console.log(result);
}

let datas = [3, 5, 7, 1, 9, 4];

console.log("요청 시작");

process(datas, printResult(res));

console.log("요청 종료");