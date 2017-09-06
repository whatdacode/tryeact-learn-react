import React, {Component} from 'react';
import Proptypes from 'prop-types'

const getCurrentPath = () => {
    const path = document.location.pathname
    return path.substring(path.lastIndexOf('/'))
}

export class Router extends Component {
    state = {
        route: getCurrentPath()
    }

    handleLinkClick = (route) => {
        this.setState({route})
        window.history.pushState(null, '', route)
    }

    static childContextTypes = {
        route: Proptypes.string,
        linkHandler: Proptypes.func
    }

    getChildContext() {
        return {
            route: this.state.route,
            linkHandler: this.handleLinkClick
        }
    }
    
    render() {
        return <div>{this.props.children}</div>
    }
}