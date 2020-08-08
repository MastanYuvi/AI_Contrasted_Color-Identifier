//Creating Object of neuralNetwork
const net = new brain.NeuralNetwork()

//This is the Classifier or Trained Data to Identify Contrasting Color around the Background
const data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},{"input":{"r":1,"g":1,"b":1},"output":[0]},{"input":{"r":0.39771563524531683,"g":0.058291731213100384,"b":0.5604373087487724},"output":[1]},{"input":{"r":0.7409260553430503,"g":0.6759659796253443,"b":0.543433977173166},"output":[1]},{"input":{"r":0.8834619243734398,"g":0.4513330584128863,"b":0.3259385539293116},"output":[1]},{"input":{"r":0.8482571811715911,"g":0.23637875487611382,"b":0.651938231314821},"output":[1]},{"input":{"r":0.49348925249659614,"g":0.4548028320381996,"b":0.18860819676797203},"output":[1]},{"input":{"r":0.49425187457061703,"g":0.22034984391772783,"b":0.40918316607630145},"output":[1]},{"input":{"r":0.4642932594054421,"g":0.7572446911382309,"b":0.4958764062916985},"output":[0]},{"input":{"r":0.047461116244894797,"g":0.021255191254421657,"b":0.5290272898141823},"output":[1]},{"input":{"r":0.6631809677216192,"g":0.4772169983527632,"b":0.8347038059793099},"output":[0]},{"input":{"r":0.8790002234813825,"g":0.001133108925092774,"b":0.09628569796444442},"output":[1]},{"input":{"r":0.911140316013402,"g":0.680175349105073,"b":0.5333615317172704},"output":[0]},{"input":{"r":0.6111604845510301,"g":0.1236444764513367,"b":0.11491234540981798},"output":[1]},{"input":{"r":0.6951226830683563,"g":0.45525072145838075,"b":0.7010977817763446},"output":[0]},{"input":{"r":0.3518635769791252,"g":0.8218186176570654,"b":0.039796889878589425},"output":[0]},{"input":{"r":0.9192599295754975,"g":0.03320955200732256,"b":0.27933295273187086},"output":[1]},{"input":{"r":0.9752868072509129,"g":0.25968587227659823,"b":0.8458810315302518},"output":[1]},{"input":{"r":0.5063306885790806,"g":0.43286552545113466,"b":0.47559041835229476},"output":[1]},{"input":{"r":0.1013231346739103,"g":0.5691932372402475,"b":0.08467121325465676},"output":[1]},{"input":{"r":0.8130844031650815,"g":0.646425649973108,"b":0.24218825034469993},"output":[0]},{"input":{"r":0.5627064758190268,"g":0.4225116680107286,"b":0.1954552895278141},"output":[1]},{"input":{"r":0.9211364639619746,"g":0.656728201476602,"b":0.10177199256819569},"output":[0]},{"input":{"r":0.3389927022409194,"g":0.8005252481281959,"b":0.6115722687523961},"output":[0]},{"input":{"r":0.6096728799977067,"g":0.4772539710080892,"b":0.5679945309360654},"output":[1]},{"input":{"r":0.18445894331216595,"g":0.3246582659416475,"b":0.8676106493221245},"output":[1]},{"input":{"r":0.2063485057232224,"g":0.6366039850708332,"b":0.75951842417405},"output":[1]},{"input":{"r":0.1310867374293192,"g":0.4674062227253797,"b":0.5629751413180284},"output":[1]},{"input":{"r":0.049480070858454406,"g":0.6391108330154827,"b":0.9304334228050422},"output":[0]},{"input":{"r":0.14545445542990443,"g":0.5335755662898645,"b":0.4575456196999643},"output":[1]},{"input":{"r":0.546971135656229,"g":0.5674028882764701,"b":0.8293294650684198},"output":[0]},{"input":{"r":0.3058559947003934,"g":0.20182355197996849,"b":0.6343144027131444},"output":[1]},{"input":{"r":0.6695959841057708,"g":0.2902492598023789,"b":0.19324550795064832},"output":[1]},{"input":{"r":0.7307758033883629,"g":0.5823273805430844,"b":0.9529455741637571},"output":[0]},{"input":{"r":0.5001062037801134,"g":0.003964120029616547,"b":0.5290453463876164},"output":[1]},{"input":{"r":0.5736886359251216,"g":0.4340309475927182,"b":0.604875731792567},"output":[1]},{"input":{"r":0.1258730692730503,"g":0.6722197639588798,"b":0.2393120161366713},"output":[1]},{"input":{"r":0.6227399177128059,"g":0.6175390762495296,"b":0.5293462905098489},"output":[0]}]

//Read the Trained Input
net.train(data)

//Initializing variable to Track Elements
const colorEl = document.getElementById('color')
const guessEl = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')

let color
setRandomColor()

//setting value as 1 when White Button is Clicked to Create Classifier
whiteButton.addEventListener('click', ()=>{
    colorChange(1)
})
//setting value as 0 when Black Button is Clicked to Create Classifier
blackButton.addEventListener('click', ()=>{
    colorChange(0)
})

//Pushing Trained Data 
function colorChange(value){
    data.push({
        input: color,
        output: [value]
    })
    //Changing background color after ever Button Click
    setRandomColor()
}

printButton.addEventListener('click', print)
//Clicking Print button creates Trained Data
function print(){
    console.log(JSON.stringify(data))
}

//net.run actually gives the array of Calculated Number and we are taking 1st element from Array
const guess = net.run(color)[0]
console.log(guess)
//Changed the AI Gussed Color by .5
guessEl.style.color = guess > .5 ? '#FFF' : '#000'

//setting RandomCOlor of background
function setRandomColor(){
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }
    //COnverting to CSS RGB Format by multiplying with 255
    colorEl.style.backgroundColor = 
    `rgba(${color.r *255}, ${color.g * 255}, ${color.b *255})`

}