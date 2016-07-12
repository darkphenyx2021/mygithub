/**
 * Created by joshua.fair on 7/12/2016.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'darkphenyx2021',
            userData: [],
            userRepos: [],
            perPage: 10
        }
    }

    // Get user data from github
    getUserData(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userData: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userName: null});
                alert(err);
            }.bind(this)
        })
    }

    // Get user repos from github
    getUserRepos(){
        $.ajax({
            url: 'https://api.github.com/users/'+this.state.username+'/repos?Per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
            dataType: 'json',
            cache: false,
            success: function(data){
                this.setState({userRepos: data});
            }.bind(this),
            error: function(xhr, status, err){
                this.setState({userName: null});
                alert(err);
            }.bind(this)
        })
    }

    handleFormSubmit(username){
        this.setState({username: username}, function(){
            this.getUserData();
            this.getUserRepos();
        });
    }

    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
                <br/>
                <Profile {...this.state} />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '0f2c7c2ab9ebc1f8393d',
    clientSecret: '6a540175d617af37390723253dd6105d42f83751'
};

export default App