function test(event){
    var menu=document.getElementById("more-menu");
    var caret=document.getElementById("caret");
    if(menu.style.display=="none"){
        menu.style.display="block";
        caret.className="fa fa-caret-up"
    }else{
        menu.style.display="none";
        caret.className="fa fa-caret-down"
    }
}