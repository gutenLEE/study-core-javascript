var arr = {address : '주소', phone : '010', name : 'LEE', extra : {ex1 : 1, ex2 : 2}}

var arr2 = {
    address : null,
    phone : null,
    name : null,
    extra : null
}

arr3 = {...arr2, ...arr};


var etcUtil = {
    deepMerge : function(target, source){
        var keys = Object.keys(source);
        keys.forEach(function(key){
            if (source[key] instanceof Object){ // deepMerge
                Object.assign(source[key], etcUtil.deepMerge(target[key], source[key]));

            } 
        });
        /**
         * parent.auth || {} means if parent.auth is undefined, null or false in boolean case 
         * then new empty object will be initialized and assigned.
         */
        Object.assign(target || {}, source);
        return target
    },
    clone : function( obj ) {
        var cloneStr = JSON.stringify( obj );
        return JSON.parse( cloneStr );
    },
    ifEmpty : function( obj ) {
        return obj == undefined || obj == '' || obj == '-' || obj.length == 0 ? null : obj;  
    }
}

console.log(etcUtil.deepMerge(arr2, arr));


console.log('-----------------------------')
const target = {};
const source = {b : '메론', c : '수박'};

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
