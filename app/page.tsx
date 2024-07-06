import { CarouselPlugin } from "../Sections/Crousel"
import Navbar from '../Sections/Navabar';
import Client from "../Sections/Client";
import Community from "../Sections/Community";
import Unlock from "../Sections/Unlock";
import Achivements from "../Sections/Achivements";
import Calender from "../Sections/Calender"
import Customer from "../Sections/Customer";
import Updates from "../Sections/Updates";
import Footer from "../Sections/Footer"
import FooterBig from "../Sections/FooterBig"
import {ThemeSwitcher} from "../Sections/Mode"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Crousal */}
      <CarouselPlugin />
      <ThemeSwitcher/>
      {/* Clients */}
      <Client />
      {/*Community*/}
      <Community />
      {/* Unlock */}
      <Unlock />
      {/* Achivements */}
      <Achivements />
      {/* Calender */}
      <Calender />
      {/* Customer */}
      <Customer />
      {/* Updates */}
      <Updates />
      {/* Footer */}
      <Footer />
      <FooterBig/>
    </>
  );
}
