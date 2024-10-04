const About=(props)=>{
    const headle=props.abpage;
    return(
        <>
           <section className="About_Homepage">
                {
                headle.map((x, index) => (
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




            <section className="PopularPage">
                {
                headle.map((x, index) => (
                    <section key={index}>
                        

                        
                        <section className="container items">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6 img2">
                                    <img src={x.img55} alt="" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6 cake-text">
                                    <p style={{ color: 'red' }}>Fresh & Delicious</p>
                                    <h3><b>A Simple Way to Eating Delicious</b></h3>
                                    <p>
                                        Land behold it created good saw after she'd Our set living. <br />
                                        Signs midst dominion creepeth morning laboris nisi ufsit aliquip ex ea <br />
                                        commodo conse quat is aute irure, quis nostrud exer.
                                    </p>
                                    <a
                                        className="nav-link active btn-header"
                                        aria-current="page"
                                        href="#"
                                        style={{ fontFamily: '"Lobster", cursive', textAlign: 'center' }}
                                    >
                                        Our Story
                                    </a>
                                </div>
                            </div>
                        </section>
                    </section>
                ))}
            </section>

            <section className="FeaturesPage">
            {
                headle.map((x,index)=>{
                    return(
                        <>
                        <div className="section-title">
                        <p style={{'textAlign':'center','color':'red'}}>{x.fe_title}</p>
                        <h2 style={{'textAlign':'center'}}><b>{x.fe_heading}</b></h2>
                        
                    </div>
                    
                       <section className='container quality'>
                        <div className='div_one'>
                            <img src="/images/illustration/icon1.svg" alt="" />
                            <h5 style={{'paddingTop':'20px'}}>{x.fe_h4}</h5>
                            <p >{x.fe_pp}</p>


                        </div>
                        {/* first item div */}
                        <div className='div_one'>
                        <img src="/images/illustration/icon2.svg" alt="" />
                        <h5 style={{'paddingTop':'20px'}}>{x.fe_h4}</h5>
                            <p >{x.fe_pp}</p>

                        </div>
                        {/* second item div */}
                        <div className='div_one'>
                        <img src="/images/illustration/icon3.svg" alt="" />
                        <h5 style={{'paddingTop':'20px'}}>{x.fe_h4}</h5>
                            <p >{x.fe_pp}</p>

                        </div>
                        {/* thired item div */}
                        
                       
                       </section>
                       <div className='image-div'>
                       <img src="/images/illustration/image.png" alt="" />
                       </div>


                       
                    
                    </>

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
export default About;