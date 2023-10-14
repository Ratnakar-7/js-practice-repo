const btn = document.getElementById('btn');
const jokeE =document.getElementById('joke');



const apiKey ='A6sl2BW0f81jiDdSPSfYGQ==XLLkWDD8loAXHlYo';
apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1';
const options ={
    method : 'GET',
    headers:{
        'X-Api-Key':apiKey
    }
}

async function getJoke(){
try{
    jokeE.innerText= 'Updating...'
btn.disabled=true;
btn.innerText='Loading...'

const response = await fetch(apiURL,options);
const data = await response.json();
// console.log(data[0].joke);
jokeE.innerText =data[0].joke;
btn.disabled=false;
btn.innerText="GENERATE";

}
catch(err){
console.log(err);
jokeE.innerText="Failed to load. Try again later."
btn.disabled=false;
btn.innerText="GENERATE";
}
}

btn.addEventListener('click', getJoke);