import Showcase from "../components/Showcase"
import Features from "../components/Features"
import SmallAbout from "../components/SmallAbout"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"

function Home() {
  return (
    <div className="">
      <Showcase/>
      <Features/>
      <SmallAbout/>
      <Pricing/>
      <Testimonials/>
    </div>
  )
}

export default Home