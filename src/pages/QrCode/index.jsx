import { useParams } from "react-router";

const QrCode = () => {
    const { name } = useParams();

    const getQr = () => {
        let qr;
        switch (name) {
            case 'carl':
                qr = 'https://ucarecdn.com/73a94f1b-e77c-491c-8dd0-7ebd9f7b23d7/-/preview/1000x1000/';
                break;
            case 'jd':
                qr = 'https://ucarecdn.com/6c6fca82-32a2-4561-b497-5cef1b1ab722/-/preview/709x1000/';
                break;
            case 'christine':
                qr = 'https://ucarecdn.com/a501987c-0196-4a24-950f-cfee6046e2c9/-/preview/686x698/';
                break;
            default:
                qr = 'https://ucarecdn.com/cc55080d-845d-45af-aaf1-36cf2e971496/-/preview/461x1000/';
                break;
        }
        return qr;
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
        <div className="h-screen">
            <p className="text-center font-bold mt-10 mb-5">{name.toUpperCase()}</p>
            <img src={getQr()} alt="QR Code" />
            <div
                onClick={downloadImage}
                className="bg-red-500 mt-10 mx-12 text-center rounded-lg p-2 cursor-pointer"
            >
                Download now
            </div>
        </div>
    );
}

export default QrCode;
