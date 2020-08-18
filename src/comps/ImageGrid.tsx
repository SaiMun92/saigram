import React from 'react';
import useFirestore from "../hooks/useFirestore";
import {deleter} from "../utils/deleter";
import { motion } from 'framer-motion';
import delete_icon from '../assets/icons8-delete-64.png';


type Props = {
    setSelectedImg: React.Dispatch<React.SetStateAction<string | null>>
}

const ImageGrid: React.FC<Props> = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    const handleDelete = (id: string) => {
        console.log(id);
        deleter('images', id);
    };

    const handleClick = (e: any , url: string) => {
        if (e.target.classList.contains('uploaded-img')) {
            setSelectedImg(url)
        }
    }

    return (
        <div className="img-grid">
            { docs && docs.map(doc => {
                const { id, url } = doc;
                return (
                    <motion.div className="img-wrap" key={id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={(e) => handleClick(e, url)}
                    >
                        <motion.img src={delete_icon}
                                    whileHover={{ opacity: 1}}
                                    alt="delete-icon"
                                    className="img-delete"
                                    onClick={() => handleDelete(id)}
                        />
                        <motion.img src={url} alt="uploaded-pic"
                            className="uploaded-img"
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