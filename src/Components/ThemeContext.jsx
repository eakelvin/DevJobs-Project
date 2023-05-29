import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "light"
    }

    toggleTheme = () => {
        this.setState(prevState => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          document.body.style.backgroundColor = newTheme === 'light' ? '#fff' : '#000';
          return {
            theme: newTheme

          }
        })
      }

    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
