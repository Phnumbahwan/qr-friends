import { useParams } from "react-router"

const QrCode = () => {
    const { name } = useParams()

    const getQr = () => {
        let qr
        switch (name) {
            case 'carl':
                qr = 'https://ucarecdn.com/73a94f1b-e77c-491c-8dd0-7ebd9f7b23d7/-/preview/1000x1000/'
                break;
            case 'jd':
                qr = 'https://ucarecdn.com/6c6fca82-32a2-4561-b497-5cef1b1ab722/-/preview/709x1000/'
                break;
            default:
                qr = 'https://ucarecdn.com/cc55080d-845d-45af-aaf1-36cf2e971496/-/preview/461x1000/'
                break;
        }
        return qr
    }

    return (
        <div className="h-screen">
            <p className="text-center font-bold mt-10 mb-5">{name.toUpperCase()}</p>
            <img src={getQr()} />
            <a href={getQr()} download="qrcode-image.jpg">
                <div className="bg-red-500 mt-10 mx-12 text-center rounded-lg p-2">
                    Download now
                </div>
            </a>
        </div>
    )
}

export default QrCode