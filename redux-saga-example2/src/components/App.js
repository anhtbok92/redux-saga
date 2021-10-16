import React, { Component } from 'react'
import Button from './Button';
import Loading from './Loading';
import NewsItem from './NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
          <Button />
          <Loading />
          <NewsItem />
      </div>
    )
  }
}