
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0b24496cefc84e82bbfd0e17f399f5a0").then((result) => {
    let myData = result.json();
    return myData;
})
.then((currency) => {
    let td1 = document.getElementById("td1");
    let td2 = document.getElementById("td2");
    let td3 = document.getElementById("td3");
    let td4 = document.getElementById("td4");

    td1.innerHTML = Math.round(currency.rates["JOD"]);
    td2.innerHTML = Math.round(currency.rates["EGP"]);
    td3.innerHTML = Math.round(currency.rates["SAR"]);
    td4.innerHTML = Math.round(currency.rates["USD"]);
})

