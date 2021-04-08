function func(datas, callback){
    
    callback(res);

    var res = 0;
    datas.forEach(item => {
        res += item;
    });

}

function printResult(res){
    console.log(res);
}

// ... 
let datas = [3, 5, 7, 1, 9, 4];

console.log("요청 시작");

func(datas, printResult);

console.log("요청 종료");