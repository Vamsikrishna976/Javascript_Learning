function outer(){
    let a = 10;
    let b = 20;
    console.log(b);
    function inner(){
        console.log(a);

    }
    inner();
}
outer();
