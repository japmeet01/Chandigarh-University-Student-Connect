import './Connect.css'
import cancel from "../images/cancel.png"
import correct from "../images/correct.png"
export default function Connection(probs) {
    return (
        <div>
            <div className='cards'>
                <div className='card mb-20'>
                    <img src={probs.src} alt="" className='imgprofile' />
                    <div className="info mt-2 p-2">
                        <h1 className='text-center text-3xl font-semibold'>{probs.name}</h1>
                        <p className='text-center break-words'>{probs.detail}</p>
                    </div>
                    <div className='flex justify-center pt-2'>
                    <img src={cancel} alt=""
                        class="h-10 w-10 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                    <img src={correct} alt=""
                        class="h-10 w-10 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
}