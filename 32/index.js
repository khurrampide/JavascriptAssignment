var current_users = ["khurram","ali","kamran","adeel","saad"];
var new_users = ["ahmed","zakria","mansoor","Ali","Saad"];

for (i=0; i<new_users.length; i++)
{

    for (j=0; j<current_users.length; j++)
    {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase())
            console.log(new_users[i] + " User Name already exists");
    }

}