import React, {Component} from 'react';

export default class CardData extends Component{
	constructor(urlLink){
		super(props);
		this.getDataFromDataBase(urlLinks);
	}

	// method that contains promise
	// to fetch data from Django 
	// database with reddit comments
	getDataFromDataBase(urlLinks){
		itemPromises = urlLinks.map(this,fetchJSON);
		Promise.all(itemPromises)
			   . then(function(results){
			   		results.forEach(function(item){
			   			// TODO: Process promise items

			   		});
			   }).catch(function(err){
			   		console.log("Failed:", err);
			   });

	}

	fetchJSON(url){
		return new Promise((resolve, reject) => {
			$.getJSON(url)
				.done((json)=> resolve(json))
				.fail((xhr, status, err) => reject(status + err.message))
		});

	}
}