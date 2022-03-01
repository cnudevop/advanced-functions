function test1() {
    console.log("called test1 function")

}
function test2(...a) {
    console.log("called test 2 as a value =" , a)
}
//test2(10)
test2(1,2,3,4,5)