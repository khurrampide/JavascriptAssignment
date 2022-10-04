var obj = {manf:"", modal:"", color: "", year:""};


function car(man,mod,col,y)
{
    obj.manf = man;
    obj.modal = mod;
    obj.color = col;
    obj.year = y;
}

car("Toyota","Prius","White",2012);
console.log(obj);