import fetch from 'node-fetch';
import fs from 'fs'
import funcs from './functions.cjs'
let apikeys = funcs.getapikeys()
import axios, {isCancel, AxiosError} from 'axios';
async function therealchanger(whichgrade) {
    var gradetochange = whichgrade

    async function evenrealerchanger(whichprinter, gradetochange) {
        var whichprinter = printertochange
        var passwordstuff = funcs.passarray()
        const options = {
            url: funcs.pathfinder(gradetochange),
            json: true,
            body: {
                password: passwordstuff.password,
                current: passwordstuff.current
            },
        }
        const res = await axios({
            method: 'put',
            url: funcs.pathfinder(gradetochange),
            body: {
                password: passwordstuff.password,
                current: passwordstuff.current
            },
        });

    }
// has to be crowded into big function so can be called from functions.cjs, then will use evenrealerchanger to save lines and time
// PUT /api/access/users/(string:username)/password