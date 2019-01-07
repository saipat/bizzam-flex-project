import React from 'react';
// import { withRouter } from 'react-router-dom';
import './create_game.css';
import { Link } from 'react-router-dom'


class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameType: "Classic",
            boards: [],
            themeId: 'no theme selected yet',
            winnerId: null,
            errors: {},
            themes: this.props.themes
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);        
    } 

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors});
    }

    componentDidMount() {
        this.props.getThemes();
        this.props.fetchBoards();
    }

  
    handleSubmit(e) {
      e.preventDefault();
      let game = {
        gameType: this.state.gameType,
        theme: this.state.themeId
      };
  
      this.props.createGame(game); 
      this.setState({errors: {}})
    }

    updateGameType() {
        return e => this.setState({
          gameType: e.currentTarget.value
        });
      }

    updateThemeId() {
        return e => this.setState({
            themeId: e.currentTarget.name
        });
    }

    renderErrors() {
        return (
            <ul className="login-form-container">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                    {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }
    render() {
        
        let themesOptions;
        if (this.props.themes[0].length > 1) {
            console.log('inside if state');
            
            themesOptions = this.props.themes[0].map((theme, idx) => {
                return (
                <Link to='/pin-page' className="create-game-btn">
                    <input  
                        key={idx} 
                        type='submit' 
                        onClick={this.updateThemeId('themeId')} 
                        value={theme.name} 
                        name={theme._id}
                    /> 
                </Link>   
                )
            })
        }
        // const gameTypeOptions = ['Adventure', 'Classic'].map((gameType, idx) => {            
        //     return (
        //       <option className="game-type-option" key={idx} >{gameType}</option>
        //     );
        //   });
        
        return (
            <div className='create-game-div'>
                <div className="create-game-message">
                <p>Let's create a board game now!</p>
                </div>
                <form onSubmit={this.handleSubmit} className='create-game-form'>
                    Game type:
                    <select className="game-type-select" onChange={this.updateGameType('gameType')} value={this.state.gameType}>
                        <option className='default-game-type-select'>Classic</option>
                    </select>
                    <br />
                    <br />
                    Theme:
                    {themesOptions}
                    <br />
                    <br />
                    <input className="create-game-btn" type='submit' value="Go to pin"/>
                </form>
                <br />
                Theme ID: {" "}
                {this.state.themeId}
                {this.renderErrors()}
            </div>
        )
    }
}

export default CreateGame;



// if (this.props.themes[0].length > 1) {
//     console.log('inside if state');
    
//     themesOptions = this.props.themes[0].map((theme, idx) => {
//         return (
//          <option className="game-type-option" key={idx} onChange={this.updateThemeId('themeId')} value={theme._id}>{theme.name}</option>
//         )
//     })
// }


// const gameTypeOptions = ['Adventure', 'Classic'].map((gameType, idx) => {            
        //     return (
        //       <option className="game-type-option" key={idx} >{gameType}</option>
        //     );
        //   });

// Theme:
// <select className="game-type-select" onChange={this.updateThemeId('themeId')} value={this.state.themeId}>
//     <option className='default-game-type-select'>Select your theme</option>
//     {themesOptions}
// </select>

///* <input className="create-game-btn" type='submit' value="Go to pin"/> */