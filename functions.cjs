var fs = require('fs')
import passtools from './password-updator.cjs'
import axios, {isCancel, AxiosError} from 'axios';

function makenumber(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function getcurrentpassword (){
    var pathtopass = 'pass.txt'
    // var currentpass = fs.readFileSync(pathtopass, 'utf8');
    var currentpass ='abc'
    return currentpass
}
function findapikeys(whichone)
{
    var pathtoapikeys = 'keys.txt'
    // var apikeys = fs.readFileSync(apikeys, 'utf8');
    return '1234'
}
function passwordarray(grade,printer) {
    var currentpassword = getcurrentpassword(grade,printer)
    var newpassword = makenumber(7)
    var datatoupdate = {
        "password": newpassword,
        "current": currentpassword
    }
    return datatoupdate
}
function apipathfinder(username) {
    var path = ("/api/access/users/"+username+"/password")
    return path
}
function octopasswordupdator(whichones) {
    if (whichones = 'all') {
        passtools.passwordupdator(6)
        passtools.passwordupdator(7)
        passtools.passwordupdator(8)
        passtools.passwordupdator(9)
        passtools.passwordupdator(10)
        passtools.passwordupdator(11)
        passtools.passwordupdator(12)
    }
    else if (whichones = '6') {
        passtools.passwordupdator(6)
    }
    else if (whichones = '7')
    {
        passtools.passwordupdator(7)
    }
    else if (whichones = '8')
    {
        passtools.passwordupdator(8)
    }
    else if (whichones = '9')
    {
        passtools.passwordupdator(9)
    }
    else if (whichones = '10')
    {
        passtools.passwordupdator(10)
    }
    else if (whichones = '11')
    {
        passtools.passwordupdator(11)
    }
    else if (whichones = '12')
    {
        passtools.passwordupdator(8)
    }
    else if (whichones = 'highschool') {
        passtools.passwordupdator(6)
        passtools.passwordupdator(7)
        passtools.passwordupdator(8)
    }
    else if (whichones = 'middleschool') {
        passtools.passwordupdator(9)
        passtools.passwordupdator(10)
        passtools.passwordupdator(11)
        passtools.passwordupdator(12)
    }
}


module.exports = {
    makenum: function (length) {return makenumber(length)},
    // the code generator

    getcurrentpass: function () {return getcurrentpassword()},
    // get the current password to change existing

    getapikeys: function (whichone) {return findapikeys(whichone)},
    // returns array with the api keys

    passarray: function () {return passwordarray()},
    // returns array with current password and new password

    pathfinder: function(username) {return apipathfinder(username)},
    // returns string with the path to be used

    passwordupdator: function (whichones) {return octopasswordupdator(whichones)}
    // the big passwordupdator selection


}