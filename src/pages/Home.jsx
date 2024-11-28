import Showcase from "../components/Showcase"
import Features from "../components/Features"
import SmallAbout from "../components/SmallAbout"
import Pricing from "../components/Pricing"

function Home() {
  return (
    <div className="">
      <Showcase/>
      <Features/>
      <SmallAbout/>
      <Pricing/>
    </div>
  )
}

export default Home