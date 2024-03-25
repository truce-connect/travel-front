import  { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slideData = [
  {
    url: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg",
  },
  {
    url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cataloniahotels.com%2Fen%2Fblog%2Fdifference-between-a-hotel-and-resort%2F&psig=AOvVaw0_uDSC4uF6jdRciQoWfzc5&ust=1711228600777000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDtpenQiIUDFQAAAAAdAAAAABAE",
  },
  {
    url: "https://www.google.com/imgres?q=image%20of%20resort&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fdf%2FTown_and_Country_fh000023.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FResort&docid=YaDlho3J7xXn-M&tbnid=C59AARTSZVU7GM&vet=12ahUKEwiyzMnezIeFAxUpQEEAHYz_CQwQM3oECGj8QAA..i&w=1800&h=1200&hcb=2&ved=2ahUKEwiyzMnezIeFAxUpQEEAHYz_CQwQM3oECG8QAA",
  },
];

const Carousel = () => {
  const [slide, setSlide]=useState(0);
   const length = slideData.length
   console.log(length)
   const nextSlide =()=>{
    setSlide(slide === length - 1 ? 0 : slide + 1)
   }
   const prevSlide =()=>{
    setSlide(slide === 0 ? length-1  : slide -1)
   }

  return (
    <div className="mx-w-[1240px] mx-auto px-4 relative flex justify-center items-center ">
      <FaArrowLeft
       onClick={prevSlide} 
       className ="absolute top-[50%] text-white text-3xl cursor-pointer left-8" />

      <FaArrowRight
       onClick={nextSlide}
        className ="absolute top-[50%]  text-white text-3xl cursor-pointer right-8"  />

      {slideData.map((item, index) => (
          <div classname={index === slide ? "opacity-100":"opacity:0"}> 
            {index === slide && (
            <img className="w-full rounded-md" src={item.url} alt="/" />
            )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
