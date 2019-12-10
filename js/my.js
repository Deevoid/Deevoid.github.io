let myb = document.getElementById('topbtn');

window.onscroll = function(){scrollfn()};

function scrollfn(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        myb.style.display = 'block';
    }
    else{
        myb.style.display = 'none';
    }
}

function up(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}