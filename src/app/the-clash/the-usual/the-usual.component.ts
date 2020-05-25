import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { Name } from 'src/app/name';

@Component({
	selector: 'app-the-usual',
	templateUrl: './the-usual.component.html',
	styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

	constructor(private DataService: DataService) { }

	userName: Name;

	ngOnInit(): void {
		this.userName = this.DataService.loadNames()
	}
}
