


function getMySuperhero(){
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
           let mySuperhero = JSON.parse(this.responseText)
           document.getElementById('super-hero').innerHTML = mySuperhero;
        }
        else if (this.readyState != 4){
            document.getElementById('super-hero').innerHTML = 'LOADING';
        }
        else{
            document.getElementById('super-hero').innerHTML = 'Something went wrong!';
        }
    }
    ajax.open("GET", "https://superheroapi.com/api/10157678761855308/176", true);
    ajax.send();
}



document.getElementById('refresh-superhero').addEventListener('click', getMySuperhero);