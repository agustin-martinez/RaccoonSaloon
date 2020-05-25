import { Injectable } from '@angular/core';
import { Name } from './name';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	PushFood(foodChoice: string) {
		let foodObj = {
			food: foodChoice
		}

		localStorage.setItem("PushFood", JSON.stringify(foodObj));
	}

	loadFood() {
		let userFood = JSON.parse(localStorage.getItem("PushFood"));
		return userFood;
	}

	saveNames(firstName: string) {

		let nameObj: Name = {
			firstname: firstName,
		};

		localStorage.setItem("UserName", JSON.stringify(nameObj));
	}

	loadNames(): Name {
		let names: Name = JSON.parse(localStorage.getItem("UserName"));
		return names;
	}

}


