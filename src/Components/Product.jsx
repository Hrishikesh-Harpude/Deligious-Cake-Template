const Product=(props)=>{
    const headlee=props.prpage;
    return(
        <>
           <section className="About_Homepage">
                {
                headlee.map((x, index) => (
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
                headlee.map((x, index) => (
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



                        <section className="container gallery-images">
                            <div className="row">
                                {
                                [x.img222, x.img333, x.img111, x.img444]
                                .map((imgSrc, imgIndex) => (
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


                        <section className="container gallery-images">
                            <div className="row">
                                {
                                [x.img1111, x.img4444, x.img3333, x.img2222]
                                .map((imgSrc, imgIndex) => (
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





                        
                    </section>
                ))}
            </section>

            <section className="CakePage">
            {
                headlee.map((x)=>{
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
        <div className="footer">
        <h5 className="" style={{'paddingTop':'30px'}}>Copyright ©2024 All rights reserved | This template is made with by <i className="fa-solid fa-heart" style={{ color: '#FF0000' }}></i> Colorlib</h5>
        </div>
        
        </>
    )
}
export default Product;