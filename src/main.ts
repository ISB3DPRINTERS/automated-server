import fs from "fs";
import functions from "./functions.js";
import axios, { isCancel, AxiosError } from "axios";
import * as cron from 'node-cron'

console.log(functions('all'))




/*
cron.schedule('0 0 * * *', () = {
   passwordupdator("all");
});
/*
 */