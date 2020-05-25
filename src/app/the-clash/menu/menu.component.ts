import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	food: string;
	foodChoice: boolean = false;
	@Input() showFood: boolean = true;
	@Output() foodSelected = new EventEmitter<string>();

	constructor(private DataService: DataService) { }

	ngOnInit(): void {
	}
	chooseFood(event) {
		this.food = event.target.value;
		console.log(this.food)
		this.pushFood();
	}
	pushFood() {
		this.DataService.PushFood(this.food)
		this.foodChoice = true;
		this.foodSelected.emit(this.food);
	}
}
