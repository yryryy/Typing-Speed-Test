
//    this is a list of the 300 most common words
let commonWords = [
    "the", "be", "and", "of", "a", "in", "to", "have", "it", "that", "for", "you", "he", "with", "on", "do", "say", "this", "they", "at", "but", "we", "his", "from", "not", "by", "she", "or", "as", "what", "go", "their", "can", "who", "get", "if", "would", "her", "all", "my", "make", "about", "know", "will", "as", "up", "one", "time", "there", "year", "so", "think", "when", "which", "them", "some", "me", "people", "take", "out", "into", "just", "see", "him", "your", "come", "could", "now", "than", "like", "other", "how", "then", "its", "our", "two", "more", "these", "want", "way", "look", "first", "also", "new", "because", "day", "more", "use", "no", "man", "find", "here", "thing", "give", "many", "well", "only", "those", "tell", "one", "very", "her", "even", "back", "any", "good", "woman", "through", "us", "life", "child", "there", "work", "down", "may", "after", "should", "call", "world", "over", "school", "still", "try", "in", "as", "last", "ask", "need", "too", "feel", "three", "when", "state", "never", "become", "between", "high", "really", "something", "most", "another", "much", "family", "own", "out", "leave", "put", "old", "while", "mean", "on", "keep", "student", "why", "let", "great", "same", "big", "group", "begin", "seem", "country", "help", "talk", "where", "turn", "problem", "every", "start", "hand", "might", "American", "show", "part", "about", "against", "place", "over", "such", "again", "few", "case", "most", "week", "company", "where", "system", "each", "right", "program", "hear", "so", "question", "during", "work", "play", "government", "run", "small", "number", "off", "always", "move", "like", "night", "live", "Mr", "point", "believe", "hold", "today", "bring", "happen", "next", "without", "before", "large", "all", "million", "must", "home", "under", "water", "room", "write", "mother", "area", "national", "money", "story", "young", "fact", "month", "different", "lot", "right", "study", "book", "eye", "job", "word", "though", "business", "issue", "side", "kind", "four", "head", "far", "black", "long", "both", "little", "house", "yes", "after", "since", "long", "provide", "service", "around", "friend", "important", "father", "sit", "away", "until", "power", "hour", "game", "often", "yet", "line", "political", "end", "among", "ever", "stand", "bad", "lose", "however", "member", "pay", "law", "meet", "car", "city", "almost", "include", "continue", "set", "later", "community", "much", "name", "five", "once", "white", "least", "president", "learn", "real", "change", "team", "minute", "best", "several", "idea", "kid", "body", "information", "nothing", "ago", "right", "lead", "social", "understand", "whether", "back", "watch", "together", "follow", "around", "parent", "only", "stop", "face", "anything", "create", "public", "already", "speak", "others", "read", "level", "allow", "add", "office", "spend", "door", "health", "person", "art", "sure", "such", "war", "history", "party", "within", "grow", "result", "open", "change", "morning", "walk", "reason", "low", "win", "research", "girl", "guy", "early", "food", "before", "moment", "himself", "air", "teacher", "force", "offer", "enough", "both", "education", "across", "although", "remember", "foot", "second", "boy", "maybe", "toward", "able", "age", "off", "policy", "everything", "love", "process", "music", "including", "consider", "appear", "actually", "buy", "probably", "human", "wait", "serve", "market", "die", "send", "expect", "home", "sense", "build", "stay", "fall", "oh", "nation", "plan", "cut", "college", "interest", "death", "course", "someone", "experience", "behind", "reach", "local", "kill", "six", "remain", "effect", "use", "yeah", "suggest", "class", "control", "raise", "care", "perhaps", "little", "late", "hard", "field", "else", "pass", "former", "sell", "major", "sometimes", "require", "along", "development", "themselves", "report", "role", "better", "economic", "effort", "up", "decide", "rate", "strong", "possible", "heart", "drug", "show", "leader", "light", "voice", "wife", "whole", "police", "mind", "finally", "pull", "return", "free", "military", "price", "report", "less", "according", "decision", "explain", "son", "hope", "even", "develop", "view", "relationship", "carry", "town", "road", "drive", "arm", "true", "federal", "break", "better", "difference", "thank", "receive", "value", "international", "building", "action", "full", "model", "join", "season", "society", "because", "tax", "director", "early", "position", "player", "agree", "especially", "record", "pick", "wear", "paper", "special", "space", "ground", "form", "support", "event", "official", "whose", "matter", "everyone", "center", "couple", "site", "end", "project", "hit", "base", "activity", "star", "table", "need", "court", "produce", "eat", "American", "teach", "oil", "half", "situation", "easy", "cost", "industry", "figure", "face", "street", "image", "itself", "phone", "either", "data", "cover", "quite", "picture", "clear", "practice", "piece", "land", "recent", "describe", "product", "doctor", "wall", "patient", "worker", "news", "test", "movie", "certain", "north", "love", "personal", "open", "support", "simply", "third", "technology", "catch", "step", "baby", "computer", "type", "attention", "draw", "film", "tree", "source", "red", "nearly", "organization", "choose", "cause", "hair", "look", "point", "century", "evidence", "window", "difficult", "listen", "soon", "culture", "billion", "chance", "brother", "energy", "period", "course", "summer", "less", "realize", "hundred", "available", "plant", "likely", "opportunity", "term", "short", "letter", "condition", "choice", "place", "single", "rule", "daughter", "administration", "south", "husband", "Congress", "floor", "campaign", "material", "population", "well", "call", "economy", "medical", "hospital", "church", "close", "thousand", "risk", "current", "fire", "future", "wrong", "involve", "defense", "anyone", "increase", "security", "bank"
];

// Start / Stop
const typTest_reset = document.querySelector('.TypingTestContainer .inputWords  .resetButton');
// Dropdown to choose test mode
const user_choice = document.querySelector('.TypingTestContainer .options');

const typTest_timer = document.querySelector('.TypingTestContainer .details .Timer .text');
const typTest_input = document.querySelector('.TypingTestContainer .inputWords textarea');

// test words container
const typTest_words = document.querySelector('.TypingTestContainer .wordsShow .words');
// The input stream above the right words
const input_stream  = document.querySelector('.TypingTestContainer .wordsShow .user-input');

let Result = document.querySelector('section.result');
let highlighter =document.querySelector('.TypingTestContainer .wordsShow .highlighter');

let currentWord = 0;

// To calculate the results
let test_keyStrokes_count = {'total':0,'wrong':0,'right':0};
let test_words_count = {'total':0,'wrong':0,'right':0};


let test_duration = 60;
let NumberOfWords = 300;
let minimumRightWords = 5;
/*
    The highest typing speed ever recorded was 216 words per minute (wpm), set by Stella Pajunas in 1946 
    [ last updated : December 2023 ]
*/
let timerObject = {
    'TimerState':0,
    'seconds'   :0,
    'minutes'   :0,
    'hours'     :0,
    'totalTime':0,
    'Timer': null
}

/* 
██     ██  ██████  ██████  ██████       ██████  ███████ ███    ██ ███████ ██████   █████  ████████ ███████ 
██     ██ ██    ██ ██   ██ ██   ██     ██       ██      ████   ██ ██      ██   ██ ██   ██    ██    ██      
██  █  ██ ██    ██ ██████  ██   ██     ██   ███ █████   ██ ██  ██ █████   ██████  ███████    ██    █████   
██ ███ ██ ██    ██ ██   ██ ██   ██     ██    ██ ██      ██  ██ ██ ██      ██   ██ ██   ██    ██    ██      
 ███ ███   ██████  ██   ██ ██████       ██████  ███████ ██   ████ ███████ ██   ██ ██   ██    ██    ███████ 
 */


// Generate Random words 
function getRandom(count) {
    let randomWords = [];
    for (let i = 0; i < count; i++) {
        let randomIndex = Math.floor(Math.random() * commonWords.length);
        randomWords.push(commonWords[randomIndex]);
    }
    return randomWords;
}


function GenerateText() {
    let text = getRandom(NumberOfWords);
    // Remove all existing elements
    while (typTest_words.firstChild) {
        typTest_words.removeChild(typTest_words.firstChild);
    }
    // Adding The words to the DOM
    let i = 0;
    text.forEach(word => {
        let tempSpan = document.createElement("span");
        tempSpan.setAttribute('spaNmbr', i);
        tempSpan.classList.add("randWords");
        i++;
        tempSpan.textContent = word;
        typTest_words.appendChild(tempSpan);
    });
}


/* 
██   ██ ██  ██████  ██   ██ ██      ██  ██████  ██   ██ ████████ 
██   ██ ██ ██       ██   ██ ██      ██ ██       ██   ██    ██    
███████ ██ ██   ███ ███████ ██      ██ ██   ███ ███████    ██    
██   ██ ██ ██    ██ ██   ██ ██      ██ ██    ██ ██   ██    ██    
██   ██ ██  ██████  ██   ██ ███████ ██  ██████  ██   ██    ██    
*/   
                                                                 
//** Highlight current word
/* 
function highlight(currentWord) {
    let elmnts = Array.from(typTest_words.children);
    elmnts.forEach(el => {
        el.classList.remove('highlight');
    });

    elmnts[currentWord].classList.add('highlight');
}
 */


function highlight(currentWord) {
    let curSpan = Array.from(typTest_words.children)[currentWord];
    
    highlighter.style.width = curSpan.offsetWidth;
    highlighter.style.height = curSpan.offsetHeight;
}


// Move the words to left so the highlighted word is always at the center
let distance = 0;
function slide(span){
    distance += span.offsetWidth ;
    typTest_words.style.transform = `translateX(${-1 * distance}px)`;
}

/* 
██████  ███████ ███████ ███████ ████████ 
██   ██ ██      ██      ██         ██    
██████  █████   ███████ █████      ██    
██   ██ ██           ██ ██         ██    
██   ██ ███████ ███████ ███████    ██    
*/ 
                                  
/* 
    Resets everything related to the timer
    stops the timer
    resets the timer[seconds , minutes, hours and, totaltime] back to zero
    sets the Timerstate to zero (off)

    change the button text to start as well as its styling

*/
function resetTimer() {
    clearInterval(timerObject.Timer);

    timerObject = {
        'TimerState':0,
        'seconds'   :0,
        'minutes'   :0,
        'hours'     :0,
        'totalTime':0,
        'Timer': null
    }

    typTest_timer.innerHTML = formatTimer();
    typTest_reset.innerHTML = 'Start';
    typTest_reset.classList.remove('stopButton');

}

/*
    resets the variables and elements to start a new typing test
    the state variable is used to check if  the test is for the first time 
    so it doesnt show a result when user hasn't even taken the test
    
    the text input is disabled for a brief 1.5 seconds so user doesn't accidentally
    start the test again by typing.
*/

function test_reset(state) {
    
    // Show Result
    if(state != 'start'){
        scrolltoResult();
        typTest_input.setAttribute('disabled' , '');
        setTimeout(()=>{
            typTest_input.removeAttribute('disabled');
            typTest_input.value = '';
        } ,1500)
    }

    // Reset Variables to start the new test
    distance = 0;
    currentWord = 0;
    GenerateText();
    highlight(currentWord);
        
    resetTimer();
    test_words_count = {'total':0,'wrong':0,'right':0};
    test_keyStrokes_count = {'total':0,'wrong':0,'right':0};
    typTest_words.style.transform = ``;
    input_stream.innerHTML = '';
}


/* 
████████ ██ ███    ███ ███████ ██████  
   ██    ██ ████  ████ ██      ██   ██ 
   ██    ██ ██ ████ ██ █████   ██████  
   ██    ██ ██  ██  ██ ██      ██   ██ 
   ██    ██ ██      ██ ███████ ██   ██  */

let formattedTime; // Holds the intervalID of the timer


// To put the time in the format of 00 : 00 : 00
function formatTimer() {
    
    if (timerObject.hours > 0) {
        formattedTime = `${String(timerObject.hours).padStart(2, '0')} : ${String(timerObject.minutes).padStart(2, '0')} : ${String(timerObject.seconds).padStart(2, '0')}`;
    }else{
        formattedTime = `${String(timerObject.minutes).padStart(2, '0')} : ${String(timerObject.seconds).padStart(2, '0')}`;
    }

    return formattedTime;
}
    
/* 
    starts and updates the timer 
    
    if no timeLimit is specified the timer runs forever until its stopped by the user
*/
function startTimer(timeLimit = -1) {

    if(!Result.classList.contains('hide')){
        Result.classList.add('hide');
    }
    typTest_reset.innerHTML = 'Stop';
    typTest_reset.classList.add('stopButton');
    if(timerObject.TimerState == 0){
        timerObject.Timer= setInterval(() => {
            timerObject.totalTime++;
            timerObject.seconds++;
            if (timerObject.seconds == 60) {
                timerObject.minutes++;
                timerObject.seconds = 0;

                if (timerObject.minutes == 60) {
                    timerObject.hours++;
                    timerObject.minutes = 0;
                }
            }
            typTest_timer.innerHTML = formatTimer();

            /*
            * This way, the test resets after {timeLimit} seconds from the time it was started.
            */
            if(timerObject.totalTime == timeLimit){
                test_reset();
            }
        }, 1000);

        timerObject.TimerState = 1;
    }
    typTest_timer.innerHTML = formatTimer();

    /*
    ! commented code is not working as expected because it stops
    ! after {timeLimit}seconds from the FIRST TIME it was ever called (because of how setTimeout work),
    ! so in case i spam the start/stop button or if i stop the test before the time limit
    ! the setTimeout() function still calls test_reset after {timeLimit}seconds of the first time it was ever called
    */

    // if(timeLimit != -1){
    //     setTimeout(test_reset , timeLimit * 1000);
    // }

}

/* 
██████  ███████ ███████ ██    ██ ██      ████████ 
██   ██ ██      ██      ██    ██ ██         ██    
██████  █████   ███████ ██    ██ ██         ██    
██   ██ ██           ██ ██    ██ ██         ██    
██   ██ ███████ ███████  ██████  ███████    ██    
*/

//    Calculates the results based on the number of charactered typed
function get_result() {
    let usertime = timerObject.totalTime / 60;

    // 5 is the average word length
    let userwords = test_keyStrokes_count['total']/5;

    let accuracy = parseInt((test_keyStrokes_count.right / test_keyStrokes_count.total) * 100)  || 0;
    let userwpm = parseInt(userwords / usertime) || 0;
    
    
    return {'wpm' : userwpm , 'accuracy':accuracy};
    
}


function scrolltoResult(){

    
    if( test_words_count['right'] < minimumRightWords  ){
        typTest_input.value = `you need to type at least ${minimumRightWords} To get your results`;
        return 0;
    }
    // Show the Result section
    if(Result.classList.contains('hide')){
        Result.classList.remove('hide');
    }

    
    // Select the result elements 
    let result_wpm = Result.querySelector('.user-wpm');
    let result_Accuracy = Result.querySelector('.Accuracy');
    let result_keystrokes = Result.querySelector('.Keystrokes').children;
    let result_Words = Result.querySelector('.Words').children;
    let result_Time = Result.querySelector('.time');
    
    
    // Adds the keystrokes and words
   for(let i = 0 ; i<result_Words.length; i++){
        result_keystrokes[i].innerHTML = test_keyStrokes_count[result_keystrokes[i].className];

        result_Words[i].innerHTML = test_words_count[result_Words[i].className];
   }

    //   Add accuracy, wpm and thet time then scroll into the result section
   result_Accuracy.innerHTML= get_result()['accuracy'];
   result_wpm.innerHTML = get_result()['wpm'];
   result_Time.innerHTML = formatTimer();

    Result.scrollIntoView({
        behavior : 'smooth'
    });
}


/* 
██   ██  █████  ███    ██ ██████  ██      ███████     ██ ███    ██ ██████  ██    ██ ████████ 
██   ██ ██   ██ ████   ██ ██   ██ ██      ██          ██ ████   ██ ██   ██ ██    ██    ██    
███████ ███████ ██ ██  ██ ██   ██ ██      █████       ██ ██ ██  ██ ██████  ██    ██    ██    
██   ██ ██   ██ ██  ██ ██ ██   ██ ██      ██          ██ ██  ██ ██ ██      ██    ██    ██    
██   ██ ██   ██ ██   ████ ██████  ███████ ███████     ██ ██   ████ ██       ██████     ██     
*/


// Sound

let soundOn = 0;
let sounndIcon = document.querySelector('.soundIcon');
let soundText = document.querySelector('.soundIcon p');
sounndIcon.addEventListener('click' , ()=>{
    let sound = sounndIcon.querySelector('svg');
    sound.classList.toggle('soundOff');
    soundText.classList.add('animate');
    
    setTimeout(()=>{
        soundText.classList.remove('animate');

    }, 500);


    if(sound.classList.contains('soundOff')){
        soundOn  = 0;
        soundText.innerHTML = 'Sound Off'

    }else{
        soundOn  = 1;
        soundText.innerHTML = 'Sound <span class="right"> On </span>'
    }
});


// Resets the test if user changes wether he wants the test to be timed or not
user_choice.addEventListener('change' , ()=>{
    test_reset();
});




// Starts/stops the test when the button is clicked 
typTest_reset.addEventListener('click', ()=>{

    // check if the timer is off or on to decide wether to stop or start the test
    if(timerObject.TimerState == 0){
        typTest_input.value = '';
        // since its off, we start the test but based on what the user chose we start a timed or timeless test
        if(user_choice.value == 1){
            startTimer(test_duration);
        }else{
            startTimer();
        }
        /*  
            the textinput is enabled and focused 
            so no time is wasted between when user clicks the button and move the cursor back to the text field
        */
        typTest_input.removeAttribute('disabled');
        typTest_input.focus();

    }else if(timerObject.TimerState == 1){
        test_reset();

    }
});


// Handle words related processing

typTest_input.addEventListener('keydown', function (e) {
    if(e.key.slice(0,5) == 'Arrow'){
        e.preventDefault();
    }


    // Start the timer if it hasn't been already started
    if (timerObject.TimerState == 0) {
        if(user_choice.value == 1){
            startTimer(test_duration);
        }else{
            startTimer();
        }
    }

    
    if(e.key == 'Enter'){
        e.preventDefault();
    }

    let userInput = typTest_input.value;
    let curSpan = document.querySelector(`span[spanmbr = "${currentWord}"]`);
    let CorrectValue = curSpan.textContent;
    
    // Space means we have finished typing the word
    // so this is the point where calculations regarding words occur
    if (e.code == 'Space') {
        e.preventDefault(); // we prevent it from adding a space 

        // this prevents the user from skipping a word if space key is clicked twice or spammed
        if (userInput.trim() == '') {
            typTest_input.value = '';
            return 0;
        }

        // Update the words trackers and add style to them based on user input (right / wrong)
        if (userInput.trim() === CorrectValue) {
            curSpan.classList.add('right');
            test_words_count['right']++;
        } else {
            curSpan.classList.add('wrong');
            test_words_count['wrong']++;
            if(soundOn){
                playWrongSound();
            }
        }
        test_words_count['total']++;

        // Empty the text input 
        typTest_input.value = '';
        input_stream.textContent = '';

        /* 
            Check if user typed all the words available or not
            if no then
                Move the words and highlight the word whose turn it is
         */
        if(currentWord+1 >= NumberOfWords ){
            test_reset();
            

        }else{
            slide(curSpan);
            highlight(++currentWord);
        }
    }
});

let previousInputLength = -1;

// Handle characters related processing
typTest_input.addEventListener('keyup' , (e)=>{
    let CorrectValue = document.querySelector(`span[spanmbr = "${currentWord}"]`).textContent;
    let currentInputLength = typTest_input.value.trim().length;

    if (!( /^[^\d.\.]$/.test(e.key))) {
        e.preventDefault();
    }


    if(currentInputLength<=1 && previousInputLength!= 2){
        input_stream.textContent = '';
        if(currentInputLength == 1){
            addToInputStream(e.key , CorrectValue);
        }
    }
    // Check if a letter key is pressed
   else if (/^[^\d.\.]$/.test(e.key)) {
            addToInputStream(e.key , CorrectValue);
    }else if(e.key === 'Backspace'){
        if(input_stream.childElementCount > 0){
            input_stream.removeChild(input_stream.lastChild);
        }
    }


    if(currentInputLength != previousInputLength){
        previousInputLength = currentInputLength;
    }
});


function /* The above code is defining a function called "addToInputStream" in JavaScript. */
addToInputStream(character , CorrectValue){
    // Make a temporay span (which contains the pressed letter) to add to the input stream
    let temp = document.createElement('span');
    
    if(character.length > 1){
        character = typTest_input.value.slice(-1);
    }

    temp.innerHTML = character;
    /*
        compare the pressed key with
        the corresponding letter in the correct value
    */

    if(character != CorrectValue[input_stream.textContent.trim().length ] ){
        temp.style.color = 'red';
        test_keyStrokes_count['wrong']++;
    }else{
        test_keyStrokes_count['right']++;
    }
    test_keyStrokes_count['total']++;
    
    input_stream.appendChild(temp);
}



function playWrongSound(){
    let audio = new Audio;
    audio.src = 'Audio/wrong.mp3';
    audio.play();
}

//  To prevent the scrolling if space is pressed when the text input is disabled
document.addEventListener('keydown' , (e)=>{
    if(e.code == 'Space'){
        e.preventDefault();
    }
});

// was too lazy to add it in the html so i did it here ><
let tworows= document.querySelectorAll('.wpm');
tworows.forEach( (row)=>{
    row.setAttribute('colspan' , '2');
});

test_reset('start');

/* 
Notes to self:
    I'm aware of input stream related issues 
    - input stream doesn't match actual input in the text area
        1: when user press ctrl+a
            - the A appears at the end of the input stream

            - If users continues to type and not delete,
                the a and other pressed key will appear at the end of input-stream
                and the red color will indicate that the letters are wrong  

        2: Not handeling when arrows or cursor moves and letters are added anywhere other than the end
        the letters still appear at the end of the input stream

    it's 02/12/2023 01:35 AM (GMT+2), let's hope i fix them later.

    There was an issue becasue i used setTimeout() to reset the test in timed mode,
        it's explained in the code around lines  ~240 startTimer(timeLimit).
    
    
*/



