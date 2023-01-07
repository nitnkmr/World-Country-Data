const countries=[];
countries_data.map((e)=>{
    countries.push(e.name.toLowerCase());
})
// console.log(countries);
 const p1=document.getElementsByClassName('p1');

function hello1(){
    p1[0].innerText=`Total Number of Countries : ${countries.length} `
    const searchValue =document.getElementById("search").value;
    if(searchValue!=""){

        const lowsec=document.getElementById('lowerSec')
        lowsec.innerHTML=""
        
        // console.log(searchValue);
        let matchedCountories=[];
        countries.map((e)=>{
            if(e.startsWith(searchValue.toLowerCase())){
                matchedCountories.push(e)
                lowsec.innerHTML+=`<div class="card">${e}</div>`
                p1[1].innerText=`There are  ${matchedCountories.length}  countries Starts with "${searchValue} "`
                
            }
            
            
        })
        // console.log(matchedCountories);
        
    }
    else{
        alert("Inter Something In SearchBox")
    }
}
function data2(){
    p1[0].innerText=`Total Number of Countries : ${countries.length} `
    const searchValue =document.getElementById("search").value;
    if(searchValue!=""){
    const lowsec=document.getElementById('lowerSec')
    lowsec.innerHTML=""
    // console.log(searchValue);
    let matchedCountories=[];
    countries.map((el)=>{
        if(el.includes(searchValue.toLowerCase())){
            matchedCountories.push(el)
            lowsec.innerHTML+=`<div class="card">${el}</div>`
            p1[1].innerText=`There are  ${matchedCountories.length}  countries includes with ${searchValue}`

            
        }
        
        
    })
    // console.log(matchedCountories);
}
else{
        alert("Inter Something In SearchBox")
    }

}