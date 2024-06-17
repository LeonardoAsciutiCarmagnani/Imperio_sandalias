
interface ImageI{
    src: string;
}

const ImageComponent = ({src}:ImageI) => {
    return <img src={src} alt="" className="flex justify-center bg-green-300 w-full"/>
}

export default ImageComponent;