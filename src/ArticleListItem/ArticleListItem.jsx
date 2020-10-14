import React from "react";
import PropTypes from 'prop-types';

const ArticleListItem = (props)=>{
    return (
        <article>
            <header>
                <h1>{props.article.title}</h1>
                <time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
            </header>
            <p>{props.article.shortText}</p>
        </article>
        );
}

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
  };
  export default ArticleListItem;