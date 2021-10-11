import React, { Component } from 'react'




class Download extends Component {


    render() {
        let arraystr = this.props.link;


      
        let obj = arraystr


        return (
            <>
                <div className="container" style={{ visibility: (obj.video === undefined) ? "hidden" : "visible" }} >
                    <h4>{obj.title}</h4>
                    <div><img src={obj.image} alt="" srcset="" /></div>

                    <div className="linksDiv">
                        <div> <a href={obj.audio} className="links"><i class="fas fa-file-audio"></i></a> </div>
                        <div> <a href={obj.video} className="links"><i class="fas fa-file-video"></i></a> </div>


                    </div>

                </div>

                <div className='data' style={{ visibility: !(obj.video === undefined) ? "hidden" : "visible" }}>

                    <div className="profile"><p className="count">{this.props.count}</p><p>🔥🔌</p></div>

                    <div className="text" >
                        <p>to go through source code <a href="https://github.com/00lohit/youtube_downloader">click here</a> 🧐</p>
                        <p className="explain">stack used for this project <strong> React , Flask</strong> and <strong> Python </strong> (pytube library) ✔️</p>

                    </div>


                </div>

            </>
        )
    }

}

export default Download