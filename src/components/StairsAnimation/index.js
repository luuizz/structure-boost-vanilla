"use client"
import { motion } from "framer-motion"
import { opacity, expand } from "./anim"
import { StyledAnimationStairs } from "./style.css"

export default function StairsAnimation({ backgroundColor }) {

    const anim = (variants, custom=null) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            custom,
            variants,
        }
    }

    const bars = 5;

  return (
    <div className={`${StyledAnimationStairs} page stairs`} style={{backgroundColor}}> 
    <motion.div
    { ...anim(opacity)}
    className="transition-background"
    />
    <div className="transition-container">
        {
            [...Array(bars)].map((_, i) => {
                return (
                    <motion.div key={i} { ...anim(expand, bars - i) } />
                )
            })
        }
    </div>
</div>
  )
}
