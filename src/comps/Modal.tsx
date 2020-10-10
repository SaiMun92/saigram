import React from 'react';
import { motion } from "framer-motion";

interface Props {
    selectedImg: string | null,
    setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>
}

const Modal: React.FC<Props> = ({selectedImg, setSelectedImg}) => {

    const handleClick = (e: any) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img
                src={selectedImg}
                alt="enlarged pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal;