var loadingmessages =
[" started working on this on May 12th, 2024!",
" knows your IP Address!",
" is too lazy to care about encryption...",
" uses Python to automate literally everything, though the files aren't uploaded to Neocities.",
" will stop updating this on June 3rd, 2024.",
" drew the star for the loading screen MULTIPLE times.",
" thinks that there is no perfect star... And no perfect <b>Star</b>, either.",
" loves her dragons in <a href=\"https://www.roblox.com/games/3475397644/Dragon-Adventures-Fantasy-Pets\">Dragon Adventures</a>.",
"'s favorite vocaloid is vflower!",
" loves strawberry ice cream.",
" took one hour to finally be happy with the shape of the star in the loading screen.",
" needs suggestions for more modules... 3:"]
var stars = ["./images/star.png", "./images/star_happy.png", "./images/star_contented.png", "./images/star_sleepy.png", "./images/star_colonthree.png", "./images/star_derp.png", "./images/star_sleepy.png"]
var loadedsounds = 0;
var currentsoundtobeloaded;
var squeaks = Array();
for (sound of ["https://files.catbox.moe/59qqdi.mp3", "https://files.catbox.moe/tsg5iw.mp3", "https://files.catbox.moe/pkeyqk.mp3"]) {
    sound=new Audio(sound);
    squeaks.push(sound);
    sound.addEventListener('canplaythrough', () => {
        loadedsounds++
        }, false);
}
var pops = Array();
for (sound of ["https://files.catbox.moe/9tsqjp.mp3", "https://files.catbox.moe/mwdu56.mp3", "https://files.catbox.moe/vw3sjx.mp3", "https://files.catbox.moe/gldetc.mp3"]) {
    sound=new Audio(sound);
    pops.push(sound);
    sound.addEventListener('canplaythrough', () => {
        loadedsounds++
        }, false);
}


var showLoadingMessages = window.setInterval(function(){
    document.getElementById('didyouknow').innerHTML="<b>did you know? star</b>"+loadingmessages[Math.round(Math.random()*(loadingmessages.length-1))];
    document.getElementById('star').src = stars[Math.round(Math.random()*(stars.length-1))];
}, 1250);


function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if ((document.body !== undefined) && (loadedsounds==7)) {
            window.clearInterval(showLoadingMessages);
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 7500);
}
  
function setVisible(id, visible) {
    document.getElementById('container').style.display='flex';
    document.getElementById(id).style.animation = 'loaded 2500ms ease-out';
    document.getElementById(id).addEventListener('animationend', () => {
        document.getElementById(id).style.display = visible ? 'flex' : 'none';
    })
}

onReady(function() {
    setVisible('loadingscreen', false);
});

console.log('running! :D');

var gamemodule;
for (mod of document.getElementsByClassName("module")) {
    mod.points=0;
}

function navToggle(button) {
    switch(button.value) {
        case "Show Options":
            document.getElementById('buttons').style.display='none';
            document.getElementById('inputs').style.display='flex';
            document.getElementById('account').style.display='none';
            button.value="Show Account";
            break;
        case "Show Account":
            document.getElementById('buttons').style.display='none';
            document.getElementById('inputs').style.display='none';
            document.getElementById('account').style.display='flex';
            button.value="Show Navigation";
            break;
        case "Show Navigation":
            document.getElementById('buttons').style.display='flex';
            document.getElementById('inputs').style.display='none';
            document.getElementById('account').style.display='none';
            button.value="Show Options";
            break;
    }
}

/* ACCOUNTS */

function clearAfter(id, duration) {
    setTimeout(function() {
        document.getElementById(String(id)).innerText='';
    }, duration)
}

var users = {'ILoveYuriForever69':'pickle stroker','michael':null, 'star':'vscodemybeloved', 'history':'john_ultrakill'};
var username, password, user;
function logIn() {
    username=document.getElementById('username').value;
    document.getElementById('username').value="";
    password=document.getElementById('pass').value;
    document.getElementById('pass').value="";
    if (username in users) {
        if (users[username]==password) {
            document.getElementById('loginresult').style.color='forestgreen';
            document.getElementById('loginresult').innerText='Logging you in...';
            setTimeout(function() {
                document.getElementById('loginresult').innerText='Successfully logged in!';
                clearAfter("loginresult", 1250);
                document.getElementById('login').style.display='none';
                document.getElementById('accountinfo').style.display='block';
                document.getElementById('userdisplay').innerHTML='<b>username:</b> '+username;
            }, 500)
        }
        else {
            document.getElementById('loginresult').style.color='red';
            document.getElementById('loginresult').innerText='Incorrect password.';
            clearAfter("loginresult", 1250);
        }
    }
    else {
        document.getElementById('loginresult').style.color='red';
        document.getElementById('loginresult').innerText='That account does not exist.';
        clearAfter("loginresult", 1250);
    }
}

/* MODULES */

var sumlabel = document.getElementById('sum');
var targetsumlabel = document.getElementById('targetsum');
var randomsum;
function createSum() {
    randomsum = pad(Math.round(Math.random()*1000),3);
    sumlabel.innerText="000";
    targetsumlabel.innerText=randomsum;
}

var romanlabel = document.getElementById('roman');
var targetromanlabel = document.getElementById('targetroman');
var romandict = {"1":"I", "2":"II", "3":"III", "4":"IV", "5":"V", "6":"VI", "7":"VII", "8":"VIII", "9":"IX", "0":"0"};
var randomromanno = pad(Math.round(Math.random()*10000),4)
var randomroman = ""
var increment = 0;
function createRoman() {
    randomromanno = pad(Math.round(Math.random()*10000),4);
    randomroman = "";
    increment = 0;
    for (i of randomromanno) {
        increment+=1;
        randomroman+=romandict[i];
        if (increment!=4) {
            randomroman+=" ";
        }
    }
    romanlabel.innerText="";
    targetromanlabel.innerText=randomroman;
}
createRoman();

var randombny = "";
var inputbny = "";
function bnyCreate() {
    randombny = "";
    inputbny = "";
    for (i=0; i<8; i++) {
        randombny+=String(Math.round(Math.random()))
        document.getElementsByClassName('boy')[i].style.backgroundColor = (randombny[i]=="0") ? 'cyan' : 'yellow';
        document.getElementsByClassName('boy')[i].style.boxShadow = (randombny[i]=="0") ? '0 0 0.5rem 0.125rem cyan' : '0 0 0.5rem 0.125rem yellow';
    }
    document.getElementById('3').getElementsByClassName('currentstatus')[0].innerText='Current position: 1/8';

}
bnyCreate();

var reactionset = [/*[0,1],[0,2],[0,3],*/[1,2],[1,3],[2,1],[2,3],[3,1],[3,2]]
var reaction, square, timer, x, reactionanswer;
function resetReaction() {
    gamemodule=document.getElementById('4');
    reaction=reactionset[Math.round(Math.random()*(reactionset.length-1))];
    for (incr of [0,1]) {
        square = document.getElementsByClassName('borsquare')[incr];
        firstpart = (reaction[incr]>0) ? '<div class=\"dash\"></div>'.repeat(reaction[incr]) : "";
        secondpart = ((3-reaction[incr])>0) ? '<div class=\"foodash\"></div>'.repeat(3-reaction[incr]) : "";
        square.innerHTML = firstpart+secondpart;
    }
    reactionanswer = (reaction[0]>reaction[1]) ? 'R' : 'B' ;
    timer = setTimeout(function() {
        updatepoints(4,-1, " (TIMED OUT)");
        resetReaction();
    }, 5000);
}

function updateReaction(button) {
    pop();
    if (button.id==reactionanswer) {
        updatepoints(4, 1);
    }
    else {
        updatepoints(4, -1);
    }
    clearTimeout(timer);
    resetReaction();
}

var sets = [["A","B"],["C","D"],["E","F"],["G","H"],["I","J"],["K","L"],["M","N"],["O","P"],["Q","R"],["S","T"],["U","V"],["W","X"],["Y","Z"]];
var currentset, key, filler, datastring, letterstring, inputdata, currentdataindex, currentdata;
function createDataString() {
    for (circle of document.getElementsByClassName('datacircle')) {circle.style.backgroundColor='slategrey'; circle.style.border='rgba(31, 42, 66, 0.5) 0.25rem outset'}
    currentdataindex = 0;
    currentdata=document.getElementsByClassName('datacircle')[currentdataindex];
    currentdata.style.border='pink 0.25rem inset';
    currentdata.style.boxShadow='0 0 0.25rem 0.125rem pink';
    gamemodule=document.getElementById('5');
    currentset = sets[Math.round(Math.random()*(sets.length-1))];
    key = currentset[Math.round(Math.random())];
    document.getElementById('keyhint').innerText=("Key:"+key);
    filler = currentset[(currentset.indexOf(key)==0) ? 1 : 0]
    datastring = "";
    letterstring = "";
    inputdata = "";
    for (let i=0; i<5; i++) {
        datastring+=String(Math.round(Math.random()));
    }
    for (digit of datastring) {
        switch (digit) {
            case "1":
                letterstring+=key;
                break;
            case "0":
                letterstring+=filler;
                break;
        }
    }
    document.getElementById('datadisplay').innerText=letterstring;
}
function nextData(button) {
    currentdata.style.border='rgba(31, 42, 66, 0.5) 0.25rem outset';
    currentdata.style.boxShadow='none';
    inputdata += (currentdata.style.backgroundColor=='slategrey') ? '0' : '1';
    // after the previous data circle
    if (currentdataindex==4) {
        if (inputdata==datastring) {
            updatepoints(5, 1);
            createDataString();
        }
        else {
            updatepoints(5, -1);
            createDataString();
        }
    }
    else {
        currentdataindex+=1;
        currentdata=document.getElementsByClassName('datacircle')[currentdataindex];
        currentdata.style.border='pink 0.25rem inset';
        currentdata.style.boxShadow='0 0 0.25rem 0.125rem pink';
    }
}
function toggleData() {
    currentdata.style.backgroundColor = (currentdata.style.backgroundColor=='slategrey') ? 'white' : 'slategrey';
}

var switchstring, switcharray, inputswitc0h;
for (i=0; i<4; i++) {document.getElementsByClassName('switch')[i].switchnumber=i;}
function resetSwitches() {
    for (switchy of document.getElementsByClassName('switch')) {
        switchy.style.backgroundImage="linear-gradient(grey 0%, whitesmoke 50%, whitesmoke 100%)";
        switchy.toggle = 'off';
    }
    for (switchylighty of document.getElementsByClassName('switchlight')) {switchylighty.style.backgroundColor = 'crimson';}
    inputswitch=[0,0,0,0];
    switchstring="";
    inputstring="";
    for (i=0; i<4; i++) {switchstring+=String(Math.round(Math.random()));}
    document.getElementById('switchdisplay').innerText=switchstring;
    switchcond1=[[0,1,2,3][(Math.round(Math.random()*3))],['on','off'][(Math.round(Math.random()))]];
    switchcond2=[[0,1,2,3][(Math.round(Math.random()*3))],['on','off'][(Math.round(Math.random()))]];
    document.getElementById('conditionone').innerHTML="If switch number "+String(switchcond1[0]+1)+" is "+switchcond1[1]+", then press the red button."
    document.getElementById('conditiontwo').innerHTML="Otherwise, if switch number "+String(switchcond2[0]+1)+" is "+switchcond2[1]+", then press the red button."
    
}

function switchSwitch(switchy) {
    switch (switchy.toggle) {
        case 'off':
            switchy.style.backgroundImage="linear-gradient(whitesmoke 0%, whitesmoke 50%, grey 100%)";
            inputswitch[switchy.switchnumber]=1;
            switchy.toggle='on';
            document.getElementsByClassName('switchlight')[switchy.switchnumber].style.backgroundColor = 'springgreen';
            break;
        case 'on':
            switchy.style.backgroundImage="linear-gradient(grey 0%, whitesmoke 50%, whitesmoke 100%)"
            inputswitch[switchy.switchnumber]=0;
            switchy.toggle='off';
            document.getElementsByClassName('switchlight')[switchy.switchnumber].style.backgroundColor = 'crimson';
            break;
        
    }
}

function switchEnter(id) {
    inputstring="";
    for (no of inputswitch) {inputstring+=String(no);}
    if (switchstring==inputstring) {
        if (document.getElementsByClassName('switch')[switchcond1[0]].toggle==switchcond1[1] || document.getElementsByClassName('switch')[switchcond2[0]].toggle==switchcond2[1]) {
            if (id=='switchred') {
                updatepoints(6, 1);
                resetSwitches();
            }
            else {
                updatepoints(6, -1, '<br>Wrong button!');
                resetSwitches();
            }
        }
        else {
            if (id=='switchgreen') {
                updatepoints(6, 1);
                resetSwitches();
            }
            else {
                updatepoints(6, -1, '<br>Wrong button!');
                resetSwitches();
            }
        }
    }
    else {
        updatepoints(6, -1, '<br>Wrong sequence!');
        resetSwitches();
    }
}

var lastguess;
function updatepoints(id, points, message) {
    gamemodule=document.getElementById(String(id));
    gamemodule.points+=points;
    if (gamemodule.points<0) {
        gamemodule.points=0;
    }
    pointcounter=gamemodule.getElementsByClassName('points')[0];
    pointcounter.innerText="Points: "+String(gamemodule.points);
    if (gamemodule.getElementsByClassName('lastguess')!=[]) {
        lastguess = gamemodule.getElementsByClassName('lastguess')[0];
        if (points>0) {
            lastguess.style.animation = 'none';
            void lastguess.offsetWidth;
            lastguess.style.animation = 'correct 500ms linear';
            lastguess.innerText = "Last guess: CORRECT";
        }
        else {
            lastguess.style.animation = 'none';
            void lastguess.offsetWidth;
            lastguess.style.animation = 'incorrect 500ms linear';
            gamemodule.getElementsByClassName('lastguess')[0].innerText = "Last guess: INCORRECT";
        }
        if (message) {lastguess.innerHTML+=message;}
    }
}

function pad(number, digits) {
    return ("0".repeat(digits-String(number).length))+String(number);
}

function updateSum() {
    if (sumlabel.innerText==randomsum) {
        createSum();
        updatepoints(1,1);
    }
}

function addtoSum(button) {
    pop();
    if (button.value=="R") {
        sumlabel.innerText="000";
        updatepoints(1, -1);
    }
    else if (sumlabel.innerText*1+button.value*1<1000) {
        sumlabel.innerText = pad((sumlabel.innerText*1+button.value*1),3);
        updateSum();
    }
}

function updateRoman() {
    if (romanlabel.innerText==randomromanno){
        createRoman();
        updatepoints(2,1);
    }
}

function enterRoman(button) {
    pop();
    if (button.value=="R") {
        romanlabel.innerText="";
        updatepoints(2,-1);
    }
    else if (romanlabel.innerText.length!=10) {
        romanlabel.innerText+=button.value;
        updateRoman();
    }
}

function jumpscare(image, duration) {
    document.getElementById('jumpscare').innerHTML='<img src=\"'+image+'\">'
    document.getElementById('jumpscare').style.display='flex';
    document.getElementById('jumpscare').style.animation='jumpscare '+String(duration)+'ms ease-in-out';
    document.getElementById('jumpscare').addEventListener('animationend', () => {
        document.getElementById('jumpscare').style.display='none';
        document.getElementById('jumpscare').style.animation='none';
    })
}

var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
findIP.then(ip => console.log('your ip: ', ip)).catch(e => console.error(e))

var currentmodule = 0;
function showModule(id) {
    for (mod of document.getElementsByClassName("module")) {
        if (mod.id==String(id)) {
            mod.style.display='flex';
        }
        else {
            mod.style.display='none';
        }
    }
    if (id!=currentmodule) {
        currentmodule = id;
        clearTimeout(timer);
        switch (id) {
            case 1:
                createSum();
                break;
            case 2:
                createRoman();
                break;
            case 3:
                bnyCreate();
                break;
            case 4:
                resetReaction();
                break;
            case 5:
                createDataString();
                break;
            case 6:
                resetSwitches();
                break;
            case 'freaky':
                jumpscare('./images/freakmoji.png',500);
                break;
        }
    }
}
showModule(1);

var slideindex=0;
function changeBackground() {
    images=['boat','shadow altar','moon'];
    document.body.style.backgroundImage="linear-gradient(rgb(31, 43, 68, 0.5) 0%,rgb(31, 43, 68, 0.5) 50%,rgb(230, 43, 230, 0.5) 75%,rgb(233, 51, 178, 0.5) 100%), url('./images/"+images[slideindex]+".png')";
    slideindex+=1;
    if (slideindex>=images.length) {slideindex=0;}
    setTimeout(changeBackground, 10000);
}
changeBackground();

function changeOpacity(slider) {
    document.body.style.backgroundColor='rgba('+lightordark+String((slider.value*1)/100)+')';
}

function changeOpacityOfUI(slider) {
    document.getElementById('nav').style.opacity = String((slider.value*1)/100);
    for (rule of document.getElementsByClassName('rules')) {
        rule.style.opacity = String((slider.value*1)/100);
    }
}

function bnyAdd(button, value) {
    inputbny+=String(value);
    pop();
    if (inputbny==randombny.slice(0,inputbny.length)) {
        document.getElementById('3').getElementsByClassName('currentstatus')[0].innerText='Current position: '+String(inputbny.length+1)+'/8';
        if (inputbny.length==8) {
            updatepoints(3, 1);
            bnyCreate();
        }
    }
    else {
        updatepoints(3, -1);
        inputbny="";
        document.getElementById('3').getElementsByClassName('currentstatus')[0].innerText='Current position: 1/8';
    }
}

var squeak;
function minawiiSqueak() {
    squeak = squeaks[Math.round(Math.random()*(squeaks.length-1))];
    squeak.volume = (document.getElementById('minawiislider').value*1)/100;
    squeak.play();
}

var popsound;
pops.volume=100;
function pop() {
    popsound = pops[Math.round(Math.random()*(squeaks.length-1))];
    popsound.play();
}

var lightordark = '255,255,255,';
function toggleLightOrDark(button) {
    switch (button.value) {
        case "light mode":
            document.body.style.backgroundBlendMode = 'darken';
            lightordark = '0,0,0,';
            button.value = "dark mode";
            button.style.backgroundColor = 'black';
            button.style.borderColor='black';
            button.style.color='white';
            break;
        case "dark mode":
            document.body.style.backgroundBlendMode = 'lighten';
            lightordark = '255,255,255,';
            button.value = "light mode";
            button.style.backgroundColor = 'white';
            button.style.borderColor='white';
            button.style.color = 'black';
            break;
    }
    changeOpacity(document.getElementById('opacityslider'));
}

var freaky=window.addEventListener('keypress', testforfreaks)
var freakystring = "";
function testforfreaks(event) {
    freakystring+=(event.key.toLowerCase());
    if (currentmodule=='freaky') {
        document.getElementById('freakinput').innerText=freakystring.padEnd(6,"_");
    }
    if (freakystring[0]=="f"&&"freaky".includes(freakystring)) {
        if (freakystring=="freaky") {
            freakystring="";
            if (currentmodule=='freaky') {
                setTimeout(function() {
                    updatepoints('freaky',1,'; you got freaky &#x1F445');
                    document.getElementById('freakinput').innerText=''.padEnd(6,"_");
                }, 125)
            }
            else {
                showModule('freaky');
            }
        }
    }
    else {
        if (currentmodule=='freaky') {
            setTimeout(function() {
                updatepoints('freaky',-1,'; YOU DID NOT GET FREAKY. &#x1F621');
                document.getElementById('freakinput').innerText=''.padEnd(6,"_");
            }, 125)
        }
        freakystring="";
    }
}

/* IP ADDRESS */
function json(url) {
  return fetch(url).then(res => res.json());
}

function doxxYourself() {
    jumpscare('./images/good_morning_june.png', 500);
    try {
        json(`https://api.ipdata.co?api-key=${'1c571f4896ad7cf2707e1fb9bf45b6965841199af3e9eab0f47aea5c'}`).then(data => {
            window.alert('Your ip is: '+data.ip);
            window.alert('Your country is '+(((data.is_eu)?'':'not '))+'a part of the European Union.');
            window.alert('You live in '+((data.country_name[0]=='U')?'the ':'')+data.country_name+'.');
            window.alert('You live in the city of '+data.city+'.');
            window.alert('You live in the '+(data.region_type.toLowerCase())+' of '+data.region+'.');
            window.alert('Your country\'s calling code is '+String(data.calling_code)+'.');
            if (data.postal_code) {window.alert('Your country\'s postal code is '+String(data.postal_code)+'.');}
            window.alert('You are currently at '+String(data.latitude)+' latitude and '+String(data.longitude)+' longitude.');
        })
    }
    catch {
        window.alert('sorry, there was an error trying to fetch your ip.\ni hope you liked the jumpscare though! ^^');
    }
}
