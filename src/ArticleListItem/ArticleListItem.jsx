import React,{useState} from "react";
import PropTypes from 'prop-types';
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton"
import "./ArticleListItem.module.css"
const ArticleListItem = (props)=>{
    const [show, setShow] = useState(false);
    const onClick = () => {
        setShow(!show);
    };
    
    return (
        <div>
                <h2>{props.article.title}</h2>
                {show ? (<div className="show-section">
                    <p>{props.article.shortText}</p>
                    <time datetime={props.article.timeStamp}>{props.article.displayDate}</time>
                </div>):<div className="show-section" />}

            <ArticleTextToggleButton buttonText={show? "Show less": "Show more"} onClick={onClick}/>
        </div>

        );
}

ArticleListItem.propTypes = {
    article: PropTypes.object.isRequired
  };
  export default ArticleListItem;