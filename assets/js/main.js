class PlayerInfo{
    constructor(firstName,lastName,birthDate,age,placeOfBirth,nationalTeam,team,photo,position){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthDate=birthDate;
        this.age=age;
        this.placeOfBirth=placeOfBirth;
        this.nationalTeam=nationalTeam;
        this.team=team;
        this.photo=photo;
        this.position=position;

    }
    
    HTMLgenratorn(){
        return`
        <div class="hover08 column">
        <div>
          <figure><img src="${this.photo}" alt="${this.firstName}">
          </figure>
          <span>
          ${this.firstName} ${this.lastName}<br>
          Birth Date: ${this.birthDate}<br>
          Place of birth: ${this.placeOfBirth}<br>
          (${this.age}) Year <br>
          National Team: ${this.nationalTeam}<br>
          Team: ${this.team}<br>
          Position: ${this.position}<br>
          </span>
        </div>
        `  
    }
    /* `
    <div>
    <img src="${this.photo}" alt="${this.firstName}">
    <p class="text-center name-bold">${this.firstName} ${this.lastName}</p><br>
    <p>Birth Date: ${this.birthDate}</p><br>
    <p>Place of birth: ${this.placeOfBirth}</p><br>
    <p>(${this.age}) Year</p><br>
    <p>National Team: ${this.nationalTeam}</p><br>
    <p>Team: ${this.team}</p><br>
    <p>Team: ${this.position}</p><br>
    
</div> ` */

}

const addChangesBtn=document.querySelector(".addChanges");
const outPutPlace=document.querySelector(".cards");
const inputs=document.querySelectorAll("input");
const selectorMenu=document.getElementById("selectMenu");
const resetBtn=document.querySelector(".reset");
addChangesBtn.addEventListener("click",e=>{
e.preventDefault();
const playerAsugabe=new PlayerInfo(inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value,inputs[6].value,inputs[7].value,selectorMenu.value);
outPutPlace.innerHTML+=playerAsugabe.HTMLgenratorn();
})

resetBtn.addEventListener("click",e=>{
    outPutPlace.innerHTML=""
})