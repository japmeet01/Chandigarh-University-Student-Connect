import Rdata from './RequestData';
import Request from './RequestCard'
import request from "../../images/send.png"
import send from "../../images/request.png"
import friends from "../../images/friends.png"
import "../Connect.css"
import { Link } from 'react-router-dom';
const Requested = () => {
    return (
        <>
            <div className='container'>
                <div className='flex mt-8 gap-8 justify-center'>
                    <Link to='/request' id='f1'>
                        <button class="menu">Request<img src={request} alt="Request" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                    <Link to='/Sent'>
                        <button class="menu">Sent<img src={send} alt="Send" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                    <Link to="/Myfriend">
                        <button class="menu">MyFriends<img src={friends} alt="Send" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                </div>
                <div className="title" style={{ fontFamily: "Salsa" }}>
                    <h1 className="text-3xl font-bold text-red-600 underline">Coming Requests...</h1>
                </div>
                <div>
                    {Rdata.map((val) => {
                        return (
                            <Request
                                image={val.image}
                                name={val.name}
                                detail={val.detail}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default Requested;
