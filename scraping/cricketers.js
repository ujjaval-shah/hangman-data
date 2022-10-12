const axios = require('axios')
const { JSDOM } = require('jsdom')


let urls = [
    "https://www.cricket.com.au/news/feature/top-100-test-players-21st-century-warne-gilchrist-mcgrath-tendulkar-kallis-sangakkara-ponting-murali/2015-06-21",
    "https://www.cricket.com.au/news/feature/top-100-test-players-20-11-21st-century-lara-dravid-hayden-clarke-anderson-sehwag-shiv-khan-pollock/2015-06-20",
    "https://www.cricket.com.au/news/feature/top-100-players-30-21-21st-century-harbhajan-cook-pietersen-jayawardene-amla-yousuf-johnson-boucher/2015-06-19",
    "https://www.cricket.com.au/news/feature/top-100-players-21st-century-40-31-swann-shoaib-inzamam-hussey-langer-ntini-flintoff-lee/2015-06-18",
    "https://www.cricket.com.au/news/top-100-test-players-21st-century-50-41-kohli-broad-gayle-gillespie-warner-bell-prior-martyn-vaas/2015-06-17",
    "https://www.cricket.com.au/news/top-100-test-players-21st-century-60-51-vaughan-williamson-mccullum-harris-haddin-strauss/2015-06-16",
    "https://www.cricket.com.au/news/top-100-test-players-of-21-st-century-70-61-waugh-dhoni-trott-gibbs-herath-kaneria-macgill/2015-06-15"
]

let final_result = []


function extract_cricketers(document) {
    var tags = document.getElementsByTagName('strong');

    var output = [];

    for (let i = 0; i < tags.length; i++) {
        if (tags[i].textContent.indexOf(".") > -1) {
            const [, name_and_country] = tags[i].textContent.split(". ");
            const [name,] = name_and_country.split(" (");
            output.push(name);
        }
    }

    return (output.reverse());
}


// Async Await
// We need the list to be in the same order as the article
async function main() {
    for (const url of urls) {
        const { data: html } = await axios.get(url);
        const { document } = new JSDOM(html).window;
        final_result.push(extract_cricketers(document));
        console.log(`DONE: ${url}`)
    }

    console.log(); //newline
    console.log(final_result);
}


main();

// // Generated output

// final_result = [
//     [
//       'Adam Gilchrist',
//       'Jacques Kallis',
//       'Kumar Sangakkara',
//       'Muthiah Muralidaran',
//       'Sachin Tendulkar',
//       'Ricky Ponting',
//       'Dale Steyn',
//       'Shane Warne',
//       'Glenn McGrath',
//       'AB de Villiers'
//     ],
//     [
//       'Rahul Dravid',
//       'Shivnarine Chanderpaul',
//       'Matthew Hayden',
//       'Anil Kumble',
//       'Michael Clarke',
//       'Virender Sehwag',
//       'James Anderson',
//       'Younis Khan',
//       'Brian Lara',
//       'Shaun Pollock'
//     ],
//     [
//       'Mark Boucher',
//       'Mitchell Johnson',
//       'Mohammad Yousuf',
//       'Kevin Pietersen',
//       'Hashim Amla',
//       'Daniel Vettori',
//       'Mahela Jayawardene',
//       'Graeme Smith',
//       'Alastair Cook',
//       'Harbhajan Singh'
//     ],
//     [
//       'VVS Laxman',
//       'Brett Lee',
//       'Andrew Flintoff',
//       'Mike Hussey',
//       'Makhaya Ntini',
//       'Justin Langer',
//       'Inzamam-ul-Haq',
//       'Zaheer Khan',
//       'Shoaib Akhtar',
//       'Graeme Swann'
//     ],
//     [
//       'Chaminda Vaas',
//       'Damien Martyn',
//       'Matt Prior',
//       'Ian Bell',
//       'David Warner',
//       'Jason Gillespie',
//       'Chris Gayle',
//       'Stuart Broad',
//       'Virat Kohli',
//       'Andy Flower'
//     ],
//     [
//       'Michael Vaughan',
//       'Andrew Strauss',
//       'Brendon McCullum',
//       'Morne Morkel',
//       'Brad Haddin',
//       'Ryan Harris',
//       'Thilan Samaraweera',
//       'Kane Williamson',
//       'Matthew Hoggard',
//       'Graham Thorpe'
//     ],
//     [
//       'MS Dhoni',
//       'Rangana Herath',
//       'Steve Harmison',
//       'Gary Kirsten',
//       'Danish Kaneria',
//       'Jonathan Trott',
//       'Stephen Fleming',
//       'Stuart MacGill',
//       'Herschelle Gibbs',
//       'Steve Waugh'
//     ]
// ]