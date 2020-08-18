import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

type Props = {
    file: File,
    setFile: React.Dispatch<React.SetStateAction<File | null | undefined>>
}


const ProgressBar: React.FC<Props> = ({file, setFile}) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        />
    )
};

export default ProgressBar;