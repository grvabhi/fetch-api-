function callAPI(num){
    fetch(`https://swapi.dev/api/people/${num}/`)
    .then((val) => {
        if(val.status === 200)
            return val.json();
        else {
            throw Error("Not Found");
        }
    })
    .then((data)=>{
        console.log("Data: ", data);
        document.getElementById("title").innerHTML = "<i>"+ data.name +"</i>";
    })
    .catch(err=>{
        console.log("Error: ", err);
        document.getElementById("title").innerHTML = "<i>"+"NO SUCH MOVIE" +"</i>";
    });
}

function numberchange(){
    const num = document.getElementById("number-id").value;
        callAPI(num);
}