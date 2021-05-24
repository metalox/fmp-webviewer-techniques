
const form1 = document.getElementById("form1");
const submitbtn = document.getElementById("submitbtn");
var datainfo = {};
datainfo.id_peopele = $(#recordinfo).attr("data-id_people");
datainfo.hashbefore = $(#recordinfo).attr("data-hashbefore");
datainfo.newRecord = $(#recordinfo).attr("data-newrecord");


// hello world
function helloWorld() {
    alert(JSON.stringify(datainfo));
};



