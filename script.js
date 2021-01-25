function calculate(){
    let billAmount = document.getElementById("bill-amount").value;
    let billShare = document.getElementById("bill-share").value;
    let serviceQuality = document.getElementById("service-quality").value;

    let result = (billAmount * serviceQuality / billShare);
    document.getElementById("total").innerHTML = "$" + result;
}