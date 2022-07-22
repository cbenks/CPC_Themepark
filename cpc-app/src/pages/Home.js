import img from '../assets/themePark1.png'
console.log(img)

const Home = () => {
  return (
    // <div className="slideshow-container">
    //   <div className="mySlides fade">
    //     <div className="numbertext">1 / 4</div>
    <img src={img} />
    //     <div className="text">Caption Text</div>
    //   </div>
    // </div>
  )
}

export default Home
