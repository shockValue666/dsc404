import Banner from '@/components/Banner'
import BouncingPhoto from '@/components/BouncingPhoto'
import CenteredParagraph from '@/components/CenteredParagraph'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InteractiveBoxes from '@/components/InteractiveBoxes'
import SecondBanner from '@/components/SecondBanner'
import Separator from '@/components/Separator'
import Title from '@/components/Title'
import Whitelist from '@/components/Whitelist'

export default function Home() {
  return (
    <div 
    // style={{
    //   minHeight: '100vh',
    //   background: 'radial-gradient(circle, hsla(240, 3%, 23%, 1) 22%, hsla(329, 32%, 24%, 1) 61%)',
    //   filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#3A3A3D", endColorstr="#512A3E", GradientType=1 )'
    // }} 
    className="text-white bg-[#FF8080]">
      <Header/>
      <Title/>
      <Banner/>
      <Separator size="xl"/>
      <CenteredParagraph content='SolRaccs is a free Solana project inspired by the Hurdles of a Racoon and the love for Trash. This Mfers are bandits who just love your trash!'/>
      <Separator size="xl"/>
      <InteractiveBoxes/>
      <Separator size="sm"/>
      <BouncingPhoto/>
      <Separator size="md"/>
      <Whitelist/>
      {/* <Separator size='sm'/> */}
      {/* <SecondBanner/> */}
      <Separator size="lg"/>
      <Footer/>
    </div>
  )
}
