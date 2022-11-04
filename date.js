//jshint esversion:6
module.exports = gateDate;

function gateDate(){
    const today = new Date();
    const options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}