const { PI } = Math;
/* 3 Formas distintas para exportar una funcion
1)
exports.area = function area(r){
    return  PI * r ** 2;
};

2)
function area(r){
    return  PI * r ** 2;
}
exports.area = area;

3)

function area(r){
    return  PI * r ** 2;
}
module.exports.area = area;
*/
exports.circumference = (r) => 2 * PI * r;
exports.area = (r) =>  PI * r**2;