import functions from "./api/functions.js";
import * as cron from 'node-cron'

// scheduled change
// forced change is ./api/middleware/listener.ts
cron.schedule('0 0 * * *', () => {
   functions('all');
 });