import React, { Component } from 'react'
import Download from './Download'
import { BeatLoader } from 'react-spinners'
import { css } from '@emotion/react'

const loaderCss = css`
margin-top:25px;
margin-bottom: 25px;
`

class Input extends Component {

    state = {
        response: '',
        post: '',
        responseToPost: '',
        load:'',
    };

    
    callApi = async () => {
        const response = await fetch('https://apiytd.herokuapp.com/ok');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.counter }))
            .catch(err => console.log(err));
    }





    handleSubmit = async e => {
        e.preventDefault();


        let apiHead = "https://apiytd.herokuapp.com/yt/"

        let link = this.state.post;

        let link2 = (link.indexOf("v=") === -1) ? link.indexOf("e/") + 2 : link.indexOf("v=") + 2;
        let finallink = link.slice(link2)

        let apiTail = finallink
        let api = apiHead + apiTail

        this.setState({ load: true })

        const response = await fetch(api, {
            method: 'POST',
            body: ({ post: this.state.post }),
        });
        const body = await response.json();
        this.setState({ responseToPost: body.links });
        this.setState({ load: false })
    };





    render() {

        return (
            <div className="full">

                <div className="Input">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className='paste'
                            type="text"
                            placeholder="Paste YouTube link"
                            value={this.state.post}
                            onChange={e => this.setState({ post: e.target.value })}
                        />
                        <button className='find' type="submit"><i class="fa fa-folder"></i></button>
                    </form>
                </div>

                <div className="Output">

                    <BeatLoader css={loaderCss} size={20} color='DodgerBlue' loading={this.state.load} />
                    <Download link={this.state.responseToPost} count={this.state.response} />

                </div>


            </div>
        )
    }
}
export default Input
