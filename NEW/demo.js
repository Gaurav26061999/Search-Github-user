window.addEventListener("load", function(){

    let name_input=document.getElementById('userInput');
    name_input.addEventListener("keyup", function(event){

        searchUser(event);
    })
    window.userSearchHhr=new XMLHttpRequest();

})

function searchUser(event){
    let input=event.target;
    const min_char=4;
    if(input.value.length < min_char){
        return undefined;
    }
    else{
        console.log(input.value);

        window.userSearchHhr.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                var response=JSON.parse(this.responseText);
                console.log(response);
            }
        }

        window.userSearchHhr.open("GET", "https://api.github.com/search/users?q=" + input.value,true);
        window.userSearchHhr.send();
    }
}