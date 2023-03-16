import React, {useState} from 'react'
import Questions from './Questions'


const questionaire = [
    {
        id: 1,
        question: "What is Bookmark?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },

    {
        id: 2,
        question: "Is there a mobile app?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    
    {
        id: 3,
        question: "How can I request a new browser?",
        answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    
    {
        id: 4,
        question: "What is Bookmark?",
        answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    },
]

function FAQs() {
        const [questions] = useState(questionaire)
        
  return (
    <div>
        <section className='max-w-xl mx-auto py-20 px-5'>
            <article className='text-center'>
                <h2 className='text-3xl mt-16 mb-8'>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us</p>
            </article>

            <article>
                <div className='my-8'>
                    {questions.map((quest) => {
                        const {id, question, answer} = quest

                        return (
                           <Questions key={id} {...quest}/>
                        )
                    })}
                </div>

                <button className='btn-blue text-white py-2 px-4 rounded shadow-lg font-bold hover:opacity-75 block mx-auto'>More info</button>
            </article>
        </section>
    </div>
  )
}

export default FAQs