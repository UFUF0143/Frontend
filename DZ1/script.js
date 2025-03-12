function changeGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement.innerText === "Привет!") {
    greetingElement.innerText = "Дарова!";
} else {
     greetingElement.innerText = "Привет!";
}
}