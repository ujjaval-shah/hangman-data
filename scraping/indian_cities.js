const axios = require('axios')
const { JSDOM } = require('jsdom')


var url = "https://en.wikipedia.org/wiki/List_of_cities_in_India_by_population";


function extract_cities(document) {
    let cities = document.getElementsByTagName('tbody')[0];
    let limit = 100
    let output = []

    for (let i = 1; i <= Math.min(cities.children.length, limit); i++) {
        output.push(cities.children[i].children[1].textContent);
    }

    return output;
}


axios.get(url)
    .then(({ data: html }) => {
        const { document } = new JSDOM(html).window;
        console.log(extract_cities(document));
    })


// // Generated output

// output = [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Hyderabad",
//     "Ahmedabad",
//     "Chennai",
//     "Kolkata",
//     "Surat",
//     "Pune",
//     "Jaipur",
//     "Lucknow",
//     "Kanpur",
//     "Nagpur",
//     "Indore",
//     "Thane",
//     "Bhopal",
//     "Visakhapatnam[4]",
//     "Pimpri-Chinchwad",
//     "Patna",
//     "Vadodara",
//     "Ghaziabad",
//     "Ludhiana",
//     "Agra",
//     "Nashik",
//     "Faridabad",
//     "Meerut",
//     "Rajkot",
//     "Kalyan-Dombivli",
//     "Vasai-Virar",
//     "Varanasi",
//     "Srinagar",
//     "Aurangabad",
//     "Dhanbad",
//     "Amritsar",
//     "Navi Mumbai",
//     "Allahabad",
//     "Howrah",
//     "Ranchi",
//     "Gwalior",
//     "Jabalpur",
//     "Coimbatore",
//     "Vijayawada",
//     "Jodhpur",
//     "Madurai",
//     "Raipur",
//     "Kota[6]",
//     "Chandigarh",
//     "Guwahati",
//     "Solapur",
//     "Hubli–Dharwad",
//     "Bareilly",
//     "Mysore[7][8][9]",
//     "Moradabad",
//     "Gurgaon",
//     "Aligarh",
//     "Jalandhar",
//     "Tiruchirappalli[10]",
//     "Bhubaneswar",
//     "Salem",
//     "Mira-Bhayandar",
//     "Thiruvananthapuram",
//     "Bhiwandi",
//     "Saharanpur",
//     "Gorakhpur",
//     "Guntur[11]",
//     "Amravati",
//     "Bikaner",
//     "Noida",
//     "Jamshedpur",
//     "Bhilai",
//     "Warangal[12][13]",
//     "Cuttack",
//     "Firozabad",
//     "Kochi",
//     "Bhavnagar",
//     "Dehradun",
//     "Durgapur",
//     "Asansol",
//     "Nanded",
//     "Kolhapur",
//     "Ajmer",
//     "Gulbarga",
//     "Loni",
//     "Ujjain",
//     "Siliguri",
//     "Ulhasnagar",
//     "Jhansi",
//     "Sangli-Miraj & Kupwad",
//     "Jammu[14]",
//     "Nellore[15][16]",
//     "Mangalore",
//     "Belgaum",
//     "Jamnagar",
//     "Tirunelveli",
//     "Malegaon",
//     "Gaya",
//     "Ambattur",
//     "Jalgaon",
//     "Udaipur",
//     "Maheshtala"
// ]