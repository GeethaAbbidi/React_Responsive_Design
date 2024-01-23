import React from 'react'
import Data from './Data'
import DarkContainer from './DarkContainer/DarkContainer'
import LightContainer from './ContainerLight/LightContainer'


const Component = () => {
    // const [isDarkTheme, setIsDarkTheme] = useState(true)
    return (
        <div>
            {Data.map((item) => {
                return (
                    <div key={item.id}>
                        <DarkContainer src={item.url} heading={item.heading} para={item.para} text={item.text} required={true}/>
                    </div>
                )
            })
            }

            <LightContainer />

        </div>
    )

}

export default Component

    // <div className='homeMain'>
    //     {Data.map((item) => {
    //         return (
    //             <div className={item.container ? 'mainContainer' : 'mainContainerReverese'}>
    //                 <div className={item.isDarkTheme ? 'sideContainer' : "sideContainer-light"}>

    //                     <h1 className="heading" key={item.id} >{item.heading}</h1>
    //                     <p className="content" key={item.id} >{item.content}</p>
    //                     <ButtonComponent
    //                         text={item.text}
    //                         className={item.isDarkTheme? 'whiteText' : 'BlackText'} 
    //                         src={item.src}
    //                     />
    //                 </div>
    //                 <div className="imageContainer">
    //                     <img src={item.url} alt="" key={item.id} className='image' />
    //                 </div>

    //             </div>
    //         )
    //     })}

    // </div>

    //     )
