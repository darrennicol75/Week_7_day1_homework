import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			tasks: [
				{name: "Buy shopping", priority: false}, {name: "Walk dug", priority: true}, {name: "Clean hoose", priority: false}
		],
			newTask: ""
		},
		methods: {
			saveNewTask: function(){
				this.tasks.push({
					name: this.newTask,
					priority: false});
				this.newTask = "";
			},
			addTask: function(index){
			// console.log(index);
			this.tasks[index].priority = true
			}
		}
	});
});
