// == any
var a1;
var b1;
a1 = 5;
a1 = "abc";
b1 = a1;
console.log(b1);
// == unknown
var a2;
var b2;
a2 = 5;
a2 = "abc";
// b2 = a2; // this can't assigned. cz a2 changable type
if (typeof a2 === "string") {
    b2 = a2; // only this way assigned unknown type value
    console.log(b2);
}
// == never
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occured", 500);
