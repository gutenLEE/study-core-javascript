// 깊은 클로닝에 대한 주의사항

// object.assign()은 속성의 값을 복사하기 때문에 다른 대안을 사용해야 한다. 
// 출처 값이 객체에 대한 참조인 경우, 참조 값만을 복사한다.

function test(){
    'user strict';

    let obj1 = {a : 0, b : { c : 0 }};
    let obj2 = Object.assign({}, obj1);

    console.log(JSON.stringify(obj2));
    console.log('---------------------------------');

    obj1.a = 1;
    console.log(JSON.stringify(obj1));
    console.log(JSON.stringify(obj2));

    console.log('---------------------------------');

    obj2.a = 2;
    console.log(JSON.stringify(obj1));
    console.log(JSON.stringify(obj2));


    console.log('---------------------------------');

    obj2.b.c = 3; // obj1, obj2 모두에 영향을 줌
    console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
    console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}

    console.log('---------------------------------');

     // 깊은 클론
    obj1 = { a: 0 , b: { c: 0}};
    let obj3 = JSON.parse(JSON.stringify(obj1));
    
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { a: 0, b: { c: 0}}
}
test();