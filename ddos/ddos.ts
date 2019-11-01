import axios from "axios";

while (true) {
	const url = "Foo";
	try {
	    axios.get(url).then(result => {
		console.log("Spamming")
	    });
	} catch (e) {}
}
