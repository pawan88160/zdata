window.onload=()=>{
    fetch('res.txt')
.then(res=>res.json())
.then(data=>{
    let rescard = document.getElementById('res-card');
    let resarea = document.getElementById('res-area')
    let sth ="";
    let stor = "";
    for(let i = 0; i <data.length; i++){
       // console.log(data[i].re)
        for(let j = 0; j <data[i].re.length; j++){
               if(data[i].h1==="Sector 13 Restaurants, Karnal"){
                 sth=`<h1>${data[i].h1}</h1>`
               } 
               if(data[i].re.length>0){
                     stor+=`
                        <div class="res-card-area"> 
                            <a href="${data[i].re[j].name}">
                                <div class="resimg">
                                    <img src="${data[i].re[j].img}">
                                    <div>
                                        <span>${data[i].re[j].disscount}</span>  <span>${data[i].re[j].time}</span>
                                    </div>
                                </div>
                                <div class="resdetails">
                                <div>
                                        <span><h4>${data[i].re[j].name}</h4></span>
                                        <span><p>${data[i].re[j].rating} </p></span>
                                </div>
                                <div>
                                        <span>${data[i].re[j].data}</span>
                                        <span>${data[i].re[j].rs}</span>
                                </div>
                                </div>
                                <div class="ressliding">
                                    <div>
                                        <div class="ressliding-img">
                                            <img src="${data[i].re[j].wayimg}" >
                                        </div>
                                        <div  class="ressliding-txt">
                                            <span> ${data[i].re[j].currently}</span>
                                        </div>
                                        <div  class="ressliding-img2">
                                        <img src="${data[i].re[j].saftyimg}" >
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    `;
               }else{
                console.log('find error')
               }
        }
    }
    rescard.innerHTML=stor;
    resarea.innerHTML=sth;
})
.catch(err=>{console.log("data not found")})
//console.log('data loded');
}