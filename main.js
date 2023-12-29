Webcam.set({
    width:350,
    height:300,
    imageFormat:'png',
    pngQuality:90
});

Webcam.attach('camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
console.log('ml5 version ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0IIvkoqOO/model.json',modelLoaded);

function modelLoaded() {
    console.log('Modelo Carregado!');
}

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("nomeGestoMao").innerHTML = results[0].label;
        prediction1 = results[0].label;

        if(results[0].label == "Tranquilo") {
            document.getElementById("emojiGestoMao").innerHTML = "🤙";
        }
    
        if(results[0].label == "Legal") {
            document.getElementById("emojiGestoMao").innerHTML = "👍";
        }
    
        if(results[0].label == "Vitória") {
            document.getElementById("emojiGestoMao").innerHTML = "✌";
        }
        if(results[0].label == "Chato") {
            document.getElementById("emojiGestoMao").innerHTML = "👎";
        }
        if(results[0].label == "Olá") {
            document.getElementById("emojiGestoMao").innerHTML = "🖐";
        }
    }
}