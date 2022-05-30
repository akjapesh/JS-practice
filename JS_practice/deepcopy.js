//spread
function sum(x, y, z) {
    return x + y + z;
  }
  
  var numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  console.log(numbers);
  console.log(...numbers);
  
  var numbers2=[...numbers];
  var numbers3=numbers;
  numbers3.push(6,7);
  numbers2.push(4,5);
  console.log(numbers,numbers2,numbers3);
  // spread op creates deep copy in ARRAY

 var obj1={
    key1: "value1",
    key2: 2,
    key3: {
        subkey1: "hello",
        subkey2: "world",
    }
  };
  var obj2={...obj1};
  obj2.key1="diff value"
  obj2.key2=3;
  obj2.key3.subkey1="bye"
  console.log(obj1,obj2);
  //////

  var ing_list=["noodles",{"list":["eggs","flour","water"]}];
  var deep_list1=ing_list;
  var deep_list2=[...ing_list];
  var deep_list3=JSON.parse(JSON.stringify(ing_list));
  //var deep_list3=Object.assign(ing_list)
  //recursion
  /*
function deepCopy(srcobj, destobj) {
  for (key in srcobj) {
    if (typeof srcobj[key] != "object") {
      destobj[key] = srcobj[key];
    } else {
      destobj[key] = {};
      deepCopy(srcobj[key], destobj[key]);
    }
  }
}
  */
  deep_list1[1].list=["chawal","daal","roti"];
  deep_list2[1].list=["vanilla","chocolatte"];
  deep_list3[1].list=["rice","pulse","chapati"];

  console.log(ing_list);
  console.log(deep_list1);
  console.log(deep_list2);
  console.log(deep_list3);