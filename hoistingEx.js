var a = {
    b : function(){
        console.log(this);
    }

}
a.b();

var a = {
    b : {
        c : function(){
            console.log(this);
        }
    }
}
a.b.c();