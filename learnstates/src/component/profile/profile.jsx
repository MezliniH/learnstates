import React from "react";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intervall: null,
            counter: 0,
            isVisible: false,
        };
    }

    state = {
       isVisible: false
    };
    toggleVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });
    };

    componentDidMount() {
        this.setState({
            intervall: setInterval(() => {
                this.setState({ counter : this.state.counter + 1 });
            }, 1000),
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.intervall);
    }

    render() {
        return (
            <div>
                <section>
                    <h1
                        style={{
                            color: "brown",
                            textAlign: "center",
                            fontSize: "50",
                        }}
                    >
                        {this.props.fullName}
                    </h1>
                    
                    <h2
                        style={{
                            color: "yellow",
                            textAlign: "left",
                            fontSize: "30px",
                        }}
                    >
                        {this.props.bio}
                    </h2>
                    <p style={{color:"#b0e8d9" , fontSize:"20px"}}>{this.props.description}</p>
                    <h2
                        style={{
                            color: "yellow",
                            textAlign: "center",
                            fontSize: "30px",
                        }}
                    >
                        {this.props.profession}
                    </h2>
                    <p style={{color:"#b0e8d9" , fontSize:"20px"}}>{this.props.job}</p>
                    <h1 style={{ color: "grey" , textAlign:"end"}}>
                        The counter is on :
                    </h1>
                    <h1 style={{ backgroundColor: "black ", color: "red" ,textAlign:"right" }}>
                        {this.state.counter}
                    </h1>
                </section>
            </div>
        );
    }
}
export default Profile;