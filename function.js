const opn = require('opn');
const ip = require('ip');
const publicIp = require('public-ip');
const $ = require('jquery');
const os = require('os');
const macaddress = require('macaddress');
const internalIp = require('internal-ip');

$('#menu').hide();

$("#github").click(function() {
    opn('https://github.com/McGdevfunk824/netvital/');
})
$('#start-button').click(function (){
    $("#welcome").fadeOut(500);
    setTimeout(function() {
        $("#menu").fadeIn(500);
    }, 500);
});


require('dns').resolve('www.google.com', function(err) {
    if (err) {
        $("#connection").html("No Connection");
    } else {
        $("#connection").html("Connected");
    }
});
$('#hostname').html(os.hostname);
publicIp.v4().then(ipv4 => {
    $('#ipv4here').html(ipv4);
});
publicIp.v6().then(ipv6 => {
    $('#ipv6here').html(ipv6);
});
internalIp.v4().then(ipv4loc => {
    $('#ipv4lochere').html(ipv4loc);
});
internalIp.v6().then(ipv6loc => {
    $('#ipv6lochere').html(ipv6loc);
});
macaddress.one(function(err, mac) {
    $('#mac').html(mac);
});

$("#home").click(function(){
    $("#menu").fadeOut(500);
    setTimeout(function() {
        $("#welcome").fadeIn(500);
    }, 500);
});
