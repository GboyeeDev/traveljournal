import '../style.css'


function Hero(props) {

    return(
        <section className='hero'>
            <div className='hero-title'>
                <img src={props.imageUrl} alt='logo' className='hero-image' />
                <div className='title'>
                    <img src='./images/location.png' alt='logo'/>
                    <span className='japan'>{props.location}</span>
                    <span className='view'>View On Google Maps</span>
                    <h3>{props.title}</h3>
                    <span className='date'>{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}


export default Hero;
