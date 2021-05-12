import React, { Component } from 'react'
import { connect } from 'react-redux';

import Header from './component/Header';
import Headline from './component/Headline';
import Button from './component/Button';
import ListItem from './component/ListItem';
import ReduxForm from './component/ReduxForm';
import {fetchPosts} from './Action';
import './App.scss';
import { reducer as formReducer } from 'redux-form';
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideBtn: false
    }
    this.fetch = this.fetch.bind(this);
  }
  fetch() {
    this.props.fetchPosts();
    this.hideBtnHandler();
  }
  hideBtnHandler = () => {
    const {hideBtn} = this.state;
    this.setState({hideBtn: !hideBtn});
  }
  plusCounter = (num) => {
    return num +1;
  }
  render() {
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }
    const {posts} = this.props;
    const {hideBtn} = this.state;
    return (
      <div className='App container' data-test='appComponent'>
        <div className='row'>
          <div className='col'>

          </div>
        </div>
        <Header />
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render props' tempArr={tempArr} />
          <ReduxForm />
          {!hideBtn &&  <Button  {...configButton} />}
          {
          posts.length
          ? posts.map(post => {
            return (<ListItem title={post.title} desc={post.body} key={post.id} />)
          })
          : ''}
        </section>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
