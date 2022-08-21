import Navigation from '../Components/Navigation'
import data from '../data'
import launchVehicleImage from '../Images/technology/image-launch-vehicle-portrait.jpg'
import spacePortImage from '../Images/technology/image-spaceport-portrait.jpg'
import spaceCapsuleImage from '../Images/technology/image-space-capsule-portrait.jpg'


function changeData(e) {
  let newId = e.target.id

  let nameTechno = document.getElementById('technologyTitle');
  let description = document.getElementById('technologyDescription');
  let imageTechno = document.getElementById('imageTechnology');


  nameTechno.innerHTML = data[0]["technology"][newId].name;
  description.innerHTML = data[0]["technology"][newId].description;

  if (newId == 0) {
    imageTechno.src = launchVehicleImage
  } else if (newId == 1) {
    imageTechno.src = spacePortImage
  } else if (newId == 2) {
    imageTechno.src = spaceCapsuleImage
  } else {
    imageTechno.src = launchVehicleImage
  }

}




const Technology = () => {
  return (
    <div id="desktopTechnologyWrapper">

      <Navigation />
      <div id="desktopTechnology">

        <div className="subtitle">
          <span className="darkened">03</span>
          SPACE LAUNCH 101
        </div>


        <div className="contentContainerTech">

          <div id="technologyNav">
            <button id="0" onClick={changeData}>1</button>
            <button id="1" onClick={changeData}>2</button>
            <button id="2" onClick={changeData}>3</button>
          </div>

          <div id="textTechnologyContainer">

            <div id="technologySubtitle">
              THE TERMINOLOGY…
            </div>

            <div id="technologyTitle">
              LAUNCH VEHICLE
            </div>

            <div id="technologyDescription">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from
              Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch
              pad!
            </div>

          </div>



          <div id="imageTechnologyContainer">
            <img src={launchVehicleImage} alt="" id="imageTechnology" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Technology
