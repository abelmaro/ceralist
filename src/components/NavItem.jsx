import { motion } from "framer-motion";

const NavItem = (props) => {
    return (
        <motion.li whileHover={{ scale: 1.3 }}>
            <a
                className="md:p-4 py-2 block hover:text-gray-400"
                href={props.hrefTo}
            >
                {props.itemName}
            </a>
        </motion.li>
    );
};

export default NavItem;
