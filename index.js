// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict'

// https://opendata.paris.fr/explore/dataset/lieux-de-tournage-a-paris/information
const filmingLocations = require('./lieux-de-tournage-a-paris.json')

console.log('🚀 It Works!');

/**
 * 💅 Try to produce the most readable code, use meaningful variable names
 * Your intentions should be clear by just reading the code
 * Good luck, have fun !
 */

// 📝 TODO: Number of filming locations
// 1. Make the function return the number of filming locations
function getFilmingLocationsNumber () {
	return filmingLocations.length
}
console.log(`There is ${getFilmingLocationsNumber()} filming locations in Paris`)

// 📝 TODO: Filming locations sorted by start date, from most recent to oldest.
// 1. Implement the function
// 2. Log the first and last item in array
function sortFilmingLocationsByStartDate () {

	const compareFn = (locationA, locationB) => new Date(locationB["fields"]["date_debut"])-new Date(locationA["fields"]["date_debut"]);
	let sortedArray = filmingLocations.sort(compareFn);
	return sortedArray;
}
let tempSorted = sortFilmingLocationsByStartDate()
console.log(tempSorted[0],tempSorted[tempSorted.length-1])

// 📝 TODO: Number of filming locations in 2020 only
// 1. Make the function return the number of filming locations in 2020 only
// 2. Log the result
function getFilmingLocationsNumber2020 () {
	let compteur=0;
	const temp = [];
	for(let i=0; i < filmingLocations.length; i++){
		if((filmingLocations[i]["fields"]["annee_tournage"]==="2020")&& (!(temp.find(x => x == filmingLocations[i]["fields"]["adresse_lieu"])))){
			temp[temp.length] = filmingLocations[i]["fields"]["adresse_lieu"]
			compteur+=1;
		}
	}
	return compteur
}
let nb2020 = getFilmingLocationsNumber2020()
console.log(`There is ${nb2020} filming locations in Paris in 2020 only`)

// 📝 TODO: Number of filming locations per year
// 1. Implement the function, the expected result is an object with years as
// keys and filming locations number as value, e.g:
//    const filmingLocationsPerYear = {
//      '2020': 1234,
//      '2021': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerYear () {
	const filmingLocationsPerYear = {}
	for(const elem of filmingLocations){
		if(!(elem["fields"]["annee_tournage"] in filmingLocationsPerYear)){
			filmingLocationsPerYear[elem["fields"]["annee_tournage"]] = 1;
		}
		else{
			filmingLocationsPerYear[elem["fields"]["annee_tournage"]] += 1;
		}
	}
	return filmingLocationsPerYear;
}

console.log(getFilmingLocationsNumberPerYear())

// 📝 TODO: Number of filming locations by district (arrondissement)
// 1. Implement the function, the expected result is an object with
// district as keys and filming locations number as value, e.g:
//    const filmingLocationsPerDistrict = {
//      '75013': 1234,
//      '75014': 1234,
//    }
// 2. Log the result
function getFilmingLocationsNumberPerDistrict (arr) {
	const filmingLocationsPerDistrict = {};
	for(const elem of filmingLocations){
		if(!(elem["fields"]["ardt_lieu"] in filmingLocationsPerDistrict)){
			filmingLocationsPerDistrict[elem["fields"]["ardt_lieu"]] = 1;
		}
		else{
			filmingLocationsPerDistrict[elem["fields"]["ardt_lieu"]] += 1;
		}

	}
	return filmingLocationsPerDistrict;
}

console.log(getFilmingLocationsNumberPerDistrict())

// 📝 TODO: Number of locations per film, sorted in descending order
// 1. Implement the function, result expected as an array of object like:
//    const result = [{film: 'LRDM - Patriot season 2', locations: 12}, {...}]
// 2. Log the first and last item of the array
function getFilmLocationsByFilm () {
	const result = [];

	for(const elem of filmingLocations){
		let include = false;
		let movie = elem["fields"]["nom_tournage"];
		if(result.length === 0){
			result.push({'film':movie, 'locations':1})
		}
		else{
			for (const e of result){
				if(e['film'] === movie){
					e['locations']+=1;
					include=true;
				}
			}
			if(!include){
				result.push({'film':movie, 'locations':1});
				include = false;
			}
		}
	}
	const compare = (a,b) => b['locations'] - a['locations'];
	result.sort(compare);
	return result;
}
let temp = getFilmLocationsByFilm()
console.log(temp[0],temp[temp.length-1])

// 📝 TODO: Number of different films
// 1. Implement the function
// 2. Log the result
function getNumberOfFilms() {
	return temp.length.toString()
}
console.log(getNumberOfFilms())

// 📝 TODO: All the filming locations of `LRDM - Patriot season 2`
// 1. Return an array with all filming locations of LRDM - Patriot season 2
// 2. Log the result
function getArseneFilmingLocations () {
	const resultPatriot = []
	for(const elem of filmingLocations){
		if((elem["fields"]["nom_tournage"]==="LRDM - Patriot season 2")&&(!resultPatriot.includes(elem["fields"]["adresse_lieu"]))){
			resultPatriot.push(elem["fields"]["adresse_lieu"]);
		}
	}
	return resultPatriot;
}
console.log(getArseneFilmingLocations())

// 📝 TODO: Tous les arrondissement des lieux de tournage de nos films favoris
//  (favoriteFilms)
// 1. Return an array of all the districts of each favorite films given as a
//    parameter. e.g. :
//    const films = { 'LRDM - Patriot season 2': ['75013'] }
// 2. Log the result
function getFavoriteFilmsLocations (favoriteFilmsNames) {
	return []
}
const favoriteFilms =
	[
		'LRDM - Patriot season 2',
		'Alice NEVERS',
		'Emily in Paris',
	]

// 📝 TODO: All filming locations for each film
//     e.g. :
//     const films = {
//        'LRDM - Patriot season 2': [{...}],
//        'Une jeune fille qui va bien': [{...}]
//     }
function getFilmingLocationsPerFilm () {
	return { }
}

// 📝 TODO: Count each type of film (Long métrage, Série TV, etc...)
// 1. Implement the function
// 2. Log the result
function countFilmingTypes () {
	return {}
}

// 📝 TODO: Sort each type of filming by count, from highest to lowest
// 1. Implement the function. It should return a sorted array of objects like:
//    [{type: 'Long métrage', count: 1234}, {...}]
// 2. Log the result
function sortedCountFilmingTypes () {
	return []
}

/**
 * This arrow functions takes a duration in milliseconds and returns a
 * human-readable string of the duration
 * @param ms
 * @returns string
 */
const duration = (ms) => `${(ms/(1000*60*60*24)).toFixed(0)} days, ${((ms/(1000*60*60))%24).toFixed(0)} hours and ${((ms/(1000*60))%60).toFixed(0)} minutes`

// 📝 TODO: Find the filming location with the longest duration
// 1. Implement the function
// 2. Log the filming location, and its computed duration

// 📝 TODO: Compute the average filming duration
// 1. Implement the function
// 2. Log the result
