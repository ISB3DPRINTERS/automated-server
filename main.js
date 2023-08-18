import fs from "fs";
import functions from "./functions.mjs";
import axios, { isCancel, AxiosError } from "axios";
var cron = require('node-cron');

console.log(functions('all'))




/*
cron.schedule('0 0 * * *', () = {
   passwordupdator("all");
});
/*
 */