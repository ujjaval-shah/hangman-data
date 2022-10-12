const axios = require('axios')
const { JSDOM } = require('jsdom')


var url = "https://knowindia.india.gov.in/states-uts/"


function extract_states(document) {
    let stateut = document.getElementsByClassName('stateut')[0];
    let numberOfStates = 28;
    let states = stateut.getElementsByTagName('h3');
    let output = [];

    for (let i = 1; i <= numberOfStates; i++) {
        let [state,] = states[i].textContent.split('(');
        output.push(state);
    }

    return output;
}


axios.get(url)
    .then(({ data: html }) => {
        const { document } = new JSDOM(html).window;
        console.log(extract_states(document));
    })


// // Generated output

// output = [
//     "Andhra Pradesh",
//     "Arunachal Pradesh",
//     "Assam",
//     "Bihar",
//     "Chhattisgarh",
//     "Goa",
//     "Gujarat",
//     "Haryana",
//     "Himachal Pradesh",
//     "Jharkhand",
//     "Karnataka",
//     "Kerala",
//     "Madhya Pradesh",
//     "Maharashtra",
//     "Manipur",
//     "Meghalaya",
//     "Mizoram",
//     "Nagaland",
//     "Odisha",
//     "Punjab",
//     "Rajasthan",
//     "Sikkim",
//     "Tamil Nadu",
//     "Telangana",
//     "Tripura",
//     "Uttarakhand",
//     "Uttar Pradesh",
//     "West Bengal"
// ]