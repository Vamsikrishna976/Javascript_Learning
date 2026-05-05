
// getname()

// console.log(x);

// console.log(getname);

// var x =10;

// function getname(){
//     var name = 'Namaste';
//     console.log(name);
// }


// (function sum(a,b){
//     var c = a+b;
//     console.log(c);
// }) (5,10);
 
// function a() {
//     var b = 10;
//     d();
//     function d() {
//         function c() {
//             console.log(b);
//         } c();
//     }
// }

// a();


let a;
a =10;
console.log(a);

const b = 20;
console.log(b);


















//cart
// create order (creates orderid)
// proceed to payment (creates payment info)
// ordersummary
// update wallet

createorder (cart, (orderid)=> {
    proceedtopayment(orderid, (paymentinfo) => {
        getordersummary(Paymentinfo, () => {
            updatewallet();
        });
    });
});

const cart = ["shoes", 'pants']

const promise = createorder(cart,orderid)
.then(function (orderid){
    return proceedtopayment(orderid);
})
.then(function (paymentinfo){
    return ordersummary(paymentinfo);
})
.then(function (paymentinfo){
    return updatewallet(paymentinfo);
});



const promise1 =createorder(cart,orderid)
.then((orderid) => proceedtopayment(orderid))
.then((paymentinfo) => ordersummary(paymentinfo))
.then((paymentinfo) => updatewallet(paymentinfo));




















