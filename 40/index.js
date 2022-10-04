function make_album(aname, atitle, tracks)
{
    obj1.album = aname;
    obj1.altitle = atitle;
    obj1.atracks = tracks;
}

var obj1 = {album:"", altitle:"", atracks:""};
make_album("fakhar","junoon");

console.log(obj1);
