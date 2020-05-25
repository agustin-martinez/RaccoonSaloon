import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Name } from '../name';
import { Food } from '../food';

@Component({
	selector: 'app-the-clash',
	templateUrl: './the-clash.component.html',
	styleUrls: ['./the-clash.component.css']
})
export class TheClashComponent implements OnInit {

	names: Name;
	nameInput: string;
	greet = false;
	userFood: Food;
	foodFirstChoice: boolean;
	foodSecondChoice: boolean = false;
	usual: boolean = false;
	usualIsNull: boolean = false
	usualClicked: boolean = false;
	clearUser: boolean = false;

	constructor(private DataService: DataService) {
	}

	ngOnInit(): void {
		this.names = this.DataService.loadNames()
		this.userFood = this.DataService.loadFood()
	}

	playAudio() {
		let audio = new Audio();
		audio.src = "../../assets/gunshot.wav";
		audio.load();
		audio.play();
	}

	saveNames() {
		this.DataService.saveNames(this.nameInput)
		this.greet = true;
		this.playAudio();
	}

	keyUpName(event) {
		this.nameInput = event.target.value;
	}

	foodSelected(food) {
		this.userFood = food;
		this.foodFirstChoice = true;
		this.foodSecondChoice = true;
		if (this.usualClicked == true) {
			this.foodSecondChoice = true;
			this.usual = false;
		}
	}

	theUsual() {
		this.usualClicked = true;
		if (this.userFood == null) {
			this.usualIsNull = true;
		}
		else if (this.usualClicked == true && this.foodSecondChoice == true) {
			this.usual = false;
		}
		else {
			this.usual = true;
		}
	}

	removeFunction() {
		window.localStorage.clear();
		this.clearUser = true;
		this.refresh();
	}

	refresh(): void {
		window.location.reload();
	}
}
