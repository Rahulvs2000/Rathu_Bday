function clap(){

  let x = document.getElementById("num").value;
  let p = document.getElementById("output");
  if(x==21){
    for(let i=1; i <= x; i++){
      p.innerHTML +=  (i+"."+" happy Bday to u 👏🏻"+"<br>");
    }
  }else{
    p.innerHTML = (x+" Ha <br>"+"hey..! donga naku thalsuu leee"+"<br>");
  }
}
