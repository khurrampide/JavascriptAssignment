function show_magicians(mag)
{
    console.log(mag);
}

function make_great(gmag)
{
    gmag[0] = "The Great " + gmag[0];
    gmag[1] = "The Great " + gmag[1];
    gmag[2] = "The Great " + gmag[2];
}

var magicians = ["bark","sab", "John"];
make_great(magicians);
show_magicians(magicians);