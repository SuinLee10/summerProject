let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Welcome to SLE Page" ,"SLE Vacation Project", "We are Team 2NE1" , "Our first Project Practice"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)]
    let selectStringArr = selectString.split("");

    return selectStringArr;
}
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}
function dynamic(randomArr){
    console.log(randomArr);
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());

console.log(selectString);
console.log(selectStringArr);
//깜빡거리는 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);