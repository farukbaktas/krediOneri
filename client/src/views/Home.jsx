import FixedBanner from "../components/Home/FixedBanner";
import Counts from "../components/Home/Counts";
import Hero from "../components/Home/Hero";
import Slider from "../components/Home/Slider";
import HeroHome from "../components/Home/HeroHome";
import Newsletter from "../components/Home/Newsletter";
import Info from "../components/Home/Info";
import Banner from "../components/Home/Bannere";
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <Hero />
                <Slider />
                <HeroHome />
                <Counts />
                <Banner />
                <Info/>
                <Newsletter />

            </main>
            <FixedBanner />
            <Footer />
            {/*  Site footer */}

        </div>
    );
}

export default Home;