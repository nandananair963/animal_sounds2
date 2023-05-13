function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QqlB_mwGG/',modelready);
}

function modelready(){
    classifier.classify(gotresult);
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
    }


}