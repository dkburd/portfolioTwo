const colors = ["#afc1fb", "#95efdb", "#D1F0ED", "#c3ef95", "#d4cbd0"]
// using math.random multiolied by colors length to select random number for index
const randomColor = Math.floor(Math.random() * colors.length);
//using DOM to make the body background a random color from the arrary 
const color = document.body.style.backgroundColor=colors[randomColor];


// const textColor = document.getElementsByClassName("box").style.color=("white");
// const color = colors[randomColor];

//using same concept to inseert a random accoutning pun into the paragraph tag under my name
const puns= ["Accountants can be quite hard to read. I find it very difficult to judge their accrual intentions", "Every single person in the accounting department counts", "Skunks don't have to pay taxes because they only have one scent", "When an accountant boards the train they are always careful to mind the GAAP"]
const randomPun = Math.floor(Math.random() * puns.length);
const pun=document.getElementById('pun').innerHTML = puns[randomPun];

