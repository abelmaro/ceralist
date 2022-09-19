import { motion } from "framer-motion";


const CeralistLogo = (props) => {
    return (
        <motion.img
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-1 ${props.imgSize}`}
            src="./assets/images/ceralist-logo.png"
            alt="Ceralist logo"
        />
    );
};

export default CeralistLogo;