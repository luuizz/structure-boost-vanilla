"use client"
import StairsAnimation from "@/components/StairsAnimation"
import { motion } from "framer-motion"

export default function Template({children}) {
    return (
      <>
      <StairsAnimation />
      <motion.main
      initial={{y:20, opacity: 0}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.2 }}
      >{children}
      </motion.main>
      </>
    )
  }