var statesNFA = {
	"q1": {
		"a": "q2, q3",
		"b": "",
		"c": "q4"
	},
	"q2": {
		"a": "",
		"b": "q3",
		"c": "",
		"$": ["q1"]
	},
	"q3": {
		"a": "q2",
		"b": "",
		"c": ""
	},
	"q4": {
		"a": "",
		"b": "",
		"c": "q3",
		"$": ["q3"]
	}
};

var statesNFA2 = {
	"q1": {
		"a": "q3",
		"b": "",
		"c": "q2"
	},
	"q2": {
		"a": "q5",
		"b": "q3",
		"c": "",
		"$": ["q1"]
	},
	"q3": {
		"a": "q2",
		"b": "",
		"c": ""
	},
	"q4": {
		"a": "",
		"b": "",
		"c": "q3",
		"$": ["q3"]
	}
};

