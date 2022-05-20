import React from 'react'
import "../Connect.css"
export default function RequestCard(probs) {
    return (
        <div>
            <div class="cards">
                <div class="card bg-white items-center">
                    <img src={probs.image}
                        alt="" class="imgprofile" />
                    <div class="ml-4 p-2">
                        <div className="info">
                            <h1 className='text-3xl font-semibold'>{probs.name}</h1>
                            <p className=' break-words'>{probs.detail}</p>
                        </div>
                        <div class="mt-2 flex gap-3">
                            <button
                                class="p-1 text-xl font-semibold ring-1 ring-blue-700 rounded-xl hover:ring-blue-300">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
