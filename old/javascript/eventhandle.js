var buttons = document.querySelector('.tokenizer');
buttons.addEventListener('click', (event)=>{
    document.getElementById("process_name").innerText = "Initializing Rendering Engine " + renderingEngine + "...";
    processFlow.push("Initializing Rendering Engine " + renderingEngine + "...");
    setTimeout( TokenizeAndAppend.bind(null,[event]), delay.processDelay);
});