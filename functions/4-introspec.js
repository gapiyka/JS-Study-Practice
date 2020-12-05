'use strict';

iface = 
{
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
};

function introspec(obj){
    let arr = [];
    for(let val in obj){
        arr.push([val, obj[val].length]);
    }
    return arr;
}
console.log(introspec(iface));