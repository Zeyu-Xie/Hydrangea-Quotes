import React from "react"
import axios from "axios"
import config from "./config.json"
import "./App.css"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            quote: "",
            author: "",
            category: ""
        }
    }

    componentDidMount() {
        this.getQuote = this.getQuote.bind(this)
        this.getQuote()
    }

    render() {
        return (
            <div id="sub-root" className="container d-flex align-items-center justify-content-center">
                <blockquote className="pb-5 fade-in">
                    <p>
                        {
                            this.state.quote
                        }
                    </p>
                    <br />
                    <cite>
                        {
                            this.state.author
                        }
                    </cite>
                </blockquote>
            </div>
        )
    }

    getQuote = () => {
        axios.get("https://api.api-ninjas.com/v1/quotes?category=freedom", {
            headers: {
                "X-Api-Key": config["api key"]
            }
        }).then(res => {
            this.setState({
                quote: res.data[0].quote,
                author: res.data[0].author,
                category: res.data[0].category
            })
        }).catch(err => {
            console.log("ERROR", err)
        })
    }

}

export default App