import FixedBanner from "../components/Home/FixedBanner";
import Counts from "../components/Home/Counts";
import Hero from "../components/Home/Hero";
import Slider from "../components/Home/crousel";
import Newsletter from "../components/Home/Newsletter";
import Banner from "../components/Home/Bannere";
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

function Home() {
    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Header />
            {/*  Page content */}
            <main className="flex flex-col">

                {/*  Page sections */}
                <Hero />
                <Slider />
                <Newsletter />

            </main>
            <Footer />
            {/*  Site footer */}

        </div>
    );
}

export default Home;