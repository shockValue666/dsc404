import Banner from '@/components/Banner'
import BouncingPhoto from '@/components/BouncingPhoto'
import CenteredParagraph from '@/components/CenteredParagraph'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InteractiveBoxes from '@/components/InteractiveBoxes'
import Logo from '@/components/Logo'
// import SecondBanner from '@/components/SecondBanner'
import Separator from '@/components/Separator'
import Title from '@/components/Title'
import Whitelist from '@/components/Whitelist'

export default function Home() {
  return (
    <div 
    className="text-white bg-[#000000]">
      <Header/>
      <Title/>
      <Banner/>
      <Separator size="xl"/>
      <CenteredParagraph content='Descientists404 is a group of unconventional scientists engage in groundbreaking experiments that defy traditional ethics. Utilizing the ERC404 standard, which combines the best of both fungible and non-fungible tokens, this project allows participants to explore and invest in the outcomes of experiments once thought too risky or taboo. Each token represents a unique piece of their audacious scientific journey, offering a glimpse into a world where the limits of science are constantly being challenged and redefined.'/>
      <Separator size="xl"/>
      <InteractiveBoxes/>
      <Logo/>
      <Separator size="sm"/>
      <BouncingPhoto/>
      <Separator size="md"/>
      {/* <Whitelist/> */}
      <Separator size="lg"/>
      <Footer/>
    </div>
  )
}
