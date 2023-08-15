var fs = require("fs");
import passtools from "./password-updator.cjs";
import axios, { isCancel, AxiosError } from "axios";

function makenumber(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
function getcurrentpassword(grade, printer) {
  var pathtopass = "pass.txt";
  // var currentpass = fs.readFileSync(pathtopass, 'utf8');
  var currentpass = "abc"; //TESTING PURPOSES ONLY
  return currentpass;
}
function findapikeys(grade, printer) {
  var pathtoapikeys = "keys.txt";
  // var apikeys = fs.readFileSync(apikeys, 'utf8');
  return "1234";
}
function passwordarray(grade, printer) {
  var currentpassword = getcurrentpassword(grade, printer);
  var newpassword = makenumber(7);
  var datatoupdate = {
    password: newpassword,
    current: currentpassword,
  };
  return datatoupdate;
}
function apipathfinder(grade) {
  var path = "/api/access/users/" + "grade" + grade + "/password";
  return path;
}
function octopasswordupdator(grade) {
  if ((grade = "all")) {
    passtools.realpasswordupdator(6);
    passtools.realpasswordupdator(7);
    passtools.realpasswordupdator(8);
    passtools.realpasswordupdator(9);
    passtools.realpasswordupdator(10);
    passtools.realpasswordupdator(11);
    passtools.realpasswordupdator(12);
  } else if ((grade = "6")) {
    passtools.realpasswordupdator(6);
  } else if ((grade = "7")) {
    passtools.realpasswordupdator(7);
  } else if ((grade = "8")) {
    passtools.realpasswordupdator(8);
  } else if ((grade = "9")) {
    passtools.realpasswordupdator(9);
  } else if ((grade = "10")) {
    passtools.realpasswordupdator(10);
  } else if ((grade = "11")) {
    passtools.realpasswordupdator(11);
  } else if ((grade = "12")) {
    passtools.realpasswordupdator(8);
  } else if ((grade = "highschool")) {
    passtools.realpasswordupdator(6);
    passtools.realpasswordupdator(7);
    passtools.realpasswordupdator(8);
  } else if ((grade = "middleschool")) {
    passtools.realpasswordupdator(9);
    passtools.realpasswordupdator(10);
    passtools.realpasswordupdator(11);
    passtools.realpasswordupdator(12);
  }
}

module.exports = {
  makenum: function (length) {
    return makenumber(length);
  },
  // the code generator

  getcurrentpass: function (grade, printer) {
    return getcurrentpassword(grade, printer);
  },
  // get the current password to change existing

  getapikeys: function (grade, printer) {
    return findapikeys(grade, printer);
  },
  // returns array with the api keys

  passarray: function (grade, printer) {
    return passwordarray(grade, printer);
  },
  // returns array with current password and new password

  pathfinder: function (grade) {
    return apipathfinder(grade);
  },
  // returns string with the path to be used

  passwordupdator: function (grade) {
    return octopasswordupdator(grade);
  },
  // the big passwordupdator selection
};
