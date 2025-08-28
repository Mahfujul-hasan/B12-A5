

let callButtons = document.querySelectorAll(".call-button");
for (i=0; i < callButtons.length; i++ ){
    let button = callButtons[i];
    button.addEventListener("click", function(){
        let name = document.querySelector(".service-name").textContent;
        let number = document.querySelector(".service-number").textContent;
        let presentTime = new Date().toLocaleTimeString();
        let callHistoryName = name;
        let callHistoryNumber = number;
        let callHistoryTime = presentTime;
        let liName = document.createElement("li");
        let liNumber = document.createElement("li")
        let liTime = document.createElement("li");
        liName.textContent = callHistoryName;
        liNumber.textContent = callHistoryNumber;
        liTime.textContent = callHistoryTime;
        liName.classList.add('inter', 'text-[18px]', 'font-semibold');
        liNumber.classList.add('hind-madurai', 'text-[18px]', 'font-normal','text-[#5C5C5C]')
        liNumber.classList.add('hind-madurai', 'text-[18px]', 'font-normal')
        document.getElementById("call-history-details").append(liName, liNumber);
        document.getElementById("call-history-time").appendChild(liTime);

        // console.log(liDetails,liTime)

        

    })
    
}