# JSON Object

- Data transfers by JSON format only

- Data types


var stringType = 'Siva';
var integerType = 10;
var booleanType = true;
var floatType = 10.20;
var objectType = {language:Tamil} // Key Value pairs
var ArrayType = ['Siva',true,10,10.5,{language:Tamil}] // Multiple values in single variable & Collection of all Data type

# Array Vs Object

Object:-

{}

Collection KEY : VALUE Pairs

Array:-

[]

Collection of Values with Different Data Types

# Sample Object

{
  "name": "Sivaprabu",
  "age": 32,
  "gender": "male"
}

### Array is a Collection of Values with Different Data Types

var a = ['a','b','c'];
					0		1		2

					a[0] ='a'

var languages = [
  {
    "age": 32,
    "gender": "male",
    "name": "Sivaprabu"
  },
  {
    "age": 2,
    "gender": "male",
    "name": "Pranav"
  }
]

### Nested Array and Objects

var peoples = [
	{
		"name":"Siva",
		"age":32,
		"gender":"male",
		"address":[
		{
			"address_type":"office",
			"door_no":20,
			"street_address":"New colony",
			"zip_code":636256
		},
		{
			"address_type":"home",
			"door_no":20,
			"street_address":"Kamaraj Nagar",
			"zip_code":675202
		}
		]
},
{
		"name":"Karthick",
		"age":32,
		"gender":"male",
		"address":[
		{
			"address_type":"office",
			"door_no":20,
			"street_address":"Nehru Nagar",
			"zip_code":636100
		},
		{
			"address_type":"home",
			"door_no":20,
			"street_address":"Sivaji Nagar",
			"zip_code":636202
		}
		]
}
]
