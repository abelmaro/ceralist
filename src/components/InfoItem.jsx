import { motion } from "framer-motion";

const InfoItem = (props) => {
    return (
        <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.2 }}
            key={props.key}
            className={
                "flex " +
                (props.imgLeft
                    ? "flex-col lg:flex-row bg-[white]"
                    : "flex-col lg:flex-row-reverse bg-[#e4e4e4]") +
                " align-center items-center justify-around p-5 lg:p-0"
            }
        >
            <motion.img
                className={"rounded-[20px] my-10 w-96 lg:w-80"}
                src={props.imgPath}
                alt={props.imgAlt}
                whileHover={{ scale: 1.1 }}
            />
            <div className="w-96 flex flex-col items-center lg:block">
                <div>
                    <span className="text-3xl lg:text-5xl">{props.title}</span>
                </div>
                <div>
                    <p>{props.details}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default InfoItem;
