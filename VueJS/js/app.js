/*function car(name, model, owner, year, phone, image){
return {
name, model, owner, year, phone, image
}
}
*/
const car = (id,name, model, owner, year, phone, image) => ({id,name, model,
owner, year, phone, image})
const log = (text, type, date= new Date()) => ({text,type,date})
const cars = [
// {name:'Ford',model:'Focus',owner:'Max',year:2016,phone:'+3 921 123
//45 67',image:'images/focus.jpg'}
 car(0,'Ford', 'Focus', 'Max', 2016, '+3 921 123 45 67','images/focus.jpg' ),
car(1,'Ford', 'Mondeo', 'Bruce', 2018, '+3 921 757 45 44','images/mondeo.jpg' ),
car(2,'Porshe', 'Panamera', 'Kate', 2018, '+3 921 757 45 44','images/panamera.jpg' ),
car(3,'Tesla', 'Model S', 'Ilon', 2020, '+5 555 555 55 55','images/tesla.jpg' ),
car(4,'VAZ', '2107', 'Andrew', 2005, '+2 282 282 28 22','images/2107.jpg' )
]
new Vue({
 el:'#app',
data: {
// cars: [1,2,3]
cars: cars,
car : cars[0],
selectedCarIndex: 0,
phoneVisibility: false,
search: '',
modalVisibility: false,
logs:[],
},
methods: {
// selectCar: function(){
 selectCar: function(index){
console.log("click! index= ",index);
this.car = cars[index];
this.selectedCarIndex = index;
},
newOrder(){
this.modalVisibility=false
this.logs.push(
 log('Succes order: '+this.car.name + ' - ' +
this.car.model,'ok')
)
},
cancelOrder(){
this.modalVisibility=false
this.logs.push(
 log('Cancel order: '+this.car.name + ' - ' +
this.car.model,'cnl')
)
},
},
computed:{
phoneBtnText(){
return this.phoneVisibility ? "Hide phone" : "Show phone";
},
filteredCars(){
 return this.cars.filter((car)=>{
 return car.name.indexOf(this.search) > -1 ||
car.model.indexOf(this.search) > -1;
 })

 }
},
filters: {
date(value){
return value.toLocaleString()
}
}
})

