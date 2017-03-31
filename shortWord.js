
function findShort(s){
}//function to determine shortest word
function findShort (s) {

//creating variables for words string and the shortest word
    var str = s.split(' ');
    var firstWord = str[0].length;

    //compare words to each other
    for (var i = 1; i < str.length ; i++) {

        if(firstWord >= str[i].length){
            firstWord = str[i].length;
        } 
        
    }
    return firstWord;
}
