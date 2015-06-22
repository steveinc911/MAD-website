$(document).ready(function(){
    var is_menu_shown=0;
    $("#menu-button").click(function(){
        if(is_menu_shown==0){
            $('body').append("<style type='text/css' id='showmenu-css'>@media screen and (max-width: 768px) { .main-nav{ display:block;} }</style>");
            is_menu_shown=1;
        }
        else{
            $("#showmenu-css").remove();
            is_menu_shown=0;
        }
    });
});