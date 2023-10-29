import { findapikeys, apipathfinder, passwordarray } from "./functions";
import axios, { isCancel, AxiosError } from "axios";

export default axiosfunc (grade) {
    console.log("axiosfunc")
    axios.post(apipathfinder(grade)[, data[, config]])
    /*axios.put({
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
*/
}