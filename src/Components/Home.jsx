const Home = (props) => {
    const head = props.page;

    return (
        <>
            <section className="Homepage">
                {
                head.map((x, index) => (
                    <div key={index}>
                        <div className="main-text">
                            <h1 style={{ fontSize: '50px' }}><b>{x.title}</b></h1>
                            <h1><b>{x.title1}</b></h1>
                            <p>{x.head}</p>
                            <p style={{ lineHeight: 0 }}>{x.head1}</p>
                            <a
                                className="nav-link active btn-header"
                                aria-current="page"
                                href="#"
                                style={{ marginTop: '20px', fontFamily: '"Lobster", cursive' }}
                            >
                                <b>Explore Menu</b>
                            </a>
                        </div>
                        <div className="main-img">
                            <img src={x.img1} alt="Cake Image" />
                        </div>
                    </div>
                ))}
            </section>

            <section className="PopularPage">
                {
                head.map((x, index) => (
                    <section key={index}>
                        <div className="section-title">
                            <p style={{ textAlign: 'center', color: 'red' }}>{x.title2}</p>
                            <h2 style={{ textAlign: 'center' }}><b>{x.heading}</b></h2>
                        </div>

                        <section className="container gallery-images">
                            <div className="row">
                                {[x.img22, x.img33, x.img44, x.img33].map((imgSrc, imgIndex) => (
                                    <div className="col-12 col-md-6 col-lg-3" key={imgIndex}>
                                        <div className="card" style={{ width: '19rem', marginBottom: '10px' }}>
                                            <img src={imgSrc} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h4 style={{ textAlign: 'center' }}>
                                                    <b>{[x.headline, x.headline1, x.headline2, x.headline][imgIndex]}</b>
                                                </h4>
                                                <p className="card-text" style={{ textAlign: 'center' }}>{x.headline3}</p>
                                                <a
                                                    className="nav-link active btn-header"
                                                    aria-current="page"
                                                    href="#"
                                                    style={{ fontFamily: '"Lobster", cursive', textAlign: 'center' }}
                                                >
                                                    $20 | Order Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

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
                head.map((x,index)=>{
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
                       <img src="images/illustration/image.png" alt="" />
                       </div>


                       
                    
                    </>

                    )
                    

                })
            }

        </section>

        <section className="TestPage">
            {
                head.map((x,index)=>{
                    return(
                        <>
                       
                       <div className="section-title">
                        <p style={{'textAlign':'center','color':'red'}}>{x.test_title}</p>
                        <h2 style={{'textAlign':'center'}}><b>{x.test_heading}</b></h2>
                        </div>
                        <section className='container name'>
                            <div className='row'>
                            <div className='div_two col-12 col-md-6 col-lg-6'>
                            <p>"Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                 Statement buttons cover-up tweaks patch.</p>
                                 <div>
                                 <img src="/images/illustration/Homepage_testi.png" alt="" />
                                 <div>
                                 <p style={{'color':'red'}}>Oliva Jems</p>
                                 <p>UI/UX Designer</p>
                                 </div>
                                 </div>
                            </div>

                            <div className='div_two col-12 col-md-6 col-lg-6'>
                            <p>"Leather detail shoulder contrastic colour
                                contour stunning silhouette working peplum.
                                 Statement buttons cover-up tweaks patch.</p>
                                 <div>
                                 <img src="/images/illustration/Homepage_testi2.png" alt="" />
                                 <div>
                                 <p style={{'color':'red'}}>Oliva Jems</p>
                                 <p>UI/UX Designer</p>
                                 </div>
                                 </div>
                            </div>

                            
                            </div>
                            
                            

                        </section>
                    

                       
                    
                    </>

                    )
                    

                })
            }

        </section>

        <section className="CakePage">
            {
                head.map((x)=>{
                    return(
                        <>
                        
                        <section className='cake-gallery'>
                            {/* <div className='row'> */}
                                {/* <div className='div_cake col-12 col-md-3 col-lg-3'> */}
                                    <img src={x.imm1} alt="" />

                                {/* </div>
                                <div className='div_cake col-12 col-md-3 col-lg-3'> */}
                                <img src={x.imm2} alt="" />

                                {/* </div>
                                <div className='div_cake col-12 col-md-3 col-lg-3'> */}
                                <img src={x.imm3} alt="" />

                                {/* </div>
                                <div className='div_cake col-12 col-md-3 col-lg-3'> */}
                                <img src={x.imm4} alt="" />

                                {/* </div> */}

                            {/* </div> */}
                        </section>
                       
                       

                            
                            
                            

                        
                    

                       
                    
                    </>

                    )
                    

                })
            }

        </section>

        <section className="CakePage">
            {
                head.map((x)=>{
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
    );
};

export default Home;
