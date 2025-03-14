const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click",function()
{
    const income =  parseFloat(document.getElementById("income").value);
   // console.log(income); typeof deye check kore dekhbo eita string e ache
   const software = parseFloat(document.getElementById("software").value);
   const courses = parseFloat(document.getElementById("courses").value);
   const internet = parseFloat(document.getElementById("internet").value);
   //console.log(internet);

   const totalExpenses = software+courses+internet;
   const balance = income - totalExpenses;
   //console.table ({totalExpenses,balance});  now i am a junior developer sothat i should check project again and again 

   const totalExpensesElement = document.getElementById("total-expenses");
   totalExpensesElement.innerText = totalExpenses.toFixed(2);

   const totalBalance = document.getElementById("balance");
    totalBalance.innerText = balance.toFixed(2);

    const result = document .getElementById("results");
    result.classList.remove("hidden");

   

   
});

const calculateSavingButton = document.getElementById('calculate-savings')
calculateSavingButton.addEventListener('click',function()
{
   // console.log("test");

   const income =  parseFloat(document.getElementById("income").value);
   const software = parseFloat(document.getElementById("software").value);
   const courses = parseFloat(document.getElementById("courses").value);
   const internet = parseFloat(document.getElementById("internet").value);
   const savingPercentace = parseFloat(document.getElementById("savings").value);
   
   const totalExpenses = software + courses + internet;
   const balance = income - totalExpenses;
   const savingAmount = (savingPercentace
    *  balance)/
    100;
    const remainingBalance = balance - savingAmount;
    //console.log(savingAmount);
    const savingElement = document.getElementById("savings-amount");
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingElement = document.getElementById('remaining-balance')
    remainingElement.innerText = remainingBalance.toFixed(2);
})