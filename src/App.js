import "./App.css";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import InfoItem from "./components/InfoItem";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import { cardsItems } from "./constants/cardsItems";

function App() {
    return (
        <>
            <header className="max-w-screen-lg m-auto sticky top-0 z-50">
                <Navbar />
            </header>
            <main
                id="home-container"
                className="relative max-w-screen-lg m-auto"
            >
                <div className="flex justify-center max-w-screen-xl">
                    <div className="flex justify-center">
                        <div className="w-8/12 flex items-center text-center flex-col absolute top-10 z-10 text-[white]">
                            <motion.h1
                                initial={{ y: -150 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-7xl"
                            >
                                CERALIST
                            </motion.h1>
                            <motion.span
                                initial={{ y: -200 }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-2xl lg:block hidden"
                            >
                                The character of the space that surrounds us is
                                so powerful that it can cause changes in what we
                                are or think we are.
                            </motion.span>
                        </div>
                        <img
                            src="./assets/images/ceralist-header.jpg"
                            alt="Ceralist header"
                            className="relative"
                        />
                    </div>
                </div>
                <div id="products">
                    {cardsItems.map((card, index) => {
                        return (
                            <InfoItem
                                imgLeft={card.imgLeft}
                                title={card.title}
                                details={card.details}
                                imgPath={card.imgPath}
                                imgAlt={card.imgAlt}
                                key={"mug-card-" + index}
                                index={index}
                            />
                        );
                    })}
                </div>
                <div className="w-full px-12 pt-10 flex flex-col align-center items-center justify-center lg:justify-between">
                    <span className="text-3xl lg:text-5xl">Our history</span>
                    <p className="text-base text-center py-5">
                        Ceralist is a personal project that arises from my need
                        to re-create and model with my hands. Keeping the mind
                        entertained in the activity becomes something healing
                        and relaxing at the same time... it is a therapy
                    </p>
                    <Gallery />
                </div>
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default App;
