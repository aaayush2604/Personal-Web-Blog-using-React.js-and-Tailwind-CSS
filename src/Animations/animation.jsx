import './animation.css'
import {useEffect, useState} from 'react'

const Animations=()=>{
  const AnimationArray=[
  {Img:'Animations/Hp.png', class:'HPimg'},
  {Img:'Animations/bolt.png',class:'BoltImg'}
  ]
  const [animationImg, setImage]=useState(0);

  useEffect(()=>{
    const Interval1= setInterval(()=>{
      const len=AnimationArray.length;
      console.log((animationImg+1)%len);
      setImage(animationImg => (animationImg+1)%len);
    },5000);

    return ()=>clearInterval(Interval1);
  },[AnimationArray])

  return<>
    <div className="Animation-Container">
    <img src={AnimationArray[animationImg].Img} className={AnimationArray[animationImg].class}></img>
    </div>
  </>
}

export default Animations;