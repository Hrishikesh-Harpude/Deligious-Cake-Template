const Contact=(props)=>{
    const headlle=props.copage;
    return(
        <>
           <section className="About_Homepage">
                {
                headlle.map((x, index) => (
                    <div key={index}>
                        <div className="main-text">
                            <h1 style={{ fontSize: '100px' }}><b>{x.title}</b></h1>
                            
                        </div>
                        <div className="main-img">
                            <img src={x.img1} alt="Cake Image" />
                        </div>
                    </div>
                ))}
            </section>



            <section className="CakePage">
            {
                headlle.map((x)=>{
                    return(
                        
                        
                        <section className='contact-gallery'>

                           <section className='container'>
                            <div className='row'>
                                <div className='con_logo col-12 col-md-6 col-lg-3'>
                                    <img src={x.imgg} alt="footer logo" />
                                    <p>{x.con_line}</p>
                                    <div className='icons'>
                                   <i className="fa-brands fa-square-facebook" style={{ color: '#FF0000' }}></i>
                                   <i className="fa-brands fa-twitter" style={{ color: '#FF0000', marginLeft: '10px' }}></i>
                                   <i className="fa-brands fa-linkedin" style={{ color: '#FF0000', marginLeft: '10px' }}></i>
                                   <i className="fa-brands fa-youtube" style={{ color: '#FF0000', marginLeft: '10px' }}></i>
                                 </div>

                                </div>
                                <div className='con_info col-12 col-md-6 col-lg-3'>
                                    <h5><b>Quick Links</b></h5>
                                    <p>Home</p>
                                    <p>About</p>
                                    <p>Blog</p>
                                    <p>Services</p>
                                    <p>Contact</p>

                                </div>
                                <div className='con_cake col-12 col-md-6 col-lg-3'>
                                    <h5 style={{'marginTop':'10px'}}><b>Cakes</b></h5>
                                    <p>Blackforest</p>
                                    <p>Bodhubon</p>
                                    <p>Rongdhonu</p>
                                    <p>Meghrong</p>

                                </div>
                                <div className='con_us col-12 col-md-6 col-lg-3'>
                                    <h5 style={{'marginTop':'10px'}}><b>Contact Us</b></h5>
                                    <p >76/A, Green Lane, Dhanmondi, NYC</p>
                                    <h5 style={{'color':'red'}}>+10(78)738-9083</h5>

                                </div>

                            </div>

                           </section>
                            
                        </section>
                       
                       

                            
                            
                            

                        
                    

                       
                    
                 

                    )
                    

                })
            }

        </section>
        <div className="footer">
        <h5 className="" style={{'paddingTop':'30px'}}>Copyright ©2024 All rights reserved | This template is made with by <i className="fa-solid fa-heart" style={{ color: '#FF0000' }}></i> Colorlib</h5>
        </div>
        
        </>
    )
}
export default Contact;