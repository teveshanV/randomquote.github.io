const quotes = [
	"Be yourself; everyone else is already taken. - Oscar Wilde",
	"You only live once, but if you do it right, once is enough. - Mae West",
	"Be the change that you wish to see in the world. - Mahatma Gandhi",
	"The only way to do great work is to love what you do. - Steve Jobs",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
	"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
	"Everything you've ever wanted is on the other side of fear. - George Addair",
	"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean"
];

function generateQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	document.getElementById("quote").innerHTML = `<p>${quotes[randomIndex]}</p>`;
}