import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{bugs | closedCount}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`,
	styleUrls : ['bugStats.style.css']
})
export class BugStatsComponent{

	@Input('data')
	bugs : IBug[] = [];

}