import Navigation from "../Components/Navigation"
import data from '../data'
import Douglas from '../Images/crew/image-douglas-hurley.png'
import Mark from '../Images/crew/image-mark-shuttleworth.png'
import Victor from '../Images/crew/image-victor-glover.png'
import Anousheh from '../Images/crew/image-anousheh-ansari.png'


const changeData = (e) => {
  let newId = e.target.id

  let crewRole = document.getElementById('crewRole');
  let crewName = document.getElementById('crewName');
  let crewBio = document.getElementById('crewBio');
  let imageCrew = document.getElementById('imageCrew');

  crewRole.innerHTML = data[0]["crew"][newId].role;
  crewName.innerHTML = data[0]["crew"][newId].name;
  crewBio.innerHTML = data[0]["crew"][newId].bio;


  if (newId == 0) {
    imageCrew.src = Douglas
  } else if (newId == 1) {
    imageCrew.src = Mark
  } else if (newId == 2) {
    imageCrew.src = Victor
  } else if (newId == 3) {
    imageCrew.src = Anousheh
  } else {
    imageCrew.src = Douglas
  }


}

const Crew = () => {
  return (
    <div>
      <Navigation />
      <div id="desktopCrew">


        <div className="subtitle">
          <span class="darkened">02</span>
          meet your crew
        </div>

        <div className="contentContainer">
          <div id="textCrewContainer">

            <div id="crewRole">
              Commander
            </div>

            <div id="crewName">
              Douglas Hurley
            </div>

            <div id="crewBio">
              Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.
              He launched into space for the third time as commander of Crew Dragon Demo-2.
            </div>

            <div id="crewNav">
              <ul>
                <li id="0" onClick={changeData}><span class="bullet"></span></li>
                <li id="1" onClick={changeData}><span class="bullet"></span></li>
                <li id="2" onClick={changeData}><span class="bullet"></span></li>
                <li id="3" onClick={changeData}><span class="bullet"></span></li>
              </ul>
            </div>
          </div>


          <div id="imageCrewContainer">
            <img src={Douglas} alt="" id="imageCrew" />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Crew