import Cdata from './ConnectionData';
import Connection from './ConnectionCard'
import request from "../images/send.png"
import send from "../images/request.png"
import friends from "../images/friends.png"
import "./Connect.css"
import {Link } from "react-router-dom"

const Connect = () => {


    return (
        <>
            <div className='container'>
                <div className='flex mt-8 gap-8 justify-center'>
                    <Link to='/request'>
                        <button class="menu">Request<img src={request} alt="Request" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                    <Link to='/Sent'>
                        <button class="menu">Sent<img src={send} alt="Send" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                    <Link to="/Myfriend">
                        <button class="menu">MyFriends<img src={friends} alt="Send" class="icon h-6 w-6 ml-1 mt-1" /></button></Link>
                </div>
                <div className="title" style={{ fontFamily: "Salsa" }}>
                    <h1 className="text-4xl font-bold text-red-600 underline">Let's Connect And Build Together...</h1>
                </div>
                <div className='ConnectionPage'>
                    {Cdata.map((val) => {
                        return (
                            <Connection
                                src={val.src}
                                name={val.name}
                                detail={val.detail}
                                color={val.color}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default Connect;
