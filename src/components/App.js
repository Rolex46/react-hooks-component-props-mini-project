import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

console.log(blogData);

function Header(props){
    return (
      <h1>{props.name}</h1>
      )                
}

function About({image = "https://via.placeholder.com/215", alt,about}){
  return (
    
      <aside>
        <img src={image} alt = {alt}/>
        <p>{about}</p>
      </aside>
    
  )
}

function ArticleList({ posts }) {
  const articles = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));
  return <main>{articles}</main>;
}
function App() {
  return (
    <div className="App">
      <Header name = {blogData.name}/>
      <About image = {blogData.image} alt = "blog logo"
        about = {blogData.about}
      />
      <ArticleList post = {blogData.posts}/>
    </div>
  );
}

export default App;
