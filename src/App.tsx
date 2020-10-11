import React, {useState} from "react";
import Title from './comps/Title';
import UploadForm from "./comps/UploadFrom";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";

function App() {
    const [selectedImg, setSelectedImg] = useState<null | string>(null);

    return (
        <div className="App">
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg}/>
            { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </div>
    );
}

export default App;