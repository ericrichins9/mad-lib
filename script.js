generate.addEventListener('click',function(event){
    selectStory()
});


function selectStory(){
    if (btnStory1.checked){
        story = story1;
        var storyTitle = btnStory1.value
        finalizeMadWords(pulledNounsArray, randNouns, noun);
        finalizeMadWords(pulledVerbsArray, randVerbs, verb);
        finalizeMadWords(pulledAdjectivesArray, randAdjectives, adjective);
        finalizeMadWords(pulledAdverbsArray, randAdverbs, adverb);
        printStory(story, storyTitle);
    }
    else if (btnStory2.checked){
        story = story2;
        var storyTitle = btnStory2.value
        finalizeMadWords(pulledNounsArray, randNouns, noun);
        finalizeMadWords(pulledVerbsArray, randVerbs, verb);
        finalizeMadWords(pulledAdjectivesArray, randAdjectives, adjective);
        finalizeMadWords(pulledAdverbsArray, randAdverbs, adverb);
        printStory(story, storyTitle);

    }
    else if (btnStory3.checked){
        story = story3;
        var storyTitle = btnStory3.value
        finalizeMadWords(pulledNounsArray, randNouns, noun);
        finalizeMadWords(pulledVerbsArray, randVerbs, verb);
        finalizeMadWords(pulledAdjectivesArray, randAdjectives, adjective);
        finalizeMadWords(pulledAdverbsArray, randAdverbs, adverb);
        printStory(story, storyTitle);

    }
    else {
        alert("Please Select a Story");
    }
}

function finalizeMadWords(arr, randArray, speechPart){
    if (arr.value !== ""){
       pulledWords = arr.value.split(',');
        
        wordBank = randArray;

        addRandomWords(pulledWords,wordBank);
        
    }
    else {
        pulledWords = [];
        wordBank = randArray;
        addRandomWords(pulledWords,wordBank);
    }

    replaceWords(pulledWords, speechPart);
}

function addRandomWords (arr, randomArray){
    while (arr.length < 4) {
        //add randNouns function, randomly, until pulleNouns.length === 4
        arr.push(randElem(randomArray));
        //check to make sure all elements in array are unique. else, pop off last element
        if (hasDuplicates(arr)=== true){
            arr.pop();
        }
    }
}

function replaceWords(arr, speechPart){
    for (var i = 0; i < arr.length; i++){
    story = story.replace(speechPart,arr[i]);
}
    return story;
}

function printStory(string, title){
    

    //Create a container for mad lib
    var madLib = document.createElement('div');
    
    // //create an element to hold title for mad lib and add title to container
    var madTitle = document.createElement('h3');
    madTitle.innerText = title;
    madLib.appendChild(madTitle);

    //create an element to hold the text of the mad lib. Add text to container
    var madText = document.createElement('h4');
    madText.innerText = string;
    madLib.appendChild(madText);

    //add info to Dom
    madLibContainer.innerHTML = madLib.outerHTML;
    
}

function randElem(arr){
    return arr[randNum(0,arr.length - 1)];
}

function randNum(min,max){
    var rnum = Math.floor(Math.random() * (max-min +1) + min);
    return rnum;
}

function hasDuplicates(arr){
    for (var i = 0; i < arr.length; i++){
        var value = arr[i];
        for (var j = i + 1; j < arr.length; j++){
            if (value === arr[j]){
                return true;
            }
        }
    }
    return false;
}