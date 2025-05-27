import { useState } from 'react'
import axios from 'axios'

import UploadImage from './Components/UploadImage';

function App() {
    const [image, setImage] = useState(null);
  return (
    <>
      <UploadImage image={image} setImage={setImage}/>
    </>
  );
}

export default App;
