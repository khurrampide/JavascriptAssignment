var users = ["admin","khurram","ali","kamran","adeel"];
user = "admin";
for (i=0; i<users.length; i++)
{
    if (users[i] == user && user == "admin")
     {
         console.log("Hello admin, would you like to see a status report?");
         break;
     }
    else if (users[i] == user)
        {
            console.log("Hell0 " + users[i] + ", thank you for logging in again.");
            break;
        }
}