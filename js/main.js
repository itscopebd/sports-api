const player_info= document.getElementById("player_info");

const searchPlayer=text=>{
    
const value= document.getElementById("search").value;
const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${value}`
fetch(url)
.then(res=> res.json())
.then(data=> showPlayer(data.player.slice(0,6)))


}


const showPlayer=data=>{
    player_info.innerHTML="";
data.forEach(element => {
   
    const {strGender,strTeam,strThumb}=element;
  const div= document.createElement("div");
  div.classList.add("col")
  div.innerHTML=`
  <div class="card">
  <img style="height:250px" src="${strThumb ? strThumb :"https://picsum.photos/200/300"}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Team: ${strTeam}</h5>
    <h5 class="card-title">Gender: ${strGender}</h5>
    <p class="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae interdum sapien. Curabitur dapibus magna libero, ut iaculis urna maximus non. Mauris gravida lobortis dui luctus pharetra.  </p>
  </div>
</div>
  `;
  player_info.appendChild(div)
});
}


searchPlayer(text="messi")