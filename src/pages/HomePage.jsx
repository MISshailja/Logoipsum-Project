import React from "react";
import SectionOne from "../components/main/sectionOne/SectionOne"
import SectionTwo from "../components/main/sectionTwo/SectionTwo"
import SectionThree from "../components/main/sectionThree/SectionThree" 
import SectionFour from "../components/main/sectionFour/SectionFour" 
import SectionFive from "../components/main/sectionFive/SectionFive" 
import SectionSix from "../components/main/sectionSix/SectionSix" 
import SectionSeven from "../components/main/sectionSeven/SectionSeven" 
import Footer from "../components/footer/Footer" 


const HomePage = () => {

  return (
    <>
    
 <main className="grow">
<SectionOne />
<SectionTwo />
<SectionThree />
<SectionFour />
<SectionFive />
<SectionSix />
<SectionSeven />
<Footer />
 </main>

    
    </>

  )
}


export default HomePage;
