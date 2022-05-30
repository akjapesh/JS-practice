//arrays methods

var arr=[0,1,2,3,4,5,6,7,8,9]

var n1=arr.push(10);//length
console.log(n1,arr);

n1=arr.pop();//popped element
console.log(n1,arr);

n1=arr.splice(-3);//removed array
console.log(n1,arr);

n1=arr.shift();//pop_front
console.log(n1,arr);

n1=arr.unshift('hello')//push_front
console.log(n1,arr);

n1=arr.splice(0,2);//pop_front_multiple
console.log(n1,arr);

n1=arr.splice(arr.indexOf(4),1)//remove 4 from arr
console.log(n1,arr);

n1=arr.splice(-3,2,'bye','world');//replace items
console.log(n1,arr);

arr.forEach(function(item,indx,aray){//forEach
    console.log(item,indx);
});

var arr2=["xyz","abc"];
var arr3=arr.concat(arr2);//concat
console.log(arr3,arr,arr2);//other arr remained unchanged

var copyarr=[...arr];//Array.from(arr)//arr.slice()
console.log(copyarr);

const doubledArr = arr.map((value) => {
    return value * 2;
  });
  console.log(doubledArr);

  const filteredArray = arr.filter((value) => {
    return value > 3;
  });
  console.log(filteredArray);

  var arr=[2,3,4,5,6];
  var arr2=arr.map(i=>2*i);
  console.log(arr,arr2);

  var arr3=arr.filter(i=>i<=3);
  console.log(arr,arr3);