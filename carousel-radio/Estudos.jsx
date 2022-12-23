import { useState,useEffect} from "react"
import './Estudos.css'


export default function Estudos(){


  const [zImg1,setZimg1] = useState('0')
  const [zImg2,setZimg2] = useState('0')
  const [zImg3,setZimg3] = useState('0')

  const funcOnchange=(e)=>{
    if(e.target.value === 'img1'){
      setZimg1('1')
      setZimg2('0')
      setZimg3('0')
    }else if(e.target.value === 'img2'){
      setZimg1('0')
      setZimg2('1')
      setZimg3('0')
    }
    else{
      setZimg1('0')
      setZimg2('0')
      setZimg3('1')
    }
  }


  return (
    <>
   <section className="section-carousel-radio">

    <div className="div-container">

      <div className="div-container-imgs">
      <div className="img a" style={{zIndex:`${zImg1}`}}></div>
      <div className="img b " style={{zIndex:`${zImg2}`}}></div>
      <div className="img c" style={{zIndex:`${zImg3}`}}></div>
      </div>
    </div>
   </section>

   <footer className="footer-section-carousel">
     <div className="div-radio" onChange={e => funcOnchange(e)}>
      <input type="radio" name="img" className="radio-input" id="img1" value='img1' />
      <input type="radio" name="img" className="radio-input" id="img2" value='img2' />
      <input type="radio" name="img" className="radio-input" id="img3" value='img3' />
     </div>
   </footer>
    </>
  )
}


// const [Zin,setZin] = useState('0');
// const [Zin2,setZin2] = useState('0');

// const funcChange =(e)=>{
//   if(e.target.value === 'color1'){
//     setZin('1')
//     setZin2('0')
//   }else if(e.target.value === 'color2'){
//     setZin2('1')
//     setZin('0')
//   }
// }

// <div className="div a" style={{zIndex:`${Zin}`}}></div>
// <div className="div b" style={{zIndex:`${Zin2}`}}></div>
// <input className="radio" type="radio" name="color" id="color" value='color1' onChange={e => funcChange(e)} />
// <input className="radio" type="radio" name="color" id="color" value='color2' onChange={e => funcChange(e)} />