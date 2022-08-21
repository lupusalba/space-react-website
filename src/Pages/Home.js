import Navigation from '../Components/Navigation'


const Home = () => {
  return (
    <div id="home" className="oneScreen">

      <div id="desktopHome" className="wrapper">

      <Navigation />
        



        <div className="contentContainer">



          <div className="textContainer">
            <div className="beforeTitle">So, you want to travel to</div>
            <div className="title">SPACE</div>
            <div className="descriptionContainer"> Let’s face it; if you want to go to space, you might as well
              genuinely go to
              outer space and not hover kind of on the edge of it. Well sit back, and relax
              because we’ll give you a truly out of this world experience!</div>
          </div>

          <button className="btnWhiteBig">Explore</button>



        </div>

      </div>


    </div>
  )
}

export default Home
