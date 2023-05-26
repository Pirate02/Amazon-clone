import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a' alt='Yo chai slider image hai amazon ko haha link halna alxi lagyo k ' />

                <div className='home__row'>
                    <Product
                        id='345523'
                        title={'Experience crystal-clear photos and vibrant videos with the XYZ Camera\'s high-resolution sensor and cutting-edge lens technology.'}
                        price={29.99}
                        image='https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                        rating={5} />
                    <Product

                        id='345323'
                        title={'The XYZ Camera is your perfect companion for capturing life\'s unforgettable moments. With its advanced features and exceptional image quality, this camera will bring your photography skills to new heights.'}
                        price={19.99}
                        image='https://images.pexels.com/photos/1787234/pexels-photo-1787234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        rating={3} />


                </div>
                <div className='home__row'>
                    <Product

                        id='344523'
                        title={'Experience crystal-clear photos and vibrant videos with the XYZ Camera\'s high-resolution sensor and cutting-edge lens technology.'}
                        price={29.99}
                        image='https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                        rating={5} />
                    <Product

                        id='334523'
                        title={'Experience crystal-clear photos and vibrant videos with the XYZ Camera\'s high-resolution sensor and cutting-edge lens technology.'}
                        price={29.99}
                        image='https://images.unsplash.com/photo-1579535984712-92fffbbaa266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                        rating={5} />
                    <Product

                        id='345633'
                        title={'The XYZ Camera is your perfect companion for capturing life\'s unforgettable moments. With its advanced features and exceptional image quality, this camera will bring your photography skills to new heights.'}
                        price={19.99}
                        image='https://images.unsplash.com/photo-1618339665980-9fe338a21dcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9sZGluZyUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
                        rating={3} />

                </div>
                <div className='home__row'>
                    <Product

                        id='345093'
                        title={'Experience crystal-clear photos and vibrant videos with the XYZ Camera\'s high-resolution sensor and cutting-edge lens technology.'}
                        price={29.99}
                        image='https://images.unsplash.com/photo-1579535984712-92fffbbaa266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                        rating={5} />
                    <Product

                        id='3452343'
                        title={'The XYZ Camera is your perfect companion for capturing life\'s unforgettable moments. With its advanced features and exceptional image quality, this camera will bring your photography skills to new heights.'}
                        price={19.99}
                        image='https://images.pexels.com/photos/1787235/pexels-photo-1787235.jpeg?cs=srgb&dl=pexels-luis-quintero-1787235.jpg&fm=jpg'
                        rating={3} />

                </div>
                <div className='home__row'>
                    <Product

                        id='34512323'
                        title={'The XYZ Camera is your perfect companion for capturing life\'s unforgettable moments. With its advanced features and exceptional image quality, this camera will bring your photography skills to new heights.'}
                        price={19.99}
                        image='https://images.unsplash.com/photo-1579535984712-92fffbbaa266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fub24lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
                        rating={3} />


                </div>


            </div>




        </div>
    )
}

export default Home
