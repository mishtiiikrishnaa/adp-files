function submitform() {
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    if (!email || !password) {
        alert("please fill in all the fields");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("please enter a valid email");
        return;
    }
    if (password.length < 8) {
        alert("password must be at least 8 characters long");
        return;
    }
    alert("form submitted successfully");
    document.getElementById("form3").reset();
}
function submitform1() {
    const email = document.getElementById("email").value; 
    const password = document.getElementById("password").value;
    let formbox = document.getElementById("form3");
    if (email && password) {
        formbox.innerHTML = "<h2>form submitted successfully</h2>";
    } else {
        alert("fill the fields first!");
    }
}

async function fetchUserData() {
    const resultDiv = document.getElementById("api-result");
    resultDiv.innerHTML = "fetching...";

    try {
        // pick a random number between 1 and 10
        const randomId = Math.floor(Math.random() * 10) + 1;

        // use backticks (`) and ${} to put that number in the url
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`);
        const user = await response.json();

        // your lowercase aesthetic
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();
        const city = user.address.city.toLowerCase();

        resultDiv.innerHTML = `
            <div id="form3">
                <p><strong>name:</strong> ${name}</p>
                <p><strong>email:</strong> ${email}</p>
                <p><strong>city:</strong> ${city}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = "error: the server is acting up again.";
    }
}