prediction_1 = ""


Webcam.set({
width:350,
height:350,
image_format: 'png',
png_quality: 90

})
Webcam.attach("#camera")
camera= document.getElementById("camera")

function takesnapshot(){

    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="' + data_uri +'"/>'
    })
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2qX9DdPjO/.model.json", modelLoaded)
function modelLoaded(){
    console.log(modelLoaded)
}
function speak(){
    var synth= window.SpeechSynthesis
    speak_data1= "the firt predictin is:" + prediction_1
    speak_data2= "the second predictin is:" + prediction_2
    var utterthis = new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterthis)
}
function predict(){
    img= document.getElementById("captured_image")
    classifier.classify(img, gotresult)
}














function gotresult(error, result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("resultemotionname").innerHTML = result[0].label
        document.getElementById("resultemotionname2").innerHTML = result[1].label


        prediction_1= result[0].label
        prediction_2= result[1].label


        speak();
    if(prediction_1=="✌"){
        document.getElementById("update_emoji").innerHTML= "&#x270C;"
    }
    if(prediction_1=="🤙"){
        document.getElementById("update_emoji").innerHTML= "&#x1F919;"
    }
    if(prediction_1=="👌"){
        document.getElementById("update_emoji").innerHTML= "&#x1F44C;"
    }
    if(prediction_1=="👍"){
        document.getElementById("update_emoji").innerHTML= "&#x1F44D;"
    }
    if(prediction_1=="👋"){
        document.getElementById("update_emoji").innerHTML= "&#x1F44B;"
    }}

}
