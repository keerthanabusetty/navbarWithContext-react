// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const bgHomeClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme
        ? 'home-text-dark'
        : 'home-text-light'

      return (
        <div className={`home-app-container ${bgHomeClassName}`}>
          <Navbar />
          <div className="home-responsive-container">
            <div className="home-container">
              <img src={homeImgUrl} className="home-img" alt="home" />
              <h1 className={`home-heading ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
