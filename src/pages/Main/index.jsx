import { useNavigate } from "react-router"

const Main = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-10'>
            <button onClick={() => navigate('/qr-friends/gil')} className='rounded-lg bg-blue-500 w-72 h-14'>
                GIL
            </button>
            <button onClick={() => navigate('/qr-friends/jd')} className='rounded-lg bg-blue-500 w-72 h-14'>
                JD
            </button>
            <button onClick={() => navigate('/qr-friends/al')} className='rounded-lg bg-blue-500 w-72 h-14'>
                AL
            </button>
            <button onClick={() => navigate('/qr-friends/carl')} className='rounded-lg bg-blue-500 w-72 h-14'>
                CARL
            </button>
            <button onClick={() => navigate('/qr-friends/aldrin')} className='rounded-lg bg-blue-500 w-72 h-14'>
                ALDRIN
            </button>
            <button onClick={() => navigate('/qr-friends/kim')} className='rounded-lg bg-blue-500 w-72 h-14'>
                KIM
            </button>
            <button onClick={() => navigate('/qr-friends/kimberly')} className='rounded-lg bg-blue-500 w-72 h-14'>
                KIMBERLY
            </button>
            <button onClick={() => navigate('/qr-friends/christine')} className='rounded-lg bg-blue-500 w-72 h-14'>
                CHRISTINE
            </button>
        </div>
    )
}

export default Main