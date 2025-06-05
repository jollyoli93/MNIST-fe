import { useState } from 'react'
import axios from 'axios'

export default function UploadImage({ image, setImage }) {
    const [response, setResponse] = useState();

    //const dev_url = 'http://localhost:7071/api/httppost';
    const url = `${import.meta.env.VITE_IMAGEBLOB_URL}${import.meta.env.VITE_IMAGEBLOB_KEY}`

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            console.log("No image selected");
            return;
        } else {
            setImage(null)
        }

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Server response:', response.data);
            setResponse(response.data)
        } catch (error) {
            console.error('Upload error:', error);
        }
    }

    const handleChange = (e) => {
        console.log("e.target.files[0]: ", e.target.files[0]);
        let img = e.target.files[0];
        console.log('Selected file,', img,)
        setImage(img);
        // this.setState({
        //     image: URL.createObjectURL(img)
        // })
    }


    return (
        <div className="flex flex-col items-center max-w-md border p-5 rounded-lg bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 ">
                <label
                    htmlFor="file_input"
                    className="flex mb-2 justify-center text-sm font-medium text-gray-900"
                >
                    Select an image:
                </label>
                <input
                    type="file"
                    id="file_input"
                    accept="image/*"
                    onChange={handleChange}
                    className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 
                            file:rounded-lg file:border-0 
                            file:text-sm file:font-semibold 
                            file:bg-blue-50 file:text-blue-700 
                            hover:file:bg-blue-100
                            bg-gray-50 border border-gray-300 rounded-lg cursor-pointer
                            dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 
                            dark:file:bg-gray-600 dark:file:text-gray-100 dark:hover:file:bg-gray-500"
                />
                <button
                    type="submit"
                    className="rounded-md px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-600 transition"
                >
                    Submit
                </button>
            </form>
                {image? 
                <img 
                    src={URL.createObjectURL(image)}
                    width={100}
                    height={100}
                ></img> :
                 <p>{response}</p>
                }
        </div>


    )
}