import React, {component} from 'react'

export default class GitComments extends component {
    constructor(props){
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount(){
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js")
        scriptEl.setAttribute("crossorigin", "anonymous")
        scriptEl.setAttribute("async", true)
        scriptEl.setAttribute("repo","Snipermods/Enterprise-CW")
        scriptEl.setAttribute("issue-term", "url")
        scriptEl.setAttribute("theme", "github-dark")
        this.commentBox.current.appendChild(scriptEl)
    }

    render() {
        return(
            <div style={{width: '100%'}} id="GitComments">
              <div ref={this.commentBox}></div>  
            </div>
        )
    }
}