import React, {Component} from 'react'
import PostsService from "../../services/Posts";
import PostBox from "./PostBox";
import Success from "./Success";
import "../../App.css";
import Typist from 'react-typist';

export default class ListPost extends Component {

    constructor(props) {
        super(props);
        var done = false;
        var alertType = 'success';
        var msg = "";
        if (typeof props.location !== 'undefined' && typeof props.location.state != 'undefined' && typeof props.location.state.done != "undefined") {
            done = props.location.state.done;
        }
        if (typeof props.location !== 'undefined' && typeof props.location.state != 'undefined' && typeof props.location.state.alertType != "undefined") {
            alertType = props.location.state.alertType;
        }
        if (typeof props.location !== 'undefined' && typeof props.location.state != 'undefined' && typeof props.location.state.msg != "undefined") {
            msg = props.location.state.msg;
        }
        this.state = {
            posts: [],
            done: done,
            alertType : alertType,
            msg : msg
        }
    }

    componentDidMount() {

        PostsService.getPosts().then(res => {
            this.setState({
                posts: res
            });
        }).catch(err => {
            console.log(err)
        })
    }

    dataBox() {
        if (this.state.posts) {
            return this.state.posts.map((res, i) => {
                if (res !== undefined) {
                    return <PostBox obj={res} key={i}/>
                }
            })
        }
    }

    render() {
        return (
            <div className={"post-page"}>
                {this.state.done ? <Success value={this.state}/> : null}
                <img src="/posts_people.jpg" className="posts_img"/>
                <div className="Writer">
                    <Typist>
                    <h1>Choose your task</h1> <br/>
                    <h4>A single place, millions of creative talents<br/>Improve your quality of life with style</h4>
                </Typist>
                </div>

                <div id="cards-container">
                    {this.dataBox()}
                </div>
            </div>
        );
    }
}