"use strict";
let allPercentages = document.querySelectorAll(".tip");
let inputTip = document.querySelector(".for-tips input");
let billInput = document.getElementById("bill");
let peopleNumInput = document.querySelector(".input input");
let tipAmountForPerson = document.querySelector(".tip-amount .tip-number");
let totalForPerson = document.querySelector(".total .tip-number");
let resetBtn = document.querySelector("button");
allPercentages.forEach((percentage) => {
    percentage.addEventListener("click", function (ele) {
        var _a;
        allPercentages.forEach(percen => percen.classList.remove("active"));
        ele.currentTarget.classList.add("active");
        if (peopleNumInput.value.length === 0) {
            document.querySelector(".error").style.display = 'block';
            peopleNumInput.style.border = 'none';
            peopleNumInput.style.border = '1px solid red';
        }
        else {
            if (billInput.value.length === 0) {
                document.querySelector(".for-bill .error").style.display = 'block';
                billInput.style.border = 'none';
                billInput.style.border = '1px solid red';
            }
            else {
                document.querySelector(".for-bill .error").style.display = 'none';
                billInput.style.borderColor = "hsl(172, 67%, 45%)";
                document.querySelector(".for-people .error").style.display = 'none';
                peopleNumInput.style.borderColor = "hsl(172, 67%, 45%)";
                let tipAmount = ((Number(billInput.value) * Number((_a = ele.target) === null || _a === void 0 ? void 0 : _a.dataset.tip) / 100) / Number(peopleNumInput.value)).toFixed(2);
                tipAmountForPerson.textContent = `$${tipAmount}`;
                totalForPerson.textContent = `$${(Number(tipAmount) + (Number(billInput.value) / Number(peopleNumInput.value))).toFixed(2)}`;
                resetBtn.addEventListener("click", function () {
                    window.location.reload();
                });
            }
        }
    });
});
//# sourceMappingURL=index.js.map