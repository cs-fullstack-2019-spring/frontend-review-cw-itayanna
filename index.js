var btn= document.getElementsByTagName('button'); // this variable is crated to acsess the button on my html
var counter= [];
btn[0].onclick= function () {
    var c0nt1nu3= prompt("Would you like to continue? enter n for no");  // this function asked the user continualy untill the input n when the button is clicked
    while (c0nt1nu3!=='n'){
        c0nt1nu3= prompt("Would you like to continue? enter n for no");
        counter.push(c0nt1nu3)
    }
    console.log(counter.length-1); // after they quit the loop it logs in the console the number of times they didnt quit

        };

