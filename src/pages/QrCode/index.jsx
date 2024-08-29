import { useNavigate, useParams } from "react-router";
import { NAMES } from "../../data/names";

const QrCode = () => {
    const navigate = useNavigate()
    const { name } = useParams()

    const getQr = () => {
        return NAMES.find((data) => data.NAME === name.toUpperCase()).URL
    }

    const downloadImage = async () => {
        const response = await fetch(getQr());
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrcode-image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }


    return (
        <div className="space-y-5 py-5">
            <p className="text-center font-bold mb-5">{name.toUpperCase()}</p>
            <img src={getQr()} alt="QR Code" />
            <div
                onClick={downloadImage}
                className="bg-blue-500 mx-12 text-center rounded-lg p-2 cursor-pointer"
            >
                Download now
            </div>
            <div
                onClick={() => navigate(-1)}
                className="bg-red-500 mx-12 text-center rounded-lg p-2 cursor-pointer"
            >
                Back
            </div>
        </div>
    );
}

export default QrCode;
