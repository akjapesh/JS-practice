var obj1={
    key1: "val1",
    key2: 2,
    key3 :{
        subkey1: "hello",
        subkey2: "world",
    }
};

for(var key in obj1){
    console.log(key,obj1[key])
}

console.log(Object.keys(obj1))

function change(objj){
    objj.key1="newval";
    objj.key2=3;
}

change(obj1);

console.log(
    obj1
);
