import { findapikeys } from "./functions.mjs";

export default async function therealchanger(grade) {
  async function evenrealerchanger(grade, printer) {
    import {
      findapikeys,
      apipathfinder,
      passwordarray
    } from "./functions.mjs"
    import axios, { isCancel, AxiosError } from "axios";
    //uses axios to send put request
    var apikeys = findapikeys(grade,printer);
    const res = await axios({
      method: "put",
      url: apipathfinder(grade),
      body: {
        password: passwordarray(grade,printer,"new"),
        current: passwordarray(gradel,printer,"old"),
      },
      headers: {
        "X-Api-Key": findapikeys(grade, printer),
      },
    });
    console.log(res);
  }

  await evenrealerchanger(grade, 1);
  await evenrealerchanger(grade, 2);
  await evenrealerchanger(grade, 3);
  await evenrealerchanger(grade, 4);
  // will call for each printer
  return "password-updater.js finished"
}