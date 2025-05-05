//Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?

//vengono stampati "Double Cheese Burger" e "Double Cheese Burger"
//Perché gli oggetti sono passati per riferimento, quindi quando modifichiamo secondBurger, stiamo modificando anche hamburger.

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//Solo uno, l'oggetto hamburger. secondBurger è solo un riferimento a quell'oggetto.

//Code Question 2

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//vengono stampati "Cheese" e "Salad"
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//Sono stati creati due oggetti: hamburger e secondBurger.

//Code Question 3

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//Sono stati creati tre oggetti: hamburger, secondBurger e thirdBurger.

//Code Question 4

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
//Il metodo migliore per clonare l'oggetto chef è utilizzare la sintassi {...chef}
//Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
//Il metodo migliore per clonare l'oggetto restaurant è structuredClone(restaurant)
