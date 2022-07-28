import React from 'react'
import people from "./Data"
import { FaBluetooth, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import { useState } from 'react'
const Review = () => {

    const [index, setIndex] = useState(0)
    const { name, job, image, text } = people[index]    //destructring data



    const CheckNumber = (number) => {
        if (number > people.length - 1) {
            return 0           //return  0 item in array
        }
        if (number < 0) {
            return people.length - 1   // return last item in array
        }
        return number
    }



    const prePerson = () => {
        setIndex(CheckNumber(index - 1))

    }
    const nextPerson = () => {
        setIndex(CheckNumber(index + 1))

    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)  //give randonNum =mutiply Math.random* arraylength

        if (randomNumber === index) {
            randomNumber = index + 1   //numbers repated that s y add +1 to index

        }
        setIndex(CheckNumber(randomNumber))
    }


    return (
        <article className='review'>

            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className="button-container">
                <button className='prev-btn' onClick={prePerson}> <FaChevronLeft /></button>
                <button className='next-btn' onClick={nextPerson}> <FaChevronRight /></button>

            </div>
            <button className='random-btn' onClick={randomPerson}>suprise me</button>


        </article>
    )
}

export default Review