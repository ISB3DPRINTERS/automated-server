import fs from "fs";
import funcs from "./functions.cjs";
import passwordupdator from "./password-updater.cjs";
const apikeys = funcs.getapikeys();
import axios, { isCancel, AxiosError } from "axios";

funcs.passwordupdator("all");
