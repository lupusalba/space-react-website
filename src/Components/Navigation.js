import MenuIcon from '../Images/shared/icon-hamburger.svg'
import MenuIconClose from '../Images/shared/icon-close.svg'
import Logo from '../Images/shared/logo.svg'


const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
}

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
}

const Navigation = () => {

  return (
    <div id="navigationContainer">
      <nav id="menu">
        <img src={Logo} alt="Logo" className="logo" />

        <ul className="navigation">
          <li>
            <a href="/">
              <span className="bolded">00</span>
              home
            </a>
          </li>
          <li>
            <a href="/destinations">
              <span className="bolded">01</span>
              destination
            </a>
          </li>
          <li>
            <a href="/crew">
              <span className="bolded">02</span>
              crew
            </a>
          </li>
          <li>
            <a href="/technology">
              <span className="bolded">03</span>
              Technology
            </a>
          </li>
        </ul>
      </nav>


      <div id="myNav" className="overlay">

        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>


        <div className="overlay-content">
          <a href="/">
            <span className="bolded">00</span>
            home
          </a>
          <a href="/destinations">
            <span className="bolded">01</span>
            destination
          </a>
          <a href="/crew">
            <span className="bolded">02</span>
            crew
          </a>
          <a href="/technology">
            <span className="bolded">03</span>
            Technology
          </a>
        </div>

      </div>

      <span onClick={openNav} id="navIcon"><img src={MenuIcon} height="40" width="40" /></span>
    </div>
  )
}

export default Navigation
