import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
    app: {
        paddingTop: 40,
        textAlign: 'center',
        width: 400,
        height: 80,
        backgroundColor: "lightblue",
    },
    item: {
        color: 'red'
    }
}

class MenuItem extends Component {
    render() {
        const {text} = this.props
        return (
          <div style={styles.item}>
            {text}
          </div>
        )
    }
}

class App extends Component {
    render(){
        return (
            <div style={styles.app}>
                <MenuItem text='Dorou'/>
                <MenuItem text='lol'/>
            </div>
            
            
        )
    }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)