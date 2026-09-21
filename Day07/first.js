//this is an example
//this is frontend and we send request to server 
//jaise post h to backend pr wo read krlega ki ye post h to post wala execute kro
//   ex: /user can get and post both but the method sent from here will make the diff 



const resp1 = await fetch('https://api.com/example');
//this is normal way writing a fetch api code
//here we do not explicitely need to write the method in the body of api 
//GET is by default attached to these kinda calls


//while having other methods like POST and Patch we have to write these in the body

const resp2 = await fetch('https://api.com/example', {
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : 'john',age : 30})
});