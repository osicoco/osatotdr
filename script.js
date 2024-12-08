document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#match-game select');

    select.addEventListener('change', (event) => {
        const value = event.target.value;
        if (value === "Ignore") {
            alert("Correct! Always tell an adult and don't share personal information.");
        } else if (value === "Share") {
            alert("Incorrect! Never share your location with strangers.");
        }
    });
});
