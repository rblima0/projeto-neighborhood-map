import { FOURSQUARE_CLIENT_ID, FOURSQUARE_CLIENT_SECRET } from './keys';

/* Comunicação com a API do Foursquare */
const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180716';
const lang = 'pt';

export const getDetails = (id) =>
	fetch(`${api}${id}?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${version}&locale=${lang}`)
	.then(res => res.json())
	.then(data => data.response.venue)
    .catch(err => console.log('Failed retrieving information', err))