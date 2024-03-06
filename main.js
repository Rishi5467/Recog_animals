function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/8JbY8e5eG/model.json", modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}