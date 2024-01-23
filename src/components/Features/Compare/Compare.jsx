import React from 'react'
import './Compare.css'
import CompareData from './CompareData'

const Compare = () => {
    return (
        <div className='compareTable'>
            <h1>COMPARE</h1>
            <div >{CompareData.map((each) => {
                return (
                    <div>
                        <ul className='compareInformation'>
                            <li>{each.item1}</li>
                            <li>{each.item2}</li>
                            <li>{each.item3}</li>
                            <li>{each.item4}</li>
                        </ul>
                        <div className={each.isDarkLine ? '.darkLine' : '.line'}></div>
                    </div>
                )
            })
            }
            </div>

        </div>
    )
}

export default Compare