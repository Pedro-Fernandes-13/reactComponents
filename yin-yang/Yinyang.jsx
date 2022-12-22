import "./Yinyang.css"
import { useState,useEffect} from "react"

export default function Yinyang(){


const [yinYang,setYinYang] = useState(0)
const [colorYinYang,setcolorYinYang] = useState('black') //add all texts for yinYang
const [backgroundColor,setBackgroundColor] = useState('white')


const funcYinYang=()=>{
  yinYang === 0 ? setYinYang(30)  : setYinYang(0)
  yinYang === 0 ? setcolorYinYang('white')  : setcolorYinYang('black')
  yinYang === 0 ? setBackgroundColor('black')  : setBackgroundColor('white')
}
useEffect(()=>{
  document.body.style.backgroundColor = `${backgroundColor}`
},[backgroundColor])




  return (
    <>

<div className="btn-yingYang">
  <div className="YingYang" onClick={()=>{funcYinYang()}}
   style={{marginLeft:`${yinYang}px`,backgroundColor:`${colorYinYang}`}}>
  </div>
</div>
<h1 style={{color:`${colorYinYang}`}} className="title">Yin-Yang</h1>
<section>
  <p style={{color:`${colorYinYang}`}}>
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham
  </p>
</section>

    </>
  )
}