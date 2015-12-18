/**
 * Created by lizhoulu on 2015/12/12.
 */

//==============================
//unit.js
//==============================
function print(str){
    console.log(str);
}
//==============================
//查找元素by className
//==============================
function findElementsByClassName( targetClassName,fatherNode){

    //存在fatherNode就调用，默认document
    var parentNode = document.getElementById(fatherNode)||document;

    // 遍历父类下的所有元素
    var childNodes = parentNode.getElementsByTagName("*");

    var result = [];

    for(var i=0;i<childNodes.length;i++){
        if(childNodes[i].className===targetClassName)
        result.push(childNodes[i]);
    }
    print(result);
    return result;
}
findElementsByClassName("testclass","testid");