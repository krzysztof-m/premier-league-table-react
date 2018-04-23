/*

thanks for registering for an API authentication token. Please modify your client to use a HTTP header named "X-Auth-Token" with the underneath personal token as value.

Your API token: 11c586940cbd432984afcd169ba8a8a8
Please verify your mail address by clicking here and tell me if you want me to keep you posted about updates and/or changes to the API.
 
*/

import axios from 'axios';

const API_KEY = '11c586940cbd432984afcd169ba8a8a8';
export const FETCH_DATA = 'FETCH_DATA';

export function fetchData() {
    const url = "http://api.football-data.org/v1/competitions/445/leagueTable";
    const request = axios.get(url,  { headers: { 'X-Auth-Token': API_KEY } } );
    console.log(request);
    return {
        type: FETCH_DATA,
        payload: request
    }
}