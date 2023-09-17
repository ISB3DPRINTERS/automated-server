import { findapikeys, apipathfinder, passwordarray } from "./functions";
import axios, { isCancel, AxiosError } from "axios";

export default axiosfunc () {
    console.log("axiosfunc")
    axios({
    method: "put",
    url: apipathfinder(grade),
    body: {
      password: passwordarray(grade,printer,"new"),
      current: passwordarray(grade,printer,"old"),
    },
    headers: {
      "X-Api-Key": findapikeys(grade, printer),
    },
  });

}