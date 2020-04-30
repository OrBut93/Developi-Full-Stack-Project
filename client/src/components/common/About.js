import React, {Component} from 'react'
import Map from "./map/Map";
import Charts from './charts/Charts';
import Canvas from "./privateRoute/Canvas";

export default class about extends Component {

    componentDidMount(): void {
        let c = document.getElementById("myCanvas");
        let ctx = c.getContext("2d");


        ctx.font = "20px Verdana";
// Create gradient
        let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
// Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillText("Thank You For Your Interest!", 10, 90);

    }




    render() {
        return (
            <div className={"about"}>
                <section className="head">

                    <h1>Welcome To DEVELOPI!</h1>
                    <p className="body_text">
                        Our product is a combination of existing solutions,<br/>
                        focusing on one niche so it would be more<br/>
                        suitable for developers and answer their needs.
                        <br/>
                        The existing solutions that correspond with our product are mainly :<br/>
                        Fiverr and Stackoverflow.
                    </p>
                </section>
                <div id="our-team">
                    <h1 className={"m-4"}>Our Team</h1>
                    <div id="team-container">
                        <div>
                            <h3>Chen</h3>
                            <img src="/blank-user.jpg" alt=""/>
                        </div>
                        <div>
                            <h3>Alon</h3>
                            <img src="/blank-user.jpg" alt=""/>
                        </div>
                        <div>
                            <h3>Kamil</h3>
                            <img src="/blank-user.jpg" alt=""/>
                        </div>
                        <div>
                            <h3>Or</h3>
                            <img src="/blank-user.jpg" alt=""/>
                        </div>
                        <div>
                            <h3>Yoni</h3>
                            <img src="/blank-user.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <section>
                    <h3 className="Map_title">Visit Our Stores!</h3>
                    <Map/>
                </section>

                <div className={'charts'}>
                    <Charts />
                </div>
                <canvas id="myCanvas"/>
            </div>
        )
    }
}
