function show_magicians()
{
    console.log(magicians);
    console.log(magicians2);
}

function make_great(gmag)
{
    
    gmag[0] = "The Great " + gmag[0];
    gmag[1] = "The Great " + gmag[1];
    gmag[2] = "The Great " + gmag[2];
}

var magicians = ["bark","sab", "John"];
var magicians2 = [];
for (i=0; i<magicians.length; i++)
    magicians2[i] = magicians[i];

make_great(magicians);
show_magicians();