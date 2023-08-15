import fs from "fs";
import funcs from "./functions.cjs";
let apikeys = funcs.getapikeys();
import axios, { isCancel, AxiosError } from "axios";
async function therealchanger(grade) {
  // makes another async function to save space
  async function evenrealerchanger(grade, printer) {
    var passwordstuff = funcs.passarray(grade, printer);
    //uses axios to send put request
    const res = await axios({
      method: "put",
      url: funcs.pathfinder(grade),
      body: {
        password: passwordstuff.password,
        current: passwordstuff.current,
      },
      headers: {
        "X-Api-Key": funcs.getapikeys(grade, whichprinter),
      },
    });
    console.log(res);
  }
  await evenrealerchanger(grade, 1);
  await evenrealerchanger(grade, 2);
  await evenrealerchanger(grade, 3);
  await evenrealerchanger(grade, 4);
  // will call for each printer
}
// has to be crowded into big function so can be called from functions.cjs, then will use evenrealerchanger to save lines and time
// below is octoprint api for password changing
// PUT /api/access/users/(string:username)/password
module.exports = {
  realpasswordupdator: function (grade) {
    therealchanger(grade);
  },
};
