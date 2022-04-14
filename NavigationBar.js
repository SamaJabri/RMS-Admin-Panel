function openNav()
{
    document.getElementById("sideBar").style.width = "35rem";

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav()
{
    document.getElementById("sideBar").style.width = "0";

    document.body.style.backgroundColor = "white";
}
function onFocusOut()
{
    document.getElementById("menuDiv").style.display = "none";
}

$(document).ready(function ()
{
    $('#sidebarCollapse').on('click', function ()
    {
        $('#sidebar').toggleClass('active');
    });
});
