import { useNavigate } from "react-router"
import { NAMES } from "../../data/names"

const Main = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center gap-3 my-10'>
            <p>Send MONEY to :</p>
            {
                NAMES.map((data) => (
                    <button disabled={!data.URL} onClick={() => navigate(`/qr-friends/${data.NAME}`)} className={`${data.URL ? 'bg-blue-700' : 'bg-blue-500'} rounded-lg w-72 h-14`}>
                        {data.NAME}
                    </button>
                ))
            }
        </div>
    )
}

export default Main