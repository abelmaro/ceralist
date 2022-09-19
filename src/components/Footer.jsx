const Footer = () => {
    return (
        <footer className="bg-[black] h-20 text-white flex flex-row items-center justify-between px-5">
            <div>
                <a href="#home-container">HOME </a>|
                <a href="#products"> PRODUCTS </a>|
                <a href="#contact"> CONTACT </a>
            </div>
            <div className="flex flew-row">
                <span className="text-4xl">Ceralist</span>
            </div>
        </footer>
    );
};

export default Footer;