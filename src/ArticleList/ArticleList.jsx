import React from "react";
import PropTypes from 'prop-types';
import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = props => {
  if(props.articles===undefined||props.artiles===null){
    return <h1>"You have no data!"</h1>
  }
    return (
      <ul>
        {props.articles.map(article => (
          <li key={article.slug}><ArticleListItem article = {article}/>
          </li>
        ))}
      </ul>
    );
  };
  
  ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
  };
  export default ArticleList;