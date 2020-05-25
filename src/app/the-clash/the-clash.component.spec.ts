import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TheClashComponent } from './the-clash.component';

describe('TheClashComponent', () => {
	let component: TheClashComponent;
	let fixture: ComponentFixture<TheClashComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TheClashComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TheClashComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
