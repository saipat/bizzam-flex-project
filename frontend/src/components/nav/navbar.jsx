import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            
                <div className='logged-in-navbar'>
                    <Link className="links1" to={`/games/${this.props.currentUser.id}`}>Your Games</Link>
                    {/* <br /> */}
                    <Link className="links1" to={'/newTheme'}>Write a BizZam</Link>
                    {/* <br /> */}
                    <Link className="links1" to={'/create-game'}>Start a Game</Link>
                    {/* <br /> */}
                    <Link className="links1" to={'/board/index'}>Your Board</Link>
                    {/* <br /> */}
                    <Link className="links1" id='current-user-name' to={`/games/${this.props.currentUser.id}`}>Welcome,{' '}{this.props.currentUser.username}</Link>
                    {/* <br /> */}
                    <button className='logout-btn' onClick={this.logoutUser}>Logout</button>
                </div>
            
        );
      } else {
        return (
            <div className="navbar">
				<Link to={'/signup'} className="links1">
					Signup
				</Link>                
                <br />
				<Link to={'/login'} className="links1">
					Login
				</Link>
            </div>
        );
      }
  }

  render() {
      console.log(this.props.loggedIn);
      
      let bizzamLink = this.props.loggedIn ? `/landing` : '/'
      return <div className='home-navbar'>
                <div>
                    <Link to={bizzamLink} className="main-page-link">
                        <h1 className="project-title bounce-top">
                            <span className="blue">Biz</span>Z<span className="orange">am</span>
                        </h1>
                    </Link>
                </div>
                {this.getLinks()}                
			</div>;
  }
}

export default NavBar;