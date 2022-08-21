import Navigation from "../Components/Navigation"
import data from '../data'
import Mars from "../Images/destination/image-mars.png"
import Moon from "../Images/destination/image-moon.png"
import Titan from "../Images/destination/image-titan.png"
import Europa from "../Images/destination/image-europa.png"


const changeData = (e) => {
  console.log(e.target.id)

  let newId = e.target.id

  let destinationTitle = document.getElementById('destinationTitle');
  let destinationDescription = document.getElementById('destinationDescription');
  let destinationDistance = document.getElementById('destinationDistance');
  let destinationETA = document.getElementById('destinationETA');
  let destImage = document.getElementById('destImage');

  destinationTitle.innerHTML = data[0]["destinations"][newId].name;
  destinationDescription.innerHTML = data[0]["destinations"][newId].description;
  destinationDistance.innerHTML = data[0]["destinations"][newId].distance;
  destinationETA.innerHTML = data[0]["destinations"][newId].travel;
  // destImage.src =  data[0]["destinations"][`${newId}`]["images"]["png"]
  
console.log(newId)
  if ( newId === 0 ){
    destImage.src = Moon
  } else if  ( newId == 1 ) {
    destImage.src = Mars
  } else if  ( newId == 2 ) {
    destImage.src = Europa
  } else if  ( newId == 3 ) {
    destImage.src = Titan
  } else {
    destImage.src = Moon
  }
  console.log(destImage)
}


const Destinations = () => {
  return (
    <div>

      <Navigation />

      


      <div id="destinationWrapper" className="wrapper">


        <div id="desktopDestination">

          <div className="subtitle">
            <span className="darkened">01</span>
            PICK YOUR DESTINATION
          </div>

          <div className="contentContainer">

            <div id="destinationImageContainer" className="contentItem">
              <img id="destImage" src={Moon} alt="destination image" className="destinationImage" />
            </div>



            <div className="textDestinationContainer contentItem">

              <div className="destinationMenuContainer">
                <ul id="destinationMenu">
                  <li id="0" onClick={changeData}>moon</li>
                  <li id="1" onClick={changeData}>mars</li>
                  <li id="2" onClick={changeData}>europa</li>
                  <li id="3" onClick={changeData}>titan</li>
                </ul>

              </div>

              <div id="destinationTitle">Moon</div>

              <div id="destinationDescription">
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
              </div>

              <hr />

              <div id="destinationData">
                <div id="destinationDistance">384,400 km</div>
                <div id="destinationETA">3 days</div>
              </div>

            </div>

          </div>


        </div>

      </div>

    </div>
  )
}

export default Destinations