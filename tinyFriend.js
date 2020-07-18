function tinyFriend(name)
{
    let smallName=name[0];
    for(let i=0;i<name.length;i++)
    {
        let currentName= name[i];
        if(smallName.length>currentName.length)
        {
            smallName=currentName;
        }
    }
    return smallName;
    
}
let smallestName=tinyFriend(['avishek','raju','khairul','hridoy'])
console.log(smallestName);