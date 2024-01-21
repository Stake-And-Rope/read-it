function Topic({title, subtitle}){
    return (
    <article className="topic-article">
        <h5 className="topic-title">
            {title}
        </h5>
        <p className="topics-subtitle">
            {subtitle}
        </p>
    </article>
    );
}

export default Topic;