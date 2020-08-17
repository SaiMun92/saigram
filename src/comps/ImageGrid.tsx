import React from 'react';
import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion';

type Props = {
    setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>
}

const ImageGrid: React.FC<Props> = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="img-grid">
            { docs && docs.map(doc => {
                const { id, url } = doc;
                return (
                    <motion.div className="img-wrap" key={id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelectedImg(url)}
                    >
                        <motion.img src={url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1}}
                            transition={{ delay: 1}}
                        />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ImageGrid;