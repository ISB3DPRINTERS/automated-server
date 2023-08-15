var ip = "192.168.50.119:8002"
import fetch from 'node-fetch';
import fs from 'fs'
import funcs from './functions.cjs'
import passwordupdator from './password-updater.cjs'
const apikeys = funcs.getapikeys()
import axios, {isCancel, AxiosError} from 'axios';
// PUT /api/access/users/(string:username)/password

/*
await funcs.makenum(7)
function httpGet(ip,path,key){
    const url = (ip+path);
    var xhr = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.setRequestHeader("X-Api-Key",key);
    xmlHttp.send(null)
    return xmlHttp.responseText;
}

/*
fetch
    const url = (ip+path)
    fetch(url, {
    method: 'PUT',
    headers: { 'X-Api-Key': key1 }
})    .then(res => res.text())
        .then(text => console.log(text));
 */






/*
client.get /api/files HTTP/1.1
Host: example.com
X-Api-Key: abcdef...
*/