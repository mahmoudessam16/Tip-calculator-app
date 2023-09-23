let allPercentages = document.querySelectorAll(".tip");
let inputTip = <HTMLInputElement> document.querySelector(".for-tips input");
let billInput = <HTMLInputElement> document.getElementById("bill");
let peopleNumInput = <HTMLInputElement> document.querySelector(".input input");
let tipAmountForPerson = <HTMLSpanElement> document.querySelector(".tip-amount .tip-number");
let totalForPerson = <HTMLSpanElement> document.querySelector(".total .tip-number");
let resetBtn = <HTMLButtonElement> document.querySelector("button");


allPercentages.forEach((percentage) => {
    percentage.addEventListener("click", function (ele: Event) {
        allPercentages.forEach(percen => percen.classList.remove("active"));
        ele.currentTarget.classList.add("active");
        if (peopleNumInput.value.length === 0) {
            (<HTMLSpanElement> document.querySelector(".error")).style.display = 'block';
            peopleNumInput.style.border = 'none';
            peopleNumInput.style.border = '1px solid red';
        } else {
            if (billInput.value.length === 0) {
                (<HTMLSpanElement> document.querySelector(".for-bill .error")).style.display = 'block';
                billInput.style.border = 'none';
                billInput.style.border = '1px solid red';
            } else {
                (<HTMLSpanElement> document.querySelector(".for-bill .error")).style.display = 'none';
                billInput.style.borderColor = "hsl(172, 67%, 45%)";
                (<HTMLSpanElement> document.querySelector(".for-people .error")).style.display = 'none';
                peopleNumInput.style.borderColor = "hsl(172, 67%, 45%)";
                let tipAmount = ((Number(billInput.value) * Number(ele.target?.dataset.tip) / 100) / Number(peopleNumInput.value)).toFixed(2)
                tipAmountForPerson.textContent = `$${tipAmount}`;
                totalForPerson.textContent = `$${(Number(tipAmount) + (Number(billInput.value) / Number(peopleNumInput.value))).toFixed(2)}`;
                resetBtn.addEventListener("click", function () {
                    window.location.reload();
                });
            }
        }
    });
});

