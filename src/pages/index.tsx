import * as React from "react"

import "../components/styles.css"
import data from "../site-data.json"

import { NavBar } from "../components/NavBar"
import { HeroSplash } from "../components/HeroSplash"
import { Avatar } from "../components/Avatar"
import { NameBlock } from "../components/NameBlock"
import { IconBar } from "../components/IconBar"

const splashImage =
  "https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80"
const avatarImage =
  "https://scontent-msp1-1.xx.fbcdn.net/v/t1.6435-9/120762512_3486781184693488_4023420854158152202_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=ZZlUYySR7ecAX8359tj&_nc_ht=scontent-msp1-1.xx&oh=0d1a66b5f8046147b877d1d24f4798b9&oe=60DF301F"

const IndexPage = () => {
  return (
    <>
      <NavBar rightMenu={data.nav} />
      <HeroSplash image={splashImage}>
        <Avatar image={avatarImage} />
        <NameBlock name={data.splash.name} title={data.splash.jobTitle} />
        <IconBar />
      </HeroSplash>
      <div style={{ height: "100vh", width: "100%", background: "red" }} />
      <div style={{ height: "100vh", width: "100%", background: "blue" }} />
    </>
  )
}
export default IndexPage