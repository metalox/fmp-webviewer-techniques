
//const form1 = document.getElementById("form1");
//const submitbtn = document.getElementById("submitbtn");



// hello world
function helloWorld() {
var recordinfo = {};
recordinfo.newRecord = $("#recordinfo").data("newrecord");
recordinfo.id_people = $("#recordinfo").data("id_people");
recordinfo.hashbefore = $("#recordinfo").data("hashbefore");
    alert(JSON.stringify(recordinfo));
};



