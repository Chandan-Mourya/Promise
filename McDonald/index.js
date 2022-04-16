let arr=[]

function orderFood(e) {
  event.preventDefault()
 
  let form = document.querySelector("form")
   

    form.wadapav.checked? arr.push({name:"wadapav", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJsZU7boMtVW0Ue7PP5Z_Ro5NkfBq3BcyzQ&usqp=CAU"}):null;
    form.samosa.checked? arr.push({name:"samosa", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmooGmdr1IMqMdZdCvSXEpsIBnL0-eDlfY4w&usqp=CAU"}):null;
    form.Jalebi.checked? arr.push({name:"Jalebi", image:"https://media.gettyimages.com/photos/tempting-jalebis-picture-id155400094?k=20&m=155400094&s=612x612&w=0&h=udLOAexOHmpM1ztdzD8CCjPEwcvR97_juxalgV3VkCw="}):null;
    form.Burger.checked? arr.push({name:"Burger", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalCPMNVRNsBc1LdtiVoDcFuzH8bYCzrqT5w&usqp=CAU"}):null;
    form.manchurian.checked? arr.push({name:"manchurian", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZS50c5oEdI3uBBdRtg0O7BeVcdBzJrOS9jQ&usqp=CAU"}):null;
    form.Coffee.checked? arr.push({name:"Coffee", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6NkcMAw4mHxWvjACQ6HJf4CQCwa1n1COYA&usqp=CAU"}):null;
    
   console.log(arr)
   createPromise(arr)
}

function createPromise(order){
  console.log(arr)
 
  order.forEach(async function(el){
      
    let mypromise = new Promise(function (resolve, reject) {
      let time = Math.random() * 10 * 1000;
  
      setTimeout(function () {
          resolve(` Your ${el.name} is ready`)
        let box=document.createElement("div")
       let container = document.querySelector("#container");
       container.innerHTML = null;
        let name=document.createElement("p")
        name.innerText=el.name;
        let img=document.createElement("img");
        img.src=el.image;
        box.append(name,img)
        document.querySelector("#container").append(box)
      }, time);

    
    });
    
    mypromise.then(function (res) {
      console.log(res);
    }).catch(function(err){
      console.log(err)
    });

  })

 
  
  }