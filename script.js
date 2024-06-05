// Greet User

const d = new Date(),
	hour = d.getHours();
console.log(d);
console.log(`It is the ${hour} hour`);

if (hour < 10) {
	greet = 'Good Morning';
} else if (hour < 13) {
	greet = 'Good Day';
} else if (hour < 15) {
	greet = 'Good Afternoon';
} else if (hour < 20) {
	greet = 'Good Evening';
} else {
	greet = 'Good Night';
}
console.log(greet);
alert(greet);
