import { useParams } from "react-router"

const QrCode = () => {
    const { name } = useParams()
    return (
        <div>
            <p>{name}</p>
            <img src="https://ucarecdn.com/73a94f1b-e77c-491c-8dd0-7ebd9f7b23d7/-/preview/1000x1000/" />
        </div>
    )
}

export default QrCode