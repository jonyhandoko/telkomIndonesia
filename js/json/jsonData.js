var testData = {};

// The object that the JSON string should represent, can use this as it is if you want.
testData.category = [
	{
		id: 1,
		text: 'Broadband',
		url: 'broadband'
	},
	{
		id: 2,
		text: 'Wifi',
		url: 'wifi'
	},
	{
		id: 3,
		text: 'Bundle',
		url: 'bundle'
	},
	{
		id: 4,
		text: 'Software',
		url: 'software'
	},
	{
		id: 5,
		text: 'Softener',
		url: 'software'
	},
	{
		id: 6,
		text: 'Phone',
		url: 'phone'
	}];
	
// JSON string of the above object, just as an example
testData.categoryJSON = JSON.stringify(testData.category);