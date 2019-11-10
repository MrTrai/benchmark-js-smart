import axios from "axios";
let url;
while (true) {
    try {
        axios.get(url).then(result => {
            console.log("Spamming")
        });
    } catch (e) {
    }
}
