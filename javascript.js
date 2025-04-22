let peoples=[120,8,8,253,46576,34,512,4,235,235,233235,23,5253,6,134,5888,123,34245,1200]

let reqem=document.querySelectorAll(".reqem")

let index=0

let interval=setInterval(() => {
    reqem[0].textContent=peoples[index]
    reqem[1].textContent=peoples[index]
    reqem[2].textContent=peoples[index]
    index++
    if (index >= peoples.length) {
        clearInterval(interval);
      }
}, 200);
