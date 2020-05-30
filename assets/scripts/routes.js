// https://gomakethings.com/how-to-detect-when-the-browser-url-changes-with-vanilla-js/
// https://medium.com/altcampus/implementing-simple-spa-routing-using-vanilla-javascript-53abe399bf3c
window.addEventListener('popstate', function (event) {
	console.log(event)
});
