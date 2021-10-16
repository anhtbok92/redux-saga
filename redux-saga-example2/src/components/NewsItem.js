import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '40%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}

let NewsItem = ({ articles }) => (
  articles ?
    <article style={articleStyle} >
      {articles.map((article) => {
          return (
              <div>
                <h1>{article.title}</h1>
                <img style={imgStyle} src={article.urlToImage} alt="" />
                <h2>{article.description}</h2>
                <a href={article.url} target="_blank">READ MORE</a>
              </div>
          )
      })}
    </article> :
    null
);

const mapStateToProps = (state) => ({
  articles: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


