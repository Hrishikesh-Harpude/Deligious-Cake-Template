

const Blog=(props)=>{
    const hheadle=props.blpage;
    return(
        <>
           <section className="About_Homepage">
                {
                hheadle.map((x, index) => (
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
        
        </>
    )
}
export default Blog;