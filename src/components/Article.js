import React from "react";

function Article({minutes,title,date="January 1, 1970",preview}){
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);
  let readingTimeIndicator;

  if (minutes < 30) {
    const coffeeCupString = "☕️".repeat(coffeeCups);
    readingTimeIndicator = `${coffeeCupString} ${minutes} min read`;
  } else {
    const bentoBoxString = "🍱".repeat(bentoBoxes);
    readingTimeIndicator = `${bentoBoxString} ${minutes} min read`;
  }
  return (
    <article>
      <h3>{title}</h3>
      <p>{readingTimeIndicator}</p>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;