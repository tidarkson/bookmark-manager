import React, {useState} from 'react'
import icon from '../images/icon-arrow.svg'

function Questions({ question, answer }) {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div>
            <article className='py-3 border-t last:border-top-0 last:border-bottom  border-slate-300'>
                <div onClick={()=> setShowAnswer(!showAnswer)} className='flex items-center justify-between cursor-pointer'>
                <h2 className='font-normal text-lg'>{question}</h2>
                <button><img src={icon} alt="" /></button>
                </div>
                {showAnswer && <p>{answer}</p>}
            </article>
        </div>
    )
}

export default Questions